import expressAsyncHandler from "express-async-handler"
import { fetchBootstrap, fetchEventStatus } from "fpl-api"

const getBootstrapStatic = expressAsyncHandler(async (req, res) => {
  const data = await fetchBootstrap()

  res.json(data)
})

const getEventStatus = expressAsyncHandler(async (req, res) => {
  const data = await fetchEventStatus()

  res.json(data)
})

export { getBootstrapStatic, getEventStatus }
