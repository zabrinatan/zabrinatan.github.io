$(document).ready(function (){
  const checkSection = function(){
    if($("#1").hasClass("active")===false){
      $('nav').addClass("fixnav");
    }else{
      $('nav').removeClass('fixnav');
    }

  }

  $(window).scroll(function(){
    scroll =  $(window).scrollTop()
    if(scroll > 620) {
      $('nav').addClass("fixnav")
    }else{
      $('nav').removeClass('fixnav')
    }

  })


  $('nav a').on('click', function(e){
      e.preventDefault();
    let target  = $( this );
    var element = target.attr('href');

    $('nav a').removeClass('active');
    target.addClass('active');
    $("body, html").animate({
        scrollTop: $( element ).offset().top
      }, 1000);


      checkSection();

  })

  $('#arrow').on('click', function(){

    $("body, html").animate({
        scrollTop: $( "#section_2" ).offset().top
      }, 1000);
      $("#1").removeClass('active');
      $("#2").addClass('active');

      checkSection();


  })

  $('#section_3 video').mouseover(function(){
      $(this).get(0).play();
  })

  $('#section_3 video').mouseout(function(){
      $(this).get(0).pause();
  })




})
