document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney);
    const addInput = document.getElementById('input-pin-number').value;
    console.log(addInput);
    if(addInput === '1234'){
        console.log("add money to your account");
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)
         let a =parseFloat(balance);
         let b = parseFloat(addMoney);
      const totalbalance =a + b;
      console.log(totalbalance);
        document.getElementById('account-balance').innerText = totalbalance;

    }else{
        alert("please try again mc")
    }
})