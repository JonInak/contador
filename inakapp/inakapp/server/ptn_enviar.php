<?php
// Create connection
//$trabajofase = $_POST['trabajofase'];
//$trabajofase = "currando";
$codigo_ = $_POST['codigo'];
$alias_ = $_POST['alias'];
$titulo_ = $_POST['titulo'];
$promotor_ = $_POST['promotor'];
$cliente_ = $_POST['cliente'];
$ubicacion_ = $_POST['ubicacion'];
$arquitecto_ = $_POST['arquitecto'];
$asignadoa_ = $_POST['asignadoa'];
$fechaini_ = $_POST['fechaini'];
$calculoestructura_ = $_POST['calculoestructura'];
$proyectocompleto_ = $_POST['proyectocompleto'];
$ccespecial_ = $_POST['ccespecial'];
$otros_ = $_POST['otros'];
$codigo =  utf8_decode($codigo_);
$alias =  utf8_decode($alias_);
$titulo =  utf8_decode($titulo_);
$promotor =  utf8_decode($promotor_);
$cliente =  utf8_decode($cliente_);
$ubicacion =  utf8_decode($ubicacion_);
$arquitecto =  utf8_decode($arquitecto_);
$asignadoa =  utf8_decode($asignadoa_);
$fechaini =  utf8_decode($fechaini_);
$calculoestructura =  utf8_decode($calculoestructura_);
$proyectocompleto =  utf8_decode($proyectocompleto_);
$ccespecial =  utf8_decode($ccespecial_);
$otros =  utf8_decode($otros_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_trabajos (CODIGO_INAK, ALIAS_INAK, TITULO_COMPLETO, PROMOTOR, CLIENTE, UBICACION, ARQUITECTO, ASIGNADO_A, FECHA_INICIO, CALCULO_ESTRUCTURA, PROYECTO_COMPLETO, CC_ESPECIAL, OTROS)
VALUES ('{$codigo}', '{$alias}', '{$titulo}', '{$promotor}', '{$cliente}', '{$ubicacion}', '{$arquitecto}', '{$asignadoa}', '{$fechaini}', '{$calculoestructura}', '{$proyectocompleto}', '{$ccespecial}', '{$otros}')");


?>