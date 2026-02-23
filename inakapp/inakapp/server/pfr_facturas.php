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

$resultadofacturas = mysqli_query($con, "SELECT * FROM tb_facturasrecibidas ORDER BY FECHA DESC");

while ($row = mysqli_fetch_array($resultadofacturas)) {

	$arrayfactura = array("id" => utf8_encode($row['ID_FR']), "numero" => utf8_encode($row['NUMERO']),"fecha" => utf8_encode($row['FECHA']), "proveedor" => utf8_encode($row['PROVEEDOR']), "baseimponible" => utf8_encode($row['BASE_IMPONIBLE']), "ivaporc" => utf8_encode($row['IVA_PORC']), "iva" => utf8_encode($row['IVA']), "irpfporc" => utf8_encode($row['IRPF_PORC']), "irpf" => utf8_encode($row['IRPF']), "importetotal" => utf8_encode($row['IMPORTE_TOTAL']), "fechapago" => utf8_encode($row['FECHA_PAGO']), "comentario" => utf8_encode($row['COMENTARIO']), "asesoria" => utf8_encode($row['ASESORIA']));

	$arrayfacturas[] = $arrayfactura;

}
$js_arrayfacturas = json_encode($arrayfacturas);
echo $js_arrayfacturas;
?>
