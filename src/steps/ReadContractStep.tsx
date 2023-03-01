import { Button } from '@nextui-org/react'
import { useContractRead } from 'wagmi'
import Card from '../components/Card'
import { abi } from '../data/aaveV3Pool'

export default function WriteContractStep() {
  const { refetch, isLoading, isSuccess, data } = useContractRead({
    address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    abi,
    functionName: 'getReservesList',
    enabled: false
  })

  console.log(data)

  return (
    <Card title="Step 4: Read from Contract">
      <Button color="gradient" onPress={() => refetch()}>
        Read Contract
      </Button>
    </Card>
  )
}
