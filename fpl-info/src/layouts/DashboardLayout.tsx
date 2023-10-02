import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { FPLProvider } from "@/lib/app-utils/context/fpl-context"
import { DashboardNav } from "@/components/app/common"
import { useCallback, useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FPLUser } from "@/lib/app-utils/interface/fpl-user"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})
const DashboardLayout = () => {
  const { isLoading, isAuthenticated, getAccessTokenSilently, user } =
    useAuth0()
  const navigate = useNavigate()
  const [entryCode, setEntryCode] = useState<number>()

  const getUserMetadata = useCallback(async () => {
    getAccessTokenSilently({
      authorizationParams: {
        audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN_ID}/api/v2/`,
        scope: "read:current_user",
      },
    }).then(async (accessToken) => {
      const userDetailsByUrl = `https://${
        import.meta.env.VITE_AUTH0_DOMAIN_ID
      }/api/v2/users/${user?.sub}`

      const { data: metadataResponse } = await axios.get<FPLUser>(
        userDetailsByUrl,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      setEntryCode(metadataResponse.user_metadata.entry_code)
    })
  }, [getAccessTokenSilently, user?.sub])

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/")
      } else {
        getUserMetadata()
      }
    }
  }, [isLoading, isAuthenticated, navigate, getUserMetadata])

  //TODO: implement loader
  if (!entryCode) {
    return <p>Loading...</p>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <FPLProvider entryId={entryCode}>
        <div className='relative'>
          <DashboardNav />
        </div>
      </FPLProvider>
    </QueryClientProvider>
  )
}

export default DashboardLayout
