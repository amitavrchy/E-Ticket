function remainingSeatUpdate(){
    const seatRemaining = document.getElementById('seat-remaining');
    let totalSeatRemaining = parseInt(seatRemaining.innerText);
    totalSeatRemaining= totalSeatRemaining -1 ;
    seatRemaining.innerText = totalSeatRemaining;
}
function bookedSeatCount(){
    totalSeatCount.innerText = count+1;
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

function couponFinal(){
    couponInput.addEventListener('keyup',function(){
        let val = this.value;
        if(val === 'NEW15'){
            couponBtn.removeAttribute('disabled');
        }
        else if(val === 'Couple 20'){
            couponBtn.removeAttribute('disabled');
        }
        else {
            couponBtn.setAttribute('disabled',0);
        }
        
    })
    couponBtn.addEventListener('click', function(){
        let val = couponInput.value;
        if(val === 'NEW15'){
            totalPrice = totalPrice - totalPrice*0.15;
            totalPriceShow.innerText = totalPrice;
            couponDiv.classList.add('hidden');
            new15Msg.classList.remove('hidden');
        }
        else if(val === 'Couple 20'){
            totalPrice = totalPrice - totalPrice*0.20;
            console.log(totalPrice);
            totalPriceShow.innerText = totalPrice;
            couponDiv.classList.add('hidden');
            couple20Msg.classList.remove('hidden');
        }       
        
    })
}