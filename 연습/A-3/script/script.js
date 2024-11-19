$(function(){

    // 메뉴 마우스오버
    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 페이드 슬라이드
    let index = 0
    const speed = 500
    const time = 3000
    const $slide = $(".slide")
    const count = $(".slide").length
    $slide.not(":first").hide()
    setInterval(function(){
        index = (index + 1) % count
        $slide.fadeOut(speed).hide()
        $slide.eq(index).fadeIn(speed)
    }, time)
})