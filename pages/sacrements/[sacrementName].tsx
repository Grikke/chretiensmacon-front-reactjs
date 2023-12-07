import { GetServerSideProps } from 'next'

import { IPageItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { findPage } from '../../lib/informations'
import CustomHead from '../../components/app-components/CustomHead'


//Initialize Apollo Client for SSR
const client = initializeApollo()

export default function SacrementInfoPage({sacrement}: {sacrement: IPageItem}) {
  const {query} = useRouter()
  useEffect(() => {}, [query])
  return (
    <div>
      {sacrement && <div className='section-container'>
        <CustomHead title={sacrement?.title} description={sacrement?.content?.replace(/<[^>]*>?/gm, '').slice(0, 300) ?? ""}/>
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
      query: findPage,
      variables: {slug: sacrementName},
    })
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
