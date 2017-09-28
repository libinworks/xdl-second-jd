$(function(){
	// 选择商品类型
	$('#selectClass>li>div>a').click(function(){
		var fuwenben = $(this).parent().prev().text();
		var wenben = $(this).text();
		$(this).parent().parent().slideUp();
		$('#selectShops>span').last().before('<a href="javascript:;" class="hong"><span>'+fuwenben+wenben+'</span><b>×</b></a><span>></span>');
		$('#selectShops>.hong').click(function(){
			var have = $(this).children().eq(0).text().split('：')[0]+'：';
			var has = $('#selectClass>li>span:contains('+have+')').parent();
			has.slideDown();
			$(this).next().fadeOut('200').remove();
			$(this).fadeOut('200').remove();
		});
	});
	// 高级选项
	$('.selectHide>a').click(function(){
		var fuwenben = $(this).parent().parent().children().eq(0).children().eq(0).text();
		var wenben = $(this).text();
		$(this).parent().parent().fadeOut('200');
		$('#selectShops>span').last().before('<a href="javascript:;" class="hong"><span>'+fuwenben+'：'+wenben+'</span><b>×</b></a><span>></span>');
		$('#selectShops>.hong').click(function(){
			var have = $(this).children().eq(0).text().split('：')[0];
			var has = $('#gaoji>div>div>span>span:contains('+have+')').parent().parent();
			has.fadeIn('200');
			$(this).next().fadeOut('200').remove();
			$(this).fadeOut('200').remove();
		});
	});











});



