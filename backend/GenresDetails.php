<?php

    require_once("pdoConnection.php");
    
         $query = $pdo->prepare("SELECT albums.name AS album, albums.cover_small, albums.id, genres_albums.genre_id, genres.name FROM albums INNER JOIN genres_albums ON genres_albums.album_id = albums.id INNER JOIN genres ON genres.id = genres_albums.genre_id");
         $query->execute();
         $result = $query->fetchAll(PDO::FETCH_OBJ);
         $json = json_encode($result);
         echo $json;
       
    


    