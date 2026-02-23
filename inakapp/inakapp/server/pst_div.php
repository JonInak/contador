
<?php



$alias_ = $_POST['alias'];
$alias =  utf8_decode($alias_);

$registrotrabajodiv = array();
$arraytrabajosdiv = array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



$resultadotrabajosdiv = mysqli_query($con, "SELECT * FROM tb_trabajosdiv WHERE ALIAS_INAK = '$alias' ");

while ($row = mysqli_fetch_array($resultadotrabajosdiv)) {
	
	$registrotrabajodiv = array ("idtrabajodiv"=>utf8_encode($row['ID_TRABAJODIV']),"codigoinak"=>utf8_encode($row['CODIGO_INAK']),"aliasinak"=>utf8_encode($row['ALIAS_INAK']),"codigoinakdiv"=>utf8_encode($row['CODIGO_INAKDIV']),"fechaini"=>utf8_encode($row['FECHAINI']),"fechafin"=>utf8_encode($row['FECHAFIN']),"horas"=>'');
	$arraytrabajosdiv[]= $registrotrabajodiv;
}

$js_arraytrabajosdiv = json_encode($arraytrabajosdiv);
echo $js_arraytrabajosdiv;

?>