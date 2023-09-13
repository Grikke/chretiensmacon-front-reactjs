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
  [key: string]: string
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

export type IDirectoryItem = {
  title: string
  annuaryPost: {
    manager?: string
    type: string
    description: string
    contactEmail?: string
    contactPhone?: string
    avatar: {
      sourceUrl: string
    }
  }
}

export const getDirectories = gql`
query getDirectories {
  directories {
    nodes {
      title
      annuaryPost {
        manager
        type
        description
        contactPhone
        contactEmail
        avatar {
          sourceUrl
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
