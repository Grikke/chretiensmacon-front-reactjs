import { GetStaticProps } from 'next'

import { getArticles, IArticleItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import {useState, useEffect} from 'react'
import { getSacrementPages, IPageItem } from '../../lib/informations'
import Link from 'next/link'
import CustomHead from '../../components/app-components/CustomHead'
import { useSetAtom } from 'jotai'
import { loading } from '../../lib/atom'

type IInformationPage = {
  pages: IPageItem[]
}

export default function SacrementPage({pages} : IInformationPage) {
  const setLoading = useSetAtom(loading)
  return (
    <div>
      <CustomHead title={"Sacrements"} description="Informations sur les sacrements catholiques."/>
      <div className="section-container">
        <h2>Sacrements</h2>
        <div className="page-container">
        {pages.map(({slug, title}) => (
            <Link key={title} onClick={() => setLoading(true)} href={`/sacrements/${slug}`} className="page-item">
              <div className="title">
                {title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    //Initialize Apollo Client for SSR
    const client = initializeApollo()
    const { data } = await client.query({ query: getSacrementPages })
    if (!data?.pages?.nodes)
      return { notFound: true }
    return addApolloState(client, {
      props: { pageType: 'infopage', pages: data?.pages?.nodes },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}