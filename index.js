var express = require('express');
var app = express();

let amount = 100000;

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.get('/transfer', function (req, res) {
    var acc = parseInt(req.query.acc, 10);
    var req_amount = parseInt(req.query.amount, 10);

    amount -= req_amount;

    console.log(req_amount + ' sent to account ' + acc);
    console.log('HKN funds left: ' + amount);

    res.send(`<html><body>${req_amount} transferred to ${acc}<br>Funds left: ${amount}</body></html>`);
});

app.listen(3000, function () {
    console.log('HKN Bank listening on port 3000');
});