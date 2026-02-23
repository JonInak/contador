<?php
// Create connection
$arraytrabajo = array();
$arraytrabajos = array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultado = mysqli_query($con, "SELECT * FROM tb_coeficientes");

while ($row = mysqli_fetch_array($resultado)) {

	$arraycoeficiente = array("id" => utf8_encode($row['ID_COEFICIENTES']),"tipo" => utf8_encode($row['TIPO']), "coeficiente" => utf8_encode($row['COEFICIENTE']));

	$arraycoeficientes[] = $arraycoeficiente;

}
$js_arraycoeficientes = json_encode($arraycoeficientes);
echo $js_arraycoeficientes;
?>
