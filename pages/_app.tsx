import 'styles/globals/index.scss'
import type { AppProps } from 'next/app'
import 'focus-visible/dist/focus-visible.min.js'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
