var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery1 = new keystone.List('Gallery1', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Gallery1.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	description:{type: String}
});

Gallery1.register();
