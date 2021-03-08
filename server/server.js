const express = require('express');
const path = require('path');
let app = express();

//app.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname, '../public/index.html'))
//});

//app.get('/css/styles.css', (req, res) => {
   // res.sendFile(path.join(__dirname, '../public/css/styles.css'));
//});

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.listen(3000);