$(document).ready(function () {
    // 상단 네비 부분
    $(".sub_nav").css({ display: "none" });

    $(".nav").mouseover(function () {
        $(".sub_nav").css({ display: "block" },500);
        $(".nav").addClass("on");
    });
    //$(".nav").mouseleave(function () {
    //    $(".sub_nav").css({ display: "none" },1000000);
    //    $(".nav").removeClass("on");
    //});
    $(".sub_nav").mouseover(function () {
        $(".nav").addClass("on");
    });
    $(".sub_nav").mouseleave(function () {
        $(".sub_nav").css({ display: "none" },500);
        $(".nav").removeClass("on");
    });
    

    // 갤러리부분
    $(function() {
        $(".main_gallery .jCarouselLite").jCarouselLite({
            btnNext: ".main_gallery .next",		//다음버튼
            btnPrev: ".main_gallery .prev",		//이전버튼
            auto: 1000,				//자동스크롤
            speed: 800,				//움직임속도
            scroll: 1,				//움직이는 갯수
            vertical: false,		//가로세로
            mouseWheel: true,		//마우스 휠사용	 , mousewhell.min.js 파일 필요함.
            visible: 5,				//보여줄 갯수
            circular: true			//싸이클 여부
        });
    });
});