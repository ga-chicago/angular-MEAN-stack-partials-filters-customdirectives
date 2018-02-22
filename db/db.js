const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meancrud')

mongoose.connection.on('connected', () => {
	console.log("connected to mongoose")	
})

mongoose.connection.on('disconnected', () => {
  console.log("mongodb is disconnected")
})

mongoose.connection.on('error', (error) => {
  console.log("There was an error with mongo ", error)
})