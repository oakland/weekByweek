<?php 
// header("Content-type:application/json;charset=utf-8");//请教下老师，为什么设置了header反而报错呢？我把header注释掉反而没有问题？？？？

$con = mysql_connect("localhost","root","");//链接数据库
$state = $_REQUEST['state'];//获取ajax提交state数据
// $idamount = $_REQUEST['idamount'];//获取ajax提交id数量

//blow php select()
function select(){
	global $con;//转化为全局变量
	// global $idamount;
	if (!$con)
	  {
		die('Could not connect: ' . mysql_error());
	  }else{
	  	mysql_select_db("phplesson", $con);//传入数据库的名字
	  	mysql_query("set names 'utf8'");
		$result = mysql_query("SELECT * FROM `newslist` WHERE 1", $con);//WHERE 1 表示选中所有行
        $dataArr = array();
		while($row = mysql_fetch_array($result))
		  {
		  	$row = array('url'=>$row['url'],'pic'=>$row['pic'],'title'=>$row['title'],'content'=>$row['content'],'topic'=>$row['topic'],'time'=>$row['time'],'id'=>$row['id']);
		    $dataArr[] = $row;
		  }
		echo json_encode($dataArr);//把从sql中得到的数组转化成json字符串的形式
	  };
};
//above php select()
//blow login()
function login(){
	$account = $_REQUEST['account'];
	$password = $_REQUEST['password'];
	global $con;
	if (!$con)
	  {
		die('Could not connect: ' . mysql_error());
	  }else{
	  	mysql_select_db("phplesson", $con);//传入数据库的名字
	  	mysql_query("set names 'utf8'");
		  $result = mysql_query("SELECT * FROM `login` WHERE name='$account'", $con);
        while($row = mysql_fetch_array($result))
        {
          // 若密码和用户名验证成功，则返回前台成功状态信号
          if($password == $row['password']){
              echo json_encode(array('msg'=>'1','errorCode'=>'ok'));
          }else{
              echo json_encode(array('msg'=>'0','errorCode'=>'no'));
          }
          $account ='';//重置$account
          $password ='';//重置$password
        }
	  };
}
//above login()

//blow insert()
function insert(){
  global $con;
  $url = $_REQUEST['url'];
  $pic = $_REQUEST['pic'];
  $title = $_REQUEST['title'];
  $content = $_REQUEST['content'];
  $topic = $_REQUEST['topic'];
  $time = $_REQUEST['time'];
  // $id = $_REQUEST['id'];//id在后台为自增且为unique，不能从由前台人员上传
  if (!$con)
  {
    die('Could not connect: ' . mysql_error());
    }else{
      mysql_select_db("phplesson", $con);
      mysql_query("set names 'utf8'");//避免乱码
      $sql = "INSERT INTO `newslist` (`url`, `pic`, `title`,`content`,`topic`,`time`) VALUES ( '$url', '$pic', '$title', '$content', '$topic', '$time')";
      $result = mysql_query($sql, $con);
      if ($result) {
        echo 'success';
      }else{
        echo 'error';
      };
  };
};
//above insert()
//blow delete()
function delete(){
  global $con;
  $id = $_REQUEST['id'];
  if (!$con)
  {
    die('Could not connect: ' . mysql_error());
    }else{
      // echo $id;
      mysql_select_db("phplesson", $con);
      mysql_query("set names 'utf8'");  
      $sql = "DELETE FROM `newslist` WHERE `id` = '$id'";
      $result = mysql_query($sql, $con);

      if (!$result) {
        echo 'error';
      }else{
        echo 'DELETE success!';
      };
    };
};
//above delete()
//blow update()
function update(){
  global $con;
  $url = $_REQUEST['url'];
  $pic = $_REQUEST['pic'];
  $title = $_REQUEST['title'];
  $content = $_REQUEST['content'];
  $time = $_REQUEST['time'];
  $topic = $_REQUEST['topic'];
  $id = $_REQUEST['id'];
  if (!$con)
  {
    die('Could not connect: ' . mysql_error());
    }else{
      mysql_select_db("phplesson", $con);
      mysql_query("set names 'utf8'");//避免乱码
      $sql = "UPDATE `newslist` SET `url`='$url',`pic`='$pic',`title`='$title',`content`='$content',`time`='$time',`topic`='$topic' WHERE `id`=$id";
      $result = mysql_query($sql, $con);
      if (!$result) {
        echo 'error';
      }else{
        echo 'UPDATE success!';
      };
  };
};
//above update()

// $state为0表示查询操作
if ($state == 0) {
    select();
// $state为1表示录入操作
}else if ($state == 1) {
    login();
// $state为2表示删除操作
}else if ($state == 2) {
    insert();
// $state为3表示精确查询操作
}else if ($state == 3) {
    delete();
// $state为4表示修改操作
}else if ($state == 4) {
    update();
// $state为5表示登陆验证操作
}else if ($state == 5) {
    selectIndeed();
};

mysql_close($con);//关闭数据库连接

?>