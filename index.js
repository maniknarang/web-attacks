var express = require('express');
var cors = require('cors');
var app = express();

let amount = 100000;

app.use(express.static('.'));
var trustedOrigins = ['http://localhost:3000', 'http://index.lvh.me:3000/'];
app.use(cors({
    origin: function(origin, callback) {
        if (!origin) return callback(null, true);
        if (trustedOrigins.indexOf(origin) === -1) {
            return callback(new Error('DOOMED!!!'), false);
        }
        return callback(null, true);
    }
}));

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