const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use('/',(req,res)=>{
    res.send('Home')
})


mongoose.connect('mongodb+srv://Testing:QjzZG2oWAjrKyJDZ@prototype.jz040xq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err)
  });


app.listen(5000,()=>{
    console.log('Server is Up!!!')
})
