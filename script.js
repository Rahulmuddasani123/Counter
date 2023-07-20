let counterElement = document.getElementById("number");

function increase() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

    counterElement.textContent = updatedCounterValue;
}

function decrease() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function reset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
}