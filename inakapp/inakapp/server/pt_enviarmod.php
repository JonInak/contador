<?php

$modid_ = $_POST['modid'];
$modval_ = $_POST['modval'];
$tabla_ = $_POST['tabla'];
$campo_ = $_POST['campo'];

$modid =  utf8_decode($modid_);
$modval =  utf8_decode($modval_);
$tabla =  utf8_decode($tabla_);
$campo =  utf8_decode($campo_);

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


if($tabla=="tb_trabajos_sub"){
	mysqli_query($con, "UPDATE $tabla 
SET $campo ='{$modval}'
WHERE ID_WSUB = $modid");
}
if($tabla=="tb_trabajos"){
	mysqli_query($con, "UPDATE $tabla 
SET $campo ='{$modval}'
WHERE ID_PROYECTO = $modid");
}
if($tabla=="tb_coeficientes"){
	mysqli_query($con, "UPDATE $tabla 
SET $campo ='{$modval}', TIPO ='GI'
WHERE ID_COEFICIENTES = 1");
}
if($tabla=="tb_facturasemitidas"){
	mysqli_query($con, "UPDATE $tabla 
SET $campo ='{$modval}'
WHERE ID_FE = $modid");
}
if($tabla=="tb_facturasrecibidas"){
	mysqli_query($con, "UPDATE $tabla 
SET $campo ='{$modval}'
WHERE ID_FR = $modid");
}




?>