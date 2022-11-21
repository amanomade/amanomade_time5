import { HydrationProvider, Server, Client } from "react-hydration-provider";
import NomadeProvider from '../components/context/nomadeProvider.js'
import Header from '../components/Header/index.jsx'
import Layout from '../components/Layout/index.jsx'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <HydrationProvider>
      <Client>

        <NomadeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NomadeProvider>
      </Client>
    </HydrationProvider>
  )
}

export default MyApp
