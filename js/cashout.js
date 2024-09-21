document.getElementById('btn-add-money1').addEventListener('click',function(event){
    event.preventDefault();
    const addmoney1 = document.getElementById('input-add-money1').value;
    console.log(addmoney1);
    
    const addPinNumber1 = document.getElementById('input-pin-number1').value;
    console.log(addPinNumber1);
    if(addPinNumber1 === '1234'){
        let balance1 = document.getElementById('account-balance').innerText;
        console.log(balance1);

        let a = parseFloat(balance1);
        let b = parseFloat(addmoney1);
        const newbalance1 = a - b;
        console.log(newbalance1);
        document.getElementById('account-balance').innerText = newbalance1; 

    }else{
        alert("chup sale")
    }
})