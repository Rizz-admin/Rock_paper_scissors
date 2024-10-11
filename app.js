
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
    let temp = input.toLowerCase();
    if (temp === 'rock' || temp === 'paper' || temp === 'scissors'){
        return temp;
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


