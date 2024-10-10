
//global variable to store human's choice
var human = prompt("Enter rock or paper or scissor"); 
//global variable to store computer's choice
var comp;

//global variable to store human's score
var humscore;
//global variable to store computer's score
var compscore;

//function of computer's choice 
function choice ()
{
    var rand = Number(Math.floor((Math.random() * 100) + 1))
    if (rand <= 32) {
        return comp = 'rock';
    }
    if (rand > 32 && rand <= 65) {
        return comp = 'paper';
    } 
    else {
        return comp = 'scissors';
    }
}
