/*!
 *@name     jquery.barrager.js
 *@version  1.1
 *@author   yaseng@uauc.net
 *@url      https://github.com/yaseng/jquery.barrager.js
 */
(function($) {
	$.fn.barrager = function(barrage) {
		barrage = $.extend({
			close:true,
			max: 10,
			speed: 8,
			color: '#ffffff',
		}, barrage || {});

		const time = new Date().getTime();
		const barrager_id = 'barrage_' + time;
		const id = '#' + barrager_id;
		const div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));
		const window_height = $(window).height() - 100;
		const this_height = (window_height > this.height()) ? this.height() : window_height;
		const window_width = $(window).width() + 500;
		const this_width = (window_width > this.width()) ? this.width() : window_width;
		console.log(this_height + " " + this_width)
		const bottom = Math.floor(Math.random() * this_height + 40);
		div_barrager.css("bottom", bottom + "px");
		div_barrager_box = $("<div class='barrage_box cl'></div>").appendTo(div_barrager);
		if(barrage.img){
			div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");
			const img = $("<img src='' >").appendTo(id + " .barrage_box .portrait");
			img.attr('src', barrage.img);
		}
		div_barrager_box.append(" <div class='z p'></div>");
		if(barrage.close){
			div_barrager_box.append(" <div class='close z'></div>");
		}

		const content = $("<a title='' href='' target='_blank'></a>").appendTo(id + " .barrage_box .p");
		content.attr({
			'href': barrage.href,
			'id': barrage.id
		}).empty().append(barrage.info);
		content.css('color', barrage.color);

		const i = 0;
		div_barrager.css('margin-right', 0);
		
 		$(id).animate({right:this_width},barrage.speed*1000,function()
		{
			$(id).remove();
		});
 		//鼠标悬浮暂停
		div_barrager_box.mouseover(function()
		{
		     $(id).stop(true);
		});
		//鼠标移开继续
		div_barrager_box.mouseout(function()
		{
			$(id).animate({right:this_width},barrage.speed*1000,function()
			{
				$(id).remove();
			});
 		});
		//点击关闭一个弹幕
		$(id+'.barrage .barrage_box .close').click(function()
		{
			$(id).remove();
		})
	}

	//清除所有弹幕
	$.fn.barrager.removeAll=function()
	{
		 $('.barrage').remove();
	}

})(jQuery);
