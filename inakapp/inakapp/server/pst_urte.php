<?php

// Create connection

$arrayhorastrabajo = array();
$registrohorastrabajo = array();
$horasfecha_ = $_POST['horasfecha'];
$horasfecha =  utf8_decode($horasfecha_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}




$resultadohorastrabajo = mysqli_query($con, "SELECT ID_HORAS, FECHA, PROYECTO, FASE, DETALLE, HORAS, USUARIO, BOLSA, CODIGO_INAK FROM tb_horas WHERE SUBSTRING(CODIGO_INAK,LENGTH(CODIGO_INAK)-1,2)='" .$horasfecha."'");
while ($row = mysqli_fetch_array($resultadohorastrabajo)) {
$registrohorastrabajo=array("id"=>utf8_encode($row['ID_HORAS']),"fecha"=>utf8_encode($row['FECHA']),"usuario"=>utf8_encode($row['USUARIO']),"coste"=>0, "proyecto"=>utf8_encode($row['PROYECTO']),"fase"=>utf8_encode($row['FASE']), "detalle"=>utf8_encode($row['DETALLE']),"horas"=>$row['HORAS'],"bolsa"=>$row['BOLSA']);

$arrayhorastrabajo[] = $registrohorastrabajo;
}

$js_arrayhorastrabajo = json_encode($arrayhorastrabajo);
echo $js_arrayhorastrabajo;
?>