const express = require("express")
const app = express()
const port = 8000

const appRouter = require('./routes/routes')

app.use(express.json())

app.use('/', appRouter)

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})
