import { useWeb3Modal, Web3Button } from '@web3modal/react'
import Card from '../components/Card'

export default function ConnectStep() {
  // useWeb3Modal can be used if you are creating your own custom button
  const { open, close, isOpen } = useWeb3Modal()

  return (
    <Card title="Step 1: Connect Wallet">
      <Web3Button balance="show" />
    </Card>
  )
}
