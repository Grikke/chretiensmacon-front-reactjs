import { GetStaticProps } from 'next'

import { getArticles, IArticleItem } from '../lib/articles'
import { addApolloState, initializeApollo } from '../lib/appolo'
import ArticleItem from '../components/app-components/ArticleItem/ArticleItem'
import {useState, useEffect} from 'react'
import ArticleCarousel from '../components/app-components/ArticleCarousel/ArticleCarousel'

type INewsPage = {
  articles: IArticleItem[]
}

const hasExpired = (date: string) => {
  let split = date.split('/').map(d => parseInt(d))
  let dateData = {year: split[2], month: split[1] - 1, day: split[0]}
  let dateObject = new Date(dateData.year, dateData.month, dateData.day)
  return (dateObject.getTime() - Date.now()) < 0
}

export default function NewsPage({articles} : INewsPage) {
  const [hydrated, setHydrated] = useState(false);
  const [headArticles] = useState(articles.filter((article) => article.acfPriorities.headline))
  const [commonArticles] = useState(articles.filter((article) => !article.acfPriorities.headline && !article.acfPriorities.expirationDate))
  const [hotArticles] = useState(articles.filter((article) => 
    article.acfPriorities.expirationDate && !hasExpired(article.acfPriorities.expirationDate)
  ))
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
  return (
    <div>
      <div className="section-container">
        <ArticleCarousel articles={headArticles}/>
      </div>
      {(hotArticles && hotArticles.length !== 0) && <div className="section-container">
        <h2>Dernières nouvelles</h2>
        <div className="articles-container">
          {hotArticles.map(article => (
            <ArticleItem key={article.slug} article={article}/>
          ))}
        </div>
      </div>}
      <div className="section-container">
        <h2>Actualités paroissiales</h2>
        <div className="articles-container">
          {commonArticles.map(article => (
            <ArticleItem key={article.slug} article={article}/>
          ))}
        </div>
      </div>
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
      props: { pageType: 'homepage', articles: data?.posts?.nodes },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
