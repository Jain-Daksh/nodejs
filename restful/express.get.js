const express = require('express');
const app = express();
const courses = [
  { id: 1, name: 'courses1' },
  { id: 2, name: 'courses2' },
  { id: 3, name: 'courses3' },
  { id: 4, name: 'courses4' }
]

app.get('/', (req, res) => {
  res.send(courses)
})
app.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("no course with this  id")
    return
  }
  res.send(course)
})
// route parameters
app.get('/:id', (req, res) => {
  res.send(req.params.id);
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`))
