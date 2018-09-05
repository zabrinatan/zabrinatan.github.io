$(document).ready(function() {
  let video = 0;


  const checkSection = function() {
    if ($("#1").hasClass("active") === false) {
      $('nav').addClass("fixnav");
    } else {
      $('nav').removeClass('fixnav');
    }

  }

  $(window).scroll(function() {
    scroll = $(window).scrollTop()
    console.log(scroll)
    if (scroll > 620 && scroll < 1322) {
      $('nav').addClass("fixnav")
      $('#2').addClass('active');
      $('#1').removeClass('active');
      $('#3').removeClass('active');
      $('#4').removeClass('active');
      $('#5').removeClass('active');

    } else {
      $('nav').removeClass('fixnav')
      $('#1').addClass('active');
      $('#2').removeClass('active');
      $('#3').removeClass('active');
      $('#4').removeClass('active');
      $('#5').removeClass('active');

    }

    if (scroll > 1322 && scroll < 2015) {
      $('nav').addClass("fixnav")
      $('#3').addClass('active');
      $('#2').removeClass('active');
      $('#4').removeClass('active');
      $('#5').removeClass('active');
      $('#1').removeClass('active');
    } else if (scroll > 2015 && scroll < 2715) {
      $('nav').addClass("fixnav")
      $('#4').addClass('active');
      $('#3').removeClass('active');
      $('#5').removeClass('active');
      $('#2').removeClass('active');
      $('#1').removeClass('active');
    } else if (scroll > 2715) {
      $('nav').addClass("fixnav")
      $('#5').addClass('active');
      $('#4').removeClass('active');
      $('#3').removeClass('active');
      $('#2').removeClass('active');
      $('#1').removeClass('active');
    }

  })


  $('nav a').on('click', function(e) {
    e.preventDefault();
    let target = $(this);
    var element = target.attr('href');

    $('nav a').removeClass('active');
    target.addClass('active');
    $("body, html").animate({
      scrollTop: $(element).offset().top
    }, 500);


    checkSection();

  })

  $('#arrow').on('click', function() {

    $("body, html").animate({
      scrollTop: $("#section_2").offset().top
    }, 500);
    $("#1").removeClass('active');
    $("#2").addClass('active');

    checkSection();



  })

  $('#section_3 video').mouseover(function() {
    $(this).get(0).play();
  })

  $('#section_3 video').mouseout(function() {
    $(this).get(0).pause();
  })


  $(".portfolio-carousel").slick({
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    nextArrow: '<i class="fas fa-arrow-circle-right"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left" width="100"></i>',
    appendArrows: $('#arrow-buttons')

  })

  $("#resume").click(function() {
    window.open('https://drive.google.com/file/d/1rcd6DzegZ7MW1hNsaC-NTaHQASl4xBVw/view')
  })



})
