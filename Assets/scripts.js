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


// var gomez = document.querySelector("Old-school");
// var edith= document.querySelector("Old-school");
// var skipper = document.querySelector("Old-school");
// var spock = document.querySelector("Old-school");
// var maude = document.querySelector("Old-school");




// var articleOne.style.display = "none";
// var articleTwo.style.display = "none";
// var articleThree.style.display = "none";
// var articleFour.style.display = "none";


// gomez.addEventListener("click", function);
// if( === "") {}
//   else{}
//     alert("Hi, " + gomez.value);
// });
//
// edith.addEventListener("click", function);
// if ( === "") {}
//   else{
//     alert ("Hi, " + edith.value);
//   }
//
// skipper.addEventListener("click", function);
//   if ( === "") {}
//     else{
//       alert ("Hi, " + skipper.value);
//     }
// spock.addEventListener("click", function);
//     if ( === "") {}
//       else{
//         alert ("Hi, " + spock.value);
//       }
// maude.addEventListener("click", function);
//       if ( === "") {}
//         else{
//           alert ("Hi, " + maude.value);
//         }
