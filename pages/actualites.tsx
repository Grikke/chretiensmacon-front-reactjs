import { GetStaticProps } from 'next'

import { getArticles, IArticleItem } from '../lib/articles'
import { addApolloState, initializeApollo } from '../lib/appolo'
import ArticleItem from '../components/app-components/ArticleItem/ArticleItem'
import {useState, useEffect, useMemo} from 'react'
import ArticleCarousel from '../components/app-components/ArticleCarousel/ArticleCarousel'
import { useAtomValue } from 'jotai'
import ParishList from '../lib/parish'
import { parish } from '../lib/atom'

type INewsPage = {
  articles: IArticleItem[]
}

const hasExpired = (date: string) => {
  let split = date.split('/').map(d => parseInt(d))
  let dateData = {year: split[2], month: split[1] - 1, day: split[0]}
  let dateObject = new Date(dateData.year, dateData.month, dateData.day)
  return (dateObject.getTime() - Date.now()) < 0
}

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
  const [hydrated, setHydrated] = useState(false)
  const [hasFiltered, setHasFiltered] = useState(false)
  const [pagination, setPagination] = useState(nbPage)
  const activeParish = useAtomValue(parish)
  const [headArticles, setHeadArticles] = useState(articles.filter((article) => article.acfPriorities.headline))
  const [commonArticles, setCommonArticles] = useState(articles.filter((article) => !article.acfPriorities.headline && !article.acfPriorities.expirationDate))
  const [hotArticles, setHotArticles] = useState(articles.filter((article) => 
    article.acfPriorities.expirationDate && !hasExpired(article.acfPriorities.expirationDate)
  ))
  useEffect(() => {
      setHydrated(true);
  }, []);
  useEffect(() => {
    if (activeParish && !hasFiltered) {
      setHasFiltered(true)
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

  const pageNumber = useMemo(() => 
    new Array(Math.ceil(commonArticles.length / nbPage)).fill('').flat()
  , [commonArticles])
  if (!hydrated) return null

  return (
    <div>
      {(headArticles && headArticles.length !== 0) && <div className="section-container">
        <ArticleCarousel articles={headArticles}/>
      </div>}
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
            <div className="page-button">
              <div className="page-event-button" onClick={() => setPagination(nbPage * (index + 1))}>
                {index + 1}
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

    console.log(data?.posts?.nodes.length)

    if (!data?.posts?.nodes)
      return { notFound: true }
    return addApolloState(client, {
      props: { pageType: 'homepage', articles: data?.posts?.nodes },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
