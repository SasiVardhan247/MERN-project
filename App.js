const express = require('express')
const app = express()


app.use('/',(req,res)=>{
    res.send('Home')
})


app.listen(5000,()=>{
    console.log('Server is Up!!!')
})