(function(){
  var closeButton = $('.order-button_close'),
  modalForm = $('#modalForm');

  $(document).ready(function() {
    var submitButton = $('#submit');

    submitButton.on('click', function(e){
      var name = $('#username').val(),
      tel = $('#tel').val();

      if(name && tel) {
        e.preventDefault();
        $('#username').removeClass('delivery__input_required');
        $('#tel').removeClass('delivery__input_required');
        $.ajax({
          url: '/php/formHandler.php',
          method: 'post',
          data: {
              name: name
          }
        }).done(function(){
          getModalForm(closeButton, modalForm);
        });
      } else {
        $('#username').addClass('delivery__input_required');
        $('#tel').addClass('delivery__input_required');
      }
    });
  });

  function getModalForm(button, modal) {

      modal.css('display', 'flex').animate({
        opacity: '1'
      }, 300);

      button.on('click', function(e) {
        e.preventDefault();
        modal.animate({
          opacity: '0'
        }, 300, function() {
          modal.css('display', 'none');
        });;
      });
    }



}());