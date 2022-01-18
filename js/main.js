$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Mobile navigation
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.header__nav').toggleClass('header__nav--active');

		if ( $(window).scrollTop() == 0 ) {
			$('.header').toggleClass('header--active');
		}
	});

	$('.header__nav a[data-scroll]').on('click', function() {
		$('.header__nav').toggleClass('header__nav--active');
		$('.header__btn').toggleClass('header__btn--active');
	});

	/*==============================
	Header
	==============================*/
	$(window).on('scroll', function () {
		if ( $(window).scrollTop() > 0 ) {
			$('.header').addClass('header--active');
		} else {
			$('.header').removeClass('header--active');
		}
	});
	$(window).trigger('scroll');

	/*==============================
	Parallax
	==============================*/
	if ($(window).width() > 1200) {
		if ($('#form__parallax').length) {
			var scene = document.getElementById('form__parallax');
			var parallaxInstance = new Parallax(scene);
		}

		if ($('#hero__dates').length) {
			var scene1 = document.getElementById('hero__dates');
			var parallaxInstance1 = new Parallax(scene1);
		}

		if ($('#hero__about').length) {
			var scene2 = document.getElementById('hero__about');
			var parallaxInstance2 = new Parallax(scene2);
		}

		if ($('#hero__parallax').length) {
			var scene3 = document.getElementById('hero__parallax');
			var parallaxInstance3 = new Parallax(scene3);
		}
	}

	if ($('#hero__about').length) {
		$('.hero__about-cover').each( function() {
			if ($(this).attr("data-bg")){
				$(this).css({
					'background': 'url(' + $(this).data('bg') + ')',
					'background-position': 'center center',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
			}
		});
	}

	/* fix blur for firefox */
	if ( navigator.userAgent.indexOf("Firefox") != -1 ) {
		$('.form__bg').addClass('form__bg--moz');
		$('.about__cover').addClass('about__cover--moz');
		$('.hero__about-btn').addClass('hero__about-btn--moz');
		$('.video__cover').addClass('video__cover--moz');
	}

	/*==============================
	Counter
	==============================*/
	$('.statistics__number span').counterUp({
		delay: 40,
		time: 1000
	});

	/*==============================
	Gallery
	==============================*/
	if ($('#gallery').length) {
		document.getElementById('gallery').onclick = function (event) {
			event = event || window.event
			var target = event.target || event.srcElement
			var link = target.src ? target.parentNode : target
			var options = {
				index: link,
				event: event,
				titleElement: 'h4',
				transitionDuration: 500,
				onopen: function () {
					if ($(window).width() > 1200) {
						$('body').css('padding-right', getScrollBarWidth() + "px");
						$('.header').css('padding-right', getScrollBarWidth() + "px");
					}
				},
				onclosed: function() {
					if ($(window).width() > 1200) {
						$('body').css('padding-right', 0);
						$('.header').css('padding-right', 0);
					}
				},
			}
			var links = this.getElementsByTagName('a')
			blueimp.Gallery(links, options)
		}
	}

	/*==============================
	Modal
	==============================*/
	$('.open-video, .open-map').magnificPopup({
		disableOn: 0,
		fixedContentPos: true,
		type: 'iframe',
		preloader: false,
		removalDelay: 300,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				if ($(window).width() > 1200) {
					$('.header').css('padding-right', + getScrollBarWidth() + "px");
				}
			},
			close: function() {
				if ($(window).width() > 1200) {
					$('.header').css('padding-right', 0);
				}
			}
		}
	});

	$('.open-modal').magnificPopup({
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: false,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		callbacks: {
			open: function() {
				if ($(window).width() > 1200) {
					$('.header').css('padding-right', getScrollBarWidth() + "px");
				}
			},
			close: function() {
				if ($(window).width() > 1200) {
					$('.header').css('padding-right', 0);
				}
			}
		}
	});

	$('.modal__close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	/*==============================
	Get Scrollbar Width
	==============================*/
	function getScrollBarWidth () {
		var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
		$outer.remove();
		return 100 - widthWithScroll;
	};

	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	if ($('.program__content--1').length) {
		Scrollbar.init(document.querySelector('.program__content--1'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	$('a[aria-controls="tab-2"]').on('shown.bs.tab', function (event) {
		if ($('.program__content--2').length) {
			Scrollbar.init(document.querySelector('.program__content--2'), {
				damping: 0.1,
				renderByPixels: true,
				alwaysShowTracks: true,
				continuousScrolling: true
			});
		}
	});

	$('a[aria-controls="tab-3"]').on('shown.bs.tab', function (event) {
		if ($('.program__content--3').length) {
			Scrollbar.init(document.querySelector('.program__content--3'), {
				damping: 0.1,
				renderByPixels: true,
				alwaysShowTracks: true,
				continuousScrolling: true
			});
		}
	});

	/*==============================
	Smooth Scroll
	==============================*/
	var scroll = new SmoothScroll('[data-scroll]', {
		ignore: '[data-scroll-ignore]',
		header: '.header',
		speed: 600,
		offset: 0,
		easing: 'easeInOutCubic',
		updateURL: false,
	});


});