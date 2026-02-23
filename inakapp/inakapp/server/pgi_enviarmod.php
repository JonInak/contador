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
//$con = mysqli_connect("localhost", "root", "", "bddinak");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


if($tabla=="tb_gastosindirectos"){
	mysqli_query($con, "UPDATE $tabla 
SET $campo ='{$modval}'
WHERE ID = $modid");
}





?>