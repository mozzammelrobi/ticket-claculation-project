let allBtn = document.querySelectorAll('.add-btn')
const ticketInfoContainer = document.getElementById('ticket-count-info-container')
const totalPricce = document.getElementById('total-price')
let count = 0; 
let price = 0 ;


allBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        count++
        // if(count = 4){
        //    for(const button of allBtn){
        //     button.setAttribute(disabled, true)
        //    }
        // }
    
         const buttonText = e.target.innerText
         const seatCount = document.getElementById('seats-count')
         const totalSeats = document.getElementById('total-seats').innerText

         const convertedTotalSeats = parseInt(totalSeats) 
         
         document.getElementById('total-seats').innerText = convertedTotalSeats - 1
         seatCount.innerText = count

         displayData(buttonText)
         calculation()
         
    })    
});


const displayData = (seatClass) => {

    const ticketInfo = document.createElement('div')

    ticketInfo.classList = 'flex justify-between border'
    ticketInfo.innerHTML = `
    <p>${seatClass}</p>
    <p>Economy</p>
    <p>500</p>
    `;
    ticketInfoContainer.appendChild(ticketInfo)
}

const calculation = () => {
    price = price + 550
    // console.log(price)
    totalPricce.innerText = price

    grandTotalCalculation(price)
}


const grandTotalCalculation = (price)=> {
    console.log(price)
}