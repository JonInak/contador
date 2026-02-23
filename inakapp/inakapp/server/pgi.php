<?php
// Create connection
$arraygastoindirecto = array();
$arraygastoindirectos = array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
 $con=mysqli_connect("localhost", "root", "", "dbs329414");
//$con = mysqli_connect("localhost", "root", "", "bddinak");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadogastosindirectos = mysqli_query($con, "SELECT * FROM tb_gastosindirectos ORDER BY URTE DESC");

while ($row = mysqli_fetch_array($resultadogastosindirectos)) {

	$arraygastoindirecto = array("id" => utf8_encode($row['ID']),"urte" => utf8_encode($row['URTE']), "coefgi" => utf8_encode($row['COEF_GI']));

	$arraygastoindirectos[] = $arraygastoindirecto;

}
$js_arraygastoindirectos = json_encode($arraygastoindirectos);
echo $js_arraygastoindirectos;
?>
