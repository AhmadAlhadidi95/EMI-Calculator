document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
    
    inputNumber.oninput = () => {

        if (inputNumber.value > inputNumber.maxLength) {
            
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);

        };

    };

});

let amount = document.getElementById("amount");
let interest = document.getElementById("interest");
let tenure = document.getElementById("tenure");
let theButton = document.querySelector(".left button");

theButton.onclick = (b) => {

    b.preventDefault();

    let isYear = document.getElementById("yearly").checked;
    let noOfMonths = 0;

    if (amount.value == "" || interest.value == "" || tenure.value == "") {
        alert("Please, fill out all fields");
    } else {

        if (isYear) {
            noOfMonths = tenure.value * 12;
        } else {
            noOfMonths = tenure.value;
        };

        let r = parseFloat(interest.value) / 12 / 100;
        let p = amount.value;
        let n = noOfMonths;

        // Formula EMI = (p * r * (1 + r)^n) / ((1 + r)^n - 1)
        let emi = (p * r * Math.pow((1 + r),n)) / (Math.pow((1 + r),n) - 1);

        let totalInterest = (emi * n) - p;

        let totalPayment = totalInterest + parseFloat(p);

        document.getElementById("emi").innerHTML = "$ " + Math.round(emi);
        document.getElementById("payable").innerHTML = "$ " + Math.round(totalInterest);
        document.getElementById("payment").innerHTML = "$ " + Math.round(totalPayment);

    };

};