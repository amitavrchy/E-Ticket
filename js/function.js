let selectedSeat = [];
const a1 = document.getElementById('seatA1');
const a2 = document.getElementById('seatA2');
const a3 = document.getElementById('seatA3');
const a4 = document.getElementById('seatA4');
const b1 = document.getElementById('seatB1');
const b2 = document.getElementById('seatB2');
const b3 = document.getElementById('seatB3');
const b4 = document.getElementById('seatB4');
let couponInput = document.getElementById('coupon-input');
let couponBtn = document.getElementById('couponBtn');
const totalSeatCount = document.getElementById('totalSeatCount');
const totalPriceShow = document.getElementById('totalPrice');
const couponDiv = document.getElementById('couponDiv');
const new15Msg = document.getElementById('new15');
const couple20Msg = document.getElementById('couple-20');

let count = 0;
let totalPrice = 0;
a1.addEventListener('click', seatPurchse);
a2.addEventListener('click', seatPurchse);
a3.addEventListener('click', seatPurchse);
a4.addEventListener('click', seatPurchse);
b1.addEventListener('click', seatPurchse);
b2.addEventListener('click', seatPurchse);
b3.addEventListener('click', seatPurchse);
b4.addEventListener('click', seatPurchse);

function seatPurchse(event){
    if(!selectedSeat.includes(event.target.innerText)){
        if(count < 4){
            remainingSeatUpdate();
            bookedSeatCount();
            updateSeatStyle(event);
            addSeatRow(event);
            totalPriceCount();
            count++;
            selectedSeat.push(event.target.innerText);
        }
    }
    if(count == 4){
        couponInput.removeAttribute('disabled');
    }

}
console.log(couponFinal());
