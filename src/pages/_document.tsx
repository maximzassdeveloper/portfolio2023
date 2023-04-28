import { Html, Head, Main, NextScript } from 'next/document'
import { imgPath } from '@/shared/libs/helper'

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={imgPath('/favicons/favicon120.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={imgPath('/favicons/favicon32.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={imgPath('/favicons/favicon16.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='120x120'
          href={imgPath('/favicons/favicon120.png')}
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}

