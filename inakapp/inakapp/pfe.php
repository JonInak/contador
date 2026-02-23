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
		<div data-role="page" id="pfe" >
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
				<h1>Inak Ingeniaritza - Facturas emitidas</h1>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
					<a id="nuevafacturaemitida" href="#" data-role="button"  class="btncabecera " >Nueva factura</a>
					<a id="nuevafacturaemitidaabono" href="#" data-role="button"  class="btncabecera " >Nueva factura de abono</a>
				</div>
				
					

				
				
			</div><!-- /header -->

			<div data-role="content" class="anchocontenidodesktop">

				<div id="ptcabecera">
					<table id="pttablefacturasemitidas">
						<tr>
							<th > TIPO </th>
							<th id="tablecodigo"> NÚMERO </th>
							<th > FECHA </th>
							<th > CLIENTE </th>
							<th > ALIAS </th>
							<th > BASE IMPONIBLE </th>
							<th > IVA % </th>
							<th > IVA </th>
							<th > IRPF % </th>
							<th > IRPF </th>
							<th > IMPORTE TOTAL </th>
							<th > FECHA COBRO </th>
							<th > COMENTARIO </th>
							<th > ASESORIA </th>
							<th > CODIGO </th>
						</tr>
					</table>
					<div data-role="popup" id="popupfecha"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Fecha</h3>
            					<input type="date" id="modfecha" value="" placeholder="Fecha" >
            					<button id="popupfechaboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
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
					<div data-role="popup" id="popupalias"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Alias</h3>
            					<input type="text" id="modalias" value="" placeholder="Alias" >
            					<button id="popupaliasboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupbaseimponible"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Base imponible</h3>
            					<input type="text" id="modbaseimponible" value="" placeholder="Base imponible" >
            					<button id="popupbaseimponibleboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupivaporc"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>IVA %</h3>
            					<input type="text" id="modivaporc" value="" placeholder="IVA %" >
            					<button id="popupivaporcboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupirpfporc"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>IRPF %</h3>
            					<input type="text" id="modirpfporc" value="" placeholder="IRPF %" >
            					<button id="popupirpfporcboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupfechacobro"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Fecha cobro</h3>
            					<input type="date" id="modfechacobro" value="" placeholder="Fecha cobro" >
            					<button id="popupfechacobroboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupcomentario"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Comentario</h3>
            					<input type="text" id="modcomentario" value="" placeholder="Comentario" >
            					<button id="popupcomentarioboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					</div>
					<div data-role="popup" id="popupasesoria"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Asesoría:</h3>
            					<fieldset id="asesoria" data-role="controlgroup">
        							<input type="radio" name="radioasesoria" id="preparada" value="on" checked="checked">
        							<label for="preparada">Preparada</label>
        							<input type="radio" name="radioasesoria" id="enviada" value="off">
        							<label for="enviada">Enviada</label>
        							<input type="radio" name="radioasesoria" id="incidencia" value="other">
        							<label for="incidencia">Incidencia</label>
    							</fieldset>		
            					<button id="popupasesoriaboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
        					</div>
    					</form>
					
					<div data-role="popup" id="popupasignadoa"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Asignado a:</h3>
            					<fieldset id="asignadoa" data-role="controlgroup">
            						<input type="checkbox" name="david" id="david">
        							<label for="david">David</label>
            						<input type="checkbox" name="esti" id="esti">
        							<label for="esti">Esti</label>
        							<input type="checkbox" name="jon" id="jon">
        							<label for="jon">Jon</label>
        							<input type="checkbox" name="oscar" id="oscar">
        							<label for="oscar">Oscar</label>
        							<input type="checkbox" name="unai" id="unai">
        							<label for="unai">Unai</label>
        							<input type="checkbox" name="marcos" id="marcos">
        							<label for="marcos">Marcos</label>
        							    
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
					<div data-role="popup" id="popupcodigotrabajo"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>CODIGO-TRABAJO</h3>
            					<input type="text" id="modcodigow" value="" placeholder="Código trabajo" >
            					<button id="popupcodigowboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Guardar</button>
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
