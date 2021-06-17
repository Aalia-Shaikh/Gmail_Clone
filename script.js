function login()
{
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    if(uname==="aalia@gmail.com" && pass==="aalia")
    {
        location.assign("./index1.html")
    }
    else{
        window.alert("Login Failed");
    }
}
