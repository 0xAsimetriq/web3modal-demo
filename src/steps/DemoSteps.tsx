import ConnectStep from '@/steps/ConnectStep'
import NetworkSwitchStep from '@/steps/NetworkSwitchStep'
import ReadContractStep from '@/steps/ReadContractStep'
import SignMessageStep from '@/steps/SignMessageStep'

export default function DemoSteps() {
  return (
    <>
      <ConnectStep />
      <NetworkSwitchStep />
      <SignMessageStep />
      <ReadContractStep />
    </>
  )
}
