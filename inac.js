// $(".left").click(function(){
//   $(".reference").toggleClass("hide");
//   $(".reference").toggleClass("moveright");
//   $(".reference").removeClass("tran");
// })
// $(".right").click(function(){
//   $(".reference").toggleClass("hide");
//   $(".reference").toggleClass("moveright");
//   $(".reference").toggleClass("moveleft");
// })


$( ".left" ).click(function() {
  // console.log("1");
  $( ".reference" ).animate({
    opacity: 1,
    right: "0vw",
  }, 1000, function() {
  $(".right").removeClass("opacity")
  });
});

$( ".right" ).click(function() {
  // console.log("1");
  $( ".reference" ).animate({
    opacity: 0,
    right: "100vw",
  }, 1000, function() {
  $(".right").addClass("opacity")
  });
});

$( document ).on( "mousemove", function( event ) {
  var mousex = event.pageX;
  var mousey = event.pageY;
  var midx = 0.5* $(window).width();
  var midy = 0.5* $(window).height();
  var r1 = (mousex-midx)/midx;
  var r2 = (mousey-midy)/midy;

// g1
  var g1x = -0.3* $(window).width()-15*r1;
  var g1y = 0.05* $(window).height()-15*r2;
  $(".g1").css("left",g1x);
  $(".g1").css("top",g1y);

  var g1cx = -0.3* $(window).width()-30*r1;
  var g1cy = 0.05* $(window).height()-30*r2;
  $(".g1c").css("left",g1cx);
  $(".g1c").css("top",g1cy);

// g2
  var g2x = -0.13* $(window).width()-15*r1;
  var g2y = -0.05* $(window).height()-15*r2;
  $(".g2").css("left",g2x);
  $(".g2").css("top",g2y);

  var g2cx = -0.13* $(window).width()-30*r1;
  var g2cy = -0.05* $(window).height()-30*r2;
  $(".g2c").css("left",g2cx);
  $(".g2c").css("top",g2cy);

// g3
  var g3x = -0.12* $(window).width()-15*r1;
  var g3y = -0.28* $(window).height()-15*r2;
  $(".g3").css("left",g3x);
  $(".g3").css("top",g3y);

  var g3cx = -0.12* $(window).width()-30*r1;
  var g3cy = -0.28* $(window).height()-30*r2;
  $(".g3c").css("left",g3cx);
  $(".g3c").css("top",g3cy);

// g4
  var g4x = 0.2* $(window).width()-15*r1;
  var g4y = 0.25* $(window).height()-15*r2;
  $(".g4").css("left",g4x);
  $(".g4").css("top",g4y);

  var g4cx = 0.2* $(window).width()-30*r1;
  var g4cy = 0.25* $(window).height()-30*r2;
  $(".g4c").css("left",g4cx);
  $(".g4c").css("top",g4cy);

  // g5
    var g5x = 0.3* $(window).width()-15*r1;
    var g5y = -0.3* $(window).height()-15*r2;
    $(".g5").css("left",g5x);
    $(".g5").css("top",g5y);

    var g5cx = 0.3* $(window).width()-30*r1;
    var g5cy = -0.3* $(window).height()-30*r2;
    $(".g5c").css("left",g5cx);
    $(".g5c").css("top",g5cy);
});
