// // console.log("ufff matha fatia falaio na miya");
// document.getElementById('button-login').addEventListener('click',function(event){
// event.preventDefault();
//  console.log('login button clickedddd')
//  const phoneNumber = document.getElementById('number-type').value;
//  const PinCode = document.getElementById('pinCode').value;
//  console.log(phoneNumber,PinCode);
//  if(phoneNumber === '5' && PinCode === '1234'){
//     console.log('you are login')
//  }else{
//     alert("wrong phone number or pin")
//  }
// })

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log("koduuuu")
    const phoneNumber = document.getElementById('number-type').value;
    const PinCode = document.getElementById('pinCode').value;
    console.log(phoneNumber,PinCode)
   
    if(phoneNumber === '5' && PinCode === '1234'){
             console.log('you are login')
             window.location.href ='/home.html'
          }else{
             alert("wrong phone number or pin")
          }

})