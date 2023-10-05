import { Button } from "@/components/ui/button"
import { auth } from "@/lib/app-utils/config/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
const Login = () => {
  const googleAuth = new GoogleAuthProvider()

  const signIn = async () => {
    const result = await signInWithPopup(auth, googleAuth)
    console.log(result.user)
  }
  return (
    <div>
      <Button onClick={signIn}>Login</Button>
    </div>
  )
}

export default Login
