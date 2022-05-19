//Script for body lock
$(document).ready(function () {
	$(".nav-button").click(function (event) {
		$(".nav-button, .nav-mobile").toggleClass("active");
		$("body").toggleClass("lock");
	});
});

//for banner-slider
$('.banner').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: false,
});

//mobile menu tabs
$('.js-tab-trigger').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active');
	$(this).addClass('active');

	$('.js-tab-content.active').removeClass('active');
	content.addClass('active');
});

//mobile menu accordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++)
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});

// $(document).ready(function () {
// 	$(".accordion").click(function (event) {
// 		$(".accordion-icon").toggleClass("active");
// 	});
// });