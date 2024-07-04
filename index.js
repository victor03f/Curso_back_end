const express = require('express')
const {Client} = require("pg")
require("dotenv").config()


const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const app = express()

const connectDB = async() =>{
    client
    .connect()
    .then(()=>{
        console.log('a conexão funcionou');
    }).catch((err) =>{
        console.error('erro ao conectar ao db')
});
};

connectDB()

app.get('/teste-api',function(req,res){
    res.send('Nossa api ta funcionando ')
})
app.listen(8000)

//localhost:8000/teste-api