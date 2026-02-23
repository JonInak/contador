<?php
// Create connection
$arraytrabajos=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadotrabajos = mysqli_query($con, "SELECT * FROM tb_trabajos ORDER BY ALIAS_INAK");

while ($row = mysqli_fetch_array($resultadotrabajos)) {
$arraytrabajos[] = utf8_encode($row['3']);

}
$js_arraytrabajos = json_encode($arraytrabajos);
echo $js_arraytrabajos;
?>
