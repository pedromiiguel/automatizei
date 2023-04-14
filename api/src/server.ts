import express from 'express'
import { env } from '@/env'

const server = express()

server.listen(env.PORT, () => {
  console.log(`Server is running in http://localhost:${env.PORT}`)
})
