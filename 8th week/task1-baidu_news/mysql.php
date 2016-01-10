<?php 
// header("Content-type:application/json;charset=utf-8");//设置报头utf-8

//blow html and php connection test
// $state = $_REQUEST['state'];
// if($state==0){
// 	echo "ajax connection is ok";
// }else{
// 	echo "not ok";
// }
//above html and php connection test

//blow php and sql connection test
$state = $_REQUEST['state'];//获取ajax提交的数据

if($state==0){
	$con = mysql_connect("localhost","root","");
	if (!$con)
	  {
		die('Could not connect: ' . mysql_error());
	  }else{
	  	mysql_select_db("phplesson", $con);//传入数据库的名字
		$result = mysql_query("SELECT * FROM `newslist` WHERE id<'4'");
		while($row = mysql_fetch_array($result))
		  {
		  	$row = array('url'=>$row['url'],'pic'=>$row['pic'],'title'=>$row['title'],'content'=>$row['content'],'topic'=>$row['topic'],'time'=>$row['time'],'id'=>$row['id']);
		    $dataArr[] = $row;
		  }
		echo json_encode($dataArr);//把从sql中得到的数组转化成json字符串的形式
	  }
};
//above php and sql connection test

mysql_close($con);//关闭数据库连接

?>