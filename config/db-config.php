<?php 

try {
    
    $conn = new PDO("mysql:host=localhost;dbname=azixaaaw_webmusic;charset=utf8" , 'azixaaaw_Mohammad' , '@13Mohammad86@');    

    $conn->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);

    
} catch (PDOException $e) {

    echo 'Could Not Connect To Database . <br> Erro Code : ' . $e->getMessage();
}



?>