$(document).ready(function() {
        // alert("test");

        $.ajax({
            url: 'mysql.php',
            type: 'POST',
            data: {
                "state": 0//,
                // "idamount":"3"
            },
            success: function(data) {
            	// console.log(data);
                var afterparse = JSON.parse(data);//将后端传回来的json字符串解析成json格式
                for (var i = 0; i < afterparse.length; i++) {
                    url = afterparse[i].url;
                    pic = afterparse[i].pic;
                    title = afterparse[i].title;
                    content = afterparse[i].content;
                    topic = afterparse[i].topic;
                    time = afterparse[i].time;
                    $("img.news-img").eq(i).attr({
                        'src':pic,
                    });
                    $("h4.news-title a").eq(i).text(title);
                    $("span.date").eq(i).text(time);
                    $("span.topic-classify").eq(i).text(topic);
                };
            },
            error:function(){
            	alert("error!")
            }
        }); //ajax function end
    }) //document ready function
