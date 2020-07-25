$(function(){

  ////counter
  var $slider = $('.main__slider-content');

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + ' - ' + slidesCount)
    };

    $slider.on('init', function(event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  }


  $('.main__slider-content').slick({
    slidesToShow: 1,
    prevArrow: '<div class="slider-arrows slider-arrows__left" ><svg  width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10 2L3 9L10 16" stroke="#14171A" stroke-width="3"/></svg></div>',
    nextArrow: '<div class="slider-arrows slider-arrows__right" ><svg  width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10 2L3 9L10 16" stroke="#14171A" stroke-width="3"/></svg></div>',
    asNavFor: '.main__slider-dots',
    infinite: false,
    fade: true,
    appendArrows: '.arr-position',
    waitForAnimate: false,
    responsive:[
      {
        breakpoint: 601,
        settings:{
          appendArrows: '.main__slider-content'
        }
      }
    ]
  });


  $('.main__slider-dots').slick({
    slidesToShow: 3,
    prevArrow: '',
    nextArrow: '',
    asNavFor: '.main__slider-content',
    infinite: false,
    focusOnSelect: true,
    waitForAnimate: false,
    responsive:[
      {
        breakpoint: 601,
        settings:{
          centerMode:true,
          slidesToShow: 1,
          centerPadding: '0px'
        }
      }
    ]
  });


});
