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
		<div data-role="page" id="phss" >
			<div data-role="panel" id="panelhorasseguimiento" class="menu">
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
				<a href="#panelhorasseguimiento" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Horas seguimiento</h1>
				<a id="filtrourte" href="#popupurte" data-icon="" class="btncabecera" data-back-btn-text="previous" data-rel="popup" data-position-to="window" data-transition="pop" >2016</a>
			</div><!-- /header -->
			<div data-role="popup" id="popupurte"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>AÑO</h3>
            					<input type="number" id="modfecha" value="2016" placeholder="año" >
            					<button id="botonurte" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
        					</div>
    					</form>
			</div>
			<div data-role="content" class="anchocontenidodesktop">

				<div id="ptcabecera">
				
					<table id="pttablehorasseguimiento">
					
						<tr>
							<th id="tablecodigo"> FECHA </th>
							<th > PROYECTO </th>
							<th > FASE </th>
							<th > DETALLE </th>
							<th > HORAS </th>
							<th > TRABAJADOR </th>
							<th > BOLSA </th>
						</tr>
					</table>
					
				</div>
					
					
				</div><!-- /content -->
				
				

			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
