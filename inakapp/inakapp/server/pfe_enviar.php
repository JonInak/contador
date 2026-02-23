<?php
// Create connection
//$trabajofase = $_POST['trabajofase'];
//$trabajofase = "currando";
$tipo_ = $_POST['tipo'];
$codigo_ = $_POST['codigo'];

$tipo =  utf8_decode($tipo_);
$codigo =  utf8_decode($codigo_);


//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "INSERT INTO tb_facturasemitidas (TIPO, CODIGO_FE)
VALUES ('{$tipo}','{$codigo}')");


?>