$(".header-expand-bio").on('click', function() {
  const moreText = "(...More Information)";
  const hideText = "(Hide Information...)";
  $(this).html($(this).html() === moreText ? hideText : moreText);
  $(".header-expanded-bio, .header-details").toggleClass("header-hide");
  $(".header-expanded-bio, .header-details").toggleClass("header-show");
})

$(".work li a").mousemove(function(e) {
  $(this).find("img").css("top",e.clientY+50+"px").css("left",e.clientX+200+"px");
})
