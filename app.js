const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/', (req, res) => {
    res.send("HELLO Y'ALL!");
})

app.listen(3000, () => {
    console.log('SERVING ON PORT 3000!');
})

