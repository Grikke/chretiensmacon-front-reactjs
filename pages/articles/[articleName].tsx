import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Logo from '../../public/logo.svg'
import { GetStaticPaths, GetStaticProps } from 'next'

import Button from '../../components/app-components/Button/Button'
import Link from 'next/link'
import Map from '../../components/app-components/Map/Map'
import { findArticle, getArticles, IArticleItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import ArticleItem from '../../components/app-components/ArticleItem/ArticleItem'


//Initialize Apollo Client for SSR
const client = initializeApollo()

type IArticlePage = {
  article: IArticleItem
}

export default function Article({article} : IArticlePage) {
  return (
    <div>
      <div className='section-container'>
        <h1>{article?.title}</h1>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article?.content ?? "" }} />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  //get WP category pages List to generate Static HTML
  try {
    const {
      data: { posts: nodes },
    } = await client.query({
      query: getArticles,
    })
    const paths = nodes.map((post : IArticleItem) => {
      return {
        articleName: post.slug
      }
    })
    return {
      paths: paths,
      fallback: true, // allow new pages to be built on demand
    }
  } catch (e) {
    console.error('CategoryPage staticPathError', e)
    return { paths: [], fallback: true }
  }
}

export const getStaticProps: GetStaticProps = async (req) => {
  try {
    let article = req?.params?.articleName
    const { data } = await client.query({ query: findArticle, variables: {id: article} })

    if (!data?.post?.content)
      return { notFound: true }
    return addApolloState(client, {
      props: { pageType: 'articles', article: data?.post },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
