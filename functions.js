$(document).ready(function(){
    $(".navToggle").click(function(){
        if ($(".narrowLinks").css("display") === "none") {
            $(".narrowLinks").slideDown(function(){
                $(".narrowLinks").css({"border-top": "1px solid rgb(80, 0, 80)"});
            });
        } else {
            $(".narrowLinks").css({"border-top": "none"});
            $(".narrowLinks").slideUp();
        }
    })
    $(".navToggleOne").click(function(){
        if ($(".narrowLinks").css("display") === "block") {
            $(".narrowLinks").css({"display": "none"});
        } 
    })
})