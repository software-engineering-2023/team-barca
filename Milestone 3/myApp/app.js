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
    res.render('bourbon');
});

app.get('/close', function(req,res){
    res.render('close');
});

app.get('/closed', function(req,res){
    res.render('closed');
});

app.get('/creditcard', function(req,res){
    res.render('creditcard');
});

app.get('/creditcardapply', function(req,res){
    res.render('creditcardapply');
});

app.get('/creditcardpoint', function(req,res){
    res.render('creditcardpoint');
});

app.get('/loan', function(req,res){
    res.render('loan');
});

app.get('/loanapply', function(req,res){
    res.render('loanapply');
});

app.get('/remandrep', function(req,res){
    res.render('remandrep');
});

app.get('/signup', function(req,res){
    res.render('signup');
});

app.get('/transactionhistory', function(req,res){
    res.render('transactionhistory');
});

app.get('/transactions', function(req,res){
    res.render('transactions');
});

app.get('/userhomepage', function(req,res){
    res.render('userhomepage');
});


app.listen(3000);