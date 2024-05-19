<?php
// api.php

// Conexión a la base de datos
$conn = mysqli_connect("localhost", "js", "js", "js");

// Ruta para obtener todos los productos
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['ruta'] === 'productos') {
    $query = "SELECT * FROM Productos";
    $result = mysqli_query($conn, $query);
    $productos = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $productos[] = $row;
    }

    echo json_encode($productos);
}
?>
