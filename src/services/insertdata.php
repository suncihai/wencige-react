<?php
  require 'config.php';

  session_start();

  $query = "SELECT * FROM $usertable";
  $result = $conn->query($query);

  if($result){
    $rowcount=mysqli_num_rows($result);
  }

  $date = date('Y-m-d_H:i');
  $_SESSION['uploadTime'] = $date;

  $id  = $_POST["postId"];
  $postDate = $_POST["postDate"];
  $title = $_POST["title"];
  $text=$_POST["text"];
  $imageUrl="assets/images/upload/".$date.'-'.$_POST["imageUrl"];
  $author=$_POST["author"];
  $balance=$_POST["balance"];
 
  $sql = "INSERT INTO $dbname.$usertable (postid,postDate,title,text,imageUrl,author) VALUES('$id','$postDate','$title','$text','$imageUrl','$author')";
  $result = $conn->query($sql);

  if($author=="wenhui"){
    $sql = "UPDATE $dbname.$userprofile SET balance = $balanc+5 WHERE $userprofile.author = 'wenhui'";
    $result = $conn->query($sql);
  }

  $query = "SELECT * FROM $usertable";
  $result = $conn->query($query);

  if($result){
    while($row=$result -> fetch_assoc()){
       $json[] = $row;
    }
    $data['data'] = $json;
    echo json_encode($data);
  }

  $msg = "有新的帖子啦~\n有空来看一下吧~";

  // use wordwrap() if lines are longer than 70 characters
  $msg = wordwrap($msg,70);

  // send email
  if($author=='cihai'){
       mail("zhouwenhui88@gmail.com","娇娇～文辞阁新的帖子啦！~",$msg);
  }else{
       mail("suncihai@gmail.com","文辞阁新的帖子！~",$msg);
  }

  mysqli_close($conn);
?>