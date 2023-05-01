import type { AppProps } from 'next/app'
import { AppWrapper } from '@/components/app'

import '@/styles/global.scss'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

