$(document).ready(function() {
        // alert("test is ok")
        // var tdlength = $("tbody tr").eq(0).children("td").length;
        // console.log(tdlength);
        // alert("欢迎登陆百度新闻操作系统！");
        $.ajax({
                url: "mysql.php",
                type: "POST",
                data: {
                    "state": "0" //,
                        // "idamount":"7"
                },
                success: function(data) {
                    // console.log(data);
                    var afterparse = JSON.parse(data); //将后端传回来的json字符串解析成json格式
                    // console.log(afterparse[0].length);
                    for (var i = 0; i < afterparse.length; i++) {
                        url = afterparse[i].url;
                        pic = afterparse[i].pic;
                        title = afterparse[i].title;
                        content = afterparse[i].content;
                        topic = afterparse[i].topic;
                        time = afterparse[i].time;
                        id = afterparse[i].id;
                        $("tbody tr").eq(i).children("td").eq(0).text(url);
                        $("tbody tr").eq(i).children("td").eq(1).text(pic);
                        $("tbody tr").eq(i).children("td").eq(2).text(title);
                        $("tbody tr").eq(i).children("td").eq(3).text(content);
                        $("tbody tr").eq(i).children("td").eq(4).text(topic);
                        $("tbody tr").eq(i).children("td").eq(5).text(time);
                        $("tbody tr").eq(i).children("td").eq(6).text(id);
                    };
                },
                error: function() {
                    alert("error!")
                }

            }) //load ajax end
            //增
        $("#insertbtn").click(function(e) {
            var inputurl = $("input#url").val();
            var inputpic = $("input#pic").val();
            var inputtitle = $("input#title").val();
            var inputcontent = $("input#content").val();
            var inputtopic = $("input#topic").val();
            var inputtime = $("input#time").val();
            var inputid = $("input#id").val();
            e.preventDefault();
            // console.log(inputurl+inputpic+inputtitle+inputcontent+inputtopic+inputtime+inputid);
            // alert("test is ok");
            $.ajax({
                url: "mysql.php",
                type: "POST",
                data: {
                    "state": "2",
                    "url": inputurl,
                    "pic": inputpic,
                    "title": inputtitle,
                    "content": inputcontent,
                    "topic": inputtopic,
                    "time": inputtime,
                    "id": inputid
                },
                success: function(data) {
                    if (data == "success") {
                        alert("录入成功!");
                    } else {
                        alert("录入失败，请联系后台人员")
                    };
                    $("input#url").val("");
                    $("input#pic").val("");
                    $("input#title").val("");
                    $("input#content").val("");
                    $("input#topic").val("");
                    $("input#time").val("");
                    $("input#id").val("");
                },
                error: function() {
                    alert("error!")
                }
            }); //insert ajax end
        }); //insert function end
        //删
        $("#deletbtn").click(function(e) {
            var inputid = $("input#id").val();
            e.preventDefault();
            // alert("test is ok");
            $.ajax({
                url: "mysql.php",
                type: "POST",
                data: {
                    "state": "3",
                    "id": inputid
                },
                success: function(data) {
                    if (data == "DELETE success!") {
                        alert("删除成功!");
                        window.location.href = window.location.href;
                    } else {
                        alert("删除失败，请联系后台人员")
                    };
                },
                error: function() {
                    alert("error!")
                }
            }); //delete ajax end
        }); //delete function end
        //改
        $("#updatebtn").click(function(e) {
            var inputurl = $("input#url").val();
            var inputpic = $("input#pic").val();
            var inputtitle = $("input#title").val();
            var inputcontent = $("input#content").val();
            var inputtopic = $("input#topic").val();
            var inputtime = $("input#time").val();
            var inputid = $("input#id").val();
            e.preventDefault();
            // alert("test is ok");
            if (inputid == "") {
                alert("请输入id值")
            } else {
                $.ajax({
                    url: "mysql.php",
                    type: "POST",
                    data: {
                        "state": "4",
                        "url": inputurl,
                        "pic": inputpic,
                        "title": inputtitle,
                        "content": inputcontent,
                        "topic": inputtopic,
                        "time": inputtime,
                        "id": inputid
                    },
                    success: function(data) {
                        if (data == "UPDATE success!") {
                            alert("修改成功!");
                            window.location.href = window.location.href;
                        } else {
                            alert("修改失败，请联系后台人员")
                        };
                    },
                    error: function() {
                        alert("error!")
                    }
                }); //update ajax end
            };
        }); //update function end
    }) //ready function end
