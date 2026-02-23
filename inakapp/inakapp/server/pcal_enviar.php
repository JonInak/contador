<?php
// Create connection

$fecha_ = $_POST['fecha'];
$horas_ = $_POST['horas'];
$tipo_ = $_POST['tipo'];
$diasemanastring_ = $_POST['diasemanastring'];
$usuario_ = $_POST['usuario'];

$fecha =  utf8_decode($fecha_);
$horas =  utf8_decode($horas_);
$tipo =  utf8_decode($tipo_);
$diasemanastring =  utf8_decode($diasemanastring_);
$usuario =  utf8_decode($usuario_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_calendariotres (FECHA, HORAS, TIPO, DIASEMANA, USUARIO)
VALUES ('{$fecha}', '{$horas}', '{$tipo}', '{$diasemanastring}', '{$usuario}')");
?>