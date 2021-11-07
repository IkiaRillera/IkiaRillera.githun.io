$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var BottleColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + BottleColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
