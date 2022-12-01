const Joi = require('joi');

const { json } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

 const courses =[
     {id:1 , name: 'courses1'},
     {id:2 , name: 'courses2'},
    {id:3 , name: 'courses3'},
     {id:4 , name: 'courses4'}
    ]


app.get('/' , function(req,res){
    res.send('hello');
});

app.get('/api/courses' , (req,res) => {
    res.send(courses)
})

app.post('/api/courses' , (req,res) => {

   
    const result = validateCourse(req.body) 
    if (!req.body.name || req.body.length < 3){
    res.status(400).send("name is required and should have min 5")
    return;
    }
    
    course.name = req.body.name;
    res.send(course);
    
    


})

app.put('/api/courses/:id' , (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("no course with this id");
    
    const result = validateCourse(req.body) 
    if (!req.body.name || req.body.length < 3){
    res.status(400).send("name is required and should have min 5")
    return;
    }
    
    course.name = req.body.name;
    res.send(course);
    
    })
    
    
    function validateCourse(course) {
    const schema = {
    name: Joi.string().min(3).required()
    };
    
    return Joi.valid(course, schema);
    }
    
    

 app.get('/api/courses/:id' , (req,res) =>{
     const course = courses.find(c => c.id === parseInt(req.params.id));
     if(!course) res.status(404).send("no course with this  id")
     res.send(course)
 })



app.get('/api/courses/:id' , (req,res) =>{
    res.send(req.params.id);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`))
