<?php
// Create connection


$fecha_ = $_POST['fecha'];
$usuario_ = $_POST['usuario'];
$fecha =  utf8_decode($fecha_);
$usuario =  utf8_decode($usuario_);



//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con, "UPDATE tb_calendario
SET TIPO = 'V'
WHERE FECHA = '{$fecha}' AND USUARIO = '{$usuario}'"
);
//WHERE FECHA = '{$fecha}' AND USUARIO = '{$usuario}'"
?>