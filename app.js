const express = require("express")
const app = express()
const port = 8000

const appRouter = require('./routes/routes')
const notFoundMiddleware = require('./middlewares/not-found')

app.use(express.json())

app.use('/', appRouter)

app.use(notFoundMiddleware)

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})
