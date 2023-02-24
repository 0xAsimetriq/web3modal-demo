import { useSignMessage } from 'wagmi'

export default function WriteContractStep() {
  const { signMessage, isLoading, isSuccess, data } = useSignMessage({
    message: 'Hello ETHDenver!'
  })

  return <button>Sign Message</button>
}
