var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'works';

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'))
		.then(function (err, results, next) {
			if (err) return next(err);
			console.log(results);
			next();
		});

	// Render the view
	view.render('works');
};
