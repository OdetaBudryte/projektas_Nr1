$(document).ready(function(){

//to top button
if ($(window).width()<=480){
  $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('.backToTopBtn').fadeIn();
      } else {
          $('.backToTopBtn').fadeOut();
      }
  });
}

$("#backToTopBtn").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

var idleState = false;
var idleTimer = null;
    $('*').on('touchmove', function () {
        clearTimeout(idleTimer);
        if (idleState == true) {
            $(".backToTopBtn").css('visibility','visible');
        }
        idleState = false;
        idleTimer = setTimeout(function () {
    $(".backToTopBtn").css('visibility','hidden');
            idleState = true; }, 4000);
    });
    $("body").trigger("touchmove");


//navigation active
  $('a').click(function(){
    $('a').removeClass('active');
    $(this).addClass('active');
  });

//nav section change for desktops
  var navHeight = ('150');

  $('.link').click(function(e){
    var linkHref = $(this).attr('href');

    $('html').animate({
      scrollTop: $(linkHref).offset().top - navHeight
    }, 800);

    // $('html').stop(true, false);

    e.preventDefault();
  })

//fullScreenNavCont section change for mobile-tablet
  var fullNavHeight = $('nav').outerHeight();

  $('.fullNavLink').click(function(e){
    var linkHref = $(this).attr('href');

    $('html').animate({
      scrollTop: $(linkHref).offset().top - fullNavHeight
    }, 800);

    // $('html').stop(true, true);

    e.preventDefault();
  })


//chat bubble button to open full chat
  $("#bubbleChat").click(function(){
    var width = $(window).width();
    if( width >=481){
      $("#fullChatCont").css("height", "505px");
    }
    else if ( width <= 480){
      $("#fullChatCont").css("height", "100%")+$("body").css("overflow", "hidden");
    }
    $( window ).resize(function() {
      $("#fullChatCont").css("height", "0");
      });
  });

//full chat close button
  $("#closeBtn").click(function(){
    $("#fullChatCont").css("height", "0")+$("body").css("overflow", "visible");
  });

//on textare focus change attach files to send image
$("#chatTextArea").focusin(function(){
  $("#sendPaperPlane").css("display", "block") + $("#attachFiles").css("display", "none");
});
$("#chatTextArea").focusout(function(){
  $("#sendPaperPlane").css("display", "none") + $("#attachFiles").css("display", "block");
});

//mobile-tablet full nav overlay
  $("#burgerHolderId").click(function(){
    $("#fullScreenNavContId").css("height", "100%");
    $("body").css("overflow", "hidden");
  });

  $("#closeBtnCube").click(function(){
    $("#fullScreenNavContId").css("height", "0%");
    $("body").css("overflow", "visible");
  });

//mobile-tablet press on fullNavavItem to close and jump into section
  $(".fullNavLink").click(function(){
    $("#fullScreenNavContId").css("height", "0%")+ $("#fullScreenNavContId").css('transition', '0.3s')+$("body").css("overflow", "visible");
  });


//fixes for browsers

//internet Explorer date input
  if ( $('[type="date"]').prop('type') != 'date' ) {
    //need to be fixed
    $('[type="date"]').datepicker();
    $('[type="date"]').attr('placeholder','yyyy-mm-dd');
  }

});
