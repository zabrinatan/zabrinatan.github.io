$(document).ready(function() {
  const checkSection = function() {
    if ($("#1").hasClass("active") === false) {
      $('nav').addClass("fixnav");
      $('.tag').css('display', 'inline-block');
    } else {
      $('nav').removeClass('fixnav');
      $('.tag').hide();
    }
  }

  $(window).scroll(function() {
    scroll = $(window).scrollTop()
    if (scroll > 620 && scroll < 1322) {
      $('nav').addClass("fixnav")
      $('#2').addClass('active');
      $('#1').removeClass('active');
      $('#3').removeClass('active');
      $('#4').removeClass('active');
      $('#5').removeClass('active');
      $('.tag').css('display', 'inline-block');


    } else {
      $('nav').removeClass('fixnav')
      $('#1').addClass('active');
      $('#2').removeClass('active');
      $('#3').removeClass('active');
      $('#4').removeClass('active');
      $('#5').removeClass('active');
      $('.tag').hide();
    }

    if (scroll > 1322 && scroll < 2015) {
      $('nav').addClass("fixnav")
      $('#3').addClass('active');
      $('#2').removeClass('active');
      $('#4').removeClass('active');
      $('#5').removeClass('active');
      $('#1').removeClass('active');
      $('.tag').css('display', 'inline-block');


    } else if (scroll > 2015 && scroll < 2715) {
      $('nav').addClass("fixnav")
      $('#4').addClass('active');
      $('#3').removeClass('active');
      $('#5').removeClass('active');
      $('#2').removeClass('active');
      $('#1').removeClass('active');
      $('.tag').css('display', 'inline-block');

    } else if (scroll > 2715) {
      $('nav').addClass("fixnav")
      $('#5').addClass('active');
      $('#4').removeClass('active');
      $('#3').removeClass('active');
      $('#2').removeClass('active');
      $('#1').removeClass('active');
      $('.tag').css('display', 'inline-block');

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



  $(".portfolio-carousel").slick({
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    nextArrow: '<i class="fas fa-arrow-circle-right"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left" width="100"></i>',
    appendArrows: $('#arrow-buttons')

  })

  $("#resume").click(function() {
    window.open('https://drive.google.com/file/d/1tr5DgqpoMmqnSLdFvQW103lEejfKGmzu/view')
  })



})
