function submit(){
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
let date=document.getElementById("date").value;
if(username ==="" || password ==="" || date ===""){
    alert("Please enter all details");
}else{
    alert("Login success");
}}
