const express = require('express')
const app = express()
const SERVER_PORT = 3000

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

app.get('/', (req, res) => {
    res.status(200)
    res.send('<h1>101274382_COMP3123-exec04</h1>');
});

app.get('/hello', (req, res) => {
    res.status(200)
    res.send('<h2>Hello Express JS</h2>');
})

app.get('/user', (req, res) => {
    res.status(201);
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({
        firstname: firstname,
        lastname: lastname
    })
});


app.post('/user/:fname/:lname', (req, res) => {
    res.status(202)
    const firstname = req.params.fname; 
    const lastname = req.params.lname;  

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});
