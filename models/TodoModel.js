const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	description: String,
	complete: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;