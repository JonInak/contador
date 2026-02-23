<?php

$id_ = $_POST['id'];
$sumvarios_ = $_POST['sumvarios'];

$id =  utf8_decode($id_);
$sumvarios =  utf8_decode($sumvarios_);



//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



mysqli_query($con, "UPDATE tb_trabajos
SET VISADOP ='{$sumvarios}'
WHERE ID_PROYECTO = $id");


?>