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

		<!-----------PAGINA TRABAJO NUEVO ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paglistadotrabajos" > -->
		<div data-role="page" id="ptn" >
			<div data-role="panel" id="paneltrabajonuevo" class="menu">
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
				
				<a href="#paneltrabajonuevo" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza - Trabajo nuevo</h1>
				

				<!-- <a href="#" data-icon="bars">Menu</a> -->
			</div><!-- /header -->

			<div data-role="content" class="anchocontenido">

				<div id="formtrabajonuevo">
						<label class="textoazul" for="labelalias">Alias:</label>
						<input type="text" name="name" id="ptn_alias" data-mini="true" />
						<label class="textoazul" for="labeltitulo">Título completo:</label>
						<input type="text" name="name" id="ptn_titulo" data-mini="true" />
						<label class="textoazul" for="labelpromotor">Promotor:</label>
						<input type="text" name="name" id="ptn_promotor" data-mini="true" />
						<label class="textoazul" for="labelcliente">Cliente:</label>
						<input type="text" name="name" id="ptn_cliente" data-mini="true" />
						<label class="textoazul" for="labelubicacion">Ubicación:</label>
						<input type="text" name="name" id="ptn_ubicacion" data-mini="true" />
						<label class="textoazul" for="labelarquitecto">Arquitecto:</label>
						<input type="text" name="name" id="ptn_arquitecto" data-mini="true" />
						<label class="textoazul" for="labelasignadoa">Asignado a:</label>
						<input type="text" name="name" id="ptn_asignadoa" data-mini="true" />
						<label class="textoazul" for="labelcalculoestructura">Cálculo estructura:</label>
						<input type="text" name="name" id="ptn_calculoestructura" data-mini="true" />
						<label class="textoazul" for="labelproyectocompleto">Proyecto completo:</label>
						<input type="text" name="name" id="ptn_proyectocompleto" data-mini="true" />
						<label class="textoazul" for="labelccespecial">Cont./Ciment. especial:</label>
						<input type="text" name="name" id="ptn_ccespecial" data-mini="true" />
						<label class="textoazul" for="labelotros">Otros:</label>
						<input type="text" name="name" id="ptn_otros" data-mini="true" />
						<div></div>
						<div>
							<button id="guardartrabajo" class="textoazul"  type="button">
								<div >Guardar</div>
								
							</button>
								<div class='trabajoguardado' style='display: none'>Trabajo guardado</div>
							
							
						</div>
						<div></div>
						
						
							

					</div>

			</div><!-- /page -->
			<?php
				
			}else{
				echo '<div class="error">No tienes permisos para acceder.</div>';
			}
			
			}
			?>
