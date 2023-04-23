import { GetStaticProps } from 'next'

import { getArticles, IArticleItem } from '../lib/articles'
import { addApolloState, initializeApollo } from '../lib/appolo'
import {useState, useEffect} from 'react'
import { getSacrementPages, IPageItem } from '../lib/informations'
import Link from 'next/link'

type IInformationPage = {
  pages: IPageItem[]
}

export default function SacrementPage({pages} : IInformationPage) {
  const [hydrated, setHydrated] = useState(false);
  console.log(pages)
    useEffect(() => {
      setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
  return (
    <div>
      <div className="section-container">
        <h2>Sacrements</h2>
        <div className="page-container">
        {pages.map(({slug, title}) => (
            <Link href={`/sacrements/${slug}`} className="page-item">
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
    console.log(data)
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