
/**
 * 
 */

;(function(window, document, $, undefined) {
  'use strict';

  var $form = $('#subscribe'),
      $subscribed = $('#subscribed');

  function afterSubmition() {
    $form.fadeOut(350, function() {
      $subscribed.fadeIn(250);
    });
  };

  $form.ajaxForm({
    success: afterSubmition,
    error: afterSubmition
  })

})(window, document, jQuery);
