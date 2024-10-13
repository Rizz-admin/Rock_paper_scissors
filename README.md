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






