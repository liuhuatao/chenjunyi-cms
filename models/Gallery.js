var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Gallery.add({
	name: { type: String, required: true },
	发布日期: { type: Date, default: Date.now },
	缩略图: { type: Types.CloudinaryImage },
	图片: { type: Types.CloudinaryImages },
	描述:{type: String},
	分类: { type: Types.Relationship, ref: 'Gallery', many: true }
});

Gallery.register();
