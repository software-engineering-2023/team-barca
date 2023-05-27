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

app.get('/accountchoose', function(req,res){
    res.render('accountchoose');
});

app.get('/accounthistory1', function(req,res){
    res.render('accounthistory1');
});

app.get('/accounthistory2', function(req,res){
    res.render('accounthistory2');
});

app.get('/close', function(req,res){
    res.render('close');
});

app.get('/closed', function(req,res){
    res.render('closed');
});

app.get('/cardchoose', function(req,res){
    res.render('cardchoose');
});

app.get('/cardhistory1', function(req,res){
    res.render('cardhistory1');
});

app.get('/cardhistory2', function(req,res){
    res.render('cardhistory2');
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

app.get('/open', function(req,res){
    res.render('open');
});

app.get('/opened', function(req,res){
    res.render('opened');
});

app.get('/remandrep', function(req,res){
    res.render('remandrep');
});

app.get('/signup', function(req,res){
    res.render('signup');
});


app.get('/transactions', function(req,res){
    res.render('transactions');
});

app.get('/userhomepage', function(req,res){
    res.render('userhomepage');
});

app.get('/reminders', function(req,res){
    res.render('reminders');
});
app.get('/issue', function(req,res){
    res.render('issue');
});
app.get('/transandpay', function(req,res){
    res.render('transandpay');
});
app.listen(3000);