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

$(document).ready(function () {
	$("#slick-slide-control02").click(function (event) {
		$("#slick-slide-control00, #slick-slide-control01, #slick-slide-control02, #slick-slide-control03").toggleClass("active");
	});
});

$('.popular-slider').slick({
	mobileFirst: true,
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
	]
});

$(document).ready(function () {
	$(".filter-size").click(function (event) {
		$(".filter-size, .filter-size-options").toggleClass("active");

	});
});

$(document).ready(function () {
	$(".filter-price").click(function (event) {
		$(".filter-price, .filter-price-options").toggleClass("active");

	});
});

$(document).ready(function () {
	$(".filter-color").click(function (event) {
		$(".filter-color, .filter-color-options").toggleClass("active");

	});
});

$(document).ready(function () {
	$(".filter-brand").click(function (event) {
		$(".filter-brand, .filter-brand-options").toggleClass("active");

	});
});