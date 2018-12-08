import App, { Container } from 'next/app'
import { AdminProvider } from './components/context/AdminContext'

class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <AdminProvider>
          <Component {...pageProps} query={router.query} />
        </AdminProvider>
      </Container>
    )
  }
}

export default MyApp
