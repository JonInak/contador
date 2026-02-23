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
			if ($_SESSION['usuario'] =="eli" | $_SESSION['usuario'] =="jon"| $_SESSION['usuario'] =="unai"| $_SESSION['usuario'] =="esti"){
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
		
		<div data-role="page" id="phress" >
			
			<div data-role="panel" id="panelfacturasemitidas" class="menu">
				<!-- panel content goes here -->
				<?php
				if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon" or $_SESSION['usuario'] == "esti") {
					require_once ("paneladmin.php");
				} else {
					require_once ("panel.php");
				}
				?>
			
			</div><!-- /panel -->

			<div data-role="header" class="menu">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#panelfacturasemitidas" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Resumen horas semana</h1>
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
			
			<div data-role="content" class="anchocontenidodesktop">

				<div id="phrdivdos">
				<div id="">
					
					<table id="phresumentabledos">
					<h2 ><label id="semanaseleccionada">Semana</label>
					<a id="anterior" href="#" class="ui-btn-inline" data-role="button" data-icon="arrow-l" data-iconpos="notext"></a>
					<a id="siguiente" href="#" class="ui-btn-inline" data-role="button" data-icon="arrow-r" data-iconpos="notext"></a>
					</h2>
					
						<tr>
							<th rowspan = "2" id="tablecodigo" width=50%> USUARIO </th>
							<th colspan = "4" > LUNES </th>
							<th colspan = "4" > MARTES </th>
							<th colspan = "4" > MIÉRCOLES </th>
							<th colspan = "4" > JUEVES </th>
							<th colspan = "4" > VIERNES </th>
							<th colspan = "4" > SÁBADO </th>
							<th colspan = "4" > DOMINGO </th>
							<th rowspan = "2"> H TRABAJADAS + H BAJA + H VACACIONES </th>
							<th rowspan = "2"> H BAJA </th>
							<th rowspan = "2"> H VACACIONES </th>
							<th rowspan = "2"> H OTROS </th>
							<th rowspan = "2"> H AUSENCIAS </th>
						</tr>
						<tr>
							<th > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
							<th  > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
							<th > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
							<th  > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
							<th  > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
							<th > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
							<th > HC </th>
							<th > HF </th>
							<th > HT </th>
							<th > HA </th>
						</tr>
					</table>
								
				</div>
				
			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
