<?php
// Create connection
//$contador = 0;
$usuario_ = $_POST['usuario'];
$fechaentrada_ = $_POST['fechaentrada'];
$usuario =  utf8_decode($usuario_);
$fechaentrada =  utf8_decode($fechaentrada_);


$arraycontadordetalle=array();
$arraycontador=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");


//mysql_set_charset('utf8');

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadocontador = mysqli_query($con, "SELECT ID_HORASCONTADOR, USUARIO, FICHAJE, SALIDA, FECHAENTRADA, FECHASALIDA FROM tb_horascontador WHERE USUARIO='{$usuario}' && FECHAENTRADA='{$fechaentrada}'");
//$resultadohorasbolsa = mysqli_query($con, "SELECT * FROM tb_horasbolsa");

while ($row = mysqli_fetch_array($resultadocontador)) {
$arraycontadordetalle=array("id"=>utf8_encode($row['ID_HORASCONTADOR']),"usuario"=>utf8_encode($row['USUARIO']),"fichaje"=>utf8_encode($row['FICHAJE']),"salida"=>utf8_encode($row['SALIDA']),"fechaentrada"=>utf8_encode($row['FECHAENTRADA']),"FECHASALIDA"=>utf8_encode($row['FECHASALIDA']));
$arraycontador[] = $arraycontadordetalle;
}
$js_arraycontador = json_encode($arraycontador);
echo $js_arraycontador;

?>
