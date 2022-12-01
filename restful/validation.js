const Joi = require('joi');
const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
const courses = [
  { id: 1, name: 'courses1' },
  { id: 2, name: 'courses2' },
  { id: 3, name: 'courses3' },
  { id: 4, name: 'courses4' }
]
app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };
  const result = Joi.valid(req.body, schema);
  console.log(result);
  if (!req.body.name || req.body.length < 3) {
    res.status(400).send("name is required and should have min 5")
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course)
})
const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`listening on ${port}`))
