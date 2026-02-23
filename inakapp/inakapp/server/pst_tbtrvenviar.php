<?php

$codigo_ = $_POST['codigo'];
$tipo_ = $_POST['tipo'];
$euros_ = $_POST['euros'];

$codigo =  utf8_decode($codigo_);
$tipo =  utf8_decode($tipo_);
$euros =  utf8_decode($euros_);


//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con, "INSERT INTO tb_trv (ID_TR, TIPO, EUROS) VALUES ('{$codigo}', '{$tipo}', '{$euros}')");


?>