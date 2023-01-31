import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IArticleItem } from '../../../lib/articles'

export type IArticle = {
  article: IArticleItem
}

const ArticleItem = (
  (
    {article} : IArticle
  ) => {
    return (
      <Link href={`/articles/${article.slug}`}>
        <div className='article-item'>
          <Image 
            className='article-thumbnail' 
            src={article.featuredImage.node.sourceUrl} 
            fill
            style={{objectFit: 'cover'}}
            alt={article.featuredImage.node.altText}
          />
          <div className='article-detail'>
            <div>
              <div className='article-title'>
                {article.title.toLowerCase()}
              </div>
              <div className='article-author'>
                de {article.author.node.name}
              </div>
            </div>
            <div className='article-date'>
              Le {new Date(article.date).toLocaleString()}
            </div>
          </div>
        </div>
      </Link>
    )
  }
)

export default ArticleItem
