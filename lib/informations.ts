import { gql } from '@apollo/client'

export type IPageItem = {
  slug: string
  title: string
  children: {
    nodes: {
      slug: string
    }[]
  }
  parentId: string
}

export const getPages = gql`
  query getMainPages {
    pages(first: 50, where: {parent: "0"}) {
      nodes {
        slug
        title
        children {
          nodes {
            slug
          }
        }
        parentId
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
