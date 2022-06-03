const express = require("express")
const app = express()
const port = 8000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({'result': 'OK'})
})

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})
