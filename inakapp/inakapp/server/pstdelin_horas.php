<?php


// Create connection
$arraytrabajosusuario=array();
$arraytrabajosusuariodia=array();

//$con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
$con=mysqli_connect("localhost", "root", "", "dbs329414");
//mysql_set_charset('utf8');

// Check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//$resultadotrabajosdia = mysqli_query($con, "SELECT * FROM tb_horas  WHERE YEAR(FECHA) ='2020' ORDER BY CODIGO_INAK DESC" );
$resultadotrabajosdia = mysqli_query($con, "SELECT * FROM tb_horas  ORDER BY CODIGO_INAK DESC" );
while ($row = mysqli_fetch_array($resultadotrabajosdia)) {
$arraytrabajosusuario=array("id"=>utf8_encode($row['ID_HORAS']),"fecha"=>utf8_encode($row['FECHA']),"usuario"=>utf8_encode($row['USUARIO']), "proyecto"=>utf8_encode($row['PROYECTO']),"fase"=>utf8_encode($row['FASE']), "detalle"=>utf8_encode($row['DETALLE']),"horas"=>$row['HORAS'],"bolsa"=>$row['BOLSA'],"fuera"=>$row['FUERA'],"codigo"=>$row['CODIGO_INAK']);
$arraytrabajosusuariodia[] = $arraytrabajosusuario;
}
$js_arraytrabajosusuariodia = json_encode($arraytrabajosusuariodia);
echo $js_arraytrabajosusuariodia;
?>
