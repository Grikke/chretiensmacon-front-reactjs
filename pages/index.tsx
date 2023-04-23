import { GetStaticProps } from 'next'

import Map from '../components/app-components/Map/Map'
import { addApolloState, initializeApollo } from '../lib/appolo'
import {useState, useEffect} from 'react'

type IHomePage = {
}

export default function Home({} : IHomePage) {
  const [hydrated, setHydrated] = useState(false);
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
        <h2>Paroisses Catholiques du Mâconnais</h2>
        <Map/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    //Initialize Apollo Client for SSR
    const client = initializeApollo()

    return addApolloState(client, {
      props: { pageType: 'homepage' },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
