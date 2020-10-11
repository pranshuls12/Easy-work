
  $(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
         centeredSlides: false,
         nextButton: '.swiper-prev',
        prevButton: '.swiper-next',
        loop: true,
        breakpoints: {
          768: {
             slidesPerView: 2,
             centeredSlides: false,
              spaceBetween: 30
          },
           550: {
             centeredSlides: true,
             slidesPerView: 2,
             initialSlide: 1,
             spaceBetween: 30
          },
          420: {
            slidesPerView: 2,
            centeredSlides: true,
             spaceBetween: 50
          },
          380: {
            slidesPerView: 2,
            centeredSlides: false,
             spaceBetween: 200
          }
        }
      });

	    $('.next').on('click', function(e) {
	    	console.log(swiper, swiper.realIndex);
		  e.preventDefault();
		  swiper.slideTo(swiper.activeIndex+1, 1500);
		});
		$('.prev').on('click', function(e) {
			console.log(swiper.realIndex);
		  e.preventDefault();
		  swiper.slideTo(swiper.activeIndex-1, 1500);
		});

     });  
