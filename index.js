const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const mongoose = require('mongoose')

try{
mongoose.connect('mongodb://localhost:27017/cyber_pay')
console.log('database connected')
}catch(err){
    console.log(err)
}



app.use('/',require('./routes/default'))
app.use('/authentication',require('./routes/authentication'))

app.listen(8080,()=>{
    console.log("server is running")
})