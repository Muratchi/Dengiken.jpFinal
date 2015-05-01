$(function(){
	var topic_cover = $('.topic-cover'),topic_image = $('.topic-image'),topic = $('.topic');
	var workbox = $('.box-work'),playArrow = $('.mark-play'),em = 'em';
	workbox.hover(function(){
		var index = $(this).index();
		playArrow.eq(index).stop().fadeIn();

	},function(){
		var index = $(this).index();	
		playArrow.eq(index).stop().fadeOut('fast');
	});
});