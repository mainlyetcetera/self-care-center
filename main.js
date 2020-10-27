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
var body = document.querySelector('body');
var affRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var receiveMsg =  document.querySelector('.rcv-msg');
var medIcon = document.querySelector('.meditation-icon');
var msgDisplay = document.querySelector('.msg');
var rcvMsgFunction = displayFirstMsg;
var msg;
var timeoutId;

receiveMsg.addEventListener('click', selectFunction);
affRadio.addEventListener('click', determineType);
mantraRadio.addEventListener('click', determineType);

function determineType() {
  var chosen;
  if (affRadio.checked === true) {
    chosen = affirmations;
    body.className = 'affirmation-gradient';
  } else if (mantraRadio.checked === true) {
    chosen = mantras;
    body.className = 'mantra-gradient';
  }

  return chosen;
}

function getRandomIndex(msgs) {
  return Math.floor(Math.random() * msgs.length);
}

function toggleMsgAndIcon() {
  medIcon.classList.toggle('fade-out');
  hideIcon();
}

function hideIcon() {
  timeoutId = setTimeout(function() {
    medIcon.classList.toggle('hidden');
    msgDisplay.classList.toggle('hidden');
  }, 3000);
}

function generateMsg() {
  var type = determineType();
  var randomIndex = getRandomIndex(type);
  return type[randomIndex];
}

function selectFunction() {
  rcvMsgFunction();
}

function displayFirstMsg() {
  msg = generateMsg();
  msgDisplay.innerText = msg;
  if (!medIcon.classList.value.includes('hidden')) {
    toggleMsgAndIcon();
  }

  rcvMsgFunction = displaySecondMsg;
}

function displaySecondMsg() {
  fadeMsgInAndOut();
  timeoutId = setTimeout(function() {
    msg = generateMsg();
    msgDisplay.innerText = msg;
    fadeMsgInAndOut();
  }, 3000);
}

function fadeMsgInAndOut() {
  msgDisplay.classList.toggle('fade-in');
  msgDisplay.classList.toggle('fade-out');
}
