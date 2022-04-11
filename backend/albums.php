<?php
    include_once("pdoConnection.php");

    $statement = $pdo->prepare("SELECT * FROM albums");
    $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($results);
    echo $json;