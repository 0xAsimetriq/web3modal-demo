import { createTheme, Grid, NextUIProvider, Text } from '@nextui-org/react'
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
          <Text
            h2
            css={{
              marginTop: '40px',
              textAlign: 'center',
              textGradient: '45deg, $blue600 -20%, $pink600 50%'
            }}
          >
            Web3Modal Demo
          </Text>
          <Grid.Container gap={2} css={{ maxW: '720px', margin: '0 auto' }}>
            <Component {...pageProps} />
          </Grid.Container>
        </NextUIProvider>
      ) : null}
    </>
  )
}
