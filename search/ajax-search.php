<?php 

include dirname(__DIR__) . '/config/db-config.php';

if(isset($_GET['q']) && $_GET['q'] != '') {
    $sql = "SELECT * FROM ((`musics` INNER JOIN `artists` ON musics.artist_id = artists.artist_id) INNER JOIN `categories` ON musics.category_id  = categories.category_id) WHERE musics.music_name LIKE '%{$_GET['q']}%';";
    $res = $conn->query($sql);
    $res = $res->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($res);
    echo $result;
}

?>