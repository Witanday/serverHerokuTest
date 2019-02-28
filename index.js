require('dotenv').config()
const express = require('express');
const server = express();

server.get('/hello', (req,res)=>{

    res.json({greetin:'Hello , it works'})
})

server.listen(5000, ()=>{
    console.log('my server is up !!!')
})