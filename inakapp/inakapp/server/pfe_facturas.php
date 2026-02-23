<?php
// Create connection
$arrayfactura = array();
$arrayfacturas = array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadofacturas = mysqli_query($con, "SELECT * FROM tb_facturasemitidas ORDER BY CODIGO_FE DESC");

while ($row = mysqli_fetch_array($resultadofacturas)) {

	$arrayfactura = array("id" => utf8_encode($row['ID_FE']),"tipo" => utf8_encode($row['TIPO']),"codigo" => utf8_encode($row['CODIGO_FE']),"fecha" => utf8_encode($row['FECHA']), "alias" => utf8_encode($row['ALIAS']), "cliente" => utf8_encode($row['CLIENTE']), "baseimponible" => utf8_encode($row['BASE_IMPONIBLE']), "ivaporc" => utf8_encode($row['IVA_PORC']), "iva" => utf8_encode($row['IVA']), "irpfporc" => utf8_encode($row['IRPF_PORC']), "irpf" => utf8_encode($row['IRPF']), "importetotal" => utf8_encode($row['IMPORTE_TOTAL']), "fechacobro" => utf8_encode($row['FECHA_COBRO']), "comentario" => utf8_encode($row['COMENTARIO']), "asesoria" => utf8_encode($row['ASESORIA']), "pagoestimado" => utf8_encode($row['PAGO_ESTIMADO']), "recibido" => utf8_encode($row['RECIBIDO']),"codigow" => utf8_encode($row['CODIGO_W']));

	$arrayfacturas[] = $arrayfactura;

}
$js_arrayfacturas = json_encode($arrayfacturas);
echo $js_arrayfacturas;
?>
