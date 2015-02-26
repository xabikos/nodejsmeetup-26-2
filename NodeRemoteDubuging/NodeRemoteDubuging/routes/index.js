var express = require('express');
var router = express.Router();

function test(req, res) {
    var url = req.url;
};

/* GET home page. */
router.get('/', function (req, res) {
    test(req, res);
    res.render('index', { title: 'Express' });
});

module.exports = router;