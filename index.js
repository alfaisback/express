const express = require('express')

const app = express()
const port = 3333

app.get('/', (req, res) => {
    res.send("contoh hal 1")
}) 

app.listen(port)