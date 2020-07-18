<?php
require 'config.php';

$user=$_GET["user"];

$query = "SELECT * FROM $userprofile WHERE $userprofile.author = '$user'";
$result = $conn->query($query);

if($result){
   $data['data'] = $result -> fetch_assoc();
   echo json_encode($data);
}

?>