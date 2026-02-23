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

		<!-----------PAGINA TRABAJO SEGUIMIENTO ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paglistadotrabajos" > -->
		<div data-role="page" id="pti" >
			<div data-role="panel" id="paneltrabajoseguimiento" class="menu">
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
				<a href="#paneltrabajoseguimiento" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Seguimiento de trabajos</h1>

				<!-- <a href="#" data-icon="bars">Menu</a> -->
			</div><!-- /header -->

			<div data-role="content" class="anchocontenidodesktop">

				<div id="pticabecera">
					<table id="ptitable">
						<tr>
							<th rowspan="3"> TRABAJO DIVIDIDO </th>
							<th rowspan="3"> TRABAJADOR </th>
							<th colspan="28" > GASTOS DIRECTOS </th>
							
						</tr>
						<tr>
							<th colspan="3">Replanteo</th>
							<th colspan="3">Delineación</th>
							<th colspan="3">Cálculo</th>
							<th colspan="3">Revisión</th>
							<th colspan="3">Modificación</th>
							<th colspan="3">Asistencia</th>
							<th colspan="3">Mediciones</th>
							<th colspan="3">Otros</th>
							<th colspan="3">TOTAL</th>

						</tr>
						<tr class="pticabecerados">
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							<th >H</th>
							<th >€</th>
							<th >%</th>
							
							

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
