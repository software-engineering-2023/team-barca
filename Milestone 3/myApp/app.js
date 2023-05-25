var express = require('express');
var path = require('path');
cookieParser = require("cookie-parser");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('userhomepage');
});

app.listen(3000);