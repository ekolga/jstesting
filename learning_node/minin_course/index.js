const express = require('express');
const app = express();
const path = require('path')
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'public/views')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/article', (req, res) => {
    res.render('article')
});
app.get('/topics', (req, res) => {
    res.send('Topics page');
});
app.get('/contact-me', (req, res) => {
    res.send('Contact me page');
});
app.post('/', (req, res) => {
    res.send('POST request')
});

app.listen(8000);