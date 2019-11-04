<?php
    include('database.php');

    $query = "SELECT * FROM task";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        # code...
        die('Consulta fallida!'. mysqli_error($connection));
    }
    
    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        # code...
        $json[] = array(
            'name' => $row['name'],
            'description' => $row['description'],
            'id' => $row['id']
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
?>