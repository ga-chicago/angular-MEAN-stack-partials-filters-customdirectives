const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel.js');

router.get('/', (req, res) => {
	res.send('todo controller')
})

router.post('/', (req, res) => {
	Todo.create(req.body, (err, createdTodo) => {
		res.json(createdTodo);	
	})
})

module.exports = router;