const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const checkButton = document.querySelector('#check-button');
const resetButton = document.querySelector('#reset-button');
const outputBox = document.querySelector('#output-box');
const processBox = document.querySelector('#process-box');
const errorBox = document.querySelector('#error-box');
var loadingImg = document.querySelector('.loading-img');
var coverImg = document.querySelector('.cover-img');
var scam1992 = document.getElementById("myAudio");
const aboutApp = document.querySelector(".about-app")

resetButton.addEventListener("click", () => {
    initialPrice.value = "";
    stocksQuantity.value = "";
    currentPrice.value = "";
    scam1992.pause()
    outputBox.style.display = `none`;
    aboutApp.style.display = `flex`;
    coverImg.style.display = `none`;
})
checkButton
    .addEventListener('click', checkHandeler);

function checkHandeler() {
    var inPrice = Number(initialPrice.value);
    var stQuantity = Number(stocksQuantity.value);
    var curPrice = Number(currentPrice.value);

    if (inPrice > 0 && stQuantity > 0 && curPrice > 0)
        calculateProfitAndLoss(inPrice, stQuantity, curPrice);
    else
        errorBox.style.display = `block`;
    errorBox.innerText = "Please Enter all fields!"

}

function calculateProfitAndLoss(initial, quantity, current) {
    aboutApp.style.display = `none`;
    if (initial > current) {
        setTimeout(function () {
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / (initial * quantity)) * 100;
            loadingImg.style.display = `none`;
            coverImg.style.display = `block`;
            processBox.style.display = `none`;
            outputBox.style.display = `block`;
            outputBox.innerHTML = `the loss is 
            <span class="profit">${loss} </span> <br/>
            and the percent is  <span class="profit"> ${Math.floor(lossPercentage)}%</span>`;
            coverImg.innerHTML = `<img src="https://pbs.twimg.com/media/ExA9_MNUUAMFHlI.jpg">`
        }, 3000);
        scam1992.pause()
        errorBox.style.display = `none`;
        processBox.style.display = `block`;
        loadingImg.style.display = `block`;
        processBox.innerText = 'Hang on Jethalal is working on it!';
        outputBox.style.display = `block`;
        coverImg.innerHTML = ``
        outputBox.innerHTML = ``


    } else if (current > initial) {

        setTimeout(function () {
            errorBox.style.display = `none`;
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / (initial * quantity)) * 100;
            loadingImg.style.display = `none`;
            outputBox.style.display = `block`;
            coverImg.style.display = `block`;
            processBox.style.display = `none`;
            outputBox.innerHTML = `the profit is <span class="profit">${profit} </span> <br/> 
            and the percent is <span class="profit"> ${Math.floor(profitPercentage)}%</span>`;
            coverImg.innerHTML = `<img src="https://c.tenor.com/W06knTv2yOUAAAAM/jetha-dance.gif">`
            scam1992.play()
        }, 3000);

        errorBox.style.display = `none`;
        coverImg.innerHTML = ``
        loadingImg.style.display = `block`;
        outputBox.innerHTML = ``
        processBox.style.display = `block`;
        processBox.innerText = 'Hang on Jethalal is working on it!';
        outputBox.style.display = `block`;
    } else {
        errorBox.style.display = `none`;
        scam1992.pause()
        processBox.style.display = `none`;
        outputBox.style.display = `block`;
        outputBox.innerText = "No Gain! No Pain!";
        coverImg.innerHTML = `<img src="https://c.tenor.com/3lGNXj6nVVMAAAAC/everything-is-fine.gif">`
    }
}

