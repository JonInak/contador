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
			if ( $_SESSION['usuario'] =="esti"| $_SESSION['usuario'] =="ainhoa"| $_SESSION['usuario'] =="izaskun"| $_SESSION['usuario'] =="paula"| $_SESSION['usuario'] =="inaki"){
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
		<div data-role="page" id="ptidosh" >
			<div data-role="panel" id="paneltrabajosseguimiento" class="menu">
				<!-- panel content goes here -->
				<?php
				if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon") {
					require_once ("paneladmin.php");
				} else {
					if ($_SESSION['usuario'] == "unai"){
						require_once ("panelunai.php");
					}else{
						if ($_SESSION['usuario'] == "joanes"){
							require_once ("paneljoanes.php");
						}else{
							if ($_SESSION['usuario'] == "esti" or $_SESSION['usuario'] == "ainhoa" or $_SESSION['usuario'] == "izaskun"or $_SESSION['usuario'] == "paula"or $_SESSION['usuario'] == "inaki"){
								require_once ("panelseghoras.php");
							}else{
								require_once ("panel.php");
							}
						}
					}
				}
				?>
				
			</div><!-- /panel -->
			<div data-role="header" class="menu">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#paneltrabajosseguimiento" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Seguimiento de trabajos</h1>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
					<a id="filtrourte" href="#popupurte" data-role="button" data-rel="popup" data-position-to="window" class="btncabecera" data-transition="pop">2021</a>
				</div>
			</div><!-- /header -->			

			<div data-role="content" class="anchocontenidodesktop">

				<div id="pticabecera">
					<table id="ptitable">
						<tr>
							
							<th rowspan="3" id="alias"> ALIAS </th>
							<th colspan="28" >  </th>
							
						</tr>
						<tr>
							<th colspan="1">Replanteo</th>
							<th colspan="1">Delineación</th>
							<th colspan="1">Cálculo</th>
							<th colspan="1">Revisión</th>
							
							<th colspan="1">Asistencia</th>
							<th colspan="1">Mediciones</th>
							<th colspan="1">Otros</th>
							<th colspan="1">TOTAL</th>

						</tr>
						<tr class="pticabecerados">
							<th >H</th>
							
							
							<th >H</th>
							
							<th >H</th>
							
							<th >H</th>
							
							<th >H</th>
							
							<th >H</th>
							
							<th >H</th>
														
							<th >H</th>
							
							
							
							

						</tr>


					</table>

				</div><!-- /content -->

			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
