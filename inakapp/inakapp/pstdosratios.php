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
		<title>Titulo de la webapp</title>

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

				<title>Titulo de la webapp o de la sección</title>
				<link href= “scrollbar.css” type= “text/css” rel= “stylesheet”>
				<?php
				require_once ("head.php");
				?>
				<!-- <script src="js/lsttrabajos.js"></script> -->
				<!-- Archivo que llama a las librerias y Css´s  -->
			</head>
		</html>
		<!-- <body> -->

		<!-----------PAGINA TRABAJOS SEGUIMIENTO ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paglistadotrabajos" > -->
		<div data-role="page" id="pstdosratios" >
			<div data-role="panel" id="paneltrabajosseguimiento" class="menu">
				<!-- panel content goes here -->
				<?php
				if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon") {
					require_once ("paneladmin.php");
				} else {
					require_once ("panel.php");
				}
				?>
				<!-- <script src="js/lsttrabajos.js"></script> -->
			</div><!-- /panel -->

			<div data-role="header" class="menu">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#paneltrabajosseguimiento" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Seguimiento de trabajos</h1>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
					<a id="gi" href="#popupgi" data-role="button" data-rel="popup" data-position-to="window" class="btncabecera" data-transition="pop">GI</a>
					<a id="filtrourte" href="#popupurte" data-role="button" data-rel="popup" data-position-to="window" class="btncabecera" data-transition="pop">2018</a>
				</div>
			
			</div><!-- /header -->

			<div data-role="content" class="anchocontenidodesktop">

				<div id="pstcabecera">
					<table id="psttable">
						<tr>
							<th rowspan="3" class="anchocodigo"> CODIGO </th>
							<th rowspan="3"> ALIAS </th>
							<th rowspan="3"> CLIENTE </th>
							<th rowspan="3"> I </th>
							<th rowspan="3"> B </th>
							<th rowspan="3"> B/I - %</th>
							<th rowspan="2"> GD + GI </th>
							<th rowspan="2" colspan="1" > GI </th>
							<th rowspan="2" colspan="1" > GD </th>
							<th colspan="18" > GD </th>
						</tr>
						<tr>
							<th colspan="2">Replanteo</th>
							<th colspan="2">Delineación</th>
							<th colspan="2">Cálculo</th>
							<th colspan="2">Revisión</th>
							
							<th colspan="3">Asistencia</th>
							<th colspan="2">Mediciones</th>
							<th colspan="2">Otros</th>
							<th colspan="2">Varios</th>

						</tr>
						<tr class="pstcabecerados">
							<th >€</th>				
							<th >€</th>
							<th >€</th>
							<th >H</th>
							<th >€</th>
							
							<th >H</th>
							<th >€</th>
							
							<th >H</th>
							<th >€</th>
							
							<th >H</th>
							<th >€</th>
							
							
							
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							
							<th >H</th>
							<th >€</th>
							
							<th >€</th>
							
						</tr>
					</table>
					
					<div data-role="popup" id="popupingreso"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Ingreso</h3>
            					<input type="text" id="modingreso" value="" placeholder="Ingreso" >            					
            					<button id="popupingresoboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupvarios"  class="ui-corner-all">
    					<form class="popupwsmenu">
    						
        					<div style="padding:10px 20px;">
        						<table id="tablavarios" style="margin: 20px 0px;">
            						<tr>
            							<th>TIPO</th>
            							<th>EUROS</th>
            						</tr>
            						
            					</table>
            					<h3>Nuevo</h3>
            					
            					<fieldset id="tipovarios" data-role="controlgroup">
        							<input type="radio" name="radiotipovarios" id="tipovariosvisado" value="on" checked="checked">
        							<label for="tipovariosvisado">Visado</label>
        							<input type="radio" name="radiotipovarios" id="tipovariosotro" value="off">
        							<label for="tipovariosotro">Otro</label>
    							</fieldset>		
            					<input type="text" id="modeuros" value="" placeholder="Euros" >            					
            					<button id="popupvariosboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupgi"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Coeficiente GI</h3>
            					<input type="text" id="modgi" value="" placeholder="Coeficiente GI" >            					
            					<button id="popupgiboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupurte"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>AÑO</h3>
            					<input type="number" id="modfecha" value="2017" placeholder="año" >
            					<button id="botonurte" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
        					</div>
    					</form>
			</div>	
				</div><!-- /content -->

			</div><!-- /page -->
			
			<!-----------PAGINA CONTRASEÑA ----------------------------------------------------------------------------------------->
			<!------------------------------------------------------------------------------------------------------------------------>
			<!------------------------------------------------------------------------------------------------------------------------>
			<div data-role="page" id="pstpass">
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
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
