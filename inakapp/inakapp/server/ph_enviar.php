<?php
// Create connection
//$trabajofase = $_POST['trabajofase'];
//$trabajofase = "currando";
$trabajoid_ = $_POST['trabajoid'];
$trabajofase_ = $_POST['trabajofase'];
$trabajohoras_ = $_POST['trabajohoras'];
$trabajodetalle_ = $_POST['trabajodetalle'];
$trabajofecha_ = $_POST['trabajofecha'];
$trabajousuario_ = $_POST['trabajousuario'];
$trabajoproyecto_ = $_POST['trabajoproyecto'];
$trabajohorasbolsa_ = $_POST['trabajohorasbolsa'];
$trabajocodigo_ = $_POST['trabajocodigo'];
$trabajoid = utf8_decode($trabajoid_);
$trabajofase =  utf8_decode($trabajofase_);
$trabajohoras =  utf8_decode($trabajohoras_);
$trabajodetalle =  utf8_decode($trabajodetalle_);
$trabajofecha =  utf8_decode($trabajofecha_);
$trabajousuario =  utf8_decode($trabajousuario_);
$trabajoproyecto =  utf8_decode($trabajoproyecto_);
$trabajohorasbolsa =  utf8_decode($trabajohorasbolsa_);
$trabajocodigo =  utf8_decode($trabajocodigo_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_horas (ID_HORAS, USUARIO, FECHA, PROYECTO, FASE, HORAS, DETALLE, BOLSA, CODIGO_INAK)
VALUES ('{$trabajoid}','{$trabajousuario}', '{$trabajofecha}', '{$trabajoproyecto}', '{$trabajofase}', '{$trabajohoras}', '{$trabajodetalle}', '{$trabajohorasbolsa}', '{$trabajocodigo}')");


?>