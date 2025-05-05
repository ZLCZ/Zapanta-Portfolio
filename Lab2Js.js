function getResult() {
    var number = parseFloat(document.getElementById("number1").value);
    var count = 0;
    var i;
    if(number % 2 == 0 ) {
    document.getElementById("result").innerText = "The number is even";
    } else {
        document.getElementById("result").innerText = "The number is odd";    
    }

    if(number <= 1) {
    document.getElementById("result1").innerText = "Invalid";
    } else {
        for (i = 0; i <= number; i++ ) {
            if (number%i == 0) {
            count++;
            }
        }
    if(count == 2 ) 
        document.getElementById("result1").innerText = "The number is Prime";
    if(count > 2 ) 
        document.getElementById("result1").innerText = "The number is Composite"; 
}
}

