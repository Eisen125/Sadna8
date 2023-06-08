const express= require('express')
const app = express()
const port = 3400
const path = require('path')
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})
app.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'products.html'))
})
app.listen(port,function(){
    console.log("connect to port 3400")
})