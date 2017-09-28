$(function(){
	var select = false;
	var allPrice = 0;
	var checkedShops = 0;
	// 商品数量-+
	$('input').prop('checked',true);
	$('.minus').click(function(){
		allPrice = 0;
		var i = $(this).siblings('span').text();
		i--;
		if(i<=1){
			i=1;
		}
		$(this).siblings('span').text(i);
		unNum($(this),i);
		price();
		num();
	});
	$('.prep').click(function(){
		allPrice = 0;
		var i = $(this).siblings('span').text();
		i++;
		$(this).siblings('span').text(i);
		unNum($(this),i);
		price();
		num();
	});
	function unNum(num,i){
		// 单价
		var univalent = num.parent().parent().prev().children('p').children('span').text();
		// 小结
		var univalentNum = num.parent().parent().next().children('b').children('span').text();
		univalentNum = (univalent * i).toFixed(2);
		num.parent().parent().next().children('b').children('span').text(univalentNum);
	}
	// 总价
	price();
	function price(){
		allPrice = 0;
		var sLength = $('.xuanShops:checked').length;
		for(var j=0;j<sLength;j++){
			var danPrice = $('.xuanShops:checked').eq(j).parent().children('.something-3-2-1-5').children('b').children('.shopPrice').text();
			allPrice += Number(danPrice);
		}
		$('.allPrice').text(allPrice.toFixed(2));
	}
	// 多选框，变价格
	$('.xuanShops').click(function(){
		if($('.xuanShops').length>$('.xuanShops:checked').length){
			$('label input').prop('checked',false);
			select = true;
		}else{
			$('label input').prop('checked',true);
			select = false;
		}
		price();
		num();
	});
	// 单个商品删除
	$('.delete').click(function(){
		var shan = $(this).parent().parent().parent().parent().parent();
		var fruit= confirm('您确定要放弃这个心仪已久的商品吗？');
		if(fruit){
			shan.remove();
			num();
			price();
		}
	})
	// 全选
	$('label input').click(function(){
		if($('.xuanShops').length==0){
			alert('购物车内已经没有商品了，去商城逛逛吧！');
			return false;
		}
		if(select){
			allPrice = 0;
			price();
			$('input').prop('checked',true);
			select = false;
		}else{
			$('.allPrice').text('0.00');
			$('input').prop('checked',false);
			select = true;
		}
		num();
		price();
	});
	// 返回顶部
	$('#rightBotTop').click(function () {
        $('html,body').animate({scrollTop:0},400);
    });
	// 吸底
	Xi();
	window.onscroll = function (){
		Xi();
	}
	function Xi(){
		var openTop =$('#guess').position().top;
		var Top =$(window).scrollTop()+$(window).height();
		if(Top<=openTop){
			$('#suckDown').css({
				'position':'fixed',
				'bottom':'0px',
				'margin':'0px',
				'box-shadow':'0 -5px 10px 0 #ededed'
			});
			$('.something-4').css({
				'border':'0',
			})
		}else{
			$('#suckDown').css({
				'position':'relative',
				'bottom':'0px',
				'margin':'-80px 0 30px',
				'box-shadow':'0 0 0 0 #fff'
			});
			$('.something-4').css({
				'border':'1px solid #F0F0F0'
			})
		}
	}
	// 删除选中
	$('#deleteAll').click(function(){
		if($('.xuanShops:checked').length==0){
			alert('您还没有选择商品！')
			return;
		}
		var fruit= confirm('您确定不让某人来“删除”这些梦寐以求的商品吗？');
		if(!fruit){
			return;
		}
		// 取消全选
		$('label input').prop('checked',false);
		select = true;
		var shan = $('.xuanShops:checked').parents('.something-3-21,.something-3-20');
		shan.remove();
		allPrice = 0;
		price();
		Xi();
		num();
	});
	// 选中商品数量
	num();
	function num(){
		checkedShops = 0
		var checkedLength = $('.xuanShops:checked').length;
		for(var i=0;i<checkedLength;i++){
			var shuLiang = $('.xuanShops:checked').eq(i).parent().children('.something-3-2-1-4').children('div').children('span').text();
			checkedShops += parseInt(shuLiang);
		}
		$('.something-4-2-2>span').text(checkedShops);
	}


});