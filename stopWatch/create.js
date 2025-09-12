// Getting the dom elements
const timer = document.getElementById('timer')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
 
//intializing variables
let startTime = 0
let elapsedTime = 0
let animationFrameId
let isRunning = false

// function for startBtn click

function startTimer() {
    startTime = performance.now() - elapsedTime;
    isRunning = true
    stopBtn.textContent = "Stop"

//update timer

function updateTimer(timestamp) {
    elapsedTime = timestamp - startTime
    //format and display the elapsed time here
    timer.textContent = formatTime(elapsedTime)
    animationFrameId = requestAnimationFrame(updateTimer)
}
 animationFrameId = requestAnimationFrame(updateTimer)
}

//function to stop/resume the timer
function stopTimer() {
    if (isRunning) {
        // Stop the timer
        cancelAnimationFrame(animationFrameId)
        isRunning = false
        stopBtn.textContent = "Resume"
    } else {
        // Resume the timer
        startTimer()
    }
}


//function to format time 

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000)
    //calculate minutes and seconds 
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    //calculating remaining milliseconds 
    const remainingMilliseconds = Math.floor(milliseconds % 1000)

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${remainingMilliseconds.toString().padStart(3, '0')}`
}

// reset btn 
function resetTimer(){
    cancelAnimationFrame(animationFrameId)
    elapsedTime = 0
    isRunning = false
    timer.textContent = "00:00:000"
    stopBtn.textContent = "Stop"
}


// Add event listeners
startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)

