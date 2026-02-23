<html>
	<head>
		<title>Titulo de la webapp</title>

		<!-- /*Archivo que llama a las librerias y Css*/ -->
		<?php
		require_once ("head.php");
		?>
	</head>
	<body>
		<div data-role="page" id="pvdetalle">
			<div class="contenedorlogin">
				<h2 class="iniciosesionheader">INAK INGENIARITZA</h2>
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
					<div class="contenedorlogindos">
						
						<input id="pvp" type="password" class="inputtext" placeholder="Contraseña"  />

						
						<button id="enviarveri" class="botoninicio">Iniciar Sesión</button>
					</div>
				</form>

			</div>
		</div>
		<?php
		
		?>


