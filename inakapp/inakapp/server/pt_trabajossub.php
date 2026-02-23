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

$resultado = mysqli_query($con, "SELECT * FROM tb_trabajos_sub ORDER BY W_COD_INAK DESC");

while ($row = mysqli_fetch_array($resultado)) {

	$arraytrabajosub = array("idws" => utf8_encode($row['ID_WSUB']),"idw" => utf8_encode($row['ID_W']),"codigow" => utf8_encode($row['W_COD_INAK']), "aliasw" => utf8_encode($row['W_ALIAS_INAK']), "codigows" => utf8_encode($row['WS_COD_INAK']), "aliasws" => utf8_encode($row['WS_ALIAS_INAK']), "descripcionws" => utf8_encode($row['TITULO_COMPLETO']), "asignadoa" => utf8_encode($row['ASIGNADO_A']), "fechainicio" => utf8_encode($row['FECHA_INICIO']), "fechafin" => utf8_encode($row['FECHA_FIN']), "visado" => utf8_encode($row['VISADO']), "calculoestructura" => utf8_encode($row['CALCULO_ESTRUCTURA']), "proyectocompleto" => utf8_encode($row['PROYECTO_COMPLETO']), "ccespecial" => utf8_encode($row['CC_ESPECIAL']), "otros" => utf8_encode($row['OTROS']));

	$arraytrabajossub[] = $arraytrabajosub;

}
$js_arraytrabajossub = json_encode($arraytrabajossub);
echo $js_arraytrabajossub;
?>
