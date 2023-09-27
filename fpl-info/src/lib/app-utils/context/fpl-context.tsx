import { Bootstrap, Entry } from "fpl-api"
import { ReactNode, createContext, useContext } from "react"
import { useBootstrap, useEntry } from "../hook"

interface IFPLContext {
  bootstrap?: Bootstrap
  entry?: Entry
  error?: unknown
  isLoading: boolean
}

const FPLContext = createContext<IFPLContext | undefined>(undefined)

const FPLProvider = ({
  entryId,
  children,
}: {
  entryId: number
  children: ReactNode
}) => {
  const { data, error, isLoading } = useBootstrap()
  const { entry } = useEntry(entryId)
  if (error) {
    throw error
  }

  return (
    <FPLContext.Provider value={{ bootstrap: data, entry, isLoading, error }}>
      {children}
    </FPLContext.Provider>
  )
}

const useFPLContext = () => {
  const fplContext = useContext(FPLContext)

  if (!fplContext) {
    throw new Error("Context not found! Must be used inside FPLProvider")
  }

  return fplContext
}

// eslint-disable-next-line react-refresh/only-export-components
export { FPLProvider, useFPLContext }
