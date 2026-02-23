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

$resultado = mysqli_query($con, "SELECT * FROM tb_trv");

while ($row = mysqli_fetch_array($resultado)) {

	$arraytrabajo = array("id" => utf8_encode($row['ID_TRV']),"codigo" => utf8_encode($row['ID_TR']), "tipo" => utf8_encode($row['TIPO']), "euros" => utf8_encode($row['EUROS']));

	$arraytrabajos[] = $arraytrabajo;

}
$js_arraytrabajos = json_encode($arraytrabajos);
echo $js_arraytrabajos;
?>
