require('dotenv').config()
const express = require('express');
const server = express();
const PORT  = process.env.PORT || 3111;

server.get('/hello', (req,res)=>{

    res.json({greetin:'Hello , it works'})
})

server.listen(PORT , ()=>{
    console.log('my server is up !!!')
})