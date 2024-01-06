let getComputerChoice = () => {
//return 'rock', 'paper', 'or scissors'
    let random = Math.floor(Math.random()*3);
    if (random === 0) 
        return 'rock';
    else if(random === 1)
        return 'paper';
    else 
        return 'scissors';
}

let getPlayerSelection = (a) => {
    let selection = prompt('(' + a + ') Enter rock, paper or scissors!')
    selection = selection.toLowerCase();

    while (! (selection === 'rock' || selection === 'paper' || selection === 'scissors'))
        selection = prompt('That was invalid, please enter rock, paper or scissors!')
    return selection;
}

let singleRound = (playerSelection, computerSelection) => {
    let result;

    if (playerSelection === computerSelection){
        result = 'Tie';
    }
    else if(playerSelection = 'rock'){
        if (computerSelection = 'scissors')
            result = 'You win! Rock beats scissors!';
        else    
            result = 'You lose! Paper beats rock!';
    }
    else if(playerSelection = 'scissors'){
        if (computerSelection = 'paper')
            result = 'You win! Scissors beats paper!';
        else
            result = 'You lose! Rock beats scissor!'; 
    }
    else{
        if(computerSelection = 'rock')
            result = 'You win! Paper beats rock!';
        else   
            result = 'You lose! Scissors beat paper!';
    }
        return result;
}

let game = () => {
    for(let i = 0; i<5; i++)
    {
        choice = getPlayerSelection(i);
        console.log(singleRound(choice,getComputerChoice()));
    }
    prompt('NICE, check the console for the results')
}

game();

const a = 'hello';
const b = 'worod';

