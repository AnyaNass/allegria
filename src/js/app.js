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

//banner dots
$(document).ready(function () {
	$("#slick-slide-control02").click(function (event) {
		$("#slick-slide-control00, #slick-slide-control01, #slick-slide-control02, #slick-slide-control03").toggleClass("active");
	});
});

//main page slider
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


//all women goods page filters
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

//all women goods page button "more goods"
$(document).ready(function () {
	$(".more-goods").click(function (event) {
		$(".goods-list-hidden, .more-goods").toggleClass("active");
	});
});

//Script for filters mobile
$(document).ready(function () {
	$(".filters-button").click(function (event) {
		$(".filters-mobile-menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
});

$(document).ready(function () {
	$(".sort-button").click(function (event) {
		$(".sort-mobile-menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
});


//goods card page, similar goods slider
$('.similar-goods-slider').slick({
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
	]
});

$(document).ready(function () {
	$("#paymentAndDelivery, .modal-payment-and-delivery-cloce-btn").click(function (event) {
		$(".modal-payment-and-delivery").toggleClass("active");
	});
});

$(document).ready(function () {
	$("#returnAndExchange, .modal-return-and-exchange-cloce-btn").click(function (event) {
		$(".modal-return-and-exchange").toggleClass("active");
	});
});