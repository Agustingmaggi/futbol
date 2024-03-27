import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import viewsRouter from './Routes/views.router.js'
import sessionRouter from './Routes/session.router.js'

const app = express()

app.use(express.json())

app.listen(3000, () => console.log("listening on http://localhost:3000"))

app.use(cors())

mongoose.connect("mongodb+srv://agustingmaggi:Agustin011235@cluster0.ewlnbwy.mongodb.net/futbol?retryWrites=true&w=majority&appName=Cluster0")

app.use('/', viewsRouter)
app.use('/api/sessions', sessionRouter)