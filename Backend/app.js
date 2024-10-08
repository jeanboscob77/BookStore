const express  = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./BookRoutes')
const PORT  = 5000

mongoose.connect('mongodb://localhost:27017/Books').then(()=>{
console.log('connected successfully');

}).catch((error)=>{
  console.log({message: error.message});
  
})

const app = express()

app.use(express.json())
app.use(cors())

app.use('/books',router)


app.listen(PORT,()=>console.log(`server starting on port ${PORT}...`)
)

