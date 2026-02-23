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
		<div data-role="page" id="pt" >
			<div data-role="panel" id="paneltrabajos" class="menu">
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
				<a href="#paneltrabajos" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Trabajos</h1>
				
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
							<th > AUTOR </th>
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
					<!-- <a href="#popupws" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-check ui-btn-icon-left ui-btn-a" data-transition="pop">ws</a> -->
					<div data-role="popup" id="popupws"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Subtrabajo nuevo</h3>
            					<input type="text" name="user" id="wsalias" value="" placeholder="alias" >
            					<input type="text" name="pass" id="wsdescripcion" value="" placeholder="descripcion" >
            					<input type="text" name="pass" id="wsasignadoa" value="" placeholder="asignado a" >
            					<input type="text" name="pass" id="wscalculoestructura" value="" placeholder="cálculo estructura" >
            					<input type="text" name="pass" id="wsproyectocompleto" value="" placeholder="proyecto completo" >
            					<input type="text" name="pass" id="wsccespecial" value="" placeholder="cont./ciment. especial" >
            					<input type="text" name="pass" id="wsotros" value="" placeholder="otros" >
            					<button id="popupwsmenuboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupwtitulocompleto"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Titulo completo</h3>
            					<input type="text" id="modtitulo" value="" placeholder="Titulo completo" >
            					<button id="popupwtitulocompletoboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupubicacion"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Ubicación</h3>
            					<input type="text" id="modubicacion" value="" placeholder="Ubicación" >            					
            					<button id="popupubicacionboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popuppromotor"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Promotor</h3>
            					<input type="text" id="modpromotor" value="" placeholder="Promotor" >            					
            					<button id="popuppromotorboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupcliente"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Cliente</h3>
            					<input type="text" id="modcliente" value="" placeholder="Cliente" >            					
            					<button id="popupclienteboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popuparquitecto"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Arquitecto</h3>
            					<input type="text" id="modarquitecto" value="" placeholder="Arquitecto" >            					
            					<button id="popuparquitectoboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupasignadoa"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Asignado a:</h3>
            					<fieldset id="asignadoa" data-role="controlgroup">
									<input type="checkbox" name="ainhoa" id="ainhoa">
        							<label for="ainhoa">Ainhoa</label>
									<input type="checkbox" name="cris" id="cris">
        							<label for="cris">Cris</label>
									<input type="checkbox" name="cristina" id="cristina">
        							<label for="cristina">Cristina</label>
									<input type="checkbox" name="eros" id="eros">
        							<label for="eros">Eros</label>
            						<input type="checkbox" name="esti" id="esti">
        							<label for="esti">Esti</label>
									<input type="checkbox" name="izaskun" id="izaskun">
        							<label for="izaskun">Izaskun</label>
									<input type="checkbox" name="joanes" id="joanes">
        							<label for="joanes">Joanes</label>
        							<input type="checkbox" name="jon" id="jon">
        							<label for="jon">Jon</label>
        							<input type="checkbox" name="mikel" id="mikel">
        							<label for="mikel">Mikel</label>
        							<input type="checkbox" name="unai" id="unai">
        							<label for="unai">Unai</label>   							       																
									<input type="checkbox" name="ziortza" id="ziortza">
        							<label for="ziortza">Ziortza</label>
									
									
        							    
    							</fieldset> 
    							<input type="text" id="modasignadoa" value="" placeholder="Asignado a" >          					
            					<button id="popupasignadoaboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
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
					<div data-role="popup" id="popupcalculoestructura"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Cálculo estructura:</h3>
            					<fieldset id="calculoestructura" data-role="controlgroup">
        							<input type="radio" name="radiocalculoestructura" id="calculoestructurasi" value="on" checked="checked">
        							<label for="calculoestructurasi">Sí</label>
        							<input type="radio" name="radiocalculoestructura" id="calculoestructurano" value="off">
        							<label for="calculoestructurano">No</label>
    							</fieldset>		
            					<button id="popupcalculoestructuraboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupproyectocompleto"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Proyecto completo:</h3>
            					<fieldset id="proyectocompleto" data-role="controlgroup">
        							<input type="radio" name="radioproyectocompleto" id="proyectocompletosi" value="on" checked="checked">
        							<label for="proyectocompletosi">Sí</label>
        							<input type="radio" name="radioproyectocompleto" id="proyectocompletono" value="off">
        							<label for="proyectocompletono">No</label>
    							</fieldset>		
            					<button id="popupproyectocompletoboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupccespecial"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Cont./Ciment. especial:</h3>
            					<fieldset id="ccespecial" data-role="controlgroup">
        							<input type="radio" name="radioccespecial" id="ccespecialsi" value="on" checked="checked">
        							<label for="ccespecialsi">Sí</label>
        							<input type="radio" name="radioccespecial" id="ccespecialno" value="off">
        							<label for="ccespecialno">No</label>
    							</fieldset>		
            					<button id="popupccespecialboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupotros"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Otros:</h3>
            					<input type="text" id="modotros" value="" placeholder="Otros" >            					
            					<button id="popupotrosboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
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
