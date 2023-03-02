import { Button, Loading, Modal } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useSignMessage } from 'wagmi'
import Card from '../components/Card'

export default function SignMessageStep() {
  const [open, setOpen] = useState(false)

  const { signMessage, isSuccess, isLoading, data } = useSignMessage({
    message: 'Hello ETHDenver!'
  })

  useEffect(() => {
    if (isSuccess && data) {
      setOpen(true)
    }
  }, [isSuccess, data])

  return (
    <>
      <Card title="Step 3: Sign Message">
        <Button color="gradient" onPress={() => signMessage()}>
          {isLoading ? <Loading /> : 'Sign Message'}
        </Button>
      </Card>

      <Modal closeButton open={open} onClose={() => setOpen(false)}>
        <Modal.Body>{JSON.stringify(data, null, 2)}</Modal.Body>
      </Modal>
    </>
  )
}
