let playerChoice;
let result;
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
    { console.log('You lose! '+ playerChoice + ' loses to ' + computerChoice + '!'); }
    else
    { console.log('send the right thing! >:(')}
}

let gameLogic = (left, right) =>{
    if (left === right)
        { result = 'tie' }
    else if((left === 'rock' && right === 'scissors') || left === 'scissors' && right === 'paper' || left === 'paper' && right ==='rock' )
        { result ='win' }
    else
        { result ='lose' }
    return result;
}

let playRound = (playerChoice) =>{
    let computerChoice = getComputerChoice();
    let result = gameLogic(playerChoice,computerChoice);

    resultMessage(result,playerChoice,computerChoice);
}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

rock.addEventListener('click',function(){playRound('rock')})
paper.addEventListener('click',function(){playRound('paper')})
scissors.addEventListener('click',function(){playRound('scissors')})
