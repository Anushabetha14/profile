function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function deleteLastCharacter() {
    const display = document.getElementById("display");
    if (display.value) {
        display.value = display.value.slice(0, -1);
    }
}
