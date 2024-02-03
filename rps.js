let getComputerChoice = () =>{
    let randomNum = Math.floor(Math.random()*3);

    if(randomNum === 0){ return 'rock'; }
    else if(randomNum === 1){ return 'scissors'; }
    return 'paper';
}

let resultMessage = (result, playerChoice, computerChoice) =>
{
    if (result === 'tie')
    { console.log('Tie!!') }
    else if(result === 'win')
    { console.log('You win! '+ playerChoice + ' beats ' + computerChoice + '!'); }
    else if(result === 'lose')
    { console.log('You lose! '+ computerChoice + ' beats ' + playerChoice + '!'); }
    else
    { console.log('send the right thing! >:(')}
}

let gameLogic = (left, right) =>{
    if (left === right)
        { return 'tie' }
    else if((left === 'rock' && right === 'scissors') || left === 'scissors' && right === 'paper' || left === 'paper' && right ==='rock' )
        { return 'win' }
    else
        { return 'lose' }
}

let singleRound=(playerChoice, computerChoice) =>{
    return gameLogic(playerChoice,computerChoice);
}

let getPlayerChoice = () =>
{
    let playerChoice = prompt('enter rock paper or scissors');
    playerChoice = playerChoice.toLowerCase();
    while(!(playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper'))
    {
        playerChoice = prompt('eehh enter rock paper or scissors or be here forever! You entered: ' + playerChoice)      
    }
    return playerChoice;
}

let playerChoice = getPlayerChoice;

let game =(playerChoice,computerChoice)=>
{
    for (let round = 1; round <= 1; round++)
    {
        computerChoice = getComputerChoice();
        resultMessage(gameLogic(playerChoice,computerChoice), playerChoice,computerChoice)
    }
}



let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let newPlayerChoice =(choice)=>
{playerChoice = choice;}

rock.addEventListener('click',newPlayerChoice('rock'));
paper.addEventListener('click',newPlayerChoice('paper'));
scissors.addEventListener('click',newPlayerChoice('scissors'));
console.log(playerChoice);