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
			if ($_SESSION['usuario'] =="eli" | $_SESSION['usuario'] =="jon" | $_SESSION['usuario'] =="unai"){
				?>
				<html>
			<head>

				<title>Titulo de la webapp o de la sección</title>

				<?php
				require_once ("head.php");
				?>
				
				<!-- Archivo que llama a las librerias y Css´s  -->
			</head>
		</html>
		<!-- <body> -->

		<!-----------PAGINA TRABAJOS ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paglistadotrabajos" > -->
		<div data-role="page" id="ptve" >
			<div data-role="panel" id="paneltrabajos" class="menu">
				<!-- panel content goes here -->
				<?php
				if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon") {
					require_once ("paneladmin.php");
				} else {
					if ($_SESSION['usuario'] == "unai"){
						require_once ("panelunai.php");
					}else{
						require_once ("panel.php");
					}
				}
				?>
				
			</div><!-- /panel -->

			<div data-role="header" class="menu">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#paneltrabajos" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Trabajos</h1>
				

				<!-- <a href="#" data-icon="bars">Menu</a> -->
			</div><!-- /header -->

			<div data-role="content" class="anchocontenidodesktop">

				<div id="ptcabecera">
					<table id="pttable">
						<tr>
							<th id="tablecodigo"> CODIGO </th>
							<th > ALIAS </th>
							<th > TITULO COMPLETO </th>
							<th > UBICACIÓN </th>
							<th > PROMOTOR </th>
							<th > CLIENTE </th>
							<th > ARQUITECTO </th>
							<th > ASIGNADO A </th>
							<th > FECHA INICIO </th>
							<th > FECHA FIN </th>
							<th > VISADO </th>
							<th > CALCULO ESTRUCTURA </th>
							<th > PROYECTO COMPLETO </th>
							<th > CONT./CIMEN. ESPECIAL </th>
							<th > OTROS </th>
							<th > COMENTARIOS </th>
						</tr>
					</table>
					<div data-role="popup" id="popupvisado"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Visado:</h3>
            					<fieldset id="visado" data-role="controlgroup">
        							<input type="radio" name="radiovisado" id="noprocede" value="on" checked="checked">
        							<label for="noprocede">No procede</label>
        							<input type="radio" name="radiovisado" id="si" value="off">
        							<label for="si">Sí</label>
        							<input type="radio" name="radiovisado" id="sidescargado" value="other">
        							<label for="sidescargado">Sí, descargado</label>
        							<input type="radio" name="radiovisado" id="sienviado" value="other">
        							<label for="sienviado">Sí, enviado</label>
    							</fieldset>		
            					<button id="popupvisadoboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupcomentarios"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Comentarios:</h3>
            					<input type="text" id="modcomentarios" value="" placeholder="Comentarios" >            					
            					<button id="popupcomentariosboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
				</div><!-- /content -->
			</div><!-- /page -->
			<?php	
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
