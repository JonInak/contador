<?php

$trabajousuario_ = $_POST['trabajousuario'];
$trabajofecha_ = $_POST['trabajofecha'];
$trabajofecha =  utf8_decode($trabajofecha_);
$trabajousuario =  utf8_decode($trabajousuario_);
// Create connection
$arraytrabajosusuario=array();
$arraytrabajosusuariodia=array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadotrabajosdia = mysqli_query($con, "SELECT ID_HORAS, FECHA, PROYECTO, FASE, DETALLE, HORAS, USUARIO, BOLSA, FUERA FROM tb_horas WHERE FECHA ='" .$trabajofecha."' ORDER BY PROYECTO ");
while ($row = mysqli_fetch_array($resultadotrabajosdia)) {
$arraytrabajosusuario=array("id"=>utf8_encode($row['ID_HORAS']),"fecha"=>utf8_encode($row['FECHA']),"usuario"=>utf8_encode($row['USUARIO']), "proyecto"=>utf8_encode($row['PROYECTO']),"fase"=>utf8_encode($row['FASE']), "detalle"=>utf8_encode($row['DETALLE']),"horas"=>$row['HORAS'],"bolsa"=>$row['BOLSA'],"fuera"=>$row['FUERA']);
$arraytrabajosusuariodia[] = $arraytrabajosusuario;
}
$js_arraytrabajosusuariodia = json_encode($arraytrabajosusuariodia);
echo $js_arraytrabajosusuariodia;
?>
