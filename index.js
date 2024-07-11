const express = require('express')
require("dotenv").config()
const { connectDB } = require("./db")
const routes = require('./routes')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
connectDB()

app.use("/usuarios", routes)

app.listen(8000)

