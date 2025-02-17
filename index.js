let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prev = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number:)`);
  } else if (guess < 1) {
    alert(`please enter anumber more than 1 :)`);
  } else if (guess > 100) {
    alert(`please enter a number less than 100 :)`);
  } else {
    prev.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`Game over ,random number was ${random}`);
      endgame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right`);
  } else if (guess > random) {
    displayMessage(`You guess is too High`);
  } else if (guess < random) {
    displayMessage(`You guess is too low`);
  }
}

function displayGuess(guess) {
  userinput.value = '';
  guessslot.innerHTML += `${guess} ,`;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start new Game<h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (event) {
    random = parseInt(Math.random() * 100 + 1);
    prev = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
  });
}
