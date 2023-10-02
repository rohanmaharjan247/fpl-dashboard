import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Callback = () => {
  const auth = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard")
    }
  }, [auth, navigate])
  return (
    <div className='basis-2/3 flex flex-col justify-center items-center text-4xl'>
      <h1>Authenticating User...</h1>
      <h2 className='text-lg'>Redirecting to dashboard once authenticated</h2>
    </div>
  )
}

export default Callback
