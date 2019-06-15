var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req, res) {
	res.render('index');
});

router.get('/sfa', function(req, res){
	res.render('sfa');
});

router.get('/mp', function(req, res){
	res.render('mp');
});

router.get('/gallery', function(req, res){
	res.render('gallery');
});

module.exports = router;
