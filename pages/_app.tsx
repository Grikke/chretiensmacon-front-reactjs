import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/layout/DefaultLayout'

export default function App({ Component, pageProps }: AppProps) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}
