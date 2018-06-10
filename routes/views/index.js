var keystone = require('keystone');
Item = keystone.list('Item');
Category = keystone.list('Category');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	Item.model.find().populate('カテゴリ').sort({名前: 1, 柄: 1}).exec(function(err, data) {
		locals.items = data;
		Category.model.find().sort('catId').exec(function(err, data) {
			locals.categories = data;
			view.render('index');
		});
	});
};
