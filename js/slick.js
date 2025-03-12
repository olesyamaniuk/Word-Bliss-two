$(function () {
  $(".reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".reviews-list-left",
    nextArrow: ".reviews-list-right",
  });
});

$(function () {
  $(".features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".features-list-left",
    nextArrow: ".features-list-right",
  });
});
