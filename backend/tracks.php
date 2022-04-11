<?php
    include_once("core.php");
    include_once("pdoConnection.php");
    

    $statement = $pdo->prepare("SELECT * FROM tracks");
    $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($results);
    echo $json;