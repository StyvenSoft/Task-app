<?php
    include('database.php');
    if (isset($_POST['name'])) {
        # code...
        $name = $_POST['name'];
        $description = $_POST['description'];
        $query = "INSERT into task(name, description) VALUES ('$name','$description') ";
        $result = mysqli_query($connection, $query);
        if (!$result) {
            # code...
            die('Fallo consulta!');
        }
        echo 'Task add';
    }

?>