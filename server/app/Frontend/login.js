var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function checkLogin()
{
    var username = $("usernameField").val();
    var password = $("passwordField").val();

    passwordEncrypted = "";

    $.get("/user/check", {"username": username, "password" : password}, function(data){
        console.log(data);


        expiresIn = new Date(Date.now())

        document.cookie = "loginToken=" + passwordEncrypted + "; expires=" + new Date(new Date().getTime() + 15 * 60000) + "";
        window.location.href = "/index.html";
    });

    return false;
}