import { Router } from "express"
import {
  getBootstrapStatic,
  getEventStatus,
} from "../controllers/general-info-controller.js"

const router = Router()

router.get("/", getBootstrapStatic)
router.get("/event-status", getEventStatus)

export default router
