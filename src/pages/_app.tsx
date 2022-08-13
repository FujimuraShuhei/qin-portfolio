import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from 'src/components/Header/Header'
import { Container, MantineProvider } from '@mantine/core'
import { Footer } from 'src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp
