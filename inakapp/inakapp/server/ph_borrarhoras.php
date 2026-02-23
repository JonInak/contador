<?php

$idhoras_ = $_POST['idhoras'];


$idhoras =  utf8_decode($idhoras_);


//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con, "DELETE FROM tb_horas WHERE ID_HORAS = $idhoras");
mysqli_query($con, "DELETE FROM tb_horasbolsa WHERE ID_HORAS = $idhoras");







?>