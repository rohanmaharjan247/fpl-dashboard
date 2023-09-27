import express from "express"
import cors from "cors"
import { bootstrapRoutes, entryRoutes, fixtureRoutes } from "./api/index.js"

const PORT = process.env.PORT || 5172

const app = express()

app.use(cors())

app.use("/api/bootstrap", bootstrapRoutes)
app.use("/api/fixtures", fixtureRoutes)
app.use("/api/entry", entryRoutes)

app.get("/", (req, res) => {
  res.send("<h1>FPL API Server is Running...</h1>")
})

app.listen(PORT, () => {
  console.log(`App started in http://localhost:${PORT}`)
})
