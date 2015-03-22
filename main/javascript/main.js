$(function(){
	var topic_cover = $('.topic-cover'),topic_image = $('.topic-image'),topic = $('.topic');
	topic.hover(function(){
		var index = $(this).index();
		topic_image.eq(index).stop().animate({height : 120 + '%',width : 120+'%',marginTop : -5 + '%',marginLeft : -5 + '%'}, 500);
		topic_cover.eq(index).stop().fadeIn();
		
		
		console.log(index);
	},function(){
		var index = $(this).index();
		topic_image.eq(index).stop().animate({height : 100 + '%',width : 100+'%',marginTop : 0 + '%',marginLeft : 0 + '%'}, 500);
		topic_cover.eq(index).stop().fadeOut();	
	});
	var workbox = $('.box-work'),playArrow = $('.mark-play'),em = 'em';
	workbox.hover(function(){
		var index = $(this).index();
		$(this).stop().animate({height : 16.4 + em,marginTop : -1 + em,width : 25.3 + em,marginLeft : 2.1833333333333 + em},100,function(){
			playArrow.eq(index).fadeIn();
		});

	},function(){
		var index = $(this).index();
		
		playArrow.eq(index).stop().fadeOut('fast');
		$(this).stop().delay('fast').animate({height : 15.4 + em,marginTop : 0 + em,width : 23.3 + em,marginLeft : 3.1833333333333 + em},'fast');
		
	});
	var secTopArray = [];
	var moveFlag = false;
	var allHeight = $('body').outerHeight();
	var bgImg = ['bg1.jpg','bg1.jpg','bg1.jpg','bg1.jpg','bg1.jpg','bg1.jpg','bg1.jpg','bg1.jpg','bg1.jpg'];
	$('.event-main').each(function(i){
		secTopArray[i] = $(this).offset().top;
	});
	var current = -1;
	$(window).scroll(function(){
		for(var i  secTopArray.length - 1; i >= 0; i--){
			if($(window).scrollTop() > secTopArray[i] - 100){
				changeBg(i);
				break;
			}
		}
	});
	function changeBg(secNum){
		if( secNum != current && moveFlag == false){
			$('#bg' + current).fadeOut(500,function(){
				$(this).remove();
			});
			$('#wrap').append('<div id="bg' + secNum + '"></div>');
			$('#bg' + secNum).height(allHeight).css('display','none').fadeIn(500);
			current = secNum;
		}
	}
});