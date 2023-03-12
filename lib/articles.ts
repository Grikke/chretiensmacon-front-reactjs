import { gql } from '@apollo/client'

export type IArticleItem = {
  title: string
  featuredImage: {
    node: {
      altText: string
      sourceUrl: string
    }
  },
  categories: {
    nodes: {
      name: string
      slug: string
    }[]
  }
  content?: string
  author: {
    node: {
      name: string
    }
  },
  acfPriorities: {
    expirationDate?: string
    headline?: boolean
  },
  date: string
  slug: string
}

export const getArticles = gql`
  query getArticles {
    posts(first: 10000) {
      nodes {
        acfPriorities {
          expirationDate
          headline
        }
        categories {
          nodes {
            name
            slug
          }
        }
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
      categories {
        nodes {
          name
          slug
        }
      }
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
`
