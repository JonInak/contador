<?php
// Create connection
$arrayfases=array();
$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
//mysql_set_charset('utf8');
//mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadofases = mysqli_query($con, "SELECT * FROM tb_fases ORDER BY TIPO");

while ($row = mysqli_fetch_array($resultadofases)) {
$arrayfases[] = utf8_encode($row['1']);
}
$js_arrayfases = json_encode($arrayfases);
echo $js_arrayfases;
?>
