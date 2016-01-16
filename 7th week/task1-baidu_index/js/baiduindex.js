$(document).ready(function() {
    $(".more_product").on("mouseover", function() {
        $("#more_container").css({
            "display": "block"
        }).on("mouseout", function() {
            $("#more_container").css({
                "display": "none"
            })
        })
    })
    $("#more_container").on("mouseover", function() {
            $("#more_container").css({
                "display": "block"
            })
        })
    // above “更多产品” 功能
    $(".header_set").on("mouseover", function() {
        $("#setting").css({
            "display": "block"
        }).on("mouseout", function() {
            $("#setting").css({
                "display": "none"
            })
        })
    })
    $("#setting").on("mouseover", function() {
            $("#setting").css({
                "display": "block"
            })
        })
    // above “设置” 功能
    // blow “用户导航栏内容”
    $("#userlist li").each(function(index) {
        $(this).click(function(){
        	$("#userlist li").removeClass("activeli");
        	$(this).addClass("activeli");
            $("div.mycontent").removeClass("mycontentin");
            $("div.mycontent").eq(index).addClass("mycontentin");
        })
    })
    // above “用户导航栏内容”
});
