var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.redirect('/dogs.html');
});

app.listen(3010, function () {
    console.log('Exploit listening on port 3010');
})