// Smart Traffic Light Simulator logic

// Get DOM elements
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const statusEl = document.querySelector('.status');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const ambulanceBtn = document.getElementById('ambulance');

let current = 'red';
let timerId = null;
let isAmbulance = false;

function setLight(color) {
  red.classList.remove('active');
  yellow.classList.remove('active');
  green.classList.remove('active');

  if (color === 'red') red.classList.add('active');
  if (color === 'yellow') yellow.classList.add('active');
  if (color === 'green') green.classList.add('active');

  current = color;
  statusEl.textContent = `Status: ${color.toUpperCase()} LIGHT`;
}

function cycle() {
  // Prevent multiple concurrent cycles
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }

  if (isAmbulance) {
    setLight('green');
    timerId = setTimeout(() => {
      isAmbulance = false;
      cycle();
    }, 5000);
    return;
  }

  if (current === 'red') {
    setLight('green');
    timerId = setTimeout(() => {
      cycle();
    }, 5000);
  } else if (current === 'green') {
    setLight('yellow');
    timerId = setTimeout(() => {
      cycle();
    }, 2000);
  } else {
    // current === 'yellow'
    setLight('red');
    timerId = setTimeout(() => {
      cycle();
    }, 4000);
  }
}

// Event listeners
startBtn.addEventListener('click', () => {
  if (timerId === null) {
    // Initialize state if first run
    if (!red.classList.contains('active') && !yellow.classList.contains('active') && !green.classList.contains('active')) {
      setLight(current);
    }
    cycle();
  }
});

stopBtn.addEventListener('click', () => {
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }
  isAmbulance = false;
  current = 'red';
  setLight('red');
  statusEl.textContent = 'Status: Idle';
});

ambulanceBtn.addEventListener('click', () => {
  if (isAmbulance) return;
  isAmbulance = true;
  // Interrupt current cycle immediately
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }
  setLight('green');
  timerId = setTimeout(() => {
    isAmbulance = false;
    cycle();
  }, 5000);
});

// Initialize default light
setLight('red');
