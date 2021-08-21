var depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", function () {



    var totalDiposit = document.getElementById("total-diposit");
    var totalDipositText = totalDiposit.innerText;
    var totalDipositNum = parseFloat(totalDipositText);

    var balance = document.getElementById("balance");
    var balanceText = balance.innerText;
    var balanceNum = parseFloat(balanceText);


    var inputAmmount = document.getElementById("deposit-ammount");
    var depositInput = inputAmmount.value;
    var depositInputNum = parseFloat(depositInput);

    if (depositInputNum < 0) {
        var warning = document.getElementById("warning");
        warning.innerText = "Please enter a positive ammount of number";
        inputAmmount.value = "";
        return;
    }
    if (depositInput == "") {
        var warning = document.getElementById("warning");
        warning.innerText = "Please enter a positive ammount of number";
        inputAmmount.value = "";

        return;
    }
    else {
        var totalDipositedResult = depositInputNum + totalDipositNum;

        totalDiposit.innerText = totalDipositedResult;
        inputAmmount.value = "";
        var warning = document.getElementById("warning");
        warning.innerText = "";

        var balance = document.getElementById("balance");

        balance.innerText = balanceNum + depositInputNum;

        return;
    }







})



/*------------------------------------------------ 
Withdraw 
-------------------------------------------------*/


var withDrawBtn = document.getElementById("withdraw-btn");

withDrawBtn.addEventListener("click", function () {

    var withdraw = document.getElementById("withdraw-ammount");
    var inputWithdrawValue = withdraw.value;
    var totalWithdrawNum = parseFloat(inputWithdrawValue);

    var withdrawTotal = document.getElementById("withdraw-total");
    var withdrawTotalText = withdrawTotal.innerText;
    var withdrawTotalNum = parseFloat(withdrawTotalText);

    var balance = document.getElementById("balance");
    var balanceText = balance.innerText;
    var balanceNum = parseFloat(balanceText);
    var totalWithdrawResult = totalWithdrawNum - withdrawTotalNum;





    if (totalWithdrawNum < 0) {
        var warning2 = document.getElementById("warning2");
        warning2.innerText = "Please enter a positive ammount of number";
        withdraw.value = "";

        return;
    }

    if (inputWithdrawValue == "") {
        var warning2 = document.getElementById("warning2");
        warning2.innerText = "Please enter a positive ammount of number";
        withdraw.value = "";

        return;
    }

    else if (balanceNum < totalWithdrawResult) {
        var warning2 = document.getElementById("warning2");
        warning2.innerText = "You have not enough balnce.";
        withdraw.value = "";

    }


    else {
        var totalWithdrawResult = totalWithdrawNum + withdrawTotalNum;


        withdrawTotal.innerText = totalWithdrawResult;

        withdraw.value = "";

        var warning2 = document.getElementById("warning2");
        warning2.innerText = "";


        var currentBalance = balanceNum - totalWithdrawNum;
        balance.innerText = currentBalance;
    }







})










