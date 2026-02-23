<?php
$link = mysqli_connect("localhost", "root", "", "dbs329414");


/* comprobar la conexión */
if (mysqli_connect_errno()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}


/* Consultas de selección que devuelven un conjunto de resultados */
if ($resultado = mysqli_query($link, "SELECT * FROM tb_usuariosinak")) {
    printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));

    /* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
}



mysqli_close($link);
?>