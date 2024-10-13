
//global variable to store human's choice 
var human; 
//global variable to store computer's choice
var comp;
//global variable to store winner
let winner;

// ↑↑↑ CAN ADD TO FUNC SIMULATION AND DELETE!!! ↑↑↑

//global variable to store human's score
var humscore = 0;
//global variable to store computer's score
var compscore = 0;

var ulwinner;

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
function choice()
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
        console.log('You lose! %s beats %s.', argr, argh)
        return winner = 'robot';
    }
    else if (argh === 'scissors' && argr === 'rock'){
        console.log('You lose! %s beats %s.', argr, argh)
        return winner = 'robot';
    }
    else if (argh === 'paper' && argr === 'scissors'){
        console.log('You lose! %s beats %s.', argr, argh)
        return winner = 'robot';
    } 
    else if (argh === argr){
        return winner = 'tie'
    }
    else {
        console.log('You win! %s beats %s.', argh, argr)
        return winner = 'human';
    }
}

//function of counting wins 
function counter(argw)
{
    if (argw === 'robot'){
        compscore = compscore + 1;
        return compscore;
    }
    else if (argw === 'human'){
        humscore = humscore + 1;
        return humscore;
    }
    else if (argw === 'tie'){
        return; 
    }
}

//function of simulation 
function simulation()
{
    while (compscore < 5 && humscore < 5)
    {
        human = get_input();
        comp = choice();
        winner = compare(human, comp);
        counter(winner);
    }
    if (compscore > humscore) {
        ulwinner = 'computer';
        return ulwinner;
    }
    else {
        ulwinner = 'human';
        return ulwinner;
    }
}

simulation()

