let randomNumber1=Math.ceil(Math.random()*6);
let player1="dice"+randomNumber1+".png"
let player1Doc=document.querySelectorAll("img")[0].setAttribute("src",player1)

let randomNumber2=Math.ceil(Math.random()*6);
let player2="dice"+randomNumber2+".png"
let player2Doc=document.querySelectorAll("img")[1].setAttribute("src",player2)

if(randomNumber1>randomNumber2){
    document.querySelector("h3").innerHTML="Player1 wins!"
}
else if(randomNumber1<randomNumber2){
       document.querySelector("h3").innerHTML="Player2 wins!"
}
else{
    document.querySelector("h3").innerHTML="Draws"
}