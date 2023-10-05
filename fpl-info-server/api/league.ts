import { Router } from "express"
import {
  getClassicLeague,
  getH2HLeague,
  getH2HMatches,
} from "../controllers/league-controller.js"

const router = Router()

router.get("/:leagueId", getClassicLeague)
router.get("/h2h/:h2hLeagueId", getH2HLeague)
router.get("/h2h/matches/:h2hLeagueId", getH2HMatches)

export default router
