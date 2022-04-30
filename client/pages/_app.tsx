import '../styles/globals.css'
import '../components/styles.css'
import '../pages/styles.css'
import '../components/buyer/styles.css'
import '../pages/buyer/styles.css'
//import '../pages/buyer/style.scss'
//import '../components/manager/styles.css'
//import '../pages/manager/styles.css'
import '../components/user/styles.css'
import '../pages/user/style.css'
import '../components/seller/styles.css'
import '../pages/seller/styles.css'
import '../components/store/styles.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
