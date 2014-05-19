$(document).ready(function() {

  var oldColor = $('.goals').css('backgroundColor');
  $('.goals').hover(
    function() {
      $('div', this).animate({ opacity: 0.0 }, 'medium');
      $('p', this).animate({ opacity: 1.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(238, 238, 238, 1.0)' }, 'medium');
    },
    function() {
      $('div', this).animate({ opacity: 1.0 }, 'medium');
      $('p', this).animate({ opacity: 0.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(238, 238, 238, 0.0)' }, 'medium');
  });
  $('.operations').hover(
    function() {
      $('div', this).animate({ opacity: 0.0 }, 'medium');
      $('p', this).animate({ opacity: 1.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(238, 238, 238, 1.0)' }, 'medium');
    },
    function() {
      $('div', this).animate({ opacity: 1.0 }, 'medium');
      $('p', this).animate({ opacity: 0.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(238, 238, 238, 0.0)' }, 'medium');
  });
  $('.values').hover(
    function() {
      $('div', this).animate({ opacity: 0.0 }, 'medium');
      $('p', this).animate({ opacity: 1.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(238, 238, 238, 1.0)' }, 'medium');
    },
    function() {
      $('div', this).animate({ opacity: 1.0 }, 'medium');
      $('p', this).animate({ opacity: 0.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(238, 238, 238, 0.0)' }, 'medium');
  });
});