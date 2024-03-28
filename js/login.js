let username = document.getElementById("username")
let password = document.getElementById("password")

let loginBtn = document.getElementById("sign_in")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener ("click" , function(){
 
    if (username.value==="")
    {
        alert("please fill your \"User name\" it's mandatory")
       
    } 

    else if (password.value===""){

        alert("please fill your \"Password\" it's mandatory")
       
    }
     else {

        if ( getUser && getUser.trim() === username.value.trim()  ) // Check user name
        {
            if (getPassword && getPassword.trim() === password.value.trim() )  //check password
            { 
                
                setTimeout ( () => {
                    window.location = "index.html"
                } , 1000)

            }
            else{
                password.value="";
                alert("password is wrong ")
            }
     
        } 
        else {
            username.value="";
            alert("username is wrong ")
        }
    }
})



