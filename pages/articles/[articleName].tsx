import { GetServerSideProps } from 'next'

import { findArticle, IArticleItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import { useState } from 'react'
import clsx from 'clsx'
import Head from 'next/head'


export default function Article({article}: {article: IArticleItem}) {
  const [headerOver, setHeaderOver] = useState(false)
  const props = {
    onMouseOver: () => setHeaderOver(true),
    onMouseOut: () => setHeaderOver(false)
  }

  return (
    <div>
      <Head>
        <title>Chrétiens Mâcon - {article?.title}</title>
        <meta
          name="description"
          content={article?.content?.replace(/<[^>]*>?/gm, '').slice(0, 300) ?? ""}
          key="description"
        />
      </Head>
      {(article) && <div className='section-container'>
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

export const getServerSideProps: GetServerSideProps<{
  productSlug: string
}> = async ({ req, res, params }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=600'
  )
  //Initialize Apollo Client for SSR
  const client = initializeApollo()

  const { articleName } = params!

  try {
    const {data} = await client.query<{post: IArticleItem}>({
      query: findArticle,
      variables: {id: articleName},
      context: { target: 'prestashop' },
    })
    if (data?.post === null) {
        return { notFound: true }
    }
    return addApolloState(client, {
      props: { article: data?.post, pageType: 'articlepage' },
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
