const express = require('express');
const ejs = require('ejs')

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/logIn', (req, res) => {
    res.render('logIn')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.listen('3000')
console.log('server runnig on port 3000')