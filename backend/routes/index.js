module.exports = function(app){
	app.get('/',function(req, res){
		res.render('index', {title: 'home'});
	});
	app.get('/home',function(req, res){
		res.render('index', {title: 'home'});
	});
};


