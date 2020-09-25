const express = require('express');
const app = express();

const courses = [
    {id: 1, name: "Math 101"},
    {id: 2, name: "Math 201"},
    {id: 3, name: "Math 102"},
]

app.get('/', (req, res) => {
    res.send("You've reached the right place!");
});

app.get('/api/courses', (req, res) => {
    res.send([1, 3, 5]);
});

// // Get parameter for course
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });

// Get parameter of month and year
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params)
// })

// How to read query parameters
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})

// Get single endpoint for courses
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given id was not found!')
    res.send(course)
});

//Proper way to assign PORT var
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));