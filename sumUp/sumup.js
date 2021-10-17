const btn = document.getElementById('calcBtn');
const number = document.getElementById('number');
const result = document.getElementById('result');
const numInput = document.getElementById('numInput');

function sumUp(num) {
        return (num / 2) * (1 + num);
}

function handleInput() {
    let num = parseInt(numInput.value);
    showNumbers(num);
}

function showNumbers(num) {
    number.innerText = num;
    calcul(num);
}

function calcul(num) {
    result.textContent = sumUp(num);
}


btn.addEventListener('click', handleInput);
numInput.addEventListener("keyup",((e) => {if (e.keyCode === 13) {e.preventDefault(); btn.click();}}));