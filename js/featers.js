document.getElementById('cashout-btn').addEventListener('click',function(){
   
    document.getElementById('cashout-form').classList.remove('hidden');
   
    document.getElementById('cash-add-form').classList.add('hidden');

})

document.getElementById('addcash-btn').addEventListener('click',function(){
   
    document.getElementById('cashout-form').classList.add('hidden');
   
    document.getElementById('cash-add-form').classList.remove('hidden');

})

