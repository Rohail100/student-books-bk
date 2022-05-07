const express = require('express')
const app = express()
const path = require("path")

app.use(express.json())

//api
app.use('/api/students',require('./routes/students'))
app.use('/api/books',require('./routes/books'))

//double duty
app.use(express.static(path.join(__dirname, "../student-books-fe", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../student-books-fe", "build", "index.html"));
});

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Started on port ${port}`)
})