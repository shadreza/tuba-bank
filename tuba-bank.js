function autoHideOrShowTransactionArea(input){
    if(input==0){
        document.getElementById('transactionArea').style.display='none';
    }
    else{
        document.getElementById('transactionArea').style.display='block';
    }
}

autoHideOrShowTransactionArea(0);

const logInBtn = document.getElementById('logInButton');
logInBtn.addEventListener('click',function(){
    const logInAreaContainer = document.getElementById('logInAreaContainer');
    logInAreaContainer.style.display='none';
    autoHideOrShowTransactionArea(1);
})

function setDepositAmount (inputBalance){
    if(inputBalance<=0){
        inputBalance=00;
    }
    document.getElementById('depositAmmount').innerText=inputBalance;
}
function setWithdrawAmount (inputBalance){
    if(inputBalance<=0){
        inputBalance=00;
    }
    document.getElementById('withdrawAmmount').innerText=inputBalance;
}
function setBalanceAmount (inputBalance){
    if(inputBalance<=0){
        inputBalance=00;
    }
    document.getElementById('balanceAmmount').innerText=inputBalance;
}

setBalanceAmount(0);
setDepositAmount(0);
setWithdrawAmount(0);

document.getElementById('depositeInToAccountButton').addEventListener('click',function(){
    var depositeAmmountInput = document.getElementById('depositingAmount').value;
    setDepositAmount(depositeAmmountInput);
    var totalBalance = document.getElementById('balanceAmmount').innerText;
    setBalanceAmount(totalBalance+depositeAmmountInput);
    document.getElementById('depositingAmount').innerText=0;
})

document.getElementById('withdrawFromAccountButton').addEventListener('click',function(){
    var withdrawAmmountInput = document.getElementById('withdrawingAmmount').value;
    setWithdrawAmount(withdrawAmmountInput);
    var totalBalance = document.getElementById('balanceAmmount').innerText;
    setBalanceAmount(totalBalance-withdrawAmmountInput);
    document.getElementById('withdrawingAmmount').innerText=0;
})