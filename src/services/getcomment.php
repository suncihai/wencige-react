<?php
require 'config.php';

$query = "SELECT * FROM $commenttable";
$result = $conn->query($query);

if($result){
   while($row=$result -> fetch_assoc()){
      $json[] = $row;
   }
   $data['data'] = $json;
   echo json_encode($data);
}

?>