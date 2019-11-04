<?php
    $connection = mysqli_connect(
        'localhost',
        'root',
        '',
        'task-db'        
    );
    mysqli_set_charset($connection, 'utf8'); 
    //if($connection){
    //    echo "Databese connected!";
    //}
?>