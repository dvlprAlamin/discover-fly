// Ticket counter function
function ticketCount(isPlus, ticketType){
    let ticketCount = document.getElementById(ticketType +'Count');
    if(isPlus == true){
        ticketCount.value++;
    }
    if(isPlus == false && ticketCount.value > 0){
        ticketCount.value--;
    }
    getSubTotal();
    getVat();
    getTotal();
}


// Subtotal calculation
function getSubTotal() {
    let currentSubTotal = document.getElementById('subTotal');
    let singleFirstClass = parseFloat(document.getElementById('singleFirstClass').innerText);
    let singleEconomy = parseFloat(document.getElementById('singleEconomy').innerText);
    let firstClassCount = parseInt(document.getElementById('firstClassCount').value);
    let economyCount = parseInt(document.getElementById('economyCount').value);
    let subTotal = currentSubTotal.innerText = (singleFirstClass * firstClassCount) + (singleEconomy * economyCount);
    // Ticket unit and price return checkout table start
    document.getElementById('firstClassUnit').innerText = firstClassCount;
    document.getElementById('economyUnit').innerText = economyCount;
    document.getElementById('totalFirstClass').innerText = singleFirstClass * firstClassCount;
    document.getElementById('totalEconomy').innerText = singleEconomy * economyCount;
    document.getElementById('beforeVatTotal').innerText = subTotal;
    // Ticket unit and price return checkout table end
    return subTotal;
}


// VAT calculation
function getVat() {
    let currentVat = document.getElementById('vat');
    let totalVat = currentVat.innerText = Math.round(getSubTotal() * .1);
    // checkout table vat
    document.getElementById('checkOutVat').innerText = totalVat;
    return totalVat;
}


// Grand Total calculation
function getTotal() {
    let total = document.getElementById('total');
    let totalPrice = total.innerText = getSubTotal() + getVat();
    // checkout table total price
    document.getElementById('checkOutTotal').innerText = totalPrice;
    return totalPrice;
}


document.getElementById('bookNowBtn').addEventListener('click', function() {
    document.getElementById('checkOut').style.display = 'block';
});
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('checkOut').style.display = 'none';
});