//modal icons
(function() {
  $(document).ready(function() {

function getModal(button1, button2, modal) {


  button1.on('click', function(e) {
    e.preventDefault();
    modal.css('display', 'flex').animate({
      opacity: '1'
    }, 300);
  });

  button2.on('click', function(e) {
    e.preventDefault();
    modal.animate({
      opacity: '0'
    }, 300, function() {
      modal.css('display', 'none');
    });;
  });
}

getModal($('.feedback__btn'), $('#closeFeedback'), $('#modalFeedback'))

})
}());


//accordion

(function(){
  $(document).ready(function() {

    var links = $('.team__member');

    links.on('click', function(e) {
      e.preventDefault();

      var targetLink = $(this);

      if(targetLink.hasClass('team__member_active')) {

        targetLink.removeClass('team__member_active');

      } else {

        links.removeClass('team__member_active');
        targetLink.addClass('team__member_active');

      }

    })

  })
}());


//slider

(function() {
  $(document).ready(function() {

      var nextBtn = $('.slider__btn-right'),
      prevBtn = $('.slider__btn-left'),
      slider = $('.slider'),
      sliderImages = slider.find('.slider_images'),
      items = slider.find('.slider__item'),
      activeItem = items.filter('.active'),
      activeIndex = items.index(activeItem),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      flag;

      
      function toSlide(targetItem) {

        var targetIndex = items.index(targetItem); 
        
        if(flag && targetIndex==(-1)) {
          targetIndex = 0;
        }

        if(!flag && targetIndex==(-1)) {
          targetIndex = 2;
        }
        sliderImages.animate({
          left: -targetIndex * 100 + '%'
        }, function() {
          items.removeClass('active');
          items.eq(targetIndex).addClass('active'),
          nextItem = $('.slider').find('.slider__item').filter('.active').next();
          prevItem = $('.slider').find('.slider__item').filter('.active').prev();
        })
      }



      nextBtn.on('click', function(e) {
        e.preventDefault();
        flag = true;

        toSlide(nextItem);
        
      })

      prevBtn.on('click', function(e) {
        e.preventDefault();
        flag = false;

        toSlide(prevItem);
       
    })

})
}());

//vertical accordion

(function(){
  $(document).ready(function() {

    var links = $('.accord__link'),
    items = $('.accord__item');

    links.on('click', function(e) {
      e.preventDefault();

      var targetLink = $(this);

      if(targetLink.closest('.accord__item').hasClass('accord__item_active')) {

        targetLink.closest('.accord__item').removeClass('accord__item_active');

      } else {

        items.removeClass('accord__item_active');
        targetLink.closest('.accord__item').addClass('accord__item_active');

      }

    })

  })
}());

