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
			if ($_SESSION['usuario'] =="eli" | $_SESSION['usuario'] =="jon" | $_SESSION['usuario'] =="esti"| $_SESSION['usuario'] =="unai" | $_SESSION['usuario'] =="jose"| $_SESSION['usuario'] =="marcos" | $_SESSION['usuario'] =="markel" | $_SESSION['usuario'] =="andoni" | $_SESSION['usuario'] =="ziortza" | $_SESSION['usuario'] =="alaitz"| $_SESSION['usuario'] =="joanes"| $_SESSION['usuario'] =="ainhoa"){
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
		
		<div data-role="page" id="phr" >
			
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
				<a id="filtrourte" href="#popupurte"  data-role="button"  class="btncabecera "  data-rel="popup" >Año</a>
				</div>
				<label id="usuariooculto"> <?php
				echo $_SESSION['usuario'];
					?> </label>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
					<!-- <a id="resumenhorasusuario" href="#popupresumenusuario" data-role="button"  class="btncabecera " >Usuario</a>
					<div id="btnusuario" data-role="collapsible" data-theme="b" data-content-theme="c" class=''>
								<h2 >Usuario</h2>
								<ul data-role="listview" data-filter="false">
									<li>
										<a id="" href="#">Jon</a>
									</li>
									<li>
										<a id="" href="#">Esti</a>
									</li>

								</ul>
							</div>-->
				</div>
			</div><!-- /header -->
			<div data-role="popup" id="popupurte"  class="ui-corner-all">
    					<form class="popupwsmenu">
        					<div style="padding:10px 20px;">
            					<h3>AÑO</h3>
            					<input type="number" id="modfecha" value="2017" placeholder="año" >
            					<button id="botonurte" type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
        					</div>
    					</form>
				</div>

			<div data-role="content" class="anchocontenidodesktop">

				<div id="phrdiv">
				<div id="tablasmeses">
					<table id="phresumentable">
						<tr>
							<th colspan = "42" rowspan = "5" id="tablecodigo" width=50%>  </th>
							<th colspan = "3" class="dcha"> H TEÓRICAS: </th>
							<th colspan = "3" id="horasteoricasurte"> horas </th>
							<th colspan = "3" id="horasteoricasurtecomentario"> ... </th>
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H TEÓRICAS HOY: </th>
							<th colspan = "3" id="horascalendariourtehoy" class='teoricashoy'> horas </th>
							<th colspan = "3" id="horascalendariourtehoycomentario" class='teoricashoy'> Horas Teóricas + Horas Vacaciones (1752+78)</th>
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H REALES: </th>
							<th colspan = "3" id="horasrealesurte" class='imputadas'> horas </th>
							<th colspan = "3" id="horasrealesurtecomentario" class='imputadas'> Horas Reales + Horas Vacaciones </th>
						</tr>
						<tr>
							<th colspan = "3" class="dcha"> H BOLSA: </th>
							<th colspan = "3" id="horascomplementarias" > horas </th>
							<th colspan = "3" id="horascomplementariascomentario"> ... </th>
						</tr>
						<!-- /<tr>
							// <th colspan = "3" class="dcha"> VACACIONES PENDIENTES: </th>
							// <th colspan = "3" id="horasvacaciones"> horas </th>
							// <th colspan = "3" id="horasvacacionescomentario"> comentario </th>
						// </tr>-->
					</table>
								
				</div>
				
			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
