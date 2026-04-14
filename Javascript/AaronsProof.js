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
    //decimalAccuracy is the number of decimal places you want
    const power = 4n; //represents the n in 1/3^n
    const decimalAccuracy = 3n**(power-2n); //gives the exact repeating part
    console.log(decimalAccuracy);
    const divisor = (3n**power);

    const bigNumerator = BigInt(numerator);
    const scale = 10n ** decimalAccuracy;
    const scaled = bigNumerator * scale;

    const truncated = scaled / (divisor);

    let resultString = truncated.toString();

    //pad with leading zeros if needed
    const totalLength = Number(decimalAccuracy);
    while (resultString.length <= totalLength) {
        resultString = "0" + resultString;
    }

    const integerPart = resultString.slice(0, -totalLength);
    const decimalPart = resultString.slice(-totalLength);
    
    console.log(decimalPart);

    return `${integerPart}.${decimalPart}`;
}
