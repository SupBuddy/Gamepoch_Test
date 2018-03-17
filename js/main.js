var w,h;
function getSrceenWH(){
	w = $(window).width();
	h = $(window).height();
	$('#dialogBg').width(w).height(h);
}

window.onresize = function(){  
	getSrceenWH();
}  
$(window).resize(); 

$(function(){
	getSrceenWH();
	
	// 显示弹窗
	$('#signInBtn').click(function(){
		$('#dialogBg').fadeIn(300);
		$('#dialog').removeAttr('class').addClass('animated bounceIn bg01').fadeIn();
	});
	
	// 关闭弹窗
	$('.closeIco').click(function(){
		$('#dialogBg').fadeOut(300,function(){
			$('#dialog').addClass('bounceOutUp').fadeOut();
		});
	});

	// 点击签到按钮
	$('.dialogBtn').click(function(){
		$(this).fadeOut();
		$('#dialog').css(
			"background-image", "url(img/bg02.png)"
		);
		$('.dialogTitle').attr("src","img/签到成功.png");
		$('.success').fadeIn(300);
	});
});

$('#dialogBg,#dialog').bind("touchmove",function(e){
e.preventDefault();
});