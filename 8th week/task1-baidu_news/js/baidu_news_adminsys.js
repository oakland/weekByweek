$(document).ready(function() {
        // alert("test is ok")
        $.ajax({
                url: "mysql.php",
                type: "POST",
                data: {
                    "state": "0" //,
                },
                success: function(data) {
                    // console.log(data);
                    var afterparse = JSON.parse(data); //将后端传回来的json字符串解析成json格式
                    for (var i = 0; i < afterparse.length; i++) {
                        url = afterparse[i].url;
                        pic = afterparse[i].pic;
                        title = afterparse[i].title;
                        content = afterparse[i].content;
                        time = afterparse[i].time;
                        topic = afterparse[i].topic;
                        id = afterparse[i].id; //id 在数据库中是自增且unique的，不应该由前台人员来进行操作。
                        $("<tr></tr>").appendTo("tbody");
                        var mytr = $("tbody tr").eq(i);
                        $("<td></td>").text(url).appendTo(mytr);
                        $("<td></td>").text(pic).appendTo(mytr);
                        $("<td></td>").text(title).appendTo(mytr);
                        $("<td></td>").text(content).appendTo(mytr);
                        $("<td></td>").text(time).appendTo(mytr);
                        $("<td></td>").text(topic).appendTo(mytr);
                        $("<td></td>").text(id).appendTo(mytr);
                        $("<td></td>").text(i + 1).appendTo(mytr);
                        $("<td></td>").html('<button type="submit" class="deletbtn btn btn-warning">删除</button><button type="submit" class="updatebtn btn btn-warning">修改</button>').appendTo(mytr);
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
            var inputcontent = $("textarea#content").val();
            var inputtime = $("input#time").val();
            var inputtopic = $("input#topic").val();
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
                    "time": inputtime,
                    "topic": inputtopic
                        // "id": inputid
                },
                success: function(data) {
                    if (data == "success") {
                        alert("录入成功!");
                    } else {
                        alert("录入失败，请联系后台人员")
                    };
                    // window.location.href = window.location.href;
                },
                error: function() {
                    alert("error!")
                }
            }); //insert ajax end
        }); //insert function end
        //删
        $("td button.deletbtn").click(function() {
            alert("test is ok");
            // var r = confirm("确实要删除此行？");
            // if (r == true) {
            //     var mylength = $(this).parent().siblings().length;
            //     alert(mylength);
            //     // e.preventDefault();
            //     // alert("test is ok");
            //     // $.ajax({
            //     //     url: "mysql.php",
            //     //     type: "POST",
            //     //     data: {
            //     //         "state": "3",
            //     //         "id": inputid
            //     //     },
            //     //     success: function(data) {
            //     //         if (data == "DELETE success!") {
            //     //             alert("删除成功!");
            //     //             window.location.href = window.location.href;
            //     //         } else {
            //     //             alert("删除失败，请联系后台人员")
            //     //         };
            //     //     },
            //     //     error: function() {
            //     //         alert("error!")
            //     //     }
            //     // }); //delete ajax end
            // };
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
