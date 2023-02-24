import { useWeb3Modal, Web3Button } from '@web3modal/react'

export default function ConnectStep() {
  const { open, close, isOpen } = useWeb3Modal()

  return <Web3Button balance="show" />
}
