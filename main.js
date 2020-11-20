const affirmations = [
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
const mantras = [
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
const body = document.querySelector('body');
const affRadio = document.querySelector('#affirmation');
const mantraRadio = document.querySelector('#mantra');
const receiveMsg =  document.querySelector('.rcv-msg');
const medIcon = document.querySelector('.meditation-icon');
const msgDisplay = document.querySelector('.msg');
let msg;
let timeoutId;
let chosen;

const determineType = () => affRadio.checked ? chosen = affirmations : chosen = mantras;

const getRandomIndex = msgs => Math.floor(Math.random() * msgs.length);

const toggleMsgAndIcon = () => {
  medIcon.classList.toggle('fade-out');
  hideIcon();
}

const hideIcon = () => {
  timeoutId = setTimeout(() => {
    medIcon.classList.toggle('hidden');
    msgDisplay.classList.toggle('hidden');
  }, 1750)
}

const generateMsg = () => chosen[getRandomIndex(chosen)];

const setMsg = () => {
  msg = generateMsg();
  msgDisplay.innerText = msg;
}

const selectFn = () => rcvMsgFunction();

const displayFirstMsg = () => {
  msg = generateMsg();
  msgDisplay.innerText = msg;
  !medIcon.classList.value.includes('hidden') ? toggleMsgAndIcon() : msg;
  rcvMsgFunction = displaySecondMsg;
}

const displaySecondMsg = () => {
  fadeMsgInAndOut();
  timeoutId = setTimeout(() => {
    msg = generateMsg();
    msgDisplay.innerText = msg;
    fadeMsgInAndOut();
  }, 1750);
}

const fadeMsgInAndOut = () => {
  msgDisplay.classList.toggle('fade-in');
  msgDisplay.classList.toggle('fade-out');
}

receiveMsg.addEventListener('click', selectFn);
affRadio.addEventListener('click', determineType);
mantraRadio.addEventListener('click', determineType);
let rcvMsgFunction = displayFirstMsg;
