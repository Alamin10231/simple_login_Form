document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney);
    const addInput = document.getElementById('input-pin-number').value;
    console.log(addInput);
})