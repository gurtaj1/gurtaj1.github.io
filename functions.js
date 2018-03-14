$(document).ready(function(){
    //navbar functions
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
    //linkPage unhide/hide functions
    var linkPageId;
    var scrollPosition1;

    $(".screen").click(function(event){
        linkPageId = "#" + event.target.id + "Page";
        scrollPosition1 = $(document).scrollTop();
        $(linkPageId).css({"top": scrollPosition1})
        $(linkPageId).fadeIn(function(){
            $(linkPageId).css({"top": "0px"})
            $(".normalView").css({"display": "none"});
            window.scrollTo(0, 0);
        });
    })

    $(".closeLinkView").click(function(){
        var scrollPosition2 = $(document).scrollTop();
        var scrollPositionDifference = scrollPosition1 - scrollPosition2;
        $(".normalView").css({"display": "block"});
        window.scrollTo(0, scrollPosition1);
        $(linkPageId).css({"top": scrollPositionDifference})
        $(linkPageId).fadeOut();

    })

})