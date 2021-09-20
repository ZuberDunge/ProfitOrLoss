const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const checkButton = document.querySelector('#check-button');
const outputBox = document.querySelector('#output-box');
const errorBox = document.querySelector('#error-box');
var loadingImg  = document.querySelector('.loading-img');


checkButton.addEventListener('click', checkHandeler); 

function checkHandeler(){
    var inPrice = Number(initialPrice.value);
    var stQuantity = Number(stocksQuantity.value);
    var curPrice = Number(currentPrice.value);
   
    if(inPrice>0&&stQuantity>0&&curPrice>0)
    calculateProfitAndLoss(inPrice, stQuantity, curPrice);
    else
   errorBox.style.display = `block`;
   errorBox.innerText="Please Enter all fields!" 

}

function calculateProfitAndLoss(initial, quantity, current) {

    if (initial > current) {
        setTimeout(function(){  
            var loss = (initial - current)*quantity;
            var lossPercentage = (loss / (initial * quantity)) * 100;
            loadingImg.style.display = `none`;       
            outputBox.style.display = `block`;    
            outputBox.innerText=`the loss is ${loss} and the percent is ${lossPercentage}%`;
            }, 3000);

                errorBox.style.display = `none`;
                loadingImg.style.display = `block`;      
                outputBox.innerText = 'Hang on our robot is working on it!';
                outputBox.style.display = `block`;

                
            } else if (current > initial) {
                setTimeout(function(){ 
                    errorBox.style.display = `none`;
                    var profit = (current-initial)*quantity;
                    var profitPercentage = (profit / (initial * quantity)) * 100;
                    
                    loadingImg.style.display = `none`;       
                    outputBox.style.display = `block`;    
                    outputBox.innerText=`the profit is ${profit} and the percent is ${profitPercentage}%`;

                    }, 3000);
                    errorBox.style.display = `none`;
                    loadingImg.style.display = `block`;      
                    outputBox.innerText = 'Hang on our robot is working on it!';
                    outputBox.style.display = `block`;
            } else {
                errorBox.style.display = `none`;
                outputBox.style.display = `block`;
                    outputBox.innerText="No Gain! No Pain!";
                    
            }
}

