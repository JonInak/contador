<?php
session_start();
include_once "config.php";

function verificar_login($user, $password, &$result)
{

	$sql = "SELECT USUARIO, CLAVEWEB FROM tb_usuariosinak WHERE USUARIO='$user' AND CLAVEWEB='$password'";
	$rec = mysql_query($sql);
	$count = 0;

	while ($row = mysql_fetch_object($rec)) {
		if ($user == "jon" | $user == "eli") {
			$count++;
			$result = $row;
		}

	}
	if ($count == 1) {
		return 1;
	} else {
		return 0;
	}
}
if (!isset($_SESSION['usuario'])) {
	if (isset($_POST['usuario'])) {
		if (verificar_login($_POST['usuario'], $_POST['password'], $result) == 1) {
			$_SESSION['usuario'] = $result->USUARIO;
			echo $_SESSION['usuario'];
			header("location:index.php");

		} else {
			echo '<div class="error">Su usuario es incorrecto, intente nuevamente.</div>';
		}
	}
	?>
	<html>

	<head>
		<title>Inak Ingeniaritza</title>

		<!-- /*Archivo que llama a las librerias y Css*/ -->
		<?php
		require_once("head.php");
		?>
		<!-- <script src="js/lsttrabajos.js"></script> -->
	</head>

	<body>
		<div>
			<div class="contenedorlogin">
				<h2 class="iniciosesionheader">INAK INGENIARITZA</h2>
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
					<div class="contenedorlogindos">
						<input type="text" class="inputtext" placeholder="Usuario" name="usuario" />
						<input type="password" class="inputtext" placeholder="Contraseña" name="password" />

						<input id="enviar" name="enviar" type="submit" value="Iniciar Sesión" class="botoninicio">

					</div>
				</form>

			</div>
		</div>

		<?php
} else {
	?>

		<?php
		$probando = $_SESSION['usuario'];
		if ($_SESSION['usuario'] == "eli" | $_SESSION['usuario'] == "jon" | $_SESSION['usuario'] == "esti" | $_SESSION['usuario'] == "unai" | $_SESSION['usuario'] == "asierfernandez" | $_SESSION['usuario'] == "haritzmarkaida" | $_SESSION['usuario'] == "ibaisegurola" | $_SESSION['usuario'] == "nataliabarras" | $_SESSION['usuario'] == "jose" | $_SESSION['usuario'] == "marcos" | $_SESSION['usuario'] == "markel" | $_SESSION['usuario'] == "andoni" | $_SESSION['usuario'] == "ziortza" | $_SESSION['usuario'] == "cris" | $_SESSION['usuario'] == "inigo" | $_SESSION['usuario'] == "izaskun" | $_SESSION['usuario'] == "alaitz" | $_SESSION['usuario'] == "mikelgil" | $_SESSION['usuario'] == "benjamin" | $_SESSION['usuario'] == "paula" | $_SESSION['usuario'] == "maitane" | $_SESSION['usuario'] == "igor" | $_SESSION['usuario'] == "jonander" | $_SESSION['usuario'] == "joanes" | $_SESSION['usuario'] == "ainhoa" | $_SESSION['usuario'] == "andres" | $_SESSION['usuario'] == "cristina" | $_SESSION['usuario'] == "mikelrankin" | $_SESSION['usuario'] == "inaki" | $_SESSION['usuario'] == "hector" | $_SESSION['usuario'] == "leyanis" | $_SESSION['usuario'] == "jonpueyo" | $_SESSION['usuario'] == "xabier" | $_SESSION['usuario'] == "aux" | $_SESSION['usuario'] == "amaya" | $_SESSION['usuario'] == "joseantonio" | $_SESSION['usuario'] == "peru" | $_SESSION['usuario'] == "nekane" | $_SESSION['usuario'] == "yolanda" | $_SESSION['usuario'] == "julen" | $_SESSION['usuario'] == "alaitzarsuaga" | $_SESSION['usuario'] == "carolina" | $_SESSION['usuario'] == "carlos" | $_SESSION['usuario'] == "ibai" | $_SESSION['usuario'] == "achraf" | $_SESSION['usuario'] == "carolinauchuari" | $_SESSION['usuario'] == "inigoflorindo" | $_SESSION['usuario'] == "erosdasilva" | $_SESSION['usuario'] == "nataliagarcia" | $_SESSION['usuario'] == "nicolasmejia" | $_SESSION['usuario'] == "nerea" | $_SESSION['usuario'] == "ikervillar" | $_SESSION['usuario'] == "jontolosa" | $_SESSION['usuario'] == "leiremartin" | $_SESSION['usuario'] == "gorka" | $_SESSION['usuario'] == "idoia" | $_SESSION['usuario'] == "imanol" | $_SESSION['usuario'] == "irati" | $_SESSION['usuario'] == "saydy") {
			?>
			<html>

			<head>

				<title>Inak Ingeniaritza</title>

				<?php
				require_once("head.php");
				?>
				<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
					rel="stylesheet">
				<style>
					#phrtres,
					#phrtres * {
						font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
					}
				</style>
				<!-- <script src="js/lsttrabajos.js"></script> -->
				<!-- Archivo que llama a las librerias y Css´s  -->
			</head>

			</html>
			<!-- <body> -->

			<!-----------PAGINA TRABAJOS ----------------------------------------------------------------------------------------->
	<!------------------------------------------------------------------------------------------------------------------------>
			<!------------------------------------------------------------------------------------------------------------------------>
			<!-- <div data-role="page" id="paglistadotrabajos" > -->

			<div data-role="page" id="phrtres">

				<div data-role="panel" id="panelfacturasemitidas" class="menu">
					<!-- panel content goes here -->
					<?php
					if ($_SESSION['usuario'] == "eli" or $_SESSION['usuario'] == "jon") {
						require_once("paneladmin.php");
					} else {
						if ($_SESSION['usuario'] == "unai") {
							require_once("panelunai.php");
						} else {
							if ($_SESSION['usuario'] == "joanes") {
								require_once("paneljoanes.php");
							} else {
								if ($_SESSION['usuario'] == "esti" or $_SESSION['usuario'] == "ainhoa" or $_SESSION['usuario'] == "izaskun" or $_SESSION['usuario'] == "paula" or $_SESSION['usuario'] == "inaki") {
									require_once("panelseghoras.php");
								} else {
									require_once("panel.php");
								}
							}
						}
					}
					?>

				</div><!-- /panel -->

				<div data-role="header" class="menu">
					<!-- <a href="#mypanel" data-icon="bars" class="btncabecera ui-icon-nodisc" >Menu</a> -->
					<a href="#panelfacturasemitidas" data-icon="bars" class="btncabecera" data-back-btn-text="previous">Menu</a>
					<h1>Inak Ingeniaritza - Resumen horas</h1>
					<div class="ui-btn-right" data-role="controlgroup" data-type="horizontal">
						<a id="filtrourte" href="#popupurte" data-role="button" class="btncabecera " data-rel="popup">A&ntilde;o</a>
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
				<div data-role="popup" id="popupurte" class="ui-corner-all">
					<form class="popupwsmenu">
						<div style="padding:10px 20px;">
							<h3>A&Ntilde;O</h3>
							<input type="number" id="modfecha" value="2017" placeholder="a&ntilde;o">
							<button id="botonurte" type="button"
								class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Aceptar</button>
						</div>
					</form>
				</div>

				<div data-role="content" class="anchocontenidodesktop">

					<!-- DASHBOARD KPI CARDS -->
					<div class="kpi-dashboard">
						<div class="kpi-card kpi-primary">
							<div class="kpi-title">HORAS TRABAJADAS + VACACIONES</div>
							<div class="kpi-value" id="horasrealesurtedos">0.00</div>
						</div>
						<div class="kpi-card">
							<div class="kpi-title">HORAS TEÓRICAS + VACACIONES</div>
							<div class="kpi-value" id="horasteoricasurte">0.00</div>
						</div>
						<div class="kpi-card kpi-warning">
							<div class="kpi-title">HORAS BOLSA</div>
							<div class="kpi-value" id="horascomplementarias">0.00</div>
						</div>
						<div class="kpi-card kpi-info">
							<div class="kpi-title kpi-title-with-action">
								VACACIONES 
								<a href="#popupvacaciones" data-rel="popup" data-position-to="window" data-transition="pop" class="kpi-link">VER</a>
							</div>
							<div class="kpi-vac-hours">
								<div class="vac-hour-pill vac-hour-ht">
									<span>HT</span>
									<strong id="vacacionesHtValue">0</strong>
								</div>
								<div class="vac-hour-pill vac-hour-hr">
									<span>HR</span>
									<strong id="vacacionesHrValue">0</strong>
								</div>
							</div>
							<div class="kpi-value kpi-value-muted" id="vacacionesdisfrutadasdos">0</div>
						</div>
					</div>
					<!-- FIN DASHBOARD -->

					<div class="leyenda-horas">
						<div id="tablecodigo" class="dashboard-user-title"></div>
					</div>

					<div class="calendar-toolbar">
						<div class="calendar-view-switch">
							<button type="button" id="viewCurrentMonth" class="calendar-switch-btn is-active">Mes actual</button>
							<button type="button" id="viewFullYear" class="calendar-switch-btn">A&ntilde;o completo</button>
						</div>
						<div class="leyenda-items">
							<span class="leyenda-item"><span class="dot dot-contador"></span> Fichaje</span>
							<span class="leyenda-item"><span class="dot dot-fuera"></span> Horas fuera oficina</span>
							<span class="leyenda-item"><span class="dot dot-imputadas"></span> Horas imputadas</span>
						</div>
					</div>

					<div id="tablasmeses" class="calendar-months"></div><!-- /tablasmeses -->

					<div id="dayDetailPanel" class="day-detail-panel is-empty">
						<div class="day-detail-head">
							<h3 id="dayDetailTitle">Detalle del dia</h3>
						</div>
						<div id="dayDetailContent" class="day-detail-content">
							Selecciona un dia del calendario para ver Entrada, Salida y Horas.
						</div>
					</div>

				</div><!-- /page -->
				<?php

		} else {
			echo '<div class="error">No tienes permisos para acceder.</div>';
		}

}
?>
