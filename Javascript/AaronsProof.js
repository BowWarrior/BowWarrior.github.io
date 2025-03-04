document.getElementById("submitBtn").addEventListener("click", function() {
    doCalculation();
});

function doCalculation() {
    let numerator = document.getElementById("numerator").value;
    if (numerator === "") {
        alert("Please enter a number to be divided by 81");
    } else {
        const result = getDecimal(numerator);
        document.getElementsByClassName("box impossibleNumber")[0].innerHTML = 9 - (numerator % 9);
        document.getElementsByClassName("box actualAnswer")[0].innerHTML = result;
    }
}

//this function turns our numerator into an accurate decimal to 20 decimal places
//by multiplying the numerator by 10^20, then dividing by 81
function getDecimal(numerator) {
    const decimalAccuracy = 20;
    const bigNumerator = BigInt(numerator);
    const multByDecimalAccuracy = BigInt(10 ** decimalAccuracy);
    const moveDecimal = bigNumerator * multByDecimalAccuracy;
    const realAnswer = moveDecimal / BigInt(81);
    let resultString = realAnswer.toString();
    while (resultString.length < decimalAccuracy) {
        resultString = "0" + resultString;
    }
    const integerPart = resultString.slice(0, -decimalAccuracy) || '0';
    const decimalPart = resultString.slice(-decimalAccuracy);

    return `${integerPart}.${decimalPart}`;
}