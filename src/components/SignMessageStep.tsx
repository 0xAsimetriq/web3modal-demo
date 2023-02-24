import { useSignMessage } from 'wagmi'

export default function SignMessageStep() {
  const { signMessage, isLoading, isSuccess, data } = useSignMessage({
    message: 'Hello ETHDenver!'
  })

  return <button>Sign Message</button>
}
