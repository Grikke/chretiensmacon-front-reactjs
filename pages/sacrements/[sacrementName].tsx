import { GetServerSideProps } from 'next'

import { getArticles, IArticleItem, IPageItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import Loader from '../../components/app-components/Loader/Loader'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { findSacramentPage } from '../../lib/informations'


//Initialize Apollo Client for SSR
const client = initializeApollo()

export default function SacrementInfoPage({sacrement}: {sacrement: IPageItem}) {
  const {query} = useRouter()
  useEffect(() => {}, [query])
  const [headerOver, setHeaderOver] = useState(false)
  return (
    <div>
      {sacrement && <div className='section-container'>
        <h1>{sacrement?.title}</h1>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: sacrement?.content ?? "" }} />
      </div>}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  productSlug: string
}> = async ({ req, res, params }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=600'
  )
  //Initialize Apollo Client for SSR
  const client = initializeApollo()

  const { sacrementName } = params!

  try {
    const {data} = await client.query<{page: IPageItem}>({
      query: findSacramentPage,
      variables: {slug: sacrementName},
      context: { target: 'prestashop' },
    })
    console.log(data?.page)
    if (data?.page === null || !data?.page?.parent?.node?.uri?.includes('sacrements')) {
        return { notFound: true }
    }
    return addApolloState(client, {
      props: { sacrement: data?.page, pageType: 'articlepage' },
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
