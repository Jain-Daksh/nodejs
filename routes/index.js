const express = require('express')
const app = express()
const Port = 3000

app.use(express.json());

require('./routes/user.routes')(app);
require('./routes/comment.routes')(app);

app.listen(Port, () => {
  console.log("server running")
})