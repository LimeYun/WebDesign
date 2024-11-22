$(function(){
  // 메뉴 슬라이드
  $(".main, .sub").on("mouseover", function(){
    $(".sub").stop().fadeIn()
    // $(".sub").stop().slideDown()
})
$(".main, .sub").on("mouseout", function(){
    $(".sub").stop().fadeOut()
    // $(".sub").stop().slideUp()
})

  // let index  = 0
  // const speed = 500
  // const time = 3000
  // const $slide = $(".slide")
  // const count  = $slide.length
  // $slide.not(":first").hide()
  // setInterval(function(){
  //   index  = (index + 1) % count
  //   $slide.fadeOut(speed)
  //   $slide.eq(index).fadeIn(speed)
  // }, time)
})