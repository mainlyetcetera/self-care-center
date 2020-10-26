var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];
var affRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var receiveMsg =  document.querySelector('.rcv-msg');
var medIcon = document.querySelector('.meditation-icon');
var msgDisplay = document.querySelector('.msg');
var timeoutId;
console.log(medIcon.classList);

receiveMsg.addEventListener('click', displayMsg);
affRadio.addEventListener('click', determineType);
mantraRadio.addEventListener('click', determineType);

function determineType() {
  var chosen;
  if (affRadio.checked === true) {
    chosen = affirmations;
  } else if (mantraRadio.checked === true) {
    chosen = mantras;
  }

  return chosen;
}

function getRandomIndex(msgs) {
  return Math.floor(Math.random() * msgs.length);
}

function toggleMsgOrIcon() {
  medIcon.classList.toggle('fade-out');
  hideIcon();
  // msgDisplay.classList.toggle('hidden');
}

function hideIcon() {
  console.log(medIcon.classList);
  timeoutId = setTimeout(function() {
    medIcon.classList.toggle('hidden');
  }, 3000);
  console.log(medIcon.classList);
}

function test() {

}

function generateMsg() {
  var type = determineType();
  var randomIndex = getRandomIndex(type);
  return type[randomIndex];
}

function displayMsg() {
  var msg = generateMsg();
  msgDisplay.innerText = msg;
  if (!medIcon.classList.value.includes('hidden')) {
    toggleMsgOrIcon();
  }
}

// console.log(typeof medIcon.classList.toggle('hidden'));
// console.log(typeof generateMsg);
console.log(medIcon.classList);
