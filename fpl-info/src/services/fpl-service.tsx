import { fplInstance } from "@/api/fpl-axios.instance"
import { HttpStatusCode } from "axios"
import {
  Bootstrap,
  ClassicLeague,
  Entry,
  EntryEvent,
  EntryHistory,
  EventStatus,
  Fixture,
  H2HLeague,
} from "fpl-api"

const getBootstrapStatic = async () => {
  const {
    data: bootstrapData,
    status,
    statusText,
  } = await fplInstance.get<Bootstrap>("/api/bootstrap")

  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return bootstrapData
}

const getEventStatus = async () => {
  const {
    data: eventStatus,
    status,
    statusText,
  } = await fplInstance.get<EventStatus>("/api/bootstrap/event-status")

  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return eventStatus
}

const getFixtures = async (eventId?: number) => {
  const {
    data: fixtures,
    status,
    statusText,
  } = await fplInstance.get<Array<Fixture>>("/api/fixtures", {
    params: { eventId },
  })
  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return fixtures
}

const getEntry = async (entryId: number) => {
  const {
    data: entry,
    status,
    statusText,
  } = await fplInstance.get<Entry>("/api/entry", {
    params: { entryId },
  })
  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return entry
}

const getEntryEvent = async (entryId?: number, eventId?: number | null) => {
  const {
    data: entryEvent,
    status,
    statusText,
  } = await fplInstance.get<EntryEvent>("/api/entry/event", {
    params: { entryId, eventId },
  })
  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return entryEvent
}

const getEntryHistory = async (entryId?: number) => {
  const {
    data: entryHistory,
    status,
    statusText,
  } = await fplInstance.get<EntryHistory>("/api/entry/history", {
    params: { entryId },
  })
  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return entryHistory
}

const getEntryClassicLeague = async (leagueId: number) => {
  const {
    data: entryClassicLeague,
    status,
    statusText,
  } = await fplInstance.get<ClassicLeague>(`/api/league/${leagueId}`)
  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return entryClassicLeague
}

const getEntryH2hLeague = async (h2hLeagueId: number) => {
  const {
    data: entryH2hLeague,
    status,
    statusText,
  } = await fplInstance.get<H2HLeague>(`/api/league/h2h/${h2hLeagueId}`)
  if (status !== HttpStatusCode.Ok) {
    throw new Error(statusText)
  }

  return entryH2hLeague
}

export {
  getBootstrapStatic,
  getFixtures,
  getEventStatus,
  getEntry,
  getEntryEvent,
  getEntryHistory,
  getEntryClassicLeague,
  getEntryH2hLeague,
}
