<?php

include_once("core.php");
require_once("pdoConnection.php");

$query = $pdo->prepare("SELECT * FROM artists");
$query->execute();
$result = $query->fetchAll(PDO::FETCH_OBJ);
$json = json_encode($result);
echo $json;
?>