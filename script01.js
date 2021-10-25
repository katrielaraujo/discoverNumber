
// console.log(document.querySelector('.message').textContent);

// // Selecione e manipulation element

// document.querySelector('.message').textContent = 'Número correto';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//Lida com eventos Click

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'Nenhum número';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Muito alto';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'você perdeu o jogo';
            document.querySelector('.score').textContent = 0;
        }
       
    }else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Muito baixo';
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    document.querySelector('.message').textContent = 'Comece a advinhar...';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';

});