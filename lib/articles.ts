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

export type IPageItem = {
  title: string
  featuredImage: {
    node: {
      altText: string
      sourceUrl: string
    }
  }
  content?: string
  author: {
    node: {
      name: string
    }
  }
  parent?: {
    node?: {
      uri?: string
    }
  }
  date: string
  slug: string
}

export const getArticles = gql`
  query getArticles {
    posts(first: 70) {
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

export const searchArticles = gql`
  query searchArticles($search: String!) {
    posts(first: 6, where: { search: $search}) {
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
