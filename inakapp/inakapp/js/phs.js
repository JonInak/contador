//window.onload = function() {
//$(document).ready(function(){

$(document).delegate('#paghorasseguimiento', 'pagecreate', function() {
	var dom = {
		"listausuarios" : function(usuario) {
			$("#listausuarios ul").append("<li id=\"" + usuario + "\" data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a  class=\"ui-link-inherit\">" + usuario + "</a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");

			$("#" + usuario).on("tap", function(event) {
				$("#trabajosguardadossusuario ul").empty();
				$("#listausuarios h2 span span:nth-child(1)").html("Empleado: " + $("#" + usuario).text() + "");
				if ($("#fechapaghorasseguimiento").val() != "") {
					console.log($("#fechapaghorasseguimiento").val());
					trabajofecha = $("#fechapaghorasseguimiento").val();
					trabajousuario_ = $("#listausuarios h2 span span:nth-child(1)").text();
					trabajousuario = trabajousuario_.replace("Empleado: ", "");
					dom.borrarlistatrabajosdia();
					websql.cargartrabajosdiaseguimiento();
				}
			});
			$("#fechapaghorasseguimiento").on("change", function(event) {
				console.log($("#fechapaghorasseguimiento").val());
			});
		},
		"listatrabajosdia" : function(trabajodia) {

			trabajodia_c = trabajodia['usuario'].trim();
			trabajousuario_c = trabajousuario.replace(" ", "").trim();
			trabajofecha_c = trabajodia['fecha'].trim();
			console.log(trabajodia_c);
			console.log(trabajousuario_c);

			if (trabajodia_c == trabajousuario_c && trabajofecha_c == trabajofecha) {
				$("#trabajosguardadosusuario ul").append("<li <li class=\"ui-li ui-li-static ui-btn-up-c ui-first-child ui-last-child\"><div id=\"lialias\">Alias: " + trabajodia['proyecto'] + "</div><div id=\"lifase\">Fase: " + trabajodia['fase'] + "</div><div id=\"lidetalle\">Detalle: " + trabajodia['detalle'] + "</div><div id=\"lihoras\">Horas: " + trabajodia['horas'] + "</div></li>");

			}
		},
		"borrarlistatrabajosdia" : function() {
			$("#trabajosguardadossusuario ul").empty();
		},
	};
	var websql = {
		"usuarios" : function() {
			console.log("hola");
			$.ajax({
				
				url : 'server/phs_usuarios.php',
				//url : 'server/usuarios.php',
				type : 'post',
				dataType : "json",
				success : function(responseusuarios) {
					console.log("usuarios");
					console.log(responseusuarios);
					//dom.horasbolsausuario(responsehorasbolsa);
					for (i in responseusuarios) {
						dom.listausuarios(responseusuarios[i]);
					}
				}
			});
		},
		"cargartrabajosdiaseguimiento" : function() {
			totalhorasdia = 0;
			console.log("cargartrabajosdia");
			$.ajax({
				
				url : 'server/ph_trabajosdia.php',
				//url : 'trabajosdia.php',
				type : 'post',
				dataType : "json",
				data : {
					"trabajousuario" : trabajousuario,
					"trabajofecha" : trabajofecha
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(responsetrabajos) {
					dom.borrarlistatrabajosdia();
					console.log(responsetrabajos);
					for (i in responsetrabajos) {
						dom.listatrabajosdia(responsetrabajos[i]);
						console.log(responsetrabajos[i]);
					}
				}
			});
		},
	};
	var trabajousuario;
	var trabajofecha;
	websql.usuarios();

});

