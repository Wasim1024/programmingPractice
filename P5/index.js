import { playerProfile } from './data.js'

const button = document.querySelector("button")
const clubSelect = document.getElementById('club')
const playerSelect = document.getElementById('player')
const container = document.getElementById('container')
const firstNameInput = document.getElementById('firstName')

button.addEventListener('click',modal)

let modalDiv = document.createElement('div')
document.body.appendChild(modalDiv)


function modal() {
    const selectedClub = clubSelect.value
    const selectedPlayer = playerSelect.value
     const firstName = firstNameInput.value.trim()

let playerData = {
    name:"Aarish fernardes",
    club:"unknown",
    price_eur_millions:"unknown",
    stats: {position :"unknown"}
}
if (selectedClub === "Manchester United" && selectedPlayer ==="Bruno Marsnaldes") {
    const brunoData = playerProfile.find(player => player.name === "Bruno Fernandes")
    if(brunoData) {
        playerData = brunoData
    }

}
if (firstName) {
    const nameParts = playerData.name.split(' ')
    nameParts[0] = firstName // Replace the first name
    playerData.name = nameParts.join(' ')
}




 modalDiv.innerHTML = `
        <div>
            <h3>${playerData.name}</h3>
            <img src="aarish.png" alt="aarish" style="height: 200px; width: 200px;">
            <h4 style="text-align:left;">Club: ${playerData.club}</h4>
            <h4 style="text-align:left;">Price: ${playerData.price_eur_millions}</h4>
            <h4 style="text-align:left;">Stats: ${playerData.stats.position}</h4>
        </div>
    `;
    modalDiv.classList.add('modalDiv');
    container.style.display = "none"
}