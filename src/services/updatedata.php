<?php
  require 'config.php';

  $id  = $_POST["postId"];
  $text = $_POST["text"];
  $postDate = $_POST["postDate"];
  $title = $_POST["title"];
 
  $sql = "UPDATE $dbname.$usertable SET text = '$text' WHERE $usertable.postid = '$id'";

  $result = $conn->query($sql);

  $query = "SELECT * FROM $usertable";
  $result = $conn->query($query);

  if($result){
    while($row=$result -> fetch_assoc()){
       $json[] = $row;
    }
    $data['data'] = $json;
    echo json_encode($data);
  }

  $msg = "哎？".$postDate." ".$title."这篇帖子有被更改过噢~\n有空去看看有啥变动吧~";

  // use wordwrap() if lines are longer than 70 characters
  $msg = wordwrap($msg,70);

  // send email
  if($author=='cihai'){
        mail("zhouwenhui88@gmail.com","娇娇～毛毛改了帖子的内容噢！~",$msg);
  }else{
        mail("suncihai@gmail.com","毛毛，娇娇有改过帖子！~",$msg);
  }

  mysqli_close($conn);
?>