import expressAsyncHandler from "express-async-handler"
import { fetchClassicLeague, fetchH2HLeagueStandings } from "fpl-api"

const getClassicLeague = expressAsyncHandler(async (req, res) => {
  const { leagueId } = req.params

  const classicLeague = await fetchClassicLeague(Number(leagueId?.toString()))

  res.json(classicLeague)
})

const getH2HLeague = expressAsyncHandler(async (req, res) => {
  const { h2hLeagueId } = req.params

  const h2hLeague = await fetchH2HLeagueStandings(
    Number(h2hLeagueId.toString())
  )

  res.json(h2hLeague)
})

export { getClassicLeague, getH2HLeague }
