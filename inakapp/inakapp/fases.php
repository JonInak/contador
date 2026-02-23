<?php
// Create connection
$arrayfases=array();
//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");
//mysql_set_charset('utf8');

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$resultadofases = mysqli_query($con, "SELECT * FROM tb_fases ORDER BY TIPO");

while ($row = mysqli_fetch_array($resultadofases)) {
$arrayfases[] = utf8_encode($row['1']);

//echo $row['1'];
// echo "<br>";


// echo "<li id=\"\"><a>";
// echo utf8_encode($row['1']);
// echo "</a></li>";



}
$js_arrayfases = json_encode($arrayfases);
//echo "var javascript_array = ". $js_arrayfases . ";\n";
echo $js_arrayfases;
?>
