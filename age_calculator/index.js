//get the dom elements
const date = document.getElementById('date')
const button = document.getElementById('button')
const result = document.getElementById('result')



// function to display the age
function displayAge() {
    const birthdayValue = date.value
    if (birthdayValue === ""){
        alert("Please enter your birthdate")
    }
    else {
        const age = birthday(birthdayValue)
        result.innerText = `You are ${age} years old`
    }

}


//function to take the value of input and convert it to age
function birthday(birthdayValue) {
    const currentdate = new Date()
    const birthdate = new Date(birthdayValue)
    let age = currentdate.getFullYear() - birthdate.getFullYear()
    const month = currentdate.getMonth() - birthdate.getMonth()
    if (month < 0 || (month === 0 && currentdate.getDate() < birthdate.getDate())) {
        age--
    }
    return age
}

button.addEventListener('click',displayAge)



