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
		
		<div data-role="page" id="phrusdos" >
			
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
            					<input type="number" id="modfecha" value="2018" placeholder="año" >
            					<button id="botonurte" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
        					</div>
    					</form>
				</div>
			<div data-role="popup" id="popupusuario"  class="ui-corner-all">
				<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>Usuario:</h3>
            					<fieldset id="usuario" data-role="controlgroup">
								    <input type="radio" name="radioasesoria" id="jon" value="on" checked="checked">
        							<label for="jon">Jon</label>
									<input type="radio" name="radioasesoria" id="ainhoa" value="on">
        							<label for="ainhoa">Ainhoa</label>
									<input type="radio" name="radioasesoria" id="alaitz" value="on">
        							<label for="alaitz">Alaitz</label>
									<input type="radio" name="radioasesoria" id="andoni" value="on">
        							<label for="andoni">Andoni</label>
									<input type="radio" name="radioasesoria" id="andres" value="on">
        							<label for="andres">Andrés</label>
									<input type="radio" name="radioasesoria" id="carollinauchuari" value="on">
        							<label for="carollinauchuari">CarolinaUchuari</label>
									<input type="radio" name="radioasesoria" id="cris" value="on">
        							<label for="cris">Cris</label>
									<input type="radio" name="radioasesoria" id="cristina" value="on">
        							<label for="cristina">Cristina</label>
									<input type="radio" name="radioasesoria" id="eli" value="on">
        							<label for="eli">Eli</label>
									<input type="radio" name="radioasesoria" id="erosdasilva" value="on">
        							<label for="erosdasilva"> ErosDaSilva</label>
        							<input type="radio" name="radioasesoria" id="esti" value="on">
        							<label for="esti"> Esti</label>
									<input type="radio" name="radioasesoria" id="inigo" value="on">
        							<label for="inigo">Iñigo</label>
									<input type="radio" name="radioasesoria" id="inigoflorindo" value="on">
        							<label for="inigoflorindo">IñigoFlorindo</label>
									<input type="radio" name="radioasesoria" id="izaskun" value="on">
        							<label for="izaskun">Izaskun</label>
									<input type="radio" name="radioasesoria" id="joanes" value="on">
        							<label for="joanes">Joanes</label>
									<input type="radio" name="radioasesoria" id="jose" value="on">
        							<label for="jose">Jose</label>
									<input type="radio" name="radioasesoria" id="marcos" value="on">
        							<label for="marcos">Marcos</label>
									<input type="radio" name="radioasesoria" id="markel" value="on">
        							<label for="markel">Markel</label>
									<input type="radio" name="radioasesoria" id="mayra" value="on">
        							<label for="mayra">Mayra</label>
									<input type="radio" name="radioasesoria" id="mikelrankin" value="on">
        							<label for="mikelrankin">MikelRankin</label>
									<input type="radio" name="radioasesoria" id="unai" value="on">
        							<label for="unai">Unai</label>
									<input type="radio" name="radioasesoria" id="ziortza" value="on">
        							<label for="ziortza">Ziortza</label>
									
									
									
									
    							</fieldset>		
            					<button id="popupusuarioboton" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
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
			<div data-role="content" class="anchocontenidodesktop">

				<div id="phrdiv" >
				<div id="tablasmeses">
					
					<table id="phresumentable" >
						
						<tr>
							<th colspan = "42" rowspan = "7" id="tablecodigo" width=50%>  </th>
							<th colspan = "3" class="dcha"> H ANUAL: </th>
							<th colspan = "3" id="" > 1752 </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H VACACIÓN: </th>
							<th colspan = "3" id="" > 78 </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H TRABAJADAS: </th>
							<th colspan = "3" id="horasrealesurtedos" > X </th>	
						</tr>
						
						<tr>
							<th colspan = "3" class="dcha"> H ORIENTARIVAS HOY: </th>
							<th colspan = "3" id="horascalendariourtehoydos" > Z </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H ORIENTARIVAS VACACIONES HOY: </th>
							<th colspan = "3" id="horasorientativasvacaciones" > W </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H VACACIONES: </th>
							<th colspan = "3" id="vacacionesdisfrutadasdos" > Y </th>	
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H BAJA: </th>
							<th colspan = "3" id="baja" > Y </th>	
						</tr>
						
						
					
					</table>									
					
						
			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
