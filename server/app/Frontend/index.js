function checkLoginToken()
{
	var cookies = document.cookie;
	var output = {};
	cookies.split(/\s*;\s*/).forEach(function(pair) {
		pair = pair.split(/\s*=\s*/);
  		output[pair[0]] = pair.splice(1).join('=');
	});
	var json = JSON.stringify(output, null, 4);

	result = JSON.parse(json);

	if (!(result.loginTokenPeDA))
	{
		window.location.href = "/login.html"
	}
}

function logout()
{
	document.cookie = "loginTokenPeDA=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	window.location.reload();
}
