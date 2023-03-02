import { Button, Loading, Modal } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import Card from '../components/Card'
import { abi } from '../data/aaveV3Pool'

export default function WriteContractStep() {
  const [open, setOpen] = useState(false)

  const { refetch, isSuccess, isLoading, data } = useContractRead({
    address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    abi,
    functionName: 'getReservesList',
    enabled: false
  })

  useEffect(() => {
    if (isSuccess && data) {
      setOpen(true)
    }
  }, [isSuccess, data])

  return (
    <>
      <Card title="Step 4: Read from Contract">
        <Button color="gradient" onPress={() => refetch()}>
          {isLoading ? <Loading /> : 'Read Contract'}
        </Button>
      </Card>

      <Modal closeButton open={open} onClose={() => setOpen(false)}>
        <Modal.Body>{JSON.stringify(data, null, 2)}</Modal.Body>
      </Modal>
    </>
  )
}
