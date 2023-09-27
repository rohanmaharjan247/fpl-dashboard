import { Router } from "express"
import {
  getEntry,
  getEntryEvent,
  getEntryHistory,
} from "../controllers/player-controller.js"

const router = Router()

router.get("/", getEntry)
router.get("/event", getEntryEvent)
router.get("/history", getEntryHistory)

export default router
