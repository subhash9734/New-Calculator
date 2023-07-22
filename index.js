let displayValue = "";

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === "") return;
    if (displayValue.slice(-1).match(/[+\-*/.]/)) return;
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    if (displayValue === "") return;
    if (displayValue.slice(-1).match(/[+\-*/.]/)) return;

    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }

    updateDisplay();
}

updateDisplay();
