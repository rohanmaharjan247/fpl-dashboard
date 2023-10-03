import { Router } from "express"
import {
  getClassicLeague,
  getH2HLeague,
} from "../controllers/league-controller.js"

const router = Router()

router.get("/:leagueId", getClassicLeague)
router.get("/h2h/:h2hLeagueId", getH2HLeague)

export default router
