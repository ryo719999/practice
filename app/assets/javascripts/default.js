/**
 * 画面高さサイズ調整
 */
$(document).ready(function () {
	setSectionHeight();
});
$(window).resize(function (){
	setSectionHeight();
});
function setSectionHeight(){
	var size = $(window).height();
	$(".section_top").css("height", size + "px");
}

/**
 * copyright
 */
function getCopyRight()
{
	var new_year = new Date();
	return document.write('- ' + new_year.getFullYear() + ' ');
}
