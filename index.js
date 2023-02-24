const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send
    ('Hello Server')
})

app.listen(port, () => [
    console.log(`Server up and running at ${port}`)
])