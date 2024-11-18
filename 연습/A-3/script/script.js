$(function() {
    $(".main-menu").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
    })
})