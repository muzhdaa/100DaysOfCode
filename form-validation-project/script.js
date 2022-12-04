function validateForm(){
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["password"].value;
  if(x==""){
    alert("please enter your email address !");
    return false;
  }
  else if (y==""){
     alert("please enter your password  !");
    return false;
  }
  else {
    alert("thanks your form submitted :) ");
    return true;
  }
}