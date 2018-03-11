$(document).ready(function(){
    $(".navToggle").click(function(){
        if ($(".narrowLinks").css("display") === "none") {
            $(".narrowLinks").slideDown();
        } else {
            $(".narrowLinks").slideUp();
        }
    })
    $(".navToggleOne").click(function(){
        if ($(".narrowLinks").css("display") === "block") {
            $(".narrowLinks").css({"display": "none"});
        } 
    })
})