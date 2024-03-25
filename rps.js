let getComputerChoice = () =>{
    let randomNum = Math.floor(Math.random()*3);

    if(randomNum === 0){ return 'rock'; }
    else if(randomNum === 1){ return 'scissors'; }
    return 'paper';
}

let gameLogic = (left, right) =>{
    let result;
    if (left === right)
        { result = 'tie' }
    else if((left === 'rock' && right === 'scissors') || left === 'scissors' && right === 'paper' || left === 'paper' && right ==='rock' )
        { result ='win' }
    else
        { result ='lose' }
    return result;
}

let printResultMessage = (resultMessage) =>{
    const content = document.createElement('div');
    content.textContent = resultMessage;
    results.appendChild(content);
}

let updateScore = (result) =>{
    if (result === 'win')
    { playerScore +=1; }
    else
    { computerScore +=1; }  
}

let resultMessage = (result, playerChoice, computerChoice) =>
{
    if (result === 'tie')
    { printResultMessage('tie') }
    else if(result === 'win')
    { 
        updateScore('win');
        printResultMessage('You win! '+ playerChoice + ' beats ' + computerChoice + '! ' + 'score: ' + playerScore + ' vs ' + computerScore); 
    }
    else if(result === 'lose')
    { 
        updateScore('lose');
        printResultMessage('You lose! '+ playerChoice + ' loses to ' + computerChoice + '! ' + 'score: '+ playerScore + ' vs ' + computerScore); 
    }
    else
    { console.log('send the right thing! >:(')}
}

let winOrlose = ()=>{
    if (playerScore === 5){
        printResultMessage('OMG YOURE THE VICTOR YOU GOT 5 WINS!!! The game will now reset!')
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5)
    {
        printResultMessage('damn dog u suck try again')
        playerScore = 0;
        computerScore = 0;
    }
}

let playRound = (playerChoice) =>{
    let computerChoice = getComputerChoice();
    let result = gameLogic(playerChoice,computerChoice);
    
    resultMessage(result,playerChoice,computerChoice);
    winOrlose();
}

let rock     = document.querySelector('.rock');
let paper    = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let results  = document.querySelector('.results');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click',function(){playRound('rock')})
paper.addEventListener('click',function(){playRound('paper')})
scissors.addEventListener('click',function(){playRound('scissors')})