const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const checkButton = document.querySelector('#check-button');
const outputBox = document.querySelector('#output-box');




checkButton.addEventListener('click', checkHandeler); 

function checkHandeler(){
    var inPrice = initialPrice.value;
    var stQuantity = stocksQuantity.value;
    var curPrice = currentPrice.value;
    calculateProfitAndLoss(inPrice, stQuantity, curPrice);

    if(inPrice&&stQuantity&&curPrice)
    compareVlues(inPrice.value, luckyNumber.value, curPrice.value);
    else
    outputBox.innerText="Please Enter all fields!"


}

function calculateProfitAndLoss(initial, quantity, current) {

    if (initial > current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        outputBox.innerText=`the loss is ${loss} and the percent is ${lossPercentage}%`;
    } else if (current > initial) {
var profit = (current-initial)*quantity;
var profitPercentage = (profit/initial)*100;
outputBox.innerText=`the profit is ${profit} and the percent is ${profitPercentage}%`;

    } else {
outputBox.innerText="No Gain! No Pain!";

    }
}

