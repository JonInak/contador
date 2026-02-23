<?php
// $dbhost='dbs326439.db.1and1.com';/*nombre de servidor*/  
// $dbusername='webmaster';/*usuario de base de datos*/  
// $dbuserpass='intranet%inak';/*contraseña, la deje en blanco para pruebas*/  
// $dbname='bddinak';/*nombre de la base de datos*/  

// $dbhost='localhost';/*nombre de servidor*/  
// $dbusername='root';/*usuario de base de datos*/  
// $dbuserpass='';/*contraseña, la deje en blanco para pruebas*/  
// $dbname='bddinak';/*nombre de la base de datos*/  

$dbhost = 'localhost';/*nombre de servidor*/
$dbusername = 'root';/*usuario de base de datos*/
$dbuserpass = '';/*contraseña, en blanco para XAMPP local*/
$dbname = 'dbs329414';/*nombre de la base de datos*/



$link = mysqli_connect($dbhost, $dbusername, $dbuserpass, $dbname);
mysqli_set_charset($link, "latin1");
if (mysqli_connect_errno()) {
  die('<p>Error al conectar con servidor MySQL: ' . mysqli_connect_error() . '</p>');
} else {
  //echo '<p>Se ha establecido la conexión al servidor MySQL con éxito.</p >';
}

// $link = mysql_connect ($dbhost, $dbusername, $dbuserpass);/*creamos el enlace a la bd*/  
// mysql_select_db($dbname,$link);/*seleccionar la bd*/  
?>