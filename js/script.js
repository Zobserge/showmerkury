

/*Нельзя перетаскивать картинки */
$("img").mousedown(function () {
	return false;
});


/*Скрол-шапка + Кнопка наверх */
$(window).scroll(function () {

	if ($(this).scrollTop() > 60) {
		$('.main-header').addClass('fixed');
		$('.header-button').addClass('dnone');
		$('.header-logo').addClass('mini-logo');
		$('.burger-menu').addClass('height-menu');
	} else {
		$('.main-header').removeClass('fixed');
		$('.header-button').removeClass('dnone');
		$('.header-logo').removeClass('mini-logo');
		$('.burger-menu').removeClass('height-menu');


	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 80) {
		$('.arrow-top').addClass('arrow-top_scroll');
	} else {
		$('.arrow-top').removeClass('arrow-top_scroll');
	}
});


/*Плавный скрол вверх*/
var t;
function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -150);
		t = setTimeout('up()', 20);
	} else clearTimeout(t);
	return false;
}

$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 600);
	});
});




/*Гамбургер меню*/
(function () {
	$('.burger-menu').on('click', function () {
		$('.hamburger-menu').toggleClass('animate');
	})
})();

$(document).ready(function () {
	$('.burger-menu').click(function () {
		$(this).toggleClass('act');
		if ($(this).hasClass('act')) {
			$('.mainMenu').addClass('act');
			$('.m-container').addClass('dblock');
		}
		else {
			$('.mainMenu').removeClass('act');
			$('.m-container').removeClass('dblock');

		}
	});
});

$('.m-container').on('click', function (event) {
	if ($(event.target).is('.m-container') || $(event.target).is('.mainMenu')) {
		event.preventDefault();
		$('.burger-menu').removeClass('act');
		$('.mainMenu').removeClass('act');
		$('.hamburger-menu').removeClass('animate');
		$('.m-container').removeClass('dblock');

	}
});


$(document).keyup(function (event) {
	if (event.which == '27') {
		$('.burger-menu').removeClass('act');
		$('.mainMenu').removeClass('act');
		$('.hamburger-menu').removeClass('animate');
		$('.m-container').removeClass('dblock');
	}
});


/*Popup*/
jQuery(document).ready(function ($) {
	//open popup
	$('.btn-popup').on('click', function (event) {
		event.preventDefault();
		$('body').addClass('active');
		$('.popup').addClass('is-visible');
	});

	//close popup
	$('.popup').on('click', function (event) {
		if ($(event.target).is('.popup-close ') || $(event.target).is('.popup')) {
			event.preventDefault();
			$('body').removeClass('active');
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function (event) {
		if (event.which == '27') {
			$('.popup').removeClass('is-visible');
		}
	});
});


/*Popup*/
jQuery(document).ready(function ($) {
	//open popup
	$('.btn-login').on('click', function (event) {
		event.preventDefault();
		$('body').addClass('active');
		$('.popup-login').addClass('is-visible');
	});

	//close popup
	$('.popup-login').on('click', function (event) {
		if ($(event.target).is('.popup-close') || $(event.target).is('.popup-login')) {
			event.preventDefault();
			$('body').removeClass('active');
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function (event) {
		if (event.which == '27') {
			$('.popup-login').removeClass('is-visible');
		}
	});
});


[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
	  img.removeAttribute('data-src');
	};
  });

