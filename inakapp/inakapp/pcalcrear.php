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
		<div data-role="page" id="pcalcrear" >
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

				<div id="phrdiv">
				<div id="tablasmeses">
					<table id="phtablehorasresumen">
						<tr>
							<th colspan = "42" rowspan = "4" id="tablecodigo"> MES - AÑO </th>
							<th colspan = "3"> HT </th>
							<th colspan = "3"> horas </th>
						</tr>
						<tr>
							<th colspan = "3"> HT - HOY </th>
							<th colspan = "3"> horas </th>
						</tr>
						<tr>
							<th colspan = "3"> HR </th>
							<th colspan = "3"> horas </th>
						</tr>
						<tr>
							<th colspan = "3"> BOLSA </th>
							<th colspan = "3"> horas </th>
						</tr>
						<tr>
							<th> 1 </th>
							<th> 2 </th>
							<th> 3 </th>
							<th> 4 </th>
							<th> 5 </th>
							<th> 6 </th>
							<th> 7 </th>
							<th> 8 </th>
							<th> 9 </th>
							<th> 10 </th>
							<th> 11 </th>
							<th> 12 </th>
							<th> 13 </th>
							<th> 14 </th>
							<th> 15 </th>
							<th>  </th>
							
						</tr>
						
						<tr>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
														
						</tr>
						<tr>
							<th> 16 </th>
							<th> 17 </th>
							<th> 18 </th>
							<th> 19 </th>
							<th> 20 </th>
							<th> 21 </th>
							<th> 22 </th>
							<th> 23 </th>
							<th> 24 </th>
							<th> 25 </th>
							<th> 26 </th>
							<th> 27 </th>
							<th> 28 </th>
							<th> 29 </th>
							<th> 30 </th>
							<th> 31 </th>
							
						</tr>
						
						</tr>
						<tr>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
							<td>8:00</td>
														
						</tr>
					</table>				
				</div>
			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
