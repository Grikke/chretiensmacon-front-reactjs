import Link from 'next/link'
import React, { useState } from 'react'
import { formatName } from '../../../helper/string'
import { IArticleItem } from '../../../lib/articles'

export type IArticle = {
  article: IArticleItem
}

const ArticleItem = (
  (
    {article} : IArticle
  ) => {
    return (
      <Link 
        href={`/articles/${article.slug}`}
        className='article-item'
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
