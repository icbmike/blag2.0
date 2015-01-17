var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: String,
	content: String,
	date: { type: Date, default: Date.now }
});

schema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

module.exports = schema;