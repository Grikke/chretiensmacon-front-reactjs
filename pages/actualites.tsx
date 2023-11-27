import { GetStaticProps } from 'next'
import {useState, useEffect, useMemo} from 'react'
import { useAtomValue } from 'jotai'

import { getArticles, IArticleItem } from '../lib/articles'
import { addApolloState, initializeApollo } from '../lib/appolo'
import ArticleItem from '../components/app-components/ArticleItem/ArticleItem'
import ArticleCarousel from '../components/app-components/ArticleCarousel/ArticleCarousel'
import ParishList from '../lib/parish'
import { parish } from '../lib/atom'
import { searchArticles } from '../lib/articles'
import CustomHead from '../components/app-components/CustomHead'
import { useQuery } from '@apollo/client'
import Loader from '../components/app-components/Loader/Loader'

type INewsPage = {
  articles: IArticleItem[]
}

const hasExpired = (date: string) => {
  let split = date.split('/').map(d => parseInt(d))
  let dateData = {year: split[2], month: split[1] - 1, day: split[0]}
  let dateObject = new Date(dateData.year, dateData.month, dateData.day)
  return (dateObject.getTime() - Date.now()) < 0
}

const client = initializeApollo()

const isParishRelated = (categories: {nodes: {slug: string}[]} ) => {
  let slugList = categories.nodes.map(({slug}) => slug)
  let isRelated = false
  Object.keys(ParishList).forEach(p => {
    if (slugList.includes(p))
      isRelated = true
  })
  return isRelated
}

export default function NewsPage({articles} : INewsPage) {
  const nbPage = 8
  const [hasFiltered, setHasFiltered] = useState(false)
  const [pagination, setPagination] = useState(nbPage)
  const activeParish = useAtomValue(parish)
  const [search, setSearch] = useState('')
  const [headArticles, setHeadArticles] = useState(articles.filter((article) => article.acfPriorities.headline && (!article.acfPriorities.expirationDate || !hasExpired(article.acfPriorities.expirationDate)) ))
  const [commonArticles, setCommonArticles] = useState(articles.filter((article) => !article.acfPriorities.headline && !article.acfPriorities.expirationDate))
  const [hotArticles, setHotArticles] = useState(articles.filter((article) => 
    article.acfPriorities.expirationDate && !hasExpired(article.acfPriorities.expirationDate) && !article.acfPriorities.headline
  ))
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [searchData, setSearchData] = useState<IArticleItem[]>([])

  useEffect(() => {
    if (activeParish && !hasFiltered) {
      setHasFiltered(true)
      console.log(articles)
      setCommonArticles(
        commonArticles.filter(({categories}) => 
          !isParishRelated(categories) || categories.nodes.map(({slug}) => slug).includes(activeParish)
        )
      )
      setHotArticles(
        hotArticles.filter(({categories}) => 
          !isParishRelated(categories) || categories.nodes.map(({slug}) => slug).includes(activeParish)
        )
      )
      setHeadArticles(
        headArticles.filter(({categories}) => 
          !isParishRelated(categories) || categories.nodes.map(({slug}) => slug).includes(activeParish)
        )
      )
    }
  }, [activeParish, commonArticles, headArticles, hotArticles])

  const handleSearch = async() => {
    setLoadingSearch(true)
    const {data} = await client.query<{posts: {nodes: IArticleItem[]}}>({
      query: searchArticles,
      variables: {search}
    })
    setLoadingSearch(false)
    setSearchData(data?.posts?.nodes)
  }

  const pageNumber = useMemo(() => 
    new Array(Math.ceil(commonArticles.length / nbPage)).fill('').flat()
  , [commonArticles])

  return (
    <div>
      <CustomHead title={"Actualités"} description="Retrouvez toutes les actualités de votre paroisse."/>
      {(headArticles && headArticles.length !== 0) && <div className="section-container">
        <ArticleCarousel articles={headArticles}/>
      </div>}
      <div className="section-container">
      {(searchData && searchData.length !== 0 && !loadingSearch) && <h2>Résultats de votre recherche</h2>}
        <form className="search-container" onSubmit={e => {
          e.preventDefault()
          handleSearch()
        }}>
          <input type="text" onChange={e => setSearch(e.target?.value)} className="search-input" placeholder="Rechercher un article"/>
          <img src={'/icon/search.svg'} onClick={() => handleSearch()} className="search-icon"/>
          <input type="submit" style={{display:'none'}}/>
        </form>
        {loadingSearch && <Loader/>}
        {(searchData && searchData.length !== 0 && !loadingSearch) && <div className="articles-container">
          {searchData?.map(article => (
            <ArticleItem key={article.slug} article={article}/>
          ))}
        </div>}
      </div>
      {(hotArticles && hotArticles.length !== 0) && <div className="section-container">
        <h2>Dernières nouvelles</h2>
        <div className="articles-container">
          {hotArticles.map(article => (
            <ArticleItem key={article.slug} article={article}/>
          ))}
        </div>
      </div>}
      {(commonArticles && commonArticles.length !== 0) && <div className="section-container">
        <h2>Actualités paroissiales</h2>
        <div className="articles-container">
          {commonArticles.slice(pagination - nbPage, pagination).map(article => (
            <ArticleItem key={article.slug} article={article}/>
          ))}
        </div>
        <div className="page-container">
          {pageNumber.map((val, index) => (
            <div key={index} className="page-button">
              <div className={`page-event-button ${pagination / nbPage === index + 1 ? 'active' : ''}`} onClick={() => setPagination(nbPage * (index + 1))}>
                <div>{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    //Initialize Apollo Client for SSR
    const client = initializeApollo()
    const { data } = await client.query({ query: getArticles })

    if (!data?.posts?.nodes)
      return { notFound: true }
    return addApolloState(client, {
      props: { pageType: 'newspage', articles: data?.posts?.nodes },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
