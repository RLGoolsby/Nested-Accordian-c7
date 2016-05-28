var tada = document.getElementsByClassName("Old-school");

for(var i = 0; i < tada.length; i++){
   tada[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("visible");
    this.firstElementChild.classList.toggle("hide-right-arrow");
    this.lastElementChild.classList.toggle("show-down-arrow");
  });
}

/******           IDEAS        ***/

// $('div[id^="module-tab-"]').click(function(){
//          $(this).next('.hi').toggleClass("left-image right-image");
//     });

// $('#open-close-toggle').on("click", function(){
//     var $arrows = $(this).find("img");
//     $('#toggle-section').slideToggle(function(){
//         $arrows.toggle();
//     });
// });
