$(document).ready(function(){
    $(".navToggle").click(function(){
        if ($(".narrowLinks").css("display") === "none") {
            $(".narrowLinks").css({"display": "block"});
        } else {
            $(".narrowLinks").css({"display": "none"});
        }
    })
})