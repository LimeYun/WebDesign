$(function(){
    // 메뉴
    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 팝업
    $("#popup").on("click", function(){
        $(".popup").show()
    })
    $(".button").on("click", function(){
        $(".popup").hide()
    })

    // 가로 슬라이드
    // let index = 0
    // const speed = 500
    // const time = 3000
    // const $slide = $(".slide")
    // const count  = $(".slide").length
    // const $container = $(".slide-container")
    // const size = $slide.width();
    // $container.width(size * count)
    // setInterval(function(){
    //     index = (index + 1) % count
    //     $container.animate({
    //         left: -index * size
    //     }, speed)
    // }, time)


    // let index = 0
    // const speed = 500
    // const time = 3000
    // const $slide = $(".slide")
    // const count = $slide.length
    // const $container = $(".slide-container")
    // const size = $slide.height( )
    // $container.height(size * count)
    // setInterval(function(){
    //     index = (index + 1) % count
    //     $container.animate({
    //         top: -index * size
    //     }, speed)
    // }, time)

    // const speed = 500
    // const time = 3000
    // const $slide = $(".slide")
    // const count = $slide.length
    // const $container = $(".slide-container")
    // const size = $slide.height()
    // $container.height(size * count)
    // setInterval(function(){
    //     $container.animate({
    //         top: -size
    //     }, speed, function(){
    //         $container.css("top", "0")
    //         $container.append($(".slide").first())
    //     })
    // }, time)

    // const speed = 500
    // const time = 3000
    // const $slide = $(".slide")
    // const count  = $slide.length
    // const $container = $(".slide-container")
    // const size = $slide.height()
    // $container.height(size * count)
    // setInterval(function(){
    //     $container.animate({
    //         top: -size
    //     }, speed, function(){
    //         $container.css("top", "0")
    //         $container.append($(".slide").first())
    //     })
    // }, time)

    // const speed = 500
    // const time = 3000
    // const $slide = $(".slide")
    // const count = $slide.length
    // const $container = $(".slide-container")
    // const size = $slide.height()
    // $container.height(size * count)
    // setInterval(function(){
    //     $container.animate({
    //         top: -size
    //     }, speed, function(){
    //         $container.css("top", "0")
    //         $container.append($(".slide").first())
    //     })
    // }, time)

    // const speed = 500
    // const time = 3000
    // const $slide = $(".slide")
    // const count = $slide.length
    // const $container = $(".slide-container")
    // const size = $slide.width()
    // $container.width(size * count)
    // setInterval(function(){
    //     $container.animate({
    //         left: -size
    //     }, speed, function(){
    //         $container.css("left", "0")
    //         $container.append($(".slide").first())
    //     })
    // }, time)

    let index = 0
    const speed = 500
    const time = 3000
    const $slide = $(".slide")
    const count  = $slide.length
    $slide.not(":first").hide()
    setInterval(function(){
        index  = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time)
})