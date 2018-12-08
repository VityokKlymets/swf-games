// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <title>swf-games</title>
          <meta
            name='google-site-verification'
            content='pxOqYizqs4Mwj4MYqQkVZJ_SZADolF1JCsBsjPYqEd4'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css'
          />
          <link rel='stylesheet' href='/static/css/index.css' />
          <link rel='shortcut icon' href='/static/favicon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
