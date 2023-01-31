import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Logo from '../public/logo.svg'
import { GetStaticProps } from 'next'

import Button from '../components/app-components/Button/Button'
import Link from 'next/link'
import Map from '../components/app-components/Map/Map'
import { getArticles, IArticleItem } from '../lib/articles'
import { addApolloState, initializeApollo } from '../lib/appolo'
import ArticleItem from '../components/app-components/ArticleItem/ArticleItem'
import {useState, useEffect} from 'react'

type IHomePage = {
  articles: IArticleItem[]
}

export default function Home({articles} : IHomePage) {
  const [hydrated, setHydrated] = useState(false);
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
        <h2>Paroisses Catholiques du Mâconnais</h2>
        <Map/>
      </div>
      <div className="section-container">
        <div className="articles-container">
          {articles.map(article => (
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
