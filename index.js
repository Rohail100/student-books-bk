const express = require('express')
const app = express()
//initialize knex
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig)

app.use(express.json())
app.get('/',(req,res)=>{
  knex.select().table('books')
  .then((data)=>{
    res.json(data)
  })
})

//api
app.use('/api/students',require('./routes/students'))
app.use('/api/books',require('./routes/books'))

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Started on port ${port}`)
})