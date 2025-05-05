function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerText = "SUM: " + sum;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var difference = num1 - num2;
    document.getElementById("result").innerText = "DIFFERENCE: " + difference;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var product = num1 * num2;
    document.getElementById("result").innerText = "PRODUCT: " + product;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var quotient = num1 / num2;
    document.getElementById("result").innerText = "QUOTIENT: " + quotient;
}


