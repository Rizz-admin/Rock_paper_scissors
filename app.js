//global variable to store human's choice 
var human; 
//global variable to store computer's choice
var comp;
//global variable to store winner
var winner;

// ↑↑↑ CAN ADD TO FUNC SIMULATION AND DELETE!!! ↑↑↑

//global variable to store human's score
var humscore = 0;
//global variable to store computer's score
var compscore = 0;
// global variable to store the ultimate winner
var ulwinner;



const buttons = document.querySelectorAll("button");
const div = document.querySelector("#res");
const scoreH = document.querySelector("#hum");
const scoreR = document.querySelector("#rob");

buttons.forEach(button =>{
    button.addEventListener("click", function() {
        human = button.value;
        winner = playRound(human);
        counter(winner);
        ulwinner = decWinner(humscore, compscore);
        displayRes(ulwinner);
        displayScore(humscore, compscore);
    });
});

//function of displaying results to reduce the code inside event handler
function displayRes (ulwinner){
    div.textContent = ulwinner;
}
function displayScore (argh, argr){
    scoreH.textContent = "Human:" + argh;
    scoreR.textContent = "Robot:" + argr;
}



// function of playing one round
function playRound(argh){
    comp = choice();
    winner = compare(argh,comp);
    return winner;
}

function decWinner(hscore,cscore) {
    if (hscore == 5){
        ulwinner = "human";
        return ulwinner;
    }
    else if (cscore == 5){
        ulwinner = "robot";
        return ulwinner;
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
    if (argh === 'rock' && argr === 'paper'){
        console.log('you lose! %s beats %s.', argr, argh)
        return winner = 'robot';
    }
    else if (argh === 'scissors' && argr === 'rock'){
        console.log('you lose! %s beats %s.', argr, argh)
        return winner = 'robot';
    }
    else if (argh === 'paper' && argr === 'scissors'){
        console.log('you lose! %s beats %s.', argr, argh)
        return winner = 'robot';
    } 
    else if (argh === argr){
        console.log('tie!')
        return winner = 'tie'
    }
    else {
        console.log('you win! %s beats %s.', argh, argr)
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












  



 

 

















