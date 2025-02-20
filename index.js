import express from 'express'
import { authRouter } from './routes/auth.js'
import { tasksRouter } from './routes/tasks.js'
import cors from 'cors'
import dbClient from './db/client.js'

const app = express()
app.use(express.json())
app.use(cors())
dbClient.sync()

app.use('/auth', authRouter)
app.use('/tasks', tasksRouter)

// TODO: Implement error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || 'Internal Server Error'
  })
})

export default app
