<?php


session_start();   

if (!isset($_SESSION['usuario'])){
if (!isset($_POST['usuario'])&&!isset($_POST['password'])){

?>
<html>
	<head>
		<title>Titulo de la webapp</title>
<?php
require_once ("head.php");
 
?>
	</head>
	<body>
		<div>
			<div class="contenedorlogin">
				<h2 class="iniciosesionheader">INAK INGENIARITZA</h2>
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
					<div class="contenedorlogindos">
						<input id="us" type="text" class="inputtext" placeholder="Usuario" name="usuario"  />
						<input id="pass" type="password" class="inputtext" placeholder="Contraseña" name="password" />
						<input id="enviar" name="enviar" type="submit" value="Iniciar Sesión" class="botoninicio">
					</div>
				</form>
			</div>
		</div>
	</body>
</html>
<?php

}else{

	// $con = mysqli_connect("localhost", "webmaster", "intranet%inak", "bddinak");
  //$con=mysqli_connect("db5000334940.hosting-data.io", "dbu256645", "Intranet%inak7495", "dbs326439");
	$con=mysqli_connect("localhost", "root", "", "dbs329414");
mysqli_set_charset($con,"latin1");		
		$password = sha1($_POST['password']);
		$resultado = mysqli_query($con, "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='{$_POST['usuario']}'  AND CLAVEWEB='{$password}'");
		$count = 0;
		while ($row = mysqli_fetch_array($resultado)) {
	    	$count++;  
        	$result = $row;  
    	} 
		
		if($count == 0)  
    		{  
       			 echo 0;  
				  echo '<p>Se ha establecido la conexión al servidor MySQL con éxito.</p >';
    		}  
    	else  
    		{
    	  		$_SESSION['usuario'] = $_POST['usuario'];
               header("location:ph.php");  
        		  echo '<p>Se ha establecido la conexión al servidor MySQL con éxito.</p >';
    		}  
}
}else{
   
	session_destroy();
	echo '<h1>???</h1>';  
}
?>
