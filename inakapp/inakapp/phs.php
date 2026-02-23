<?php  
session_start();  
include_once "config.php";  
   
function verificar_login($user,$password,&$result) {  
  
    $sql = "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='$user' AND CLAVEWEB='$password'";  
    $rec = mysql_query($sql);  
    $count = 0;  
   
    while($row = mysql_fetch_object($rec))  
    {  
        $count++;  
        $result = $row;  
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

		<!-----------PAGINA HORAS SEGUIMIENTO ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paglistadotrabajos" > -->
		<div data-role="page" id="paghorasseguimiento" >
			<div data-role="panel" id="panelpaghorasseguimiento" class="cabeceraypie">
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

			<div data-role="header" class="cabeceraypie">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#panelpaghorasseguimiento" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza</h1>

				<!-- <a href="#" data-icon="bars">Menu</a> -->
			</div><!-- /header -->

			<div data-role="content" class="anchocontenido">

				<label for="date">Día:</label>
				<input type="date" name="date" id="fechapaghorasseguimiento" value="">
				<div id="listausuarios" data-role="collapsible" data-theme="b" data-content-theme="c">
					<h2>Empleado</h2>

					<ul data-role="listview" >

					</ul>
				</div>

				<div id="trabajosguardadosusuario"  data-theme="b" data-content-theme="c">
					<h2>Trabajos Realizados</h2>

					<ul data-role="listview" data-filter="false">
						<!-- <li>
						<div id="lialiasfase">Alias: </div>
						<div id="lialiasfase">Fase: </div>
						<div id="lidetalle">detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
						<div id="lihoras">horas</div>
						</li> -->

					</ul>
				</div>

			</div><!-- /content -->

		</div><!-- /page -->
		<!-- </body>
		</html> -->

		<!-- <div data-add-back-btn="false" data-position="fixed" data-role="page" data-theme="a">
		<div data-role="header" data-theme="a" id="home">
		<h1>Pagina Principal</h1>
		</div>
		<div data-role="content">
		<strong>Bienvenido.Aqui puedes poner el codigo de tu web,o si quieres llamar al nombre de usuario.</strong>

		<div data-role="controlgroup">
		Aca un boton para salir

		<a data-role="button" href="logout.php">Salir</a>
		</div>
		</div>
		<div data-position="fixed" data-role="footer" data-theme="a">
		<h1>Pie de tu página</h1>
		</div>
		</div> -->
		<?php
		}
		?>
