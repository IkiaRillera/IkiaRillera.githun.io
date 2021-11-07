$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var MaskColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + MaskColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
