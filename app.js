
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

var ultimatewinner;

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
        return winner = 'robot';
    }
    else if (argh === 'scissors' && argr === 'rock'){
        return winner = 'robot';
    }
    else if (argh === 'paper' && argr === 'scissors'){
        return winner = 'robot';
    } 
    else if (argh === argr){
        return winner = 'tie'
    }
    else {
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
//function of simulation of 5 wins
function simulation()
{
    console.log(humscore)
    console.log(compscore)
   // if number of wins < 5
   if (humscore < 5 && compscore < 5)
   {
        human = get_input();
        comp = choice()
        winner = compare(human, comp)
        counter(winner)
        simulation()
   }
   else if (humscore == 5)
   {
    return 'human'
   }
   else if (compscore == 5)
   {
    return 'computer'
   }
   
}

ultimatewinner = simulation()

console.log(ultimatewinner)



