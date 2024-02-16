var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function load()
{
    $("passwordField").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            checkLogin();
        }
    });
}


function checkLogin()
{
    var username = $("usernameField").val();
    var password = $("passwordField").val();

    var key = CryptoJS.enc.Base64.parse("5DByrBheits6gUD4FK7RwZp8QjFMRYd2");
    var iv = CryptoJS.enc.Utf8.parse("1020304050607080");

    var passwordEncrypted = CryptoJS.AES.encrypt(password, key, {iv: iv, mode: CryptoJS.mode.CBC}).toString();
    
    console.log(passwordEncrypted);
    
    $.post("/user/check", {"username": username, "password" : passwordEncrypted}, function(data){

        document.cookie = "loginTokenPeDA=" + passwordEncrypted + "; expires=" + new Date(new Date().getTime() + 15 * 60000) + "";
        window.location.href = "/index.html";
    });
}

function logout()
{
	document.cookie = "loginTokenPeDA=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}