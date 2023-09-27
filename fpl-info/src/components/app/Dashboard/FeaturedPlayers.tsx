import { useCurrentGameweek, useElements, useTeams } from "@/lib/app-utils/hook"
import { useMemo } from "react"
import {
  TopPlayerCard,
  MostCaptainedCard,
  MostTransferredInCard,
} from "./FeaturedPlayerCards"

const FeaturedPlayers = () => {
  const currentGameweek = useCurrentGameweek()
  const elements = useElements()
  const teams = useTeams()

  const topElement = useMemo(() => {
    const top = elements?.find((x) => x.id === currentGameweek?.top_element)
    return top
  }, [currentGameweek?.top_element, elements])

  const teamName = useMemo(() => {
    const name = teams?.find((x) => x.code === topElement?.team_code)
    return name
  }, [teams, topElement?.team_code])

  const mostTransferredElement = useMemo(() => {
    const top = elements?.find(
      (x) => x.id === currentGameweek?.most_transferred_in
    )
    return top
  }, [currentGameweek?.most_transferred_in, elements])

  const mostCaptainedElement = useMemo(() => {
    const top = elements?.find((x) => x.id === currentGameweek?.most_captained)
    return top
  }, [currentGameweek?.most_captained, elements])
  return (
    <>
      {currentGameweek && (
        <TopPlayerCard
          currentGameweek={currentGameweek}
          teamName={teamName}
          topElement={topElement}
        />
      )}
      {mostTransferredElement && (
        <MostTransferredInCard
          mostTransferredElement={mostTransferredElement}
        />
      )}
      {mostCaptainedElement && (
        <MostCaptainedCard mostCaptainedElement={mostCaptainedElement} />
      )}
    </>
  )
}

export default FeaturedPlayers
