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

//product-info-wrapper-slider
$(document).ready(function () {
  $(".product-info-wrapper-slider").slick({
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    
  });
});

//complete-wrapper-slider
$(document).ready(function () {
  $(".complete-wrapper-slider").slick({
    // autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
  });
});

//interested-in-slider
$(document).ready(function () {
  $(".interested-in-slider").slick({
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

//recently-viewed-slider
$(document).ready(function () {
  $(".recently-viewed-slider").slick({
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

//product-details-wrapper-slider
$(document).ready(function () {
  $(".product-details-wrapper-slider").slick({
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});


//Clothes.html
//Filters-button
//wrapper-header__button
$(function () {
  const filtersButton = document.querySelector(".wrapper-header__button");
filtersButton.addEventListener("click", function () {
  document
    .querySelector(".aside-clothes")
    .classList.toggle("aside-clothes--close");

  const initialText = "Show Filters";
  const clothesWrapper = document.querySelector(".clothes-wrapper");
  // const clothesWrapper = document.getElementById('#clothesWrapper');
  if (filtersButton.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    filtersButton.innerHTML = 'Hide Filters'
    clothesWrapper.style.gridTemplateColumns = "repeat(3,1fr)";
  } else{
    filtersButton.textContent = initialText;
    clothesWrapper.style.gridTemplateColumns = "repeat(4,1fr)";

  }
});
})


//reviews.html
//Progress line
$(function progress(){
  let elem = document.querySelector("progress-line");
  let width = 1;
  let id = setInterval()
})


//mega menu


//mega-menu-women
$(function () {
  const menu_women_button = document.querySelector(
    ".main-menu-type-clothes-women"
  );
  menu_women_button.addEventListener("click", function () {
    document
      .querySelector(".mega-menu-wrapper")
      .classList.toggle("mega-menu-wrapper--aktive");

  });
});
//mega-menu-men
$(function () {
  const menu_men_button = document.querySelector(".main-menu-type-clothes-men");
  menu_men_button.addEventListener("click", function () {
    document
      .querySelector(".mega-menu-wrapper")
      .classList.toggle("mega-menu-wrapper--aktive");

  });
});

//mega-menu-girls
$(function () {
   const menu_girls_button = document.querySelector(
     ".main-menu-type-clothes-girls"
   );
  menu_girls_button.addEventListener("click", function () {
    document
      .querySelector(".mega-menu-wrapper")
      .classList.toggle("mega-menu-wrapper--aktive");

  });
});

//mega-menu-boys
$(function () {
   const menu_boys_button = document.querySelector(
     ".main-menu-type-clothes-boys"
   );
  const mega_menu_wrapper = document.querySelector(".mega-menu-wrapper");
  menu_boys_button.addEventListener("click", function () {
    document
      .querySelector(".mega-menu-wrapper")
      .classList.toggle("mega-menu-wrapper--aktive");

  });
});



