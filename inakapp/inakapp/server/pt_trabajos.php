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

$resultadotrabajos = mysqli_query($con, "SELECT * FROM tb_trabajos ORDER BY CODIGO_INAK DESC");

while ($row = mysqli_fetch_array($resultadotrabajos)) {

	$arraytrabajo = array("id" => utf8_encode($row['ID_PROYECTO']),"codigo" => utf8_encode($row['CODIGO_INAK']), "alias" => utf8_encode($row['ALIAS_INAK']), "cliente" => utf8_encode($row['CLIENTE']), "titulo" => utf8_encode($row['TITULO_COMPLETO']), "promotor" => utf8_encode($row['PROMOTOR']), "ubicacion" => utf8_encode($row['UBICACION']), "arquitecto" => utf8_encode($row['ARQUITECTO']), "asignadoa" => utf8_encode($row['ASIGNADO_A']), "fechainicio" => utf8_encode($row['FECHA_INICIO']), "fechafin" => utf8_encode($row['FECHA_FIN']), "visado" => utf8_encode($row['VISADO']), "calculoestructura" => utf8_encode($row['CALCULO_ESTRUCTURA']), "proyectocompleto" => utf8_encode($row['PROYECTO_COMPLETO']), "ccespecial" => utf8_encode($row['CC_ESPECIAL']), "informe" => utf8_encode($row['OTROS']), "comentarios" => utf8_encode($row['COMENTARIOS']));

	$arraytrabajos[] = $arraytrabajo;

}
$js_arraytrabajos = json_encode($arraytrabajos);
echo $js_arraytrabajos;
?>
