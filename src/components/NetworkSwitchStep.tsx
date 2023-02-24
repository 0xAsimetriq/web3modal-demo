import { useWeb3Modal, Web3NetworkSwitch } from '@web3modal/react'
import { useSwitchNetwork } from 'wagmi'

export default function NetworkSwitchStep() {
  // Use web3modal's setDefaultChain BEFORE user is connected
  const { setDefaultChain } = useWeb3Modal()

  // Use wagmi's switchNetworkAsync AFTER user is connected
  const { switchNetworkAsync } = useSwitchNetwork()

  return <Web3NetworkSwitch />
}
