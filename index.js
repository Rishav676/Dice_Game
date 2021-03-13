var a= prompt("Enter First Player Name");//player 1 name enter
var b= prompt("Enter Second Player Name");//player 2 name enter

var randomNumber1=Math.floor(Math.random()*6 )+ 1;

var randomDiceImage ="images/dice" +randomNumber1+".png";

// var randomImageSource="images/"+ randomDiceImage;

var image1= document.querySelectorAll("img")[0];

//image1.setAttribute("src",randomImageSource);
image1.setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice" +randomNumber2+".png";
var randomImageSource2="images/" +randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩" + a + " "+"Win!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "🚩"+b +" " +"Win!";
    
}
else{
    document.querySelector("h1").innerHTML= "DRAW";

}

// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//   }
//   else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }
  
