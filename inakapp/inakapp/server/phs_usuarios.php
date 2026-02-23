<?php
// Create connection
$arrayusuarios=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadoususuarios = mysqli_query($con, "SELECT * FROM tb_usuariosinak ORDER BY USUARIO");

while ($row = mysqli_fetch_array($resultadoususuarios)) {
$arrayusuarios[] = utf8_encode($row['USUARIO']);
}
$js_arrayusuarios = json_encode($arrayusuarios);
echo $js_arrayusuarios;
?>
