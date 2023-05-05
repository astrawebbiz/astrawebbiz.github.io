$(document).ready(function() {

	$('.header-search-btn').click(function() {
		$('.header-search-form').toggleClass('active');
	});
	$('.header-search-close').click(function() {
		$('.header-search-form').removeClass('active');
	});

	$('.header-mnu-item').hover(function(){
		$(this).children('.header-mnu-drop').stop(false, true).fadeIn(300);
	}, function(){
		$(this).children('.header-mnu-drop').stop(false, true).fadeOut(300);
	});

	$('.toggle-nav').click(function() {
		$('body').toggleClass('mnu-active');
		$(this).toggleClass('active');
		$('.mnu-wrapper').toggleClass('active');
	});

	$('.mnu-item').click(function() {
		$(this).addClass('active');
	});
	$('.mnu-title').click(function(e) {
		e.stopPropagation();
		$(this).parents('.mnu-item').removeClass('active');
	});

	$('.main-orders-item-quantity-minus').click(function () {
		var $input = $(this).parents('.main-orders-item-quantity').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.main-orders-item-quantity-plus').click(function () {
		var $input = $(this).parents('.main-orders-item-quantity').find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.scrollbar-inner').scrollbar();

	$('.header-cart').click(function() {
		$('.main-orders').toggleClass('active');
	});
	$('.main-orders-continue').click(function() {
		$('.main-orders').removeClass('active');
	});
	$('.main').click(function() {
		$('.main-orders').removeClass('active');
	});
	$(document).mouseup(function (e){
		var block = $('.main-orders');
		if (!block.is(e.target) && block.has(e.target).length === 0){
			block.removeClass('active');
		}
	});

	var mainSlider = new Swiper('.main-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	$('.products-item-wishlist').click(function() {
		$(this).toggleClass('active');
	});

	var productsOther = new Swiper('.products-other-slider', {
		slidesPerView: 2,
		spaceBetween: 7,
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
			},
		}
	});

	$('[data-fancybox]').fancybox({
		buttons: [
		"close"
		],
	});

	var windowWidth = $(window).width();
	if(windowWidth < 768){
		var cardPhotos = new Swiper('.card-photos', {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
		});
	}

	$('.card-moreinfo-item-title').click(function () {
		$(this).toggleClass('active').next().slideToggle();
		$('.card-moreinfo-item-title').not(this).removeClass('active').next().slideUp();
	});

	$('.card-wishlist').click(function() {
		$(this).toggleClass('active');
	});

	var onmodelSlider = new Swiper('.onmodel-slider', {
		slidesPerView: 2,
		spaceBetween: 7,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 13,
			},
		}
	});

	$('.cart-item-delete').click(function() {
		$(this).parents('.cart-item').hide();
	});

	var windowWidth = $(window).width();
	if(windowWidth > 768){
		$('.account-tabs-nav-item').on('click', function() {
			$(this).addClass('active').siblings().removeClass('active').closest('.account').find('.account-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
		});
	}

	var windowWidth = $(window).width();
	if(windowWidth < 768){
		$('.account-orders').removeClass('active');

		$('.account-orders-open').click(function() {
			$('.account-orders').toggleClass('active');
		});
		$('.account-orders-title').click(function() {
			$(this).parents('.account-orders').removeClass('active');
		});

		$('.account-data-open').click(function() {
			$('.account-data').toggleClass('active');
		});
		$('.account-data-title').click(function() {
			$(this).parents('.account-data').removeClass('active');
		});

		$('.account-address-open').click(function() {
			$('.account-address').toggleClass('active');
		});
		$('.account-address-title').click(function() {
			$(this).parents('.account-address').removeClass('active');
		});

		$('.account-wishlist-open').click(function() {
			$('.account-wishlist').toggleClass('active');
		});
		$('.account-wishlist-title').click(function() {
			$(this).parents('.account-wishlist').removeClass('active');
		});

		$('.account-pass-open').click(function() {
			$('.account-pass').toggleClass('active');
		});
		$('.account-pass-title').click(function() {
			$(this).parents('.account-pass').removeClass('active');
		});
	}

	$('select').styler();

	$('.account-orders-item-open').click(function() {
		$(this).parents('.account-orders-item').toggleClass('active');
		$(this).next().slideToggle();
	});
	$('.account-orders-detail-close').click(function() {
		$(this).parents('.account-orders-item').removeClass('active');
		$(this).parents('.account-orders-detail').slideUp();
	});

	$('.account-address-add').click(function () {
		$('.account-address-items').slideUp();
		$(this).slideUp().next('.account-address-add-form').slideToggle();
	});

});
