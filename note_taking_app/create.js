/*        <div class="frame">
        <div class="notes">
            <h2>Notes App<img src="/images/icon.png" class="icon"></h2>
            <div class="add-notes">
                <input type="text" id="notes-box" placeholder="Add notes here">
                <button id="input-button">Add</button>
            </div>
            <ul id="notes-list">
                <input type="radio" id="radio"><li id="note-text">Note 1</li><span id="remove">x</span>
            </ul>
        </div>
    </div> */

//getting the dom elements
const inputBox = document.getElementById('notes-box')
const inputBtn = document.getElementById('input-button')
const notesList = document.getElementById('notes-list')


// function to add the value/text from input box when button is clicked

inputBtn.addEventListener('click' , (e) => {
    if(inputBox.value === ""){
        alert("please enter something")
    }else {
        let radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'notes'
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        
        li.prepend(radio)
        notesList.appendChild(li)
        
        let span = document.createElement('span')
        span.innerHTML = 'x'
        li.appendChild(span)
    }
    inputBox.value = ""
    storeData()

})

notesList.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        storeData()
    }else if (e.target.type === "radio") {
        // Toggle checked class on the parent li element when radio is clicked
        e.target.parentElement.classList.toggle('checked')
        storeData()
    }
}, false)

function storeData() {
    localStorage.setItem("data", notesList.innerHTML)
}

function showData() {
    notesList.innerHTML = localStorage.getItem('data')
}

showData()
