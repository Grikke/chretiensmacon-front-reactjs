import { GetStaticPaths, GetStaticProps } from 'next'

import { findArticle, getArticles, IArticleItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import Loader from '../../components/app-components/Loader/Loader'
import { useState } from 'react'
import clsx from 'clsx'


//Initialize Apollo Client for SSR
const client = initializeApollo()

type IArticlePage = {
  article: IArticleItem
}

export default function Article({article} : IArticlePage) {
  const [headerOver, setHeaderOver] = useState(false)
  const props = {
    onMouseOver: () => setHeaderOver(true),
    onMouseOut: () => setHeaderOver(false)
  }
  return (
    <div>
      {!article && <Loader/>}
      {article && <div className='section-container'>
        <div className={clsx('article-header', headerOver && "hover" )} style={{backgroundImage: article?.featuredImage ? `url(${article.featuredImage.node.sourceUrl})` : ''}}>
          <div {...props} className='article-header-background'/>
          <div className='category-article-list'>
            <div className='category-article-item'>
              {article.categories.nodes.map(({name}) => name).join(' - ')}
            </div>
          </div>
          <h1 {...props}>{article?.title}</h1>
          <div {...props}>Le {new Date(article.date).toLocaleDateString()} par {article.author.node.name}</div>
        </div>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article?.content ?? "" }} />
      </div>}
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
