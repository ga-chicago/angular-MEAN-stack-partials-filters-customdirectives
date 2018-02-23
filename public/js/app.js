console.log("got some js")
const app = angular.module('MyApp', []);

// added the $http service
app.controller('MyController', ['$http', function($http) {
	this.msg ="test msg from the controllerrrr"
	this.complete = false;
	const controller = this;

	this.createTodo = function() {

		// grab a promise
		const makeAjaxCreateCall = $http({
			method: 'POST',
			url: '/todo', // 'todos'
			data: {
				description: this.description,
				complete: this.complete
			}
		})

		// how to resolve the promise 
		makeAjaxCreateCall.then(function(res) {
			// console.log(res.data);
			// console.log(this)
			controller.description = '';
			controller.complete = false
		}, function(error) {
			console.error(error)
		})

	}

	this.getTodos = function() {
		$http({
			method: 'GET', 
			url: '/todo' // todos
		}).then(function(res) {
			console.log(res.data)//<--
			controller.todos = res.data
		}, function(err) {
			console.error(err)
		})
	}
	this.getTodos() // run funcction aimmediately 



}])