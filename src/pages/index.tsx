import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { avalanche, bsc, mainnet, polygon } from 'wagmi/chains'

import ConnectStep from '../components/ConnectStep'

// 0. Define constants
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!
const chains = [mainnet, avalanche, polygon, bsc]

// 1. Configure wagmi
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])

const wagmi = createClient({
  autoConnect: true,
  connectors: modalConnectors({ version: '1', appName: 'web3Modal', chains, projectId }),
  provider
})

// 2. Configure ethereum client
const ethereumClient = new EthereumClient(wagmi, chains)

// 3. Configure web3modal
export default function HomePage() {
  return (
    <>
      <WagmiConfig client={wagmi}>
        <ConnectStep />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
