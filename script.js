document.getElementById("fname").addEventListener("change",test); 
document.getElementById("lname").addEventListener("change",test);
function test()
{
  document.getElementById("fname").value=document.getElementById("fname").value.toUpperCase();
  document.getElementById("lname").value=document.getElementById("lname").value.toUpperCase();
}
var ele=document.getElementById("error");
document.getElementById("mobile").addEventListener("change",fun);
let button=document.querySelector(".submit");
button.disabled=true;
function fun()
{
  if(document.getElementById("mobile").value.length!==10)
  {
    ele.innerText=`Please enter valid mobile no.`;
    button.disabled=true;
  }
  else if(document.getElementById("mobile").value.length===10){
    ele.style.display="none";
    button.disabled=false;
  }
}