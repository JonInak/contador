<?php  
session_start();  
include_once "config.php";  
   
function verificar_login($user,$password,&$result) {  
  
    $sql = "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='$user' AND CLAVEWEB='$password'";  
    $rec = mysql_query($sql);  
    $count = 0;  
   
    while($row = mysql_fetch_object($rec))  
    {
    	if ($user=="jon" | $user=="eli"){
    		$count++;  
        	$result = $row;  
    	} 
        
    }  
    if($count == 1)  
    {  
        return 1;  
    }  
    else  
    {  
        return 0;  
    }  
}  
if(!isset($_SESSION['usuario']))  
{  
    if(isset($_POST['usuario']))  
    {  
        if(verificar_login($_POST['usuario'],$_POST['password'],$result) == 1)  
        {  
            $_SESSION['usuario'] = $result->USUARIO; 
			echo $_SESSION['usuario']; 
            header("location:index.php");  
            
        }  
        else  
        {  
    echo '<div class="error">Su usuario es incorrecto, intente nuevamente.</div>';  
        }  
    }  
?>
<html>
	<head>
		<title>Inak Ingeniaritza</title>

		<!-- /*Archivo que llama a las librerias y Css*/ -->
		<?php
		require_once ("head.php");
		?>
		<!-- <script src="js/lsttrabajos.js"></script> -->
	</head>
	<body>
		<div>
			<div class="contenedorlogin">
				<h2 class="iniciosesionheader">INAK INGENIARITZA</h2>
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
					<div class="contenedorlogindos">
						<input type="text" class="inputtext" placeholder="Usuario" name="usuario"  />
						<input type="password" class="inputtext" placeholder="Contraseña" name="password" />

						<input id="enviar" name="enviar" type="submit" value="Iniciar Sesión" class="botoninicio">

					</div>
				</form>

			</div>
		</div>

		<?php
		}else {
		?>
		
			<?php
			$probando = $_SESSION['usuario'] ;
			if ($_SESSION['usuario'] =="eli" | $_SESSION['usuario'] =="jon"){
				?>
				<html>
			<head>

				<title>Inak Ingeniaritza</title>

				<?php
				require_once ("head.php");
				?>
				<!-- <script src="js/lsttrabajos.js"></script> -->
				<!-- Archivo que llama a las librerias y Css´s  -->
			</head>
		</html>
		<!-- <body> -->

		<!-----------PAGINA TRABAJOS ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paglistadotrabajos" > -->
		<div data-role="page" id="phr" >
			<div data-role="panel" id="panelfacturasemitidas" class="menu">
				<!-- panel content goes here -->
				<?php
				if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon") {
					require_once ("paneladmin.php");
				} else {
					require_once ("panel.php");
				}
				?>
			
			</div><!-- /panel -->

			<div data-role="header" class="menu">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#panelfacturasemitidas" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Facturas recibidas</h1>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
					<a id="nuevafacturarecibida" href="#" data-role="button"  class="btncabecera " >Nueva factura</a>
				</div>
			</div><!-- /header -->

			<div data-role="content" class="anchocontenidodesktop">

				<div id="ptcabecera">
					<table id="pttablefacturasrecibidas">
						<tr>
							<th colspan = "93" id="tablecodigo"> MES - AÑO </th>
						</tr>
						<tr>
							<th colspan = "3"> 1 </th>
							<th colspan = "3"> 2 </th>
							<th colspan = "3"> 3 </th>
							<th colspan = "3"> 4 </th>
							<th colspan = "3"> 5 </th>
							<th colspan = "3"> 6 </th>
							<th colspan = "3"> 7 </th>
							<th colspan = "3"> 8 </th>
							<th colspan = "3"> 9 </th>
							<th colspan = "3"> 10 </th>
							<th colspan = "3"> 11 </th>
							<th colspan = "3"> 12 </th>
							<th colspan = "3"> 13 </th>
							<th colspan = "3"> 14 </th>
							<th colspan = "3"> 15 </th>
							<th colspan = "3"> 16 </th>
							<th colspan = "3"> 17 </th>
							<th colspan = "3"> 18 </th>
							<th colspan = "3"> 19 </th>
							<th colspan = "3"> 20 </th>
							<th colspan = "3"> 21 </th>
							<th colspan = "3"> 22 </th>
							<th colspan = "3"> 23 </th>
							<th colspan = "3"> 24 </th>
							<th colspan = "3"> 25 </th>
							<th colspan = "3"> 26 </th>
							<th colspan = "3"> 27 </th>
							<th colspan = "3"> 28 </th>
							<th colspan = "3"> 29 </th>
							<th colspan = "3"> 30 </th>
							<th colspan = "3"> 31 </th>
						</tr>
						<tr>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
							<th > E </th>
							<th > S </th>
							<th > H </th>
						
						</tr>
					</table>				

			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
