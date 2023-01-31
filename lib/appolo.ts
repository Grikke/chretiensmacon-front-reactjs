import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'
import { AppProps } from 'next/app'

let client: ApolloClient<NormalizedCacheObject> | undefined

const wpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_URL + '/graphql',
})

const createClient = () =>
  new ApolloClient({
    // SSR only for Node.js
    ssrMode: typeof window === 'undefined',
    link: wpLink,
    cache: new InMemoryCache({
      typePolicies: {
        shippingOptions: {
          keyFields: ['instance', ['id']],
        }
      },
    }),
  })


export const initializeApollo = () => {
  const apolloClient = client ?? createClient()

  if (typeof window === 'undefined') return apolloClient
  if (!client) client = apolloClient
  return apolloClient
}

export const addApolloState: any = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
) => {
  //@ts-ignore
  if (pageProps?.props) {
    //@ts-ignore
    pageProps.props['apollo-state'] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps: AppProps['pageProps']) {
  //@ts-ignore
  const state = pageProps['apollo-state']
  return useMemo(() => initializeApollo(), [state])
}
