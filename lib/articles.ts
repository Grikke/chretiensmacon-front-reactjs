import { gql } from '@apollo/client'

export type IArticleItem = {
  title: string
  featuredImage: {
    node: {
      altText: string
      sourceUrl: string
    }
  },
  content?: string
  author: {
    node: {
      name: string
    }
  },
  date: string
  slug: string
}

export const getArticles = gql`
  query getArticles {
    posts {
      nodes {
        title
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
        date
        slug
      }
    }
  }
`

export const findArticle = gql`
  query findArticle($id: ID!) {
    post(id: $id, idType: SLUG) {
      content
      title
      author {
        node {
          name
        }
      }
      date
      slug
    }
  }
`
