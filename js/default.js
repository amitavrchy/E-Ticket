function remainingSeatUpdate(){
    const seatRemaining = document.getElementById('seat-remaining');
    let totalSeatRemaining = parseInt(seatRemaining.innerText);
    totalSeatRemaining= totalSeatRemaining -1 ;
    seatRemaining.innerText = totalSeatRemaining;
}
function bookedSeatCount(){
    totalSeatCount.innerText = count;
}
function updateSeatStyle(event){
    let seat = event.target;
    seat.classList.add('bg-green-600');
    seat.classList.remove('bg-[#03071233]');
    seat.classList.add('text-white');
}
function addSeatRow(event){
    let seat = event.target;
    let seatValue = seat.innerText;
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerText = seatValue;
    td2.innerText = 'Economic';
    td3.innerText = 550;
    td3.classList.add('checkout-price');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    let seatList = document.getElementById('seatList');
    seatList.appendChild(tr);
}
function totalPriceCount(){
    totalPrice = totalPrice+550;
    totalPriceShow.innerText = totalPrice;
}
function applyCoupon(){
    let couponInput = document.getElementById('coupon-input');
    let couponInputText = couponInput.value;
    if(couponInputText === 'NEW15'){
        couponBtn.removeAttribute('disabled');
        return 0.15;
    }
    else if(couponInputText === 'Couple 20'){
        console.log('couple applied');
        return 0.20;
    }
}
function activeCouponButton(){
    let couponInput = document.getElementById('coupon-input');
    let couponInputText = couponInput.value;
    let couponBtn = document.getElementById('couponBtn');
    if(couponInputText === 'NEW15'){
        couponBtn.removeAttribute('disabled');
    }
    else if(couponInputText === 'Couple 20'){
        console.log('couple applied');
    }
}