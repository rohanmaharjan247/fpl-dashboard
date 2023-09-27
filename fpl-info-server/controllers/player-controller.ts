import expressAsyncHandler from "express-async-handler"
import { fetchEntry, fetchEntryEvent, fetchEntryHistory } from "fpl-api"

const getEntry = expressAsyncHandler(async (req, res) => {
  const { entryId } = req.query
  const data = await fetchEntry(Number(entryId?.toString()))

  res.json(data)
})

const getEntryEvent = expressAsyncHandler(async (req, res) => {
  const { entryId, eventId } = req.query
  const data = await fetchEntryEvent(
    Number(entryId?.toString()),
    Number(eventId?.toString())
  )

  res.json(data)
})

const getEntryHistory = expressAsyncHandler(async (req, res) => {
  const { entryId } = req.query
  const data = await fetchEntryHistory(Number(entryId?.toString()))

  res.json(data)
})

export { getEntry, getEntryEvent, getEntryHistory }
