const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user', (req, res) => {
    console.log(req.body);

    res.send("Hello >> ");
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});