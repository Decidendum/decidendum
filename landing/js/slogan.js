
/**
 * 
 */
$(function() {
  
  var $attribute = $('#attribute'),
      i = 0,
      words = [
        'simple',
        'fast',
        'fun',
        'collaborative',
        'easy'
      ];

  setInterval(function() {
    i = (++i == words.length) ? 0 : i;

    $attribute.animate({
      'opacity': 0
    }, 200, function() {
      $attribute.text(words[i]).animate({
        'opacity': 1
      }, 200);
    });

  }, 3000);

});