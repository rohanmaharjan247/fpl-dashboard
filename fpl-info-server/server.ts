import express from 'express'
import cors from 'cors'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import {
  bootstrapRoutes,
  entryRoutes,
  fixtureRoutes,
  leagueRoutes,
} from './api/index.js'

const PORT = process.env.PORT || 5172

const app = express()

app.use(cors())

app.use(express.static('./fpl-info/dist'))

app.use('/api/bootstrap', bootstrapRoutes)
app.use('/api/fixtures', fixtureRoutes)
app.use('/api/entry', entryRoutes)
app.use('/api/league', leagueRoutes)
app.get('/api', (req, res) => {
  res.send('<h1>FPL API Server is Running...</h1>')
})

app.get('*', (req, res) => {
  const filePath = import.meta.resolve('../fpl-info', import.meta.url)
  const __filename = fileURLToPath(filePath)
  const __dirname = dirname(__filename)
  // res.send(path.resolve(__dirname, 'dist', 'index.html'))
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`App started in http://localhost:${PORT}`)
})
