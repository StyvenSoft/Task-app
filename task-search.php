<?php
    include('database.php');

    $search = $_POST['search'];

    if (!empty($search)) {
        # code...
        $query = "SELECT * FROM task WHERE name LIKE '$search%'";
        $result = mysqli_query($connection, $query);
        if (!$result) {
            # code...
            die('Error consulta'. mysqli_error($connection));
        }

        $json = array();
        while ($row = mysqli_fetch_array($result)) {
            # code...
            $json[] = array(
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id']
            );
        $jsonstring = json_encode($json);
        echo $jsonstring;
        }
    }
?>