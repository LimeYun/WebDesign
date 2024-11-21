$(function(){
  $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
    })

    let index = 0
    const speed = 500
    const time = 3000
    const $slide = $(".slide")
    const count = $(".slide").length
    $slide.not(":first").hide()
    setInterval(function(){
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time)

    $("#btn-notice").on("click", function(){
        $("#content-gallery").hide()
        $("#content-notice").show()
        $("#btn-notice").parent().removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function(){
        $("#content-notice").hide()
        $("#content-gallery").show()
        $("#btn-notice").parent().removeClass("active")
        $(this).parent().addClass("active")
    })

    $("#popup").on("click", function(){
        $(".popup").show()
    })
    $(".button").on("click", function(){
        $(".popup").hide()
    })
})