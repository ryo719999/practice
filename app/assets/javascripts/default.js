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
