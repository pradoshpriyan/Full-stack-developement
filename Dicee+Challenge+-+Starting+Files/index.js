const dice1 = Math.floor(Math.random() * 6) + 1;
const dice2 = Math.floor(Math.random() * 6) + 1;

const diceimage1 = "images/dice"+ dice1 + ".png";
const diceimage2 = "images/dice"+ dice2 + ".png";

document.querySelector(".img1").setAttribute("src", diceimage1);
document.querySelector(".img2").setAttribute("src", diceimage2);

if(dice1 > dice2)
{
    document.querySelector("h1").innerHTML = " Player 1 Wins!";
}
else if(dice2 > dice1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}