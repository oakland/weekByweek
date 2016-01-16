$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = {"data": [{"src": "img1.jpg"}, {"src": "img2.jpg"}, {"src": "img3.jpg"}, {"src": "img4.jpg"}, {"src": "img5.jpg"}, {"src": "img6.jpg"}]}
        window.onscroll = function() {
            if (scrollside()) {
                // 在下面插入load.gif图片
                  
                // 在上面插入load.gif图片
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo($(box));
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                })
                imgLocation();
            }
        }
    });

});
    
function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < documentHeight + scrollHeight) ? true : false;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    // console.log(num);
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            // console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            // console.log(minboxIndex);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            })
            boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}
