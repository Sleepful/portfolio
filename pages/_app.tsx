import '../styles/index.css'
import { Head } from '../components/layout/Head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Component {...pageProps} />
    </>
  )
}
