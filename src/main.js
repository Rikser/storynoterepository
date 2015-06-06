app.controller('mainController', function($rootScope, $scope, $location, $http) {

	/**
	 * Changing the focus on the menu
	 */
	var optionClicked = function (event) {
    	$(".nav.navbar-nav").find("li").removeClass("active");
    	$(this).parent().addClass("active");
    	//$(".navbar-toggle").trigger('click');
    };
    $("#beginner").click(optionClicked);
    $("#intermediate").click(optionClicked);
    $("#advanced").click(optionClicked);
    $("#home").click(function(){
    	$(".nav.navbar-nav").find("li").removeClass("active");
    	//$(".navbar-toggle").trigger('click');
    });



    $scope.body = {
    	title: "This is a new project that will impact on the education of musical notation for children.",
    	comment: "Join us if you are interested"
    };

});