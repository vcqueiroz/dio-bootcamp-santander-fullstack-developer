//console.log("Hello World!!!")

var currentElement = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    if (currentNumber <= 9) {
        currentNumber++;
        currentElement.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber >= -9) {
        currentNumber--;
        currentElement.innerHTML = currentNumber;
    }
}

function changeElement() {
    if (currentNumber > 0) {
        currentElement.style.color = "green";
    } else if (currentNumber < 0) {
        currentElement.style.color = "red";
    } else if (currentNumber == 0) {
        currentElement.style.color = "black";
    }
}