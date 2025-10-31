const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
    if(strokes === 1){
    return names[0]
    }else if(strokes <= (par -2)){
    return names[1]
    }else if(strokes <= (par -1)){
    return names[2]
    }else if(strokes === par){
    return names[3]
    }else if(strokes === (par + 1)){
    return names[4]
    }else if(strokes === (par + 2)){
    return names[5]
    }else if(strokes >= (par + 3)){
    return names[6]
    } 
}

function calculateScore() {
    const par = parseInt(document.getElementById('par').value);
    const strokes = parseInt(document.getElementById('strokes').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(par) || isNaN(strokes)) {
        resultDiv.textContent = 'Please enter valid numbers for both par and strokes.';
        resultDiv.style.color = '#e74c3c';
        return;
    }

    const score = golfScore(par, strokes);
    resultDiv.textContent = score;
    resultDiv.style.color = '#27ae60';
}

// Allow Enter key to calculate
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateScore();
    }
});