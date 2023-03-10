import DemoSteps from '@/steps/DemoSteps'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { avalanche, bsc, mainnet, polygon } from 'wagmi/chains'

// 0. Define constants
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!
const chains = [mainnet, avalanche, polygon, bsc]

// 1. Configure wagmi
const { provider } = configureChains(chains, [w3mProvider({ projectId })])

const wagmi = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider
})

// 2. Configure ethereum client
const ethereumClient = new EthereumClient(wagmi, chains)

// 3. Configure web3modal
export default function HomePage() {
  return (
    <>
      <WagmiConfig client={wagmi}>
        <DemoSteps />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
