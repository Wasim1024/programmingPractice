document.addEventListener('DOMContentLoaded', function() {
let button = document.getElementById('calculate')

function tip() {
    let amount = parseFloat(document.getElementById('amount').value)
    let percentage = parseFloat(document.getElementById('percentage').value)
     if (isNaN(amount) || isNaN(percentage) || amount <= 0 || percentage < 0) {
        alert('Please enter valid positive numbers')
        return 
}

const tipAmount = (amount * percentage) / 100
    const total =  tipAmount + amount
  console.log(`Tip: $${tipAmount}, Total: $${total}`)
  document.getElementById('total').innerHTML =  `<p>Tip: $${tipAmount.toFixed(2)}, Total: $${total.toFixed(2)}</p>`

}

button.addEventListener('click', tip)
})
