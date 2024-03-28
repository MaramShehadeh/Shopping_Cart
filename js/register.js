let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let ConfirmPassword = document.getElementById("cpassword")

let register_btn = document.getElementById("sign_up")

register_btn.addEventListener ("click" , function (){

    if (username.value===""){

        alert("please fill your \"User name\" it's mandatory")
       
    } 
    else if (email.value===""){

        alert("please fill your \"Email\" it's mandatory")
       
    } 
    else if (password.value===""){

        alert("please fill your \"Password\" it's mandatory")
       
    } 
    else if (ConfirmPassword.value===""){

        alert("please fill the \"Confirm password\" it's mandatory")
       
    } 

    else if (ConfirmPassword.value!=password.value){

        ConfirmPassword.value="";
        password.value="";
        alert("The password does not match, please enter it again")
       
       
    } 
    else {
        
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);

        setTimeout ( () => {
            window.location = "login.html"
        } , 1000)
    }
})

