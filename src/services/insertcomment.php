<?php
  require 'config.php';

  $postid  = $_POST["postId"];
  $commentId = $_POST["commentId"];
  $postDate = $_POST["postDate"];
  $title = $_POST["title"];
  $text=$_POST["text"];
  $author=$_POST["author"];
  $balance=$_POST["balance"];
 
  $sql = "INSERT INTO $dbname.$commenttable (commentid,postid,text,author) VALUES('$commentId','$postid','$text','$author')";
  $result = $conn->query($sql);

  if($author=="wenhui"){
    $sql = "UPDATE $dbname.$userprofile SET balance = $balance+1 WHERE $userprofile.author = 'wenhui'";
    $result = $conn->query($sql);
  }

  $query = "SELECT * FROM $commenttable";
  $result = $conn->query($query);

  if($result){
    while($row=$result -> fetch_assoc()){
       $json[] = $row;
    }
    $data['data'] = $json;
    echo json_encode($data);
  }

  $msg = "叮咚！".$postDate." ".$title."这篇帖子有新的回复啦~\n快来看看啦！~";

  // use wordwrap() if lines are longer than 70 characters
  $msg = wordwrap($msg,70);

  // send email
  if($author=='cihai'){
      mail("zhouwenhui88@gmail.com","娇娇～文辞阁有回复啦！~",$msg);
  }else{
      mail("suncihai@gmail.com","文辞阁有回复啦~",$msg);
  }


  mysqli_close($conn);
?>