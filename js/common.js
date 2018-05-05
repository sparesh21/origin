// ======Ready Function======

$(function() {
	var winW = $(window).width();
	var winH = $(window).height();
	var headrH = $('header').outerHeight();
	var footerH = $('footer').outerHeight();
	var combH = winH;

	if (winW > 1400) {
		$('.ad_h').css('min-height', winH);
	}
	$(window).resize(function() {
		var winH = $(window).height();
		if (winW > 1400) {
			$('.ad_h').css('min-height', winH);
		}
	});


	/* body  close*/
	$(".close_overlay").click(function() {
		$(this).toggleClass('show-close');
		$(".sidebar-menu .main_nav .navbar-collapse").removeClass('in');
	});
	$(".navbar-toggle").click(function() {
		$(".close_overlay").toggleClass('show-close');
	});
	/* search clone */
	var Search = $(".navbar-form").html();
	$(".search-mobile").html(Search);
	/* search clone */


	$('header').after('<div class="space_wrapper"></div>')
	$('.space_wrapper').css('height', headrH);

	$('.circle_container').css('height', combH);
	// logo change

	if (winW < 767) {
		var imgSrc = 'images/mobile_logo.jpg'
		var mobH = winH - headrH
		$('.navbar-brand img').attr('src', imgSrc);
		$('.circle_container').css('height', mobH);
		console.log(mobH);
	}

	$(".search").click(function() {
		$('.show-search').animate({
			width: 'toggle'
		});
		$(this).toggleClass('cross');
	});
	/* faqs  start */
	var selectIds = $('.panel-collapse');
	selectIds.on('show.bs.collapse hidden.bs.collapse', function() {
		$(this).prev().find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('.tab_select').on('change', function(e) {
		$('.corporate_container .nav-tabs  li a').eq($(this).val()).tab('show');
	})
	$('.panel-group .panel-default').first().find('.panel-heading').addClass("active_accordion");
	$('.collapse').on('hidden.bs.collapse', function() {
		$(this).parent().find('.panel-heading').addClass("active_accordion").removeClass("active_accordion");
	}).on('shown.bs.collapse', function() {
		$(this).parent().find('.panel-heading').addClass("active_accordion");
	});
	/* faq end  */
	/* project slider */
	$('.project-slider').slick({
		dots: true,
		infinite: true,
		arrows: true,
		dots: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: '<button type="button" class="slick-next">Next</button>',
		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		autoplaySpeed: 5000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			}, {
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		],
	});
});
/*custom file upload*/
(function($, window, document, undefined) {
	$('.inputfile').each(function() {
		var $input = $(this),
			$label = $input.next('label'),
			labelVal = $label.html();

		$input.on('change', function(e) {
			var fileName = '';

			if (this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else if (e.target.value)
				fileName = e.target.value.split('\\').pop();

			if (fileName)
				$label.find('span').html(fileName);
			else
				$label.html(labelVal);
		});

		// Firefox bug fix
		$input
			.on('focus', function() {
				$input.addClass('has-focus');
			})
			.on('blur', function() {
				$input.removeClass('has-focus');
			});
	});
})(jQuery, window, document);
/*end custom file upload*/
// ======Load Function========
$(window).load(function() {

});
// resize Function
function resize() {}