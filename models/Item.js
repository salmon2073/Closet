var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Item = new keystone.List('Item', {
    autokey: { path: 'slug', from: '名前', unique: true },
    map: { name: '名前' },
    defaultSort: '登録日'
});
 
Item.add({
    名前: { type: String, initial: true, required: true },
    登録日: { type: Date, default: Date.now, noedit: true},
    画像: {type: String },
    カテゴリ: { type: Types.Relationship, ref: 'Category' },
    柄: {type: String},
    カラー: {type: String},
    ショップ: { type: String},
    メモ: { type: Types.Textarea},
    春: {type: Types.Boolean},
    夏: {type: Types.Boolean},
    秋: {type: Types.Boolean},
    冬: {type: Types.Boolean},
});
 
Item.defaultColumns = '名前, カテゴリ|20%, 登録日, メモ|15%'
Item.register();