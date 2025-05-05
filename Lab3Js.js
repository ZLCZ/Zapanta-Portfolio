function getResult() {
    var number = parseFloat(document.getElementById("number1").value);
    var centi = number * 100000
    document.getElementById("result").innerHTML = number + " KILOMETER IS " + centi + " cm.";
}