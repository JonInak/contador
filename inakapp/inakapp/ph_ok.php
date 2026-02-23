<?php  
session_start();  
//include_once "config.php";  
//$link = mysqli_connect("db5000334940.hosting-data.io", "dbu256645", "Intranet%inak3216", "dbs326439");
//if (mysqli_connect_errno()) {
//    printf("Falló la conexión: %s\n", mysqli_connect_error());
//    exit();
//}

 //if ($resultado = mysqli_query($link, "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='jon'")) {
 //    printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));
 //	while($row = mysqli_fetch_assoc($resultado)) {
 //        //echo "USUARIO " . $row["USUARIO"]. " - Name:  "<br>";
 //      echo "USUARIO  - Name:" . $row["CLAVEWEB"]. " <br>";
 //    }
    /* liberar el conjunto de resultados */
    //mysqli_free_result($resultado);
 //}   
function verificar_login($user,$password,&$result) {  
  echo '<div class="error">verificando</div>'; 
  echo '<div class="error">'.$user. " ". $password. '</div>'; 
  $link = mysqli_connect("db5000334940.hosting-data.io", "dbu256645", "Intranet%inak3216", "dbs326439");
if ($resultado = mysqli_query($link, "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='$user' AND CLAVEWEB='$password'")) {

 //if ($resultado = mysqli_query($link, "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='$user'")) {
printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));

    /* liberar el conjunto de resultados */
    //mysqli_free_result($resultado);
}
 
    //$sql = "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='$user' AND CLAVEWEB='$password'";  
    //$rec = mysql_query($sql);  
    $count = 0;  
   
    while($row = mysqli_fetch_object($resultado))  
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
if(!isset($_SESSION['usuario']))  {
	echo '<div class="error">no hay sesión</div>'; 
    if(isset($_POST['usuario']))  {
      	echo '<div class="error">hay usuario</div>'; 
      	
    	$val = sha1($_POST['password']);
        echo '<div class="error">'.$val. " ". $_POST['usuario']. '</div>';  
        if(verificar_login($_POST['usuario'],$val,$result) == 1)  {  
          	 
            $_SESSION['usuario'] = $result->USUARIO; 
			header("location:index.php");
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
		//require_once ("head.php");
		?>
		
	</head>
	<body>
		<div>
			<div class="contenedorlogin">
				<h2 class="iniciosesionheader">INAK INGENIARITZA</h2>
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
					<div class="contenedorlogindos">
						<input id="us" type="text" class="inputtext" placeholder="Usuario" name="usuario"  />
						<input id="pass" type="password" class="inputtext" placeholder="Contraseña" name="password" />

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

				<title>INAK INGENIARITZA</title>

				<?php
				require_once ("head.php");
				?>
				<!-- Archivo que llama a las librerias y Css´s  -->
			</head>
		</html>
		</html>
		<!-- <body> -->

		<!-----------PAGINA HORAS ----------------------------------------------------------------------------------------->
		<!------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------>
		<!-- <div data-role="page" id="paghoras" > -->
		<div data-role="page" id="paghoras_contador" >

			<div data-role="panel" id="panelvocabulario" class="cabeceraypie">
				<!-- panel content goes here -->
				<?php
				if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon") {
					require_once ("paneladmin.php");
				} else {
					if ($_SESSION['usuario'] == "unai"){
						require_once ("panelunai.php");
					}else{
						require_once ("panel.php");
					}
				}
				?>
			</div><!-- /panel -->
			
			<div data-role="header" class="cabeceraypie">
				<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
				<a href="#panelvocabulario" data-icon="bars" class="btncabecera" data-back-btn-text="previous" >Menu</a>
				<h1>Inak Ingeniaritza</h1>
				<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
					<a id="refrescar" href="#" data-role="button"  class="btncabecera " >Refrescar</a>

				</div>

				<!-- <a href="#" data-icon="bars">Menu</a> -->
			</div><!-- /header -->
			
			<div data-role="content" class="anchocontenido">
			<div>
			<a data-role="button" id="botoncontador">contador</a>
			<table id="tablacontador">
						<tr>
							<th colspan="2"> ENTRADA </th>
							<th colspan="2"> SALIDA </th>
							<th > HORAS </th>	
						</tr>
			
					</table>
			</div>
			
				<label id="usuariooculto"> <?php
				echo $_SESSION['usuario'];
					?> </label>
				<label for="date">Día:</label>
				<input type="date" name="date" id="fecha" value="">
				<div>
					<a class="ui-btn" id="plustrabajos"  >Añadir trabajo</a>

				</div>

				<div >
					<div id="formtrabajos">
						<div id="listatrabajos" data-role="collapsible" data-theme="b" data-content-theme="c">
							<h2>Trabajo</h2>

							<ul data-role="listview" data-filter="true">

							</ul>
						</div>
						<div id="listafase" data-role="collapsible" data-theme="b" data-content-theme="c">
							<h2>Fase</h2>

							<ul data-role="listview" data-filter="false">

								<!-- <?php
								require_once ("fases.php");
								?> -->
								<!-- <?php
								for ($x = 0; $x < count($arrayfases); $x++) {
								echo "<li>" + $arrayfases[$x] + "</li>";
								print("hola");
								}
								?> -->
							</ul>
						</div>
						<div id="horasdetalle">
							<label for="number-1" >Horas:</label>
							<input id="horas" type="number" pattern="[0-9]+([\.|,][0-9]+)?" step="0.01" data-clear-btn="false" name="number-1"  value="">
							<div id="selhorasbolsa" data-role="collapsible" data-theme="b" data-content-theme="c">
								<h2>Bolsa de horas</h2>

								<ul data-role="listview" data-filter="false">

									<li>
										<a id="bolsasi" href="#">SI</a>
									</li>
																		<li>
										<a id="bolsano" href="#">NO</a>
									</li>

								</ul>
							</div>
							<div id="selhorasfueraoficina" data-role="collapsible" data-theme="b" data-content-theme="c">
								<h2>Horas fuera oficina</h2>

								<ul data-role="listview" data-filter="false">

									<li>
										<a id="bolsafueraoficinasi" href="#">SI</a>
									</li>
																		<li>
										<a id="bolsafueraoficinano" href="#">NO</a>
									</li>

								</ul>
							</div>
							
							<label for="textarea-1">Detalle:</label>
							<textarea id="detalle" name="textarea-1" ></textarea>
							<a id="guardarhoras" href="" data-role="button" data-inline="true">Guardar</a>
							<div class='popuphorasrevisar' style='display: none'>Revisa los datos</div>
						</div>

					</div>
				</div>

				<div id="trabajosguardados"  data-theme="b" data-content-theme="c">
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
				<div id="totalhorasdiarias">
					<div id="labeltotalhorasdiarias">
						Total horas

					</div>
					<div id="numtotalhorasdiarias">

					</div>
					<div id="labelbolsahoras">
						Bolsa horas

					</div>
					<div id="bolsahoras">

					</div>

				</div>

			</div><!-- /content -->

		</div><!-- /page -->
		<?php
		}
		?>
