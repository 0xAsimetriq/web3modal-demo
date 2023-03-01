import { Button } from '@nextui-org/react'
import { useSignMessage } from 'wagmi'
import Card from '../components/Card'

export default function SignMessageStep() {
  const { signMessage, isLoading, isSuccess, data } = useSignMessage({
    message: 'Hello ETHDenver!'
  })

  console.log(data)

  return (
    <Card title="Step 3: Sign Message">
      <Button color="gradient" onPress={() => signMessage()}>
        Sign Message
      </Button>
    </Card>
  )
}
