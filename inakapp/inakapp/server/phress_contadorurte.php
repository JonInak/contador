<?php

$urte_ = $_POST['urte'];
$urte =  utf8_decode($urte_);



$arraycontadordetalle=array();
$arraycontador=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
//$con = mysqli_connect("localhost", "root", "", "bddinak");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadocontador = mysqli_query($con, "SELECT ID_HORASCONTADOR, USUARIO, FICHAJE, SALIDA FROM tb_horascontador WHERE YEAR(FECHAENTRADA)='{$urte}'");
//$resultadohorasbolsa = mysqli_query($con, "SELECT * FROM tb_horasbolsa");

while ($row = mysqli_fetch_array($resultadocontador)) {
$arraycontadordetalle=array("id"=>utf8_encode($row['ID_HORASCONTADOR']),"usuario"=>utf8_encode($row['USUARIO']),"fichaje"=>utf8_encode($row['FICHAJE']),"salida"=>utf8_encode($row['SALIDA']));
$arraycontador[] = $arraycontadordetalle;
}
$js_arraycontador = json_encode($arraycontador);
echo $js_arraycontador;

?>
