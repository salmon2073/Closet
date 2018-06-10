var keystone = require('keystone');
 
var Category = new keystone.List('Category', {
    autokey: { path: 'slug', from: 'cat_id', unique: true },
    map: { name: '名前'},
    defaultSort: 'catId'
});

Category.add({
    名前: { type: String, initial: true},
    catId: {type: String},
});
 
Category.defaultColumns = '名前, catId'
Category.register();