import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/layout/DefaultLayout'
import { useApollo } from '../lib/appolo'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps)
  return <ApolloProvider client={client}>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </ApolloProvider >
}
