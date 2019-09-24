$('.d-firstNav').click(function() {
    dropSwift($(this), '.d-firstDrop');
});
$('.d-secondNav').click(function() {
    dropSwift($(this), '.d-secondDrop');
});
/**
 * @param dom   點擊的當前元素
 * @param drop  處理的下拉菜單
 */
function dropSwift(dom, drop) {
  dom.next().slideToggle();
  dom.parent().siblings().find('.icon-leftSel').removeClass('iconRotate');
  dom.parent().siblings().find(drop).slideUp();
  var iconChevron = dom.find('.icon-leftSel');
  if (iconChevron.hasClass('iconRotate')) {
      iconChevron.removeClass('iconRotate');
  } else {
      iconChevron.addClass('iconRotate');
  }
}
//当前菜单状态
$(".d-firstDrop li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
//二级当前状态
$("li.LevelOneNav").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})

//管理员
$(".ahl_TopSel").click(function(){
	$(".ahlTopSel_Main").slideToggle();

	var ahlTopSelIcon = $(this).find("i");
	if (ahlTopSelIcon.hasClass('ahlTopRotate')) {
		ahlTopSelIcon.removeClass('ahlTopRotate');
	} else {
		ahlTopSelIcon.addClass('ahlTopRotate');
	}
})

//Tab菜单切换
function llqTab(clickObj,objClass){
	$(clickObj).click(function(){
		$(this).addClass(objClass).siblings().removeClass(objClass);
	})
}
llqTab(".appMenuManagement ul li","active");


