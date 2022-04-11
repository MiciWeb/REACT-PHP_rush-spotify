<?php
    require_once("pdoConnection.php");

    $query = $pdo->prepare("SELECT * FROM genres");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_OBJ);
    $json = json_encode($result);
    echo $json;
