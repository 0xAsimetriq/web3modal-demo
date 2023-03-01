import { Card as NextCard, Grid, Text } from '@nextui-org/react'

interface Props {
  children: React.ReactNode
  title: string
}

export default function Card({ children, title }: Props) {
  return (
    <Grid xs={12}>
      <NextCard variant="bordered">
        <NextCard.Header>
          <Text
            b
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%'
            }}
          >
            {title}
          </Text>
        </NextCard.Header>
        <NextCard.Body css={{ display: 'flex', alignItems: 'center' }}>{children}</NextCard.Body>
      </NextCard>
    </Grid>
  )
}
