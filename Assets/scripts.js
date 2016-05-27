var taDa = document.getElementById("#closed");
for(var i = 0; i < taDa.length; i++){
  taDa[i].addEventListener(.click, function){
    taDa.addclassName("#open");
  }
});
