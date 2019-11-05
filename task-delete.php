<?php
include('database.php');

    if (isset($_POST['id'])) {
        # code...
        $id = $_POST['id'];

        $query = "DELETE FROM task WHERE id = $id";
        $result = mysqli_query($connection, $query);
        if (!$result) {
            # code...
            die('Query Failed');
        }
        echo"Task delete successfully!";    
    }
?>