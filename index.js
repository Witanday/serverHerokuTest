require('dotenv').config()
const express = require('express');
const server = express();
const helmet = require('helmet');
const PORT  = process.env.PORT || 3111;

server.use(helmet());
server.use(express.json());

server.get('/', (req,res)=>{

    res.json({greetin:'Hello , it works'})
})

server.listen(PORT , ()=>{
    console.log('my server is up !!!')
})