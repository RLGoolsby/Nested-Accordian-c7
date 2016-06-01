// $(document).ready(function(){
//   var tada=$(".Old-school");
//
//     $.each(tada, function(i, ".Old-school"){
//       console.log("Yes " + tada[i]);
//       var active = ()
//     });
//
// });
//

/****  save for later ***/
// $("#card").flip('toggle');
/*****************************/
// $(".Old-school").click(function(){
//   $("#1").toggle();
//   $("#2").toggle();// $("#TV-guide-2").toggle();
//   $("#3").toggle();
//   $("#4").toggle();
//   $("#5").toggle();
// });


$(".Old-school").click(function(){
    $(this).next().toggle();
    $("i", this).toggleClass("hide-right-arrow");// $(this).toggle(".hide-right-arrow");
    $("i", this).last().toggleClass("show-down-arrow");
  });




/***  Second Attempt  ****/

// $(document).ready(function(){
//
//   $( ".Old-school" ).accordion({
//     event: "click"
//
//
//     var event =$(".Old-school").accordion(".visible", "event");
//     $(".Old-school").accordion(".visible","active");
//
//       var collapsible =$(".Old-school").accordion("option", "collapsible");
//     $(".Old-school").accordion(".visible","active", true);
// });
// });
