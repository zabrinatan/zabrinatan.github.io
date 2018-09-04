$(document).ready(function (){

  $('nav a').on('click', function(){

    let target  = $( this );
    var element = target.attr('href');

    $('nav a').removeClass('active');
    target.addClass('active');
    $("body, html").animate({
        scrollTop: $( element ).offset().top
      }, 1000);

  })



})
