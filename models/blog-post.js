var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
	title: String,
	content: String,
	date: { type: Date, default: Date.now }
});