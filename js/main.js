$(document).ready(function (){

  $('nav a').on('click', function(){

    let target  = $( this );
    var element = target.attr('href');

    $('nav a').removeClass('active');
    target.addClass('active');
    $("body, html").animate({
        scrollTop: $( element ).offset().top
      }, 1000);


  if($("#1").hasClass("active")===false){
    $('nav').addClass("fixnav");
  }else{
    $('nav').removeClass('fixnav');
  }

  })

  $('#arrow').on('click', function(){

    $("body, html").animate({
        scrollTop: $( "#section_2" ).offset().top
      }, 1000);

  })

  $('#section_3 video').mouseover(function(){
      $(this).get(0).play();
  })

  $('#section_3 video').mouseout(function(){
      $(this).get(0).pause();
  })




})
