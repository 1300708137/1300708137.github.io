$(function(){
	$(".dh_left ul li").hover(function(){
		$(this).find(".ej").stop(false).slideDown();
	},function(){
		$(this).find(".ej").stop(false).slideUp();
	})
})