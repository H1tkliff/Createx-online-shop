//start-screen-slider
$(document).ready(function () {
    $(".start-screen-slider").slick({
      autoplay: true,
      dots: true,
    });
})


//new-arrivals-slider
$(document).ready(function () {
  $(".new-arrivals-slider").slick({
    // autoplay: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
  });
});

