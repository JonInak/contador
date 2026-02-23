<?php
// Create connection

$trabajohoras_ = $_POST['trabajohoras'];
$trabajofecha_ = $_POST['trabajofecha'];
$trabajousuario_ = $_POST['trabajousuario'];
$trabajoidhoras_ = $_POST['trabajoidhoras'];

$trabajofase =  utf8_decode($trabajofase_);
$trabajohoras =  utf8_decode($trabajohoras_);
$trabajodetalle =  utf8_decode($trabajodetalle_);
$trabajofecha =  utf8_decode($trabajofecha_);
$trabajousuario =  utf8_decode($trabajousuario_);
$trabajoproyecto =  utf8_decode($trabajoproyecto_);
$trabajohorasbolsa =  utf8_decode($trabajohorasbolsa_);
$trabajoidhoras =  utf8_decode($trabajoidhoras_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_horasbolsa (USUARIO, FECHA, HORAS, ID_HORAS)
VALUES ('{$trabajousuario}', '{$trabajofecha}', '{$trabajohoras}', '{$trabajoidhoras}')");


?>