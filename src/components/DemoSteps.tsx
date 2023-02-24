import ConnectStep from '@/components/ConnectStep'
import NetworkSwitchStep from '@/components/NetworkSwitchStep'
import SignMessageStep from '@/components/SignMessageStep'
import WriteContractStep from '@/components/WriteContractStep'

export default function DemoSteps() {
  return (
    <>
      <ConnectStep />
      <NetworkSwitchStep />
      <SignMessageStep />
      <WriteContractStep />
    </>
  )
}
