console.log("got some js")
const app = angular.module('MyApp', []);

app.controller('MyController', [function() {
	this.msg ="test msg from the controllerrrr"
}])