// console.log(document.querySelector('.message').textContent);

//seleciona e manipula elementos HTML

//document.querySelector('.message').textContent = "Número correto";

//document.querySelector('.number').textContent = 7;

//document.querySelector('.score').textContent = 30;
//document.querySelector('.guess').value = 23;

//Lida com eventos Click

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc((Math.random() * 20)) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){// 0 falsy value
        // document.querySelector('.message').textContent = 'Nenhum número!';
        displayMessage('Nenhum número!');
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = 'Número correto';
        displayMessage('Número correto');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber? 'Muito alto':'Muito baixo');
            document.querySelector('.score').textContent = score;
            score--;
        }else{
            displayMessage('Você perdeu o jogo');
            document.querySelector('.score').textContent = 0;
        }
    }
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Muito Alto';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'Você perdeu o jogo!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Muito Baixo';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'Você perdeu o jogo!';
    //         document.querySelector('.score').textContent = 0;
    //     }
});

//codign challenges

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    // document.querySelector('.message').textContent = 'Comece a advinhar...';
    displayMessage('Comece a advinhar...');
});