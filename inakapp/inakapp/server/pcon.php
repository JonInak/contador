<?php
// Create connection
$arrayusuario=array();
$arrayusuarios=array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
// $con=mysqli_connect("localhost", "root", "", "dbs329414");
$con = mysqli_connect("localhost", "root", "", "bddinak");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadousuarios = mysqli_query($con, "SELECT * FROM tb_usuariosinak");

while ($row = mysqli_fetch_array($resultadousuarios)) {

$arrayusuario=array("id"=>utf8_encode($row['ID_USUARIO']),"usuario"=>utf8_encode($row['USUARIO']),"coste"=>utf8_encode($row['COSTE']));

$arrayusuarios[utf8_encode($row['USUARIO'])] = $arrayusuario;


}
$js_arrayusuarios = json_encode($arrayusuarios);
echo $js_arrayusuarios;

//echo "hola";

?>
