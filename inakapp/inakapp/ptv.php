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
			if ($_SESSION['usuario'] =="eli" | $_SESSION['usuario'] =="jon" | $_SESSION['usuario'] =="esti"| $_SESSION['usuario'] =="oscar"| $_SESSION['usuario'] =="david"| $_SESSION['usuario'] =="unai"| $_SESSION['usuario'] =="xabier"| $_SESSION['usuario'] =="aux"| $_SESSION['usuario'] =="amaya"| $_SESSION['usuario'] =="joseantonio"| $_SESSION['usuario'] =="peru"| $_SESSION['usuario'] =="nekane"| $_SESSION['usuario'] =="yolanda"| $_SESSION['usuario'] =="julen"| $_SESSION['usuario'] =="alaitzarsuaga"| $_SESSION['usuario'] =="carolina"| $_SESSION['usuario'] =="carlos"| $_SESSION['usuario'] =="ibai"| $_SESSION['usuario'] =="achraf"| $_SESSION['usuario'] =="marcos" | $_SESSION['usuario'] =="markel" | $_SESSION['usuario'] =="andoni" | $_SESSION['usuario'] =="ana" | $_SESSION['usuario'] =="ziortza" | $_SESSION['usuario'] =="cris"| $_SESSION['usuario'] =="inigo" | $_SESSION['usuario'] =="alaitz" | $_SESSION['usuario'] =="joanes"| $_SESSION['usuario'] =="ainhoa"| $_SESSION['usuario'] =="jose"| $_SESSION['usuario'] =="izaskun"| $_SESSION['usuario'] =="admin"| $_SESSION['usuario'] =="mayra"| $_SESSION['usuario'] =="cristina"| $_SESSION['usuario'] =="mikelrankin"| $_SESSION['usuario'] =="inaki"| $_SESSION['usuario'] =="hector"| $_SESSION['usuario'] =="leyanis"| $_SESSION['usuario'] =="jonpueyo"| $_SESSION['usuario'] =="carolinauchuari"| $_SESSION['usuario'] =="inigoflorindo"| $_SESSION['usuario'] =="erosdasilva"| $_SESSION['usuario'] =="nataliagarcia"| $_SESSION['usuario'] =="nerea"| $_SESSION['usuario'] =="nicolasmejia"| $_SESSION['usuario'] =="ikervillar"| $_SESSION['usuario'] =="jontolosa"| $_SESSION['usuario'] =="leiremartin"| $_SESSION['usuario'] =="gorka"| $_SESSION['usuario'] =="idoia"| $_SESSION['usuario'] =="imanol"| $_SESSION['usuario'] =="mikelgil"| $_SESSION['usuario'] =="benjamin"| $_SESSION['usuario'] =="paula"| $_SESSION['usuario'] =="maitane"| $_SESSION['usuario'] =="igor"| $_SESSION['usuario'] =="jonander"| $_SESSION['usuario'] =="irati"| $_SESSION['usuario'] =="saydy"){
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
		<div data-role="page" id="ptv" >
			<div data-role="panel" id="paneltrabajosv" class="menu">
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
				<a href="#paneltrabajosv" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
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
