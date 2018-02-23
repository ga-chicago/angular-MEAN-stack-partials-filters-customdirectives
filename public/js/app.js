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
			controller.getTodos()
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

			//add a property to each todo for showing editor
			controller.todos = controller.todos.map((todo, i) => {
				todo.editing = false;
				return todo				
			})

			console.log(controller.todos)

		}, function(err) {
			console.error(err)
		})
	}//IIFE
	this.getTodos() // run funcction aimmediately 

	this.updateTodo = function(todo, toggling) {

		if(toggling) todo.complete = !todo.complete;

		$http({
			method: 'PUT',
			url: '/todo/' + todo._id,
			data: {
				description: todo.description,
				complete: todo.complete
			}
		}).then(function(res) {
			controller.getTodos()
		}, function(err) {
			console.error(err)
		})

	}

	this.showEditor = function(todo) {
		todo.editing = true;
	}

	this.deleteTodo = function(todo) {
		$http({
			method: 'DELETE',
			url: '/todo/' + todo._id
		}).then(function() {
			controller.getTodos()
		}, function(err) {})
	}

}])


app.controller('FilterCtrl', [function() {
	this.text1 = 'TEXT 1 is great i like cats';
	this.text2 = "My Description";
	this.date = new Date().getTime();
	this.products = [
		{
			name: 'product1',
			price: 5
		},
		{
			name: 'product2',
			price: 4
		},
		{
			name: 'product3',
			price: 10
		}
	]

}])


app.controller('PartialController', [function() {

	this.includePath = 'partials/partial1.html';
	this.changeInclude = function() {
		//if i'm looking at p1
		if(this.includePath==='partials/partial1.html') 
			this.includePath = 'partials/partial2.html'
		else this.includePath = 'partials/partial1.html'

	}

}])

// making our own directive
app.directive('productCat', function() {
	return {
		restrict: 'E', // E=element, A=attribute, C=class, M=comment, you can combine these
		templateUrl: 'partials/product-title.html', // this template will replace directive element
		controller: function() { //constructor function
			this.name = "this text specified in controller of custom directive 'producTitle'"
		},
		controllerAs: 'title' // how it should be instantiated (i.e. Controller as title)
	}
})

