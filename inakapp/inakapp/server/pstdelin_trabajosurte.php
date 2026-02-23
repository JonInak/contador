<?php
// Create connection
$arraytrabajo = array();
$arraytrabajos = array();
$horasfecha_ = $_POST['horasfecha'];
$horasfecha =  utf8_decode($horasfecha_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
//$con = mysqli_connect("localhost", "root", "", "bddinak");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadotrabajos = mysqli_query($con, "SELECT * FROM tb_trabajos WHERE SUBSTRING(CODIGO_INAK,LENGTH(CODIGO_INAK)-1,2)='" .$horasfecha."'");
//$resultadotrabajos = mysqli_query($con, "SELECT * FROM tb_trabajos WHERE SUBSTRING(CODIGO_INAK,LENGTH(CODIGO_INAK)-1,2)='" .$horasfecha."' ORDER BY CODIGO_INAK DESC");
while ($row = mysqli_fetch_array($resultadotrabajos)) {

	$arraytrabajo = array("id" => utf8_encode($row['ID_PROYECTO']),"codigo" => utf8_encode($row['CODIGO_INAK']), "alias" => utf8_encode($row['ALIAS_INAK']), "cliente" => utf8_encode($row['CLIENTE']), "ingresos" => 0, "horas" => 0, "horasreplanteo" => 0, "importehorasreplanteo" => 0, "porcentajereplanteo" => 0, "horasdelineacion" => 0, "importehorasdelineacion" => 0, "porcentajedelineacion" => 0, "horascalculo" => 0, "importehorascalculo" => 0, "porcentajecalculo" => 0, "horasrevision" => 0, "importehorasrevision" => 0, "porcentajerevision" => 0, "horasmodificacionobra" => 0, "importehorasmodificacionobra" => 0, "porcentajemodificacionobra" => 0, "horasasistenciaobra" => 0, "importehorasasistenciaobra" => 0, "porcentajeasistenciaobra" => 0, "horasmediciones" => 0, "importehorasmediciones" => 0, "porcentajemediciones" => 0, "horasotros" => 0, "importehorasotros" => 0, "porcentajeotros" => 0, "importetotalgastos" => 0, "visadop" => utf8_encode($row['VISADOP']), "ingresos" => utf8_encode($row['INGRESOS']),"tipo" => utf8_encode($row['TIPO']),"viviendas" => utf8_encode($row['VIVIENDAS']));

	$arraytrabajos[] = $arraytrabajo;

}
$js_arraytrabajos = json_encode($arraytrabajos);
echo $js_arraytrabajos;
?>
