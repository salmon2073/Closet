var keystone = require('keystone');
Item = keystone.list('Item');
Category = keystone.list('Category');
var seasons = {
	spring: "春",
	summer: "夏",
	autumn: "秋",
	winter: "冬",
}

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	season = seasons[req.params.season]
	var locals = res.locals;
	locals.items = new Array()

	getCategories()
	.then(getItems)
	.then(function(items){
		locals.items = items
		view.render('coordinate');
	})
};

async function getCategories(){
	var cats = []
	await Category.model.find({}, 'id').sort('catId').exec(function(err, result){
		cats = result
	})
	return cats
}

async function getItems(cats) {
	var items = []
	for(idx in cats) {
		await getItemsCount(cats[idx])
		.then(async function(count){
			i = Math.floor(Math.random() * count)
			await getRandomItem(cats[idx], i).then(function(item){
				items.push(item)
			})
		})
	}

	return items
}

// あるカテゴリのアイテム数を取得
async function getItemsCount(cat) {
	var count;
	await Item.model.find({'カテゴリ': cat, [season]: true}).count().exec(function (err, result) {
		count = result
	})
	return count
}

async function getRandomItem(cat, random) {
	var item;
	await Item.model.findOne({'カテゴリ': cat, [season]: true}).populate('カテゴリ').skip(random).exec(function (err, result) {
		item = result
	})
	return item
}