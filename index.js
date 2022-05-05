const express = require('express')
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
  res.json("OK")
})

app.use('/api/students',require('./routes/students'))
app.use('/api/books',require('./routes/books'))

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Started on port ${port}`)
})