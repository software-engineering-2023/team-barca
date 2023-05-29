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
app.get('/adminlogin', function(req,res){
    res.render('adminlogin');
});
app.get('/banker', function(req,res){
    res.render('banker');
});
app.get('/bankerlogin', function(req,res){
    res.render('bankerlogin');
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
app.get('/cardstolen', function(req,res){
    res.render('cardstolen');
});
app.get('/stolenchoice', function(req,res){
    res.render('stolenchoice');
});
app.get('/cardreqs', function(req,res){
    res.render('cardreqs');
});

app.get('/creditcard', function(req,res){
    res.render('creditcard');
});

app.get('/creditcardapply', function(req,res){
    res.render('creditcardapply');
});
app.get('/closereqs', function(req,res){
    res.render('openreqs');
});
app.get('/creditcardpoint', function(req,res){
    res.render('creditcardpoint');
});

app.get('/gasbill', function(req,res){
    res.render('gasbill');
});

app.get('/glitchresponse', function(req,res){
    res.render('glitchresponse');
});

app.get('/loan', function(req,res){
    res.render('loan');
});

app.get('/loanapply', function(req,res){
    res.render('loanapply');
});
app.get('/loanreqs', function(req,res){
    res.render('loanreqs');
});

app.get('/replybanker', function(req,res){
    res.render('replybanker');
});
app.get('/replybanker', function(req,res){
    res.render('replybanker');
});
app.get('/bankerrep', function(req,res){
    res.render('bankerrep');
});
app.get('/open', function(req,res){
    res.render('open');
});

app.get('/announce', function(req,res){
    res.render('announce');
});

app.get('/opened', function(req,res){
    res.render('opened');
});
app.get('/openreqs', function(req,res){
    res.render('openreqs');
});
app.get('/closereqdone', function(req,res){
    res.render('openreqdone');
});
app.get('/cardreqdone', function(req,res){
    res.render('openreqdone');
});
app.get('/loanreqdone', function(req,res){
    res.render('openreqdone');
});
app.get('/accountreqdone', function(req,res){
    res.render('openreqdone');
});

app.get('/pay', function(req,res){
    res.render('pay');
});

app.get('/paying', function(req,res){
    res.render('paying');
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
app.get('/reminderadded', function(req,res){
    res.render('reminderadded');
});
app.get('/reminderset', function(req,res){
    res.render('reminderset');
});
app.get('/reply', function(req,res){
    res.render('reply');
});
app.get('/transfer', function(req,res){
    res.render('transfer');
});
app.get('/transferring', function(req,res){
    res.render('transferring');
});
app.get('/issue', function(req,res){
    res.render('issue');
});
app.get('/issuesent', function(req,res){
    res.render('issuesent');
});
app.get('/transandpay', function(req,res){
    res.render('transandpay');
});
app.get('/admin', function(req,res){
    res.render('admin');
});
app.get('/adminrep', function(req,res){
    res.render('adminrep');
});
app.get('/objectives', function(req,res){
    res.render('objectives');
});

app.listen(3000);