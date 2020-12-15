var email = prompt('Inserisci la tua mail');
var welcome = document.getElementById('welcome');
var btn = document.getElementById('btn');
var diceplayer = document.getElementById('dice-player');
var dicepc = document.getElementById('dice-pc');
var result = document.getElementById('result');
var emaiListSigned = ['frank@gmail.com','lucio@gmail.com','gatto@gmail.com'];
var mailCheck;
var min = 1;
var max = 6;
var dice1 = Math.floor(Math.random() * (max + 1 - min) + min);
var dice2 = Math.floor(Math.random() * (max + 1 - min) + min);


for(var i = 0; i < emailListSigned.lenght; i++) {
  if(emailListSigned[i] === email) {
    mailCheck = true;
  }
}

if(mailCheck = true) {
  welcome.innerText = 'Giochiamo';
  btn.innerText = 'Clicca qui per lanciare!';
  btn.addEventListener('click',
    function(){
      diceplayer.innerText = dado giocatore;
      dicepc.innerText = dado pc;
      if (dice1 > dice2) {
        result.innerText = 'Hai vinto!';
      } else if (dice1 < dice2) {
        result.innerText = 'Hai perso!'
      } else {
        result.innerText = 'Pareggio!'
      }
     })
} else {
  welcome.innerText = 'Non so chi sei, sparisci!';
}
