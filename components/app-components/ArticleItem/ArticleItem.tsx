import Link from 'next/link'
import React, { useState } from 'react'
import { formatName } from '../../../helper/string'
import { IArticleItem } from '../../../lib/articles'
import { useSetAtom } from 'jotai'
import { loading } from '../../../lib/atom'

export type IArticle = {
  article: IArticleItem
}

const ArticleItem = (
  (
    {article} : IArticle
  ) => {
    const setLoading = useSetAtom(loading)
    return (
      <Link 
        href={`/articles/${article.slug}`}
        className='article-item'
        onClick={() => setLoading(true)}
      >
        <div 
          className='article-thumbnail'
          style={{backgroundImage: `url(${article?.featuredImage?.node?.sourceUrl})`}}
        />
        <div className='article-detail'>
          <div>
            <div className='article-title'>
              {article.title.toLowerCase()}
            </div>
            <div className='article-author'>
              de {formatName(article.author.node.name)}
            </div>
          </div>
          <div className='article-date'>
            Le {new Date(article.date).toLocaleString()}
          </div>
        </div>
      </Link>
    )
  }
)

export default ArticleItem
