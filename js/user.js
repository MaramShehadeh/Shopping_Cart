
// *******************************Hide sign and show user info after login**************************************************************************

let userInfo = document.getElementById("user_info")
let userdata = document.getElementById("user")
let sign_links = document.getElementById("sign")
let logOutBtn = document.getElementById("logout")


if (localStorage.getItem("username")){
  
    sign_links.remove()
    userInfo.style.display ="flex"
    userdata.innerHTML = localStorage.getItem("username")
}


logOutBtn.addEventListener("click", function (){

    localStorage.clear();
    setTimeout(() => {
        
        window.location = "login.html";
    } , 1000)
})