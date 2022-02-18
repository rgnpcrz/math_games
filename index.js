

console.log(randomNumber);
var rezultati=0;
for(var i=0; i<document.querySelectorAll("td").length; i++){
  var randomNumber = Math.round(Math.random()*100);

  document.querySelectorAll("td")[i].innerHTML = randomNumber;
  rezultati = randomNumber +rezultati;

};
// var finalResult = rezultati;
document.querySelectorAll("button")[0].addEventListener("click", function(){
document.getElementById("rez").innerHTML = rezultati;
console.log(rezultati);
}
);

document.querySelectorAll("button")[1].addEventListener("click", function(){
location.reload();
}
);
