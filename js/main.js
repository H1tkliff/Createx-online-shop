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



//trending-slider
$(document).ready(function () {
  $(".trending-slider").slick({
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});


//sale slider
$(document).ready(function () {
  $(".sale-slider").slick({
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});



