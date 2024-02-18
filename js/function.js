const seats = document.getElementById('seats');
const totalSeatCount = document.getElementById('totalSeatCount');
const totalPriceShow = document.getElementById('totalPrice');
let count = 0;
let totalPrice = 0;
seats.addEventListener('click', function(event){
    if(event.target !== seats){
        count++;
        if(count <= 4){
            remainingSeatUpdate();
            bookedSeatCount();
            updateSeatStyle(event);
            addSeatRow(event);
            totalPriceCount();           
        }
    }

})

console.log(totalPriceShow.innerText);