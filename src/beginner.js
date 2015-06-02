app.controller('beginnerController', function($rootScope, $scope, $location, $http) {
	function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	    //alert("Dropped");
	    var sound = document.body.getElementsByTagName("audio")[0];
	    sound.play();
	}


});
