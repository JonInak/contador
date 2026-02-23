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
			if ($_SESSION['usuario'] =="eli" | $_SESSION['usuario'] =="jon" | $_SESSION['usuario'] =="esti"){
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
		
		<div data-role="page" id="phrustres" >
			
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
				<h1>Inak Ingeniaritza - Resumen horas</h1>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
				<a id="filtrousuario" href="#popupusuario"  data-role="button"  class="btncabecera " data-rel="popup" >Usuario</a>
				<a id="filtrourte" href="#popupurte"  data-role="button"  class="btncabecera "  data-rel="popup" >Año</a>
				</div>
				
				<label id="usuariooculto"> <?php
				echo $_SESSION['usuario'];
					?> </label>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
				</div>
			</div><!-- /header -->
			<div data-role="popup" id="popupurte"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>AÑO</h3>
            					<input type="number" id="modfecha" value="2026" placeholder="año" >
            					<button id="botonurte" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
        					</div>
    					</form>
				</div>
			<div data-role="popup" id="popupusuario"  class="ui-corner-all">
				<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Usuario:</h3>
								<button id="popupusuarioboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
            					<fieldset id="usuario" data-role="controlgroup">
								    <input type="radio" name="radioasesoria" id="jon" value="on" checked="checked">
        							<label for="jon">Jon</label>
									<input type="radio" name="radioasesoria" id="achraf" value="on">
        							<label for="achraf">Achraf</label>
									<input type="radio" name="radioasesoria" id="ainhoa" value="on">
        							<label for="ainhoa">Ainhoa</label>
									<input type="radio" name="radioasesoria" id="alaitzarsuaga" value="on">
        							<label for="alaitzarsuaga">AlaitzArsuaga</label>									
									<input type="radio" name="radioasesoria" id="amaya" value="on">
        							<label for="amaya">Amaya</label>
									<input type="radio" name="radioasesoria" id="benjamin" value="on">
        							<label for="benjamin">Benjamin</label>										
									<input type="radio" name="radioasesoria" id="carlos" value="on">
        							<label for="carlos">Carlos</label>
									<input type="radio" name="radioasesoria" id="carolina" value="on">
        							<label for="carolina">Carolina</label>
									<input type="radio" name="radioasesoria" id="cris" value="on">
        							<label for="cris">Cris</label>
									<input type="radio" name="radioasesoria" id="eli" value="on">
        							<label for="eli"> Eli</label>
        							<input type="radio" name="radioasesoria" id="esti" value="on">
        							<label for="esti"> Esti</label>
									<input type="radio" name="radioasesoria" id="gorka" value="on">
        							<label for="gorka">Gorka</label>
									<input type="radio" name="radioasesoria" id="hector" value="on">
        							<label for="hector">Héctor</label>
									<input type="radio" name="radioasesoria" id="ibai" value="on">
        							<label for="ibai">Ibai</label>
									<input type="radio" name="radioasesoria" id="idoia" value="on">
        							<label for="idoia">Idoia</label>
									<input type="radio" name="radioasesoria" id="igor" value="on">
        							<label for="igor">Igor</label>
									<input type="radio" name="radioasesoria" id="imanol" value="on">
        							<label for="imanol">Imanol</label>
									<input type="radio" name="radioasesoria" id="inaki" value="on">
        							<label for="inaki">Iñaki</label>
									<input type="radio" name="radioasesoria" id="irati" value="on">
        							<label for="irati">Irati</label>
									<input type="radio" name="radioasesoria" id="izaskun" value="on">
        							<label for="izaskun">Izaskun</label>
									<input type="radio" name="radioasesoria" id="joanes" value="on">
        							<label for="joanes">Joanes</label>
									<input type="radio" name="radioasesoria" id="jonpueyo" value="on">
        							<label for="jonpueyo">JonPueyo</label>
									<input type="radio" name="radioasesoria" id="jonander" value="on">
        							<label for="jonander">Jonander</label>
									<input type="radio" name="radioasesoria" id="joseantonio" value="on">
        							<label for="joseantonio">JoseAntonio</label>									
									<input type="radio" name="radioasesoria" id="julen" value="on">
        							<label for="julen">Julen</label>
									<input type="radio" name="radioasesoria" id="leyanis" value="on">
        							<label for="leyanis">Leyanis</label>
									<input type="radio" name="radioasesoria" id="mayra" value="on">
        							<label for="mayra">Mayra</label>
									<input type="radio" name="radioasesoria" id="mikelgil" value="on">
        							<label for="mikelgil">MikelGil</label>
									<input type="radio" name="radioasesoria" id="mikelrankin" value="on">
        							<label for="mikelrankin">MikelRankin</label>
									<input type="radio" name="radioasesoria" id="nekane" value="on">
        							<label for="nekane">Nekane</label>
									<input type="radio" name="radioasesoria" id="maitane" value="on">
        							<label for="maitane">Maitane</label>
									<input type="radio" name="radioasesoria" id="paula" value="on">
        							<label for="paula">Paula</label>	
									<input type="radio" name="radioasesoria" id="peru" value="on">
        							<label for="peru">Peru</label>																			
									<input type="radio" name="radioasesoria" id="saydy" value="on">
        							<label for="saydy">Saydy</label>
									<input type="radio" name="radioasesoria" id="unai" value="on">
        							<label for="unai">Unai</label>		
									<input type="radio" name="radioasesoria" id="xabier" value="on">
        							<label for="xabier">Xabier</label>	
									<input type="radio" name="radioasesoria" id="yolanda" value="on">
        							<label for="yolanda">Yolanda</label>
									<input type="radio" name="radioasesoria" id="aux" value="on">
        							<label for="aux">Aux</label>									
									
									
    							</fieldset>		
            					
        					</div>
    					</form>
			</div>
			<div data-role="popup" id="popupvacaciones">
							<form class="popupwsmenu">
    						
								<div style="padding:10px 20px;">
									<table id="tablavacaciones" style="margin: 20px 0px;">
										<tr>
											<th>FECHA</th>
										</tr>	
									</table>
								</div>
							</form>
					
			</div>
			<div data-role="popup" id="popupvacacionesurteanterior">
							<form class="popupwsmenu">
    						
								<div style="padding:10px 20px;">
									<table id="tablavacacionesurteanterior" style="margin: 20px 0px;">
										<tr>
											
										</tr>	
									</table>
								</div>
							</form>
					
			</div>
			<div data-role="content" class="anchocontenidodesktop">

				<div id="phrdiv" >
				<div id="tablasmeses">
					
					<table id="phresumenustable" >
						
						
						<tr>
							<th colspan = "42" rowspan = "7" id="tablecodigo" width=50%>  </th>
							<th colspan = "3" class="dcha"> H TEÓRICAS + H VACACIONES: </th>
							<th colspan = "3" id="horascalendariourtehoydos" > Z </th>	
						</tr>
						
						<tr>
							
							<th colspan = "3" class="dcha horasreales"> H TRABAJADAS + H VACACIONES + H BAJA: </th>
							<th colspan = "3" id="horasrealesurtedos" class="horasreales" > X </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H BOLSA: </th>
							<th colspan = "3" id="horasorientativasvacaciones" > W </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha horasvacaciones" > DÍAS VACACIONES DE LIBRE ELECCIÓN DISFRUTADOS: </th>
							<th colspan = "3" id="vacacionesdisfrutadasdos" class="horasvacaciones" > Y </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha horasvacaciones" id="diasvacaciones"> DÍAS VACACIONES DE LIBRE ELECCIÓN DISFRUTADOS: </th>
							<th colspan = "3" id="vacacionesdisfrutadasdosurteanterior"  class="horasvacaciones"> Y </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha horasbaja"> H BAJA: </th>
							<th colspan = "3" id="baja" class="horasbaja" > Y </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha naranja"> H AUSENCIA: </th>
							<th colspan = "3" id="horasausenciaurte" class="naranja" > Y </th>	
						</tr>
						
						
					
					</table>									
					
						
			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
