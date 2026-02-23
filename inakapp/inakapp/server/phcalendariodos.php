<?php
$usuario_ = $_POST['usuario'];
$urte_ = $_POST['urte'];
$usuario =  utf8_decode($usuario_);
$urte =  utf8_decode($urte_);


$arraycalendariodetalle=array();
$arraycalendario=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadocalendario = mysqli_query($con, "SELECT * FROM tb_calendariodos WHERE USUARIO='{$usuario}' && YEAR(FECHA)='{$urte}'");
//$resultadohorasbolsa = mysqli_query($con, "SELECT * FROM tb_horasbolsa");

while ($row = mysqli_fetch_array($resultadocalendario)) {
$arraycalendariodetalle=array("id"=>utf8_encode($row['ID_CALENDARIO']),"usuario"=>utf8_encode($row['USUARIO']),"fecha"=>utf8_encode($row['FECHA']),"horas"=>utf8_encode($row['HORAS']),"tipo"=>utf8_encode($row['TIPO']),"diasemana"=>utf8_encode($row['DIASEMANA']));
$arraycalendario[] = $arraycalendariodetalle;
}
$js_arraycalendario = json_encode($arraycalendario);
echo $js_arraycalendario;

?>
