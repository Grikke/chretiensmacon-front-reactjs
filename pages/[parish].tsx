import { GetServerSideProps } from 'next'

import { IPageItem } from '../lib/articles'
import { addApolloState, initializeApollo } from '../lib/appolo'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { findPage } from '../lib/informations'
import CustomHead from '../components/app-components/CustomHead'

export default function ParishInfoPage({page}: {page: IPageItem}) {
  const {query} = useRouter()
  useEffect(() => {}, [query])
  return (
    <div>
      {page && <div className='section-container'>
        <CustomHead title={page?.title} description={page?.content?.replace(/<[^>]*>?/gm, '').slice(0, 300) ?? ""}/>
        <h1>{page?.title}</h1>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: page?.content ?? "" }} />
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

  const { parish } = params!

  try {
    const {data} = await client.query<{page: IPageItem}>({
      query: findPage,
      variables: {slug: `les-annonces-${parish}`},
    })
    if (data?.page === null) {
        return { notFound: true }
    }
    return addApolloState(client, {
      props: { page: data?.page, pageType: 'parishpage' },
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}