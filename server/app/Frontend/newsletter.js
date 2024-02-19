$(document).ready(function(){
    $.get("/newsletter", function(data)
    {
        data.result.forEach(function(item){
            console.log(item);
        });
    });
});