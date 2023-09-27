import expressAsyncHandler from "express-async-handler"
import { fetchFixtures } from "fpl-api"

const getFixtures = expressAsyncHandler(async (req, res) => {
  const { eventId } = req.query
  const data = await fetchFixtures(Number(eventId?.toString()))

  res.json(data)
})

export { getFixtures }
