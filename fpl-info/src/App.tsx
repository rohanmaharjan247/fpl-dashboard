// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"
import { usePageTitle } from "@/lib/app-utils/hook"
import { Button } from "./components/ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  usePageTitle("Home")
  const auth = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.isLoading) {
      if (auth.isAuthenticated) {
        navigate("/dashboard")
      }
    }
  }, [auth.isAuthenticated, auth.isLoading, navigate])

  const getStartedHandler = () => {
    auth.loginWithRedirect()
  }

  return (
    <div className='basis-2/3 grow flex justify-center items-center'>
      <section className='py-16 mx-12'>
        <div className='text-4xl font-bold italics text-primary pt-8 pb-4 w-1/2 text-balance'>
          Unleash Your Fantasy: Join the FPL Frenzy Today!
        </div>
        <div className='pt-4 pb-8 w-[75%]'>
          Unlock the Power of Numbers in Fantasy Premier League! Dive deep into
          the game with our comprehensive statistics. Elevate your strategy,
          make informed decisions, and dominate the competition. Turn data into
          your secret weapon and take your FPL journey to the next level!
        </div>
        <Button onClick={getStartedHandler}>Join Now!</Button>
      </section>
    </div>
  )
}

export default App
