// getting the dom elements
let countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const saveBtn = document.getElementById('save');
const resetBtn = document.getElementById('reset');
const previousentries = document.getElementById('previous-entries');


let count = 0;
// function to the buttons
function increment(){
    count++;
    countEl.textContent = count;
}
function save() {
    const saved = count;
    previousentries.textContent += " " + saved + " -";
    
}
function reset() {
    count = 0;
    countEl.textContent = count;
    previousentries.textContent = "Previous entries:";
    
    
    
}


incrementBtn.addEventListener('click', increment);
saveBtn.addEventListener('click', save);
resetBtn.addEventListener('click', reset);

