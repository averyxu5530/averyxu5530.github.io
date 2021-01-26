document.querySelector("#findFact").f1.addEventListener("click",showfact1); 

function showfact1(){
	document.querySelector("#showFacts").innerHTML = "Koalas have fingerprints <br> <img src='images/koala.jpg' alt='Koala'>";
}

document.querySelector("#findFact").f2.addEventListener("click",showfact2); 

function showfact2(){
	document.querySelector("#showFacts").innerHTML = "Water makes different pouring sounds depending on its temperature <br> <img src='images/water.jpg' alt='Water'>";
}

document.querySelector("#findFact").f3.addEventListener("click",showfact3); 

function showfact3(){
	document.querySelector("#showFacts").innerHTML = "You lose up to 30 percent of your taste buds during flight <br> <img src='images/AirplaneFood.jpg' alt='AirplaneFood'>";
}

document.querySelector("#findFact").f4.addEventListener("click",showfact4); 

function showfact4(){
	document.querySelector("#showFacts").innerHTML = "Rabbits can't puke <br> <img src='images/Rabbit.jpg' alt='Rabbit'>"
}

document.querySelector("#findFact").f5.addEventListener("click",showfact5); 

function showfact5(){
	document.querySelector("#showFacts").innerHTML = 'The English word with the most definitions is "set" <br> <img src="images/Dictionary.jpg" alt="Dictionary">';
}