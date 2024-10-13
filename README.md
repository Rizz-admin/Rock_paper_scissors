# Rock_paper_scissors

function of getting input () 
{
    getting prompt from the human and return value of input
    if no value is given return prompt 
    if value is not equal to items return prompt

}

create global variable to store human's choice

create global variable to store computer's choice

create global variable to store human's score

create global variable to store computer's score

function of computer's choice 
{
    var rand = (math.random() + 1) * 100
    if rand <= 32:
        return: comp's choice = rock;
    if rand > 32 and rand <= 65: 
        return: comp's choice =  paper;
    else: 
        return: comp's choice =  scissors;
}


function of comparing choices (human's choice; robots choice)
{
    if human(rock) and computer(paper):
        return: robot is winner;

    if human(scissors) and computer(rock):
        return: computer is winner;
    
    if human(paper) and computer(scissors):
        return: computer is winner;
    
    else: 
        return: human is winner;
}

function of counting wins 
{   
    if winner === robot: 
        robot's score + 1;
    else: 
    human's score + 1;
}



function of simulation 
{
    while scores < 5 
    {
        invoke functions: 
            get input 
            computer's choice 
            comparing choice 
            count of wins
    }
    if computer score > human score 
        {
            ultimate_winner = computer
        } else {
            ultimate_winner = human
        }
    return ultimate winner
}

function of declaring the winner 
{
    if com
}

function of com

function of printing the winner








// //function of simulation of 5 wins
function simulation()
{
    console.log(humscore)
    console.log(compscore)
   // if number of wins < 5
   while (humscore < 5 && compscore < 5)
   {
        human = get_input();
        comp = choice()
        winner = compare(human, comp)
        counter(winner)
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

