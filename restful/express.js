const express = require('express');

const app = express();

const courses = [
  { id: 1, name: 'courses1' },
  { id: 2, name: 'courses2' },
  { id: 3, name: 'courses3' },
  { id: 4, name: 'courses4' }
]


app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/api/courses', (req, res) => {
  res.send(courses)
})


app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("no course with this  id")
  res.send(course)
})

app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`))
