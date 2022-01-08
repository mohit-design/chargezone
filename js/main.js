$(function() {
  $(".burger-menu").click(function() {
		$(".fixed-navbar-menu").toggleClass("active");
		$(".menu-listing").toggleClass("active");
		$("body").toggleClass("active");
	});
});