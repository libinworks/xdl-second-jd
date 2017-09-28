$(function(){
	// 放大镜
	$('#show').mousemove(function(e){
		$('#move,#bigPic').show();
		var newLeft = e.pageX - $('#show').offset().left - $('#move').width()/2;
		var newTop = e.pageY - $('#show').offset().top - $('#move').height()/2;
		if(newLeft >= ($('#show').width()-$('#move').width())){
			newLeft =  $('#show').width()-$('#move').width()
		}
		if(newLeft<=0){
			newLeft = 0;
		}
		if(newTop >= ($('#show').height()-$('#move').height())){
			newTop =  $('#show').height()-$('#move').height()
		}
		if(newTop<=0){
			newTop = 0;
		}
		$('#move').css({
			left : newLeft,
			top : newTop
		});
		var newImgLeft = -$('#bigImg').width()*newLeft / $('#show').width();
		var newImgTop = -$('#bigImg').height()*newTop / $('#show').height();
		$('#bigImg').css({
			left : newImgLeft,
			top : newImgTop
		});
	}).mouseout(function(){
		$('#move,#bigPic').hide();
	});
	$('.bigleft-1 img').mouseover(function(){
		$('#smallPic').attr('src',$(this).attr('src'));
		$('#bigImg').attr('src',$(this).attr('src'));
		$(this).addClass('imgBorder').parent().siblings().children('img').removeClass('imgBorder');
	});
	// 放大镜下面壳选图片
	$('#btnRight').click(function(){
		var left1 = $('.bigleft-1>ul').position().left;
		if(left1<=-116){
			return;
		}
		$('.bigleft-1>ul').animate({
			left:left1-58
		},400);
	});
	$('#btnLeft').click(function(){
		var left1 = $('.bigleft-1>ul').position().left;
		if(left1>=0){
			return;
		}
		$('.bigleft-1>ul').animate({
			left:left1+58
		},400);
		
	});
	// 返回顶部
	$('#rightBotTop').click(function () {
        $('html,body').animate({scrollTop:0},800);
    });
	// 选项卡
	$('#bosshead li').click(function(){
		var index = $(this).index();
		$(this).addClass('suckUp').siblings().removeClass('suckUp');
		$('.bossshow>ul').eq(index).addClass('shopsShow').siblings().removeClass('shopsShow');
	});
	$('.bosshead li').click(function(){
		var index = $(this).index();
		$(this).addClass('suckUp').siblings().removeClass('suckUp');
		$('.describerightbot>div').eq(index).addClass('shopsShow').siblings().removeClass('shopsShow');
	});
	// 吸顶
	window.onscroll = function (){
		var openTop = $('#describe').position().top;
		var Left = $('#suckUp').offset().left;
		var Top = $('#suckUp').offset().top-$(window).scrollTop();
		if(Top<=0){
			$('#suckUp').css({
				'position':'fixed',
				'top':'0',
				'left':Left
			});
		}
		if($(window).scrollTop()<openTop){
			$('#suckUp').css({
				'position':'absolute',
				'top':'0',
				'left':'0'
			});
		}
	}
	// 选择商品数量
	$('.bigcenter-4-6-1-2').click(function(){
		var num = parseInt($('.bigcenter-4-6-1-1').text());
		num++;
		$('.bigcenter-4-6-1-1').text(num);
	});
	$('.bigcenter-4-6-1-3').click(function(){
		var num = parseInt($('.bigcenter-4-6-1-1').text());
		num--;
		if(num<=1){
			num = 1;
		}
		$('.bigcenter-4-6-1-1').text(num);
	});

});