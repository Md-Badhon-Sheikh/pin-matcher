function getPin() {
    const pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputCalc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == "C") {
            inputCalc.value = '';
        }
    }
    else {
        const previousNumber = inputCalc.value;
        const newNumber = previousNumber + number;
        inputCalc.value = newNumber;
    }


})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumber) {
        successMsg.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMsg.style.display = 'none';
        failError.style.display = 'block';
    }
}