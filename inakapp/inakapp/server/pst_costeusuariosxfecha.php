<?php
// Create connection
$arrayusuario=array();
$arrayusuarios=array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadousuarios = mysqli_query($con, "SELECT * FROM tb_usuariosinakcoste");

while ($row = mysqli_fetch_array($resultadousuarios)) {

$arrayusuario=array("id"=>utf8_encode($row['ID_USUARIOCOSTE']),"idusuario"=>utf8_encode($row['ID_USUARIO']),"fechaini"=>utf8_encode($row['FECHA_INI']),"fechafin"=>utf8_encode($row['FECHA_FIN']),"coste"=>utf8_encode($row['COSTE']),"usuario"=>"");

$arrayusuarios[utf8_encode($row['ID_USUARIOCOSTE'])] = $arrayusuario;


}
$js_arrayusuarios = json_encode($arrayusuarios);
echo $js_arrayusuarios;

//echo "hola";

?>
