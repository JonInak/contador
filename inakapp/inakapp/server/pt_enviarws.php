<?php

$wid_ = $_POST['wid'];
$wcod_ = $_POST['wcod'];
$walias_ = $_POST['walias'];
$wscod_ = $_POST['wscod'];
$wsalias_ = $_POST['wsalias'];
$wsdescripcion_ = $_POST['wsdescripcion'];
$wsasignadoa_ = $_POST['wsasignadoa'];
$fechainicio_ = $_POST['fechaini'];
$wscalculoestructura_ = $_POST['wscalculoestructura'];
$wsproyectocompleto_ = $_POST['wsproyectocompleto'];
$wsccespecial_ = $_POST['wsccespecial'];
$wsotros_ = $_POST['wsotros'];


$wid =  utf8_decode($wid_);
$wcod =  utf8_decode($wcod_);
$walias =  utf8_decode($walias_);
$wscod =  utf8_decode($wscod_);
$wsalias =  utf8_decode($wsalias_);
$wsdescripcion =  utf8_decode($wsdescripcion_);
$wsasignadoa =  utf8_decode($wsasignadoa_);
$fechainicio =  utf8_decode($fechainicio_);
$wscalculoestructura =  utf8_decode($wscalculoestructura_);
$wsproyectocompleto =  utf8_decode($wsproyectocompleto_);
$wsccespecial =  utf8_decode($wsccespecial_);
$wsotros =  utf8_decode($wsotros_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_trabajos_sub (ID_W, W_COD_INAK, W_ALIAS_INAK, WS_COD_INAK, WS_ALIAS_INAK, TITULO_COMPLETO, ASIGNADO_A, FECHA_INICIO, CALCULO_ESTRUCTURA, PROYECTO_COMPLETO, CC_ESPECIAL, OTROS)
VALUES ('{$wid}','{$wcod}','{$walias}','{$wscod}','{$wsalias}','{$wsdescripcion}','{$wsasignadoa}','{$fechainicio}','{$wscalculoestructura}','{$wsproyectocompleto}','{$wsccespecial}','{$wsotros}')");


?>