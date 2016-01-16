$(document).ready(function() {
    var toleft = 0;
    imgwidth = $(".bannerbox img").eq(0).width();
    $(".next").click(function() {
        $(".bannerbox").animate({
            left: -(toleft += imgwidth)
        }, 100);
        if (toleft > 4 * imgwidth) {
            $(".bannerbox").animate({
                left: 0
            }, 0);
            toleft = 0;
        }
    });
    $(".prev").click(function() {
        if (toleft < imgwidth) {
            toleft = 5 * imgwidth
        }
        $(".bannerbox").animate({
            left: -(toleft -= imgwidth)
        }, 100);
    });

    //---下面是索引代码-----
    $(".indexbox .indexbtn").eq(0).click(function() {
        $(".bannerbox").animate({
            left: "0px"
        }, 100);
        $(".indexbox span").removeClass("activeindex");
        $(this).addClass("activeindex");
    });
    $(".indexbox .indexbtn").eq(1).click(function() {
        $(".bannerbox").animate({
            left: -imgwidth
        }, 100);
        $(".indexbox span").removeClass("activeindex");
        $(this).addClass("activeindex");
    });
    $(".indexbox .indexbtn").eq(2).click(function() {
        $(".bannerbox").animate({
            left: -imgwidth * 2
        }, 100);
        $(".indexbox span").removeClass("activeindex");
        $(this).addClass("activeindex");
    });
    $(".indexbox .indexbtn").eq(3).click(function() {
        $(".bannerbox").animate({
            left: -imgwidth * 3
        }, 100);
        $(".indexbox span").removeClass("activeindex");
        $(this).addClass("activeindex");
    });
    $(".indexbox .indexbtn").eq(4).click(function() {
        $(".bannerbox").animate({
            left: -imgwidth * 4
        }, 100);
        $(".indexbox span").removeClass("activeindex");
        $(this).addClass("activeindex");
    });
    //---上面是索引代码----
    //---下面是自动执行的代码----
    var autoRoll = function() {
        $(".bannerbox").animate({
            left: -(toleft += imgwidth)
        }, 1500);
        if (toleft > 4 * imgwidth) {
            $(".bannerbox").animate({
                left: 0
            }, 0);
            toleft = 0;
        }
    };
    timer = setInterval(
        autoRoll, 5000);
    //---上面是自动执行的代码----
    //---下面是回到顶部代码-----
    showScroll();

    function showScroll() {
        $(window).scroll(function() {
            var scrollValue = $(window).scrollTop();
            scrollValue > 100 ? $(".gotoparrow").fadeIn() : $(".gotoparrow").fadeOut();
        });
    };
    $(".gotoparrow").click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 400);
        })
        //---上面是回到顶部代码-----
});
