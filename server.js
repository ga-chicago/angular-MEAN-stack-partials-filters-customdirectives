const express = require('express');
const app = express();


app.get('*', (req, res) => {
	res.send("This is an API buddy.  What are you trying to do?")
})

app.listen(3000, () => {
	console.log("listening on port " + 3000)
})