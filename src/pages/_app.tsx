import { createTheme, Grid, NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <>
      {ready ? (
        <NextUIProvider theme={createTheme({ type: 'dark' })}>
          <Grid.Container gap={2} css={{ maxW: '720px', margin: '0 auto' }}>
            <Component {...pageProps} />
          </Grid.Container>
        </NextUIProvider>
      ) : null}
    </>
  )
}
