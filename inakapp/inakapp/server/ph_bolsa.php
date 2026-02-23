<?php
// Create connection
$horasbolsa = 0;

$arrayhorasbolsadetalle=array();
$arrayhorasbolsa=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadohorasbolsa = mysqli_query($con, "SELECT FECHA, USUARIO, HORAS FROM tb_horasbolsa");
//$resultadohorasbolsa = mysqli_query($con, "SELECT * FROM tb_horasbolsa");

while ($row = mysqli_fetch_array($resultadohorasbolsa)) {
$arrayhorasbolsadetalle=array("fecha"=>utf8_encode($row['FECHA']),"usuario"=>utf8_encode($row['USUARIO']),"horas"=>$row['HORAS']);
$arrayhorasbolsa[] = $arrayhorasbolsadetalle;
}
$js_arrayhorasbolsa = json_encode($arrayhorasbolsa);
echo $js_arrayhorasbolsa;

?>
