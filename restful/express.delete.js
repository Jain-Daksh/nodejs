const express = require('express');
const app = express();
const courses = [
  { id: 1, name: 'courses1' },
  { id: 2, name: 'courses2' },
  { id: 3, name: 'courses3' },
  { id: 4, name: 'courses4' }
]
app.delete('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("no course with this  id")
    return
  }
  const index = courses.indexOf(course)
  courses.splice(index, 1)
  res.send("course delete with id + ")
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`))
