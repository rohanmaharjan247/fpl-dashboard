import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { FPLProvider } from "@/lib/app-utils/context/fpl-context"
import { DashboardNav } from "@/components/app/common"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})
const DashboardLayout = () => {
  const entryId = 4744513
  return (
    <QueryClientProvider client={queryClient}>
      <FPLProvider entryId={entryId}>
        <DashboardNav />
      </FPLProvider>
    </QueryClientProvider>
  )
}

export default DashboardLayout
