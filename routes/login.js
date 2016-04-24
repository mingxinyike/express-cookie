var express = require('express');
var router = express.Router();
var crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('usecookies-cookies:' + req.cookies.username);
	console.log('session'+req.session.isVisit);
	if(req.cookies.username) { 
    	res.redirect('/welcome');
  	} 
  	else {
  		res.render('login', { title: 'Express' });
  	}
});
// router.get('/logout', function(req, res, next) {
// 	res.clearCookie('username');
// 	console.log('logout'+req.cookies.username);
// 	res.redirect('/')
// 	// res.render('login', { title: 'Express' });
// });
router.post('/', function(req, res, next) {
	  var userName = req.body.username,
  	  userPwd = req.body.userpwd;
  		
	  //生成口令的散列值
	  var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
	  var en_upwd = md5.update(userPwd).digest('hex');

	  console.log('加密后的密码:'+en_upwd);
	  res.cookie('username', userName, { maxAge: 60000 });
	  req.session.isVisit = {user:userName, password:userPwd};
	  res.redirect('/');
})
module.exports = router;

