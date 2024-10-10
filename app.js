
//global variable to store human's choice
var human = prompt("Enter rock or paper or scissor"); 
//global variable to store computer's choice
var comp = choice();

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

//function of checking and converting human's input
function input (arg1)
{
    //convert anycase to lowercase
    let result = arg1.toLowerCase();
    //compare input with available choices 
    if (result === 'rock' || result === 'paper' || result === 'scissors') {
        return result;
    }
    //if no match: ask for another try
    else { 
        console.log('Wrong spelling. Try again!')
    }
}

//function of comparing choices (human's choice; robots choice)
function compare(argh, argr)
{
    let winner = undefined;
    if (argh === 'rock' && argr === 'paper'){
        return winner = 'robot';
    }
    else if (argh === 'scissors' && argr === 'rock'){
        return winner = 'robot';
    }
    else if (argh === 'paper' && argr === 'scissorss'){
        return winner = 'robot';
    } 
    else if (argh === argr){
        return winner = 'tie'
    }
    else {
        return winner = 'human';
    }
}


