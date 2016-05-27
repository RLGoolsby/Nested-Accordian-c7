var tada = document.getElementsByClassName("Food");
for(var i = 0; i < tada.length; i++){
   tada[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("visible");

  });
}
