import '../styles/globals.css'
import '../components/styles.css'
import '../pages/styles.css'


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
