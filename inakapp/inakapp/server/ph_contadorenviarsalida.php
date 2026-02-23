<?php
// Create connection

$id_ = $_POST['id'];
$fechasalida_ = $_POST['fechasalida'];
$salida_ = $_POST['salida'];
$id =  utf8_decode($id_);
$fechasalida =  utf8_decode($fechasalida_);
$salida =  utf8_decode($salida_);



//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con, "UPDATE tb_horascontador 
SET FECHASALIDA ='{$fechasalida}',SALIDA ='{$salida}'
WHERE ID_HORASCONTADOR = $id");

?>