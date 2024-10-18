console.log('conecting...')

function gameFunc(playerMove){
    result='';
    randomNumber = Math.random();
    computerMove= '';
    console.log(randomNumber)
    if (randomNumber >= 0 && randomNumber < 1/3)computerMove='Rock';
    else if (randomNumber >= 1/3 && randomNumber < 2/3) computerMove='Paper';
    else if (randomNumber >= 2/3 && randomNumber < 1) computerMove='Scissors'

    if(playerMove === 'Rock'){
        if(computerMove === 'Rock')result = 'Tie';
        else if (computerMove === 'Paper')result = 'Computer wins';
        else if (computerMove === 'Scissors')result = 'You win';
    }
    if(playerMove === 'Paper'){
        if(computerMove === 'Rock')result = 'You Win';
        else if (computerMove === 'Paper')result = 'Tie';
        else if (computerMove === 'Scissors')result = 'Computer Wins';
    }
    if(playerMove === 'Scissors'){
        if(computerMove === 'Rock')result = 'Computer Wins';
        else if (computerMove === 'Paper')result = 'You Win';
        else if (computerMove === 'Scissors')result = 'Tie';
    }
    alert(`You picked ${playerMove}, Computer Picked ${computerMove}: so ${result}`)
}