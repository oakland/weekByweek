<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>phptest</title>
	<script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
	<!-- 加载了百度cdn中的jquery资源，是为了后面会用到的jquery的$.ajax()方法 -->
</head>
<body>
	<?php
	/*一、外部申明的变量在函数内部不能获取，需要通过global方法将变量转化为全局变量*/
	$a="hello";
	function testglobal(){
		global $a;//如果将 global $a; 删掉，则执行test()之后会报错，变量a没有定义。
		echo $a;
	}
	testglobal();

	echo "<hr>";//分隔符------------------------------------------------------------------------

	/*二、超全局变量和引入外部php文件：
	$GLOBALS['variable'] = something;
	require_once("document.php");
	这个变量可以是从其他php文件引入进来的也可以。但是要想执行这个变量，必须带着变量的头，就是必须以$GLOBALS['variable']方式展现*/
	require_once("phptest2.php");//引入外部php文件
	function testGLOBALS(){
		global $a;
		echo $a."&nbsp;&nbsp;".$GLOBALS['b'];#必须要以完整的 $GLOBALS['b'] 形式才能读取变量b，不能用$b的形式。
	}
	testGLOBALS();

	echo "<hr>";//分隔符------------------------------------------------------------------------

	/*三、定义数组以及用json_encode()方法输出json格式的数组：
	$arrayName = array('' => '', '' => '');
	也可以是 $arrayName = array(‘’,‘’ );
	php中的数组和js中的数组不一样，他的键值对中的键不一定必须是从0开始的数字，可以是任意值*/
	$myCars = array('big' =>"ford",'medium'=>"das auto",'small'=>'smart');//键可以自定义，也可以不定义，如果不定义，默认情况就是0、1、2...
	echo $myCars['big']."<br>";//和js中获取数组元素一样的方法，不过注意中括号里必须要有引号，如果是数字可以没有引号。
	echo json_encode($myCars)."<br>";//可以通过json的格式输出Php数组。
	echo json_encode($myCars['small']);//甚至可以通过json的格式输出Php数组中的某个值。

	echo "<hr>";//分隔符------------------------------------------------------------------------

	/*四、通过isset()方法判断一个变量是否被申明了，如果没有申明就是undefined.*/
	if (isset($x)) {
		echo "我被申明了";
	}else{
		echo "我<u>没有</u>被申明";
	}

	echo "<hr>";//分隔符------------------------------------------------------------------------

	/*五、了解PHP session ：
	这个在视频里只是简单提到了一下，需要单独重新学习，先把这个标题放在这里*/

	echo "<hr>";//分隔符------------------------------------------------------------------------

	?>
	<!--六、了解前后端配合的过程：
	通过前端的form表单提交内容到后台php文件，然后php文件对提交过来的表单进行操作，之后再返回给前端一个内容的整个过程，其中有很多知识点需要掌握。-->
	<!-- 首先在前端定义form表单 -->
	<form action="phptest2.php" method="get"><!-- action 对应的是提交的内容到后端的位置，就是哪个php文件；
	method一般有get和post两种方式，get提交表单是不安全的，一般会把参数放在url中，而post会比较安全，不会出现在url中，一般密码这一类的肯定不会用get，而用post-->
		<label for="name">UserName:</label><!-- label 里for的内容对应的是后面input的id，因为for的内容肯定是唯一的 -->
		<input type="text" name="username" id="name"><!-- input 里name属性必须要有，这个name是和后端进行交互用的，后端php通过name值来获取前端的input提交内容 -->
		<br>
		<label for="password">Password:</label>
		<input type="password" name="password" id="password">
		<br>
		<input type="button" id="btn" value="Submit">
	</form>
<script type="text/javascript">
	$("#btn").click(function(e){
		e.preventDefault();//阻止默认事件，在本例中就是阻止click事件的发生。
		// 前面在head部分中加载了百度cdn的jquery，在这里要用到jquery的$.ajax()方法，对数据进行异步传输
		$.ajax({
	        url:'phptest2.php',//提交到哪里
	        type:'get',//提交的方式
	        // dataType:'json',
	        data:{username:$("#name").val()},//提交的内容，必须是object类型的格式或者string类型的格式，这个username必须是input里面的name属性吗？有待考证
	        //就是说data:{}，这个对象中的键值对的键，必须是input中name属性的值吗？？？？？？？？？？？？？？？？？？
	        //success:function(data){console.log(data);},
	        //如果提交成功则执行此函数，这个成功指的是与后端连通，而并非在后端正确运行。
	        success:function(data){alert(data.msg);},//将上面的console.log()改为alert(data.msg)，就是弹出后端data，也就是json格式的键为msg的内容。
	        error:function(){alert('登陆失败');}//如果提交失败，则执行此函数，这个失败指的是于后端连通的失败，而并非在后端正确运行。例如把url写错，url:'phptest.phpp'，
	        //才会执行此函数。
		})
	})
</script>
</body>
</html>
