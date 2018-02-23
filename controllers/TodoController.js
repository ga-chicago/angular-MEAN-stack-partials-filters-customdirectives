const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel.js');

router.get('/', (req, res) => {
	Todo.find({}, (err, foundTodos) => {
		res.json(foundTodos)
	})
})

router.post('/', (req, res) => {
	console.log(req.body);
	Todo.create(req.body, (err, createdTodo) => {
		res.json(createdTodo);	
	})
})

router.delete('/:id', (req, res) => {
	Todo.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
		res.json(deletedTodo)
	})
});

router.put('/:id', (req, res) => {
	Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTodo) => {
		res.json(updatedTodo)
	})
})

module.exports = router;