console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller('hangmanCtrl', hangmanCtrl);
var newGame;
function hangmanCtrl () {
	var vm = this;

	vm.newGame= new HangmanGame('elephant', 7);
	vm.guessLetter = function() {
		vm.newGame.guess(vm.guess);
		vm.guess = '';
	}

	console.log(vm.newGame);

	};
