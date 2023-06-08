const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
    res.send("contoh hal 1 ")
}) 

app.get('/about', (req, res) =>{
    res.send('about')
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`user id ${id}`);
})

app.listen(port, () => console.log(`server running on port ${port}`))