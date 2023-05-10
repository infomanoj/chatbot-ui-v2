
import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }) {
  const Layout = getLayout(Component)

  return (
    <Component {...pageProps} />
  )
}

export default App
