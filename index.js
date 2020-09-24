const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("You've reached the right place!");
});

app.get('/api/courses', (req, res) => {
    res.send([1, 3, 5]);
});

//Proper way to assign PORT var
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));