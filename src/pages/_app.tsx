import type { AppProps } from 'next/app'
import { AppWrapper } from '@/components/AppWrapper'

import '@/styles/global.scss'
// import '@/styles/animations.scss'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

