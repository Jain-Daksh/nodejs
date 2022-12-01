const express = require('express')
const app = express()

app.use(express.json());

//middle ware for all
app.use((req, res, next) => {
  console.log("middleware called")
  next()
})
app.get('/', (req, res) => {
  res.json({
    message: "hello"
  })
})

//middle ware for specific 

const checkuser = (req, res, next) => {
  const name = req.body.name

  if (name === "abc") {
    res.json({
      error: "not allowed"
    })
  }
  else {
    next()

  }
}
app.post('/', checkuser, (req, res) => {
  res.send("welcome")
})


app.listen(3000, () => {
  console.log("server running")
})