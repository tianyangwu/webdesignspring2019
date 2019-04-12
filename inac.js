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
  }, 2000, function() {
  $(".right").removeClass("opacity")
  });
});

$( ".right" ).click(function() {
  // console.log("1");
  $( ".reference" ).animate({
    opacity: 0,
    right: "100vw",
  }, 2000, function() {
  $(".right").addClass("opacity")
  });
});

var xx = event.pageX;
var yy = event.pageY;

var X = $('.g1').offset().top;
var Y = $('.g1').offset().left;
console.log("X","Y");
