let getComputerChoice = () =>{
    let randomNum = Math.floor(Math.random()*3);

    if(randomNum === 0){ return 'rock'; }
    else if(randomNum === 1){ return 'scissors'; }
    return 'paper';
}

let resultMessage = (result, playerChoice, computerChoice) =>
{
    if (result === 'tie')
    { printResult('tie') }
    else if(result === 'win')
    { printResult('You win! '+ playerChoice + ' beats ' + computerChoice + '!'); }
    else if(result === 'lose')
    { printResult('You lose! '+ playerChoice + ' loses to ' + computerChoice + '!'); }
    else
    { console.log('send the right thing! >:(')}
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

let playRound = (playerChoice) =>{
    let computerChoice = getComputerChoice();
    let result = gameLogic(playerChoice,computerChoice);
    
    resultMessage(result,playerChoice,computerChoice);
    test();
}

let printResult = (result) =>{
    const content = document.createElement('div');
    content.textContent = result;
    results.appendChild(content);
}

let rock     = document.querySelector('.rock');
let paper    = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let results  = document.querySelector('.results');

rock.addEventListener('click',function(){playRound('rock')})
paper.addEventListener('click',function(){playRound('paper')})
scissors.addEventListener('click',function(){playRound('scissors')})