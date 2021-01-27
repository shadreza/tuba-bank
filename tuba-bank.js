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
    if(parseFloat(inputBalance)<0){
        inputBalance=0;
    }
    var alreadyAmount = parseFloat(document.getElementById('depositAmmount').innerText);
    if(alreadyAmount>=0){

    }
    else{
        alreadyAmount=0;
    }
    document.getElementById('depositAmmount').innerText = alreadyAmount + parseFloat(inputBalance);
}
function setWithdrawAmount (inputBalance){
    if(inputBalance<0){
        inputBalance=0;
    }
    var alreadyAmount = parseFloat(document.getElementById('withdrawAmmount').innerText);
    if(alreadyAmount>=0){

    }
    else{
        alreadyAmount=0;
    }
    document.getElementById('withdrawAmmount').innerText = alreadyAmount + parseFloat(inputBalance);
}
function setBalanceAmount (inputBalance){
    if(inputBalance<=0){
        inputBalance=0;
    }
    document.getElementById('balanceAmmount').innerText=inputBalance;
}

setBalanceAmount(0);
setDepositAmount(0);
setWithdrawAmount(0);

document.getElementById('depositeInToAccountButton').addEventListener('click',function(){
    var depositeAmmountInput = parseFloat(document.getElementById('depositingAmount').value);
    if(depositeAmmountInput<0){
        alert("Invalid Amount!");
        document.getElementById('depositingAmount').value="deposite your money";
        return;
    }
    setDepositAmount(depositeAmmountInput);
    var totalBalance = parseFloat(document.getElementById('balanceAmmount').innerText);
    if(totalBalance>=0){

    }
    else{
        totalBalance=0;
    }
    setBalanceAmount(totalBalance+depositeAmmountInput);
    document.getElementById('depositingAmount').value="deposite your money";
})

document.getElementById('withdrawFromAccountButton').addEventListener('click',function(){
    var withdrawAmmountInput = parseFloat(document.getElementById('withdrawingAmmount').value);
    if(withdrawAmmountInput<0){
        alert("Invalid Amount!");
        document.getElementById('withdrawingAmmount').value="withdraw your money";
        return;
    }
    var totalBalance = parseFloat(document.getElementById('balanceAmmount').innerText);
    if(withdrawAmmountInput>totalBalance){
        alert("Not Enough Balance!");
        document.getElementById('withdrawingAmmount').value="withdraw your money";
        return;
    }
    setWithdrawAmount(withdrawAmmountInput);
    if(totalBalance>=0){

    }
    else{
        totalBalance=0;
    }
    setBalanceAmount(totalBalance-withdrawAmmountInput);
    document.getElementById('withdrawingAmmount').value="withdraw your money";
})