<?php
header("Content-type: text/html; charset=utf-8");
/*上面是在设置header，这个就是设置echo值输出的header，这个设置了header的charset为utf-8，不会乱码。有request header和
response header两个header*/
// header("Content-type: application/json; charset=utf-8");
/*之所以不用上面那个header是因为一般情况下提交的表单内容都是json格式，就是对象的格式。对应的下面的操作需要把提交过来的json格式进行json_encode()方法*/
$GLOBALS['b'] = "world";	
echo $_REQUEST['username'];
/*通过 $_GET['inputname'] 方法可以获得前端form表单通过get方法提交给php文件的，相应的inputname的input值。
例如，$_GET['username']获得的就是前端<input type="text" name="username">输入框中的内容。这就是为什么需要在前端input标签属性中必须要写name属性的原因。
而$_POST['username']是获取通过post方法提交给php文件的内容。但是因为一般情况下，你也不知道前端是通过get还是通过post方法提交的，所以一般用$_REQUEST['username']方法，
用这个方法的话可以是get提交的表单也可以是post提交的表单*/
#获取到了相应的input值之后，就可以对这些值进行操作了。例如，进行下面的操作

echo "<hr>";#分隔符================================================================================

$username=$_REQUEST['username'];
if ($username=="admin") {
	// echo "登陆 success";
	echo json_encode(array('msg' => '登陆 success', 'errorCode'=>'ok'));
	//因为前端把dataType改成了json格式，所以这里也需要更改？？需要问老师。后台输出json格式的数据，会在前台输出json格式的数据。
}else{
	// echo "登陆 failed";
	echo json_encode(array('msg' => '登陆 fail', 'errorCode'=>'no'));
	//因为前端把dataType改成了json格式，所以这里也需要更改？？需要问老师。后台输出json格式的数据，会在前台输出json格式的数据。
};

?>