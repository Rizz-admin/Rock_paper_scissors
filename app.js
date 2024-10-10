
//global variable to store human's choice
var human = get_input(); 
//global variable to store computer's choice
var comp = choice();

//global variable to store human's score
var humscore;
//global variable to store computer's score
var compscore;

//global variable to store winner
let winner = compare(human, comp);

//function of getting input
function get_input() 
{
    let input = prompt('Enter rock, paper or scissors');
    if (input === 'rock' || input === 'paper' || input === 'scissors'){
        return input;
    }
    else if (input == '') {
        alert('No value. Please enter something.');
        return;
    }
    else {
        alert('Incorrect spelling. Please check spelling.');
        return;
    }
}

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
    else if (result == undefined){
        bre
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


