// JavaScript Document

	$(function () {
      
       var _li =$('.header2 .sub-menu ul').children('.js-m-3');
       _li.each(function(i, e) {
           $(this).addClass('delay0'+(i+1));
       });
      
      
	  $(".nav-btn").on("click",function(){
			$(".header2 .nav-btn").removeClass('hover');
		    $(".header2 .nav-btn").removeClass('active');
		    $(".header2 .nav-btn").children('.line1').stop(true,true).transition({rotate: 0}, 300);
		    $(".header2 .nav-btn").children('.line2').stop(true,true).fadeIn(300);
		    $(".header2 .nav-btn").children('.line3').stop(true,true).transition({rotate: 0}, 300);
		    $(".header2 .nav-btn").parent(".main-wrap").siblings('.sub-menu').stop().fadeOut();
		    $("header .list-cont").removeClass('active');
		    $("body,html").stop(true,true).removeClass('ovh-f');
		    $(".search-bg").stop(true,true).fadeOut();
		    $(".header2").removeClass('active');
		    $(".sub-menu li").removeClass("animate");

		    var target = $(this).attr('href');
	        var target_top = $(target).offset().top;
	        $('html,body').animate({
	            scrollTop : target_top
	        },600, 'easeInOutQuad');
	        return false;
		})
      
      
  $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $(".header1").addClass("active");
        }else{
            $(".header1").removeClass("active");
        }
	  })

$(".header2 .sub-menu .js-m-3").click(function () {
	$(this).children("div.sec-list").slideToggle('slow').end().find('.jt')
			.toggleClass('jtRote');
	$(this).siblings('li').children('.sec-list').slideUp('slow').end().find('.jt')
			.removeClass('jtRote');
});
		$(".search-btn").on('click', function () {
			$(".search-alert").addClass("active");
		});
		$(".search-alert .close").on('click', function () {
			$(".search-alert").removeClass("active");
		});
		indexnav();
		function indexnav() {
			$(".header1 .subnav").hover(function () {
				$(".nav").addClass("on");
				var k = $(this).index();
			}, function () {
				$(".pc-sub-nav").stop(true, false).slideUp(300);
				var k = $(this).index();
				$(".pc-sub-nav").hover(function () {
					$(".pc-sub-nav").stop(true, false).slideDown(300);
					$(".subnav").eq(k).addClass("cur").siblings(".subnav").removeClass("cur");
				}, function () {
					$(".subnav").removeClass("cur");
					$(".pc-sub-nav").stop(true, false).slideUp(300);
				});
			})
			$(".header1 .subnav2").hover(function () {
				$(this).find(".nav-sub").addClass("active").parents(".subnav2").siblings().find(".nav-sub").removeClass("active");
			}, function () {
				$(this).find(".nav-sub").removeClass("active");
			})
		}
		$(".top").click(function(){
	$("html,body").animate({scrollTop:0},500);
	
	});
	})
