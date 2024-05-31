const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World Rushi")
})
app.get('/hello', (req, res) => {
    res.send("Hello Rushi")
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})