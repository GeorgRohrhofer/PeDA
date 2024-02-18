$(document).ready(function(){
    $("#passwordField").keydown(function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
    if (code===13) {
            checkLogin();
        }
    });

    $("#usernameField").keydown(function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
    if (code===13) {
            checkLogin();
        }
    });

    $("#error").hide();
});


function checkLogin()
{
    var username = $("#usernameField").val();
    var password = $("#passwordField").val();

    if (username === "" || password === ""){
        return;
    }

    var key = CryptoJS.enc.Base64.parse("5DByrBheits6gUD4FK7RwZp8QjFMRYd2");
    var iv = CryptoJS.enc.Utf8.parse("1020304050607080");

    var passwordEncrypted = CryptoJS.AES.encrypt(password, key, {iv: iv, mode: CryptoJS.mode.CBC}).toString();
    
    console.log(passwordEncrypted);
    
    $.post("/user/check", {"username": username, "password" : passwordEncrypted}, function(data){
        console.log(data.isValid);
        if (data.isValid)
        {
            document.cookie = "loginTokenPeDA=" + passwordEncrypted + "; expires=" + new Date(new Date().getTime() + 15 * 60000) + "";
            window.location.href = "/index.html";
        }
        else
        {
            $("#error").text("Benutzername oder Password falsch");
            $("#error").show();
        }
    });
}

function logout()
{
	document.cookie = "loginTokenPeDA=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}