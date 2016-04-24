var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.clearCookie('username');
	console.log('logout'+req.cookies.username);
	res.redirect('/login');
	// res.render('login', { title: 'Express' });
});

module.exports = router;