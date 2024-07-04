const express = require('express')

const app = express()

app.get('/teste-api',function(req,res){
    res.send('Nossa api ta funcionando ')
})
app.listen(8000)

//localhost:8000/teste-api