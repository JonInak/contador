<?php
//header("location:ph.php");
session_start();  
//////////////////////////////////////
if(!isset($_SESSION['usuario']))  {
    echo '<p>no hay sesión</p >';
}
  //$host_name = 'db5000334940.hosting-data.io';
  //$database = 'dbs326439';
  //$user_name = 'dbu256645';
  //$password = 'Intranet%inak7495';
  //$connect = mysql_connect($host_name, $user_name, $password, $database);
$dbhost='db5000334940.hosting-data.io';/*nombre de servidor*/  
$dbusername='dbu256645';/*usuario de base de datos*/  
$dbuserpass='Intranet%inak3216';/*contraseña, la deje en blanco para pruebas*/  
$dbname='dbs326439';/*nombre de la base de datos*/ 
$link=mysqli_connect($dbhost, $dbusername, $dbuserpass,$dbname);

mysqli_select_db($link,$dbname); 
//////////////////////////////////////
echo '<p>aaa</p >';
  
  if (mysqli_error()) {
    die('<p>Error al conectar con servidor MySQL: '.mysqli_error().'</p>');
  } else {
    echo '<p>Se ha establecido la conexión al servidor MySQL con éxito.</p >';
   
  }
//$resultadoquery = mysqli_query($link, "USUARIO FROM tb_usuariosinak WHERE USUARIO=' jon' ");
$resultadoquery = mysqli_query($link,  "SELECT * FROM tb_trabajos");
echo '<p>ok</p >';
$rowcount=mysqli_num_rows($resultadoquery);
 printf("Result set has %d rows.\n",$rowcount);
echo num_rows;
$row = mysqli_fetch_array($resultadoquery)








?>