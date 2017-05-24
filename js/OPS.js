(function(){

  var inScroll = false;

  function moveSection(sectionNum) {

      if(inScroll || sectionNum == (-1)) {
        return;
      };

      inScroll = true;

      var content = $('.scroll-window');

      var position = (sectionNum * -100) + '%';

      

      content.css({
        'transition': 'all 0.7s',
        'transform': 'translate(0, ' + position + ')'

      });

      setTimeout(function() {
        inScroll = false;

        $('.main-section').eq(sectionNum).addClass('section-active')
        .siblings().removeClass('section-active');


        $('.aside__link').removeClass('aside__link_active');
        $('.aside__link').eq(sectionNum).addClass('aside__link_active');
        


      }, 1000);

    }; 

  $('.wrap').on('wheel', function(e) {


    var sections = $('.main-section'),
    activeSection = sections.filter('.section-active'),
    nextSection = activeSection.next(),
    prevSection = activeSection.prev(),
    nextIndex = sections.index(nextSection),
    prevIndex = sections.index(prevSection);

//scroll

    if(e.originalEvent.deltaY > 0) {

      moveSection(nextIndex);

    }

    if(e.originalEvent.deltaY < 0) {

      moveSection(prevIndex);

    }

  });

  //menu
    $('.menu').on('click', function(e) {
      e.preventDefault();
       

      var hButton = $(this).data('id');
 
      moveSection(hButton);

    });


}());