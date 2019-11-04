<?php
include('database.php');

    if (isset($_POST['id'])) {
        # code...
        $id = $_POST['id'];

        $query = "DELETE FROM task WHERE id = $id";
    }
?>