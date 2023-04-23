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

export type ICalendar = {
  friday?: string
  monday?: string
  relatedInformations?: string
  saturday?: string
  sunday?: string
  thursday?: string
  wednesday?: string
  tuesday?: string
}

export type IScheduleItem = {
  title: string
  schedulePost: {
    description: string
    seasonal: boolean
    liturgicalSeason?: string
    vincent: ICalendar
    estienne: ICalendar
  }
}

export const getSchedules = gql`
  query getSchedules {
    schedules {
      nodes {
        title
        schedulePost {
          description
          seasonal
          liturgicalSeason
          vincent {
            friday
            monday
            relatedInformations
            saturday
            sunday
            thursday
            wednesday
            tuesday
          }
          estienne {
            friday
            monday
            relatedInformations
            saturday
            sunday
            thursday
            wednesday
            tuesday
          }
        }
      }
    }
  }
`

export const getSacrementPages = gql`
  query getSacrementPages {
    pages(first: 50, where: {parent: "94"}) {
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
