<?php
// Create connection
$arrayhoras = array();
$arrayhorass = array();
$horasfecha_ = $_POST['horasfecha'];
$usuario_ = $_POST['usuario'];
$horasfecha =  utf8_decode($horasfecha_);
$usuario =  utf8_decode($usuario_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadohorass = mysqli_query($con, "SELECT * FROM tb_horas WHERE YEAR(FECHA) ='" .$horasfecha."' AND USUARIO = '" .$usuario."' ORDER BY FECHA DESC");

while ($row = mysqli_fetch_array($resultadohorass)) {

	$arrayhoras = array("id" => utf8_encode($row['ID_HORAS']), "fecha" => utf8_encode($row['FECHA']),"proyecto" => utf8_encode($row['PROYECTO']), "fase" => utf8_encode($row['FASE']), "detalle" => utf8_encode($row['DETALLE']), "horas" => utf8_encode($row['HORAS']), "trabajador" => utf8_encode($row['USUARIO']), "bolsa" => utf8_encode($row['BOLSA']), "fuera" => utf8_encode($row['FUERA']), "codigo" => utf8_encode($row['CODIGO_INAK']));

	$arrayhorass[] = $arrayhoras;

}
$js_arrayhorass = json_encode($arrayhorass);
echo $js_arrayhorass;
?>

