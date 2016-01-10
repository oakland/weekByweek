$(document).ready(function() {
    $("input#loginbtn").unbind('click').click(function(e) {
        // alert("test is ok");
        e.preventDefault();
        var account = $("input#account").val();
        var password = $("input#password").val();
        // console.log(account,password);
        $.ajax({
            url: 'mysql.php',
            type: 'POST',
            data: {
                account: account,
                password: password,
                state: "1"
            },
            success: function(data) {
                // console.log(data);
                var afterparse = JSON.parse(data); //将后端传回来的json字符串解析成json格式
                if (afterparse.msg == 1) {
                    // window.open('baidu_news_adminsys.html', '_self'); //若后台验证成功，跳转到管理页面
                    location.href = 'baidu_news_adminsys.html'; //若后台验证成功，跳转到管理页面 
                } else {
                    alert('密码或账号错误!');
                };
            },
            error: function() {
                alert("error!")
            }
        }); //ajax end
    }); //btn click function end
}); //document ready function
