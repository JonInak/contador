<?php
// Create connection

$trabajousuario_ = $_POST['trabajousuario'];
$fechaentrada_ = $_POST['fechaentrada'];
$fichaje_ = $_POST['fichaje'];
//$fechasalida_ = $_POST['fechasalida'];
$salida_ = $_POST['salida'];
$trabajousuario =  utf8_decode($trabajousuario_);
$fechaentrada =  utf8_decode($fechaentrada_);
$fichaje =  utf8_decode($fichaje_);
//$fechasalida =  utf8_decode($fechasalida_);
$salida =  utf8_decode($salida_);



//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_horascontador (USUARIO,FECHAENTRADA, FICHAJE, SALIDA)
VALUES ('{$trabajousuario}', '{$fechaentrada}', '{$fichaje}', '{$salida}')");


?>