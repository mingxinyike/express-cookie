var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log('usecookies-cookies:' + req.cookies.username);
	console.log('session'+req.session.isVisit);
	if (req.cookies.username) {
		res.render('welcome', { name: req.cookies.username,title: 'express'});
	} 
	else {
		res.redirect('/login');
	}
});

// router.post('/', function(req, res, next) {
// 	var color = req.body.lovecolor,
//   	  number = req.body.lovenumber;
//   	req.session.isvalid  = true;
//   	req.session.color  = color;
//   	req.session.number = number;
//   	res.isvalid = req.session.isvalid;
//   	// console.log('welcome'+res.session.isvalid);
//   	console.log("post"+color+number);
//   	res.redirect('/welcome');
// })
module.exports = router;