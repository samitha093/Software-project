import '../styles/globals.css'
import '../components/styles.css'
import '../components/buyer/styles.css'
import '../pages/buyer/styles.css'
import '../pages/user/style.css'
import '../components/user/styles.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
