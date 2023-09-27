import {
  getBootstrapStatic,
  getEntry,
  getEntryEvent,
  getEntryHistory,
  getEventStatus,
  getFixtures,
} from "@/services/fpl-service"
import { useQuery } from "@tanstack/react-query"
import {
  Element,
  ElementTypes,
  EntryEventPick,
  Event,
  Fixture,
  Team,
} from "fpl-api"
import { useFPLContext } from "../context/fpl-context"

export interface Fixtures extends Fixture {
  home_team?: Team
  away_team?: Team
}

export interface EntryPickElement extends EntryEventPick {
  element_detail?: Element
  position_detail?: ElementTypes
}

const useBootstrap = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["currentGameweekKey"],
    queryFn: getBootstrapStatic,
  })

  return { data, isLoading, error }
}

const useEventStatus = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["eventStatusKey"],
    queryFn: getEventStatus,
  })
  return { data, isLoading, error }
}

const useCurrentGameweek = () => {
  const { bootstrap } = useFPLContext()

  const currentGameweek = bootstrap?.events.find((x: Event) => x.is_current)

  return currentGameweek
}

const useFinishedGameweek = () => {
  const { bootstrap } = useFPLContext()

  const finishedGameweek = bootstrap?.events.filter(
    (x: Event) => x.finished || x.is_current
  )

  return finishedGameweek
}

const useNextGameweek = () => {
  const { bootstrap } = useFPLContext()

  const currentGameweek = bootstrap?.events.find((x: Event) => x.is_next)

  return currentGameweek
}

const useElements = () => {
  const { bootstrap } = useFPLContext()

  return bootstrap?.elements
}

const useElementsType = () => {
  const { bootstrap } = useFPLContext()

  return bootstrap?.element_types
}

const useTeams = () => {
  const { bootstrap } = useFPLContext()

  return bootstrap?.teams
}

const useNextFixtures = () => {
  const nextGameweek = useNextGameweek()
  const team = useTeams()
  const { data, isLoading, error } = useQuery({
    queryKey: ["nextFixtureKey", nextGameweek?.id],
    queryFn: () => getFixtures(nextGameweek?.id),
    enabled: !!nextGameweek,
  })

  const fixtures: Array<Fixtures> | undefined = data?.map((fixture) => {
    const homeTeam = team?.find((x) => x.id === fixture.team_h)
    const awayTeam = team?.find((x) => x.id === fixture.team_a)

    return { ...fixture, home_team: homeTeam, away_team: awayTeam }
  })

  return { fixtures, isLoading, error }
}

const useCurrentFixtures = () => {
  const currentGameweek = useCurrentGameweek()
  const team = useTeams()
  const { data, isLoading, error } = useQuery({
    queryKey: ["currentFixtureKey", currentGameweek?.id],
    queryFn: () => getFixtures(currentGameweek?.id),
    enabled: !!currentGameweek,
  })

  const fixtures: Array<Fixtures> | undefined = data?.map((fixture) => {
    const homeTeam = team?.find((x) => x.id === fixture.team_h)
    const awayTeam = team?.find((x) => x.id === fixture.team_a)

    return { ...fixture, home_team: homeTeam, away_team: awayTeam }
  })

  return { fixtures, isLoading, error }
}

const useEntry = (entryId: number) => {
  const {
    data: entry,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["entryKey", entryId],
    queryFn: () => getEntry(entryId),
  })

  return { entry, isLoading, error }
}

const useEntryClassicLeagues = () => {
  const { entry } = useFPLContext()

  return entry?.leagues.classic
}

const useEntryEvent = (entryId?: number, eventId?: number | null) => {
  const {
    data: entryEvent,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["entryKey", entryId, eventId],
    queryFn: () => getEntryEvent(entryId, eventId),
    enabled: !!entryId && !!eventId,
  })
  const elements = useElements()
  const elementTypes = useElementsType()
  const entryPickElement: Array<EntryPickElement> | undefined =
    entryEvent?.picks.map((pick) => {
      const picked_element = elements?.find((x) => x.id === pick.element)
      const picked_element_position = elementTypes?.find(
        (x) => x.id === picked_element?.element_type
      )

      return {
        ...pick,
        element_detail: picked_element,
        position_detail: picked_element_position,
      }
    })

  return { entryEvent, entryPickElement, isLoading, error }
}

const useEntryHistory = (entryId?: number) => {
  const {
    data: entryHistory,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["entryHistoryKey", entryId],
    queryFn: () => getEntryHistory(entryId),
    enabled: !!entryId,
  })

  return { entryHistory, isLoading, error }
}

export {
  useCurrentGameweek,
  useFinishedGameweek,
  useNextGameweek,
  useBootstrap,
  useElements,
  useTeams,
  useNextFixtures,
  useEventStatus,
  useCurrentFixtures,
  useEntry,
  useEntryClassicLeagues,
  useEntryEvent,
  useEntryHistory,
  useElementsType,
}
