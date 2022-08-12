import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from 'src/components/Header/Header'
import { Container, MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
