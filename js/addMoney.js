document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addmoney = document.getElementById('input-add-money').value;
    console.log(addmoney);
    
    const addPinNumber = document.getElementById('input-pin-number').value;
    console.log(addPinNumber);
    if(addPinNumber === '1234'){
        let balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        let a = parseFloat(balance);
        let b = parseFloat(addmoney);
        const newbalance = a+b;
        console.log(newbalance);
        document.getElementById('account-balance').innerText = newbalance; 

    }else{
        alert("grand maru tumko")
    }

    // second part start
   
})

