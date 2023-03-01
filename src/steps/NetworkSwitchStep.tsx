import { useWeb3Modal, Web3NetworkSwitch } from '@web3modal/react'
import { useSwitchNetwork } from 'wagmi'
import Card from '../components/Card'

export default function NetworkSwitchStep() {
  // Use web3modal's setDefaultChain BEFORE user is connected
  const { setDefaultChain } = useWeb3Modal()

  // Use wagmi's switchNetworkAsync AFTER user is connected
  const { switchNetworkAsync } = useSwitchNetwork()

  return (
    <Card title="Step 2: Switch Network">
      <Web3NetworkSwitch />
    </Card>
  )
}
