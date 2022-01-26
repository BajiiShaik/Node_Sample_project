const express = require('express');
const serverless = require('serverless-http');
const app=express();

app.get('/',(req,res)=>{
    res.send('hello world in Node API working');
});

app.listen(3000,()=>{
    console.log('Server is running in 3000');
});

module.exports= {
    handler: serverless(app)
};
