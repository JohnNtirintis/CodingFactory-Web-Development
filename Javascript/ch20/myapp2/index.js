const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    console.log("Home page");
    res.send("This is the home page");
});

app.get('/about', (req, res) => {
    console.log('About page');
    res.send("This is the about page");
})

app.get('/login', (req, res) => {
    console.log("The Login page");
    res.send("This is the login page");
})

app.get('/user', (req, res) => {
    let names = req.query;
    console.log(names);

    // fromt the req query information, access the variable called 'name'
    // and assign its value to the var 'name'
    let name = req.query.name;
    let surname = req.query.surname;
    let age = req.query.age;

    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`);
});

app.get('/user2/:name/:surname/:age', (req, res) => {

    let values = req.params;
    console.log(values);

    let name = values.name;
    let surname = req.params.surname;
    let surname2 = values.surname;
    let age = req.params.age;

    res.send(`>> Name: ${name}, Surname: ${surname}, Surname2: ${surname2}, Age: ${age}`);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


