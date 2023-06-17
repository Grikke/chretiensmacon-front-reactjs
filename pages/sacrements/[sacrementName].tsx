import { GetStaticPaths, GetStaticProps } from 'next'

import { getArticles, IArticleItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import Loader from '../../components/app-components/Loader/Loader'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'


//Initialize Apollo Client for SSR
const client = initializeApollo()

export default function Article({}) {
  const {query} = useRouter()
  const { data, loading } = useQuery(getArticles, { variables: {id: query.sacrementName} })

  const article = useMemo<IArticleItem | null>(() => data?.post, [data])
  useEffect(() => {}, [query])
  const [headerOver, setHeaderOver] = useState(false)
  const props = {
    onMouseOver: () => setHeaderOver(true),
    onMouseOut: () => setHeaderOver(false)
  }
  return (
    <div>
      {!article || loading && <Loader/>}
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