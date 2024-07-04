const express = require('express')

require("dotenv").config()
const connectDB = require("./db")

const app = express()
connectDB()

app.get('/teste-api', function (req, res) {
    res.send('Nossa api ta funcionando ')
})
app.listen(8000)

//localhost:8000/teste-api