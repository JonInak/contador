$(document).delegate('#pfes', 'pagecreate', function() {
	var dom = {
		"facturasemitidas": function(arrayfacturas){
			var fila = "filaimpar";

			for (i in arrayfacturas){
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				
				if (arrayfacturas[i].pagoestimado== "") {
						arrayfacturas[i].pagoestimado = "...";
				};
				if (arrayfacturas[i].recibido== "") {
						arrayfacturas[i].recibido = "...";
				};
				if (arrayfacturas[i].fechacobro== "") {
						arrayfacturas[i].fechacobro = "...";
				};
				if (arrayfacturas[i].comentario== "") {
						arrayfacturas[i].comentario = "...";
				};				
			
				var celdacodigo = "<td class=\"textoizda\">" + arrayfacturas[i].codigo+ "</td>";
				var celdafecha = "<td class=\"textoizda\">" + arrayfacturas[i].fecha+ "</td>";
				var celdapagoestimado = "<td class=\"textoizda\"><a id=\"fpagoestimado" + arrayfacturas[i].id + "\" href=\"#popuppagoestimado\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].pagoestimado + "</a></td>";
				var celdarecibido = "<td class=\"textoizda\"><a id=\"frecibido" + arrayfacturas[i].id + "\" href=\"#popuprecibido\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].recibido + "</a></td>";	
				var celdafechacobro = "<td class=\"textoizda\"><a id=\"ffechacobro" + arrayfacturas[i].id + "\" href=\"#popupfechacobro\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].fechacobro + "</a></td>";
				var celdacomentario = "<td class=\"textoizda\"><a id=\"fcomentario" + arrayfacturas[i].id + "\" href=\"#popupcomentario\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].comentario + "</a></td>";
				
				var celdas = celdacodigo + celdafecha + celdapagoestimado  + celdarecibido + celdafechacobro + celdacomentario;
				$("#pttablefacturasemitidasseguimiento").append("<tr class=" + fila + ">" + celdas + "</tr>");
				$("#fpagoestimado" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fpagoestimado", "");
					tabla = "tb_facturasemitidas";
				});
				$("#frecibido" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("frecibido", "");
					tabla = "tb_facturasemitidas";
				});
				$("#ffechacobro" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("ffechacobro", "");
					tabla = "tb_facturasemitidas";
				});
				$("#fcomentario" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fcomentario", "");
					tabla = "tb_facturasemitidas";
				});
				
			}
			
			
		},
		"guardarpagoestimado" : function() {
			$("#popuppagoestimadoboton").on("tap", function() {
				var campo = "PAGO_ESTIMADO";
				var modpagoestimadoval = $("#modpagoestimado").val();
				websql.enviarmod(campo, modpagoestimadoval);
			});
		},
		"guardarrecibido" : function() {
			$("#popuprecibidoboton").on("tap", function() {
				console.log("hola");
				var campo = "RECIBIDO";
				var modrecibidoval = $("#modrecibido").val();
				websql.enviarmod(campo, modrecibidoval);
			});
		},
		"guardarfechacobro" : function() {
			$("#popupfechacobroboton").on("tap", function() {
				var campo = "FECHA_COBRO";
				var modfechacobroval = $("#modfechacobro").val();
				websql.enviarmod(campo, modfechacobroval);
			});
		},
		"guardarcomentario" : function() {
			$("#popupcomentarioboton").on("tap", function() {
				var campo = "COMENTARIO";
				var modcomentarioval = $("#modcomentario").val();
				websql.enviarmod(campo, modcomentarioval);
			});
		},
		
		
	};
	var websql = {
		"facturasemitidas" : function() {
			$.ajax({
				url : 'server/pfe_facturas.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					console.log(respuesta);
					pt_arrayfacturas = respuesta;
					dom.facturasemitidas(respuesta);
				}
			});
		},
		"enviarmod" : function(campo, modval) {
			console.log(modid);
			console.log(campo);
			console.log(modval);
			$.ajax({
				url : 'server/pt_enviarmod.php',
				type : 'post',
				datatype : 'json',
				data : {
					"modid" : modid,
					"modval" : modval,
					"tabla" : tabla,
					"campo": campo,
				},
				success : function() {
					window.location.href = "pfes.php";
				}
			});
		},
	
	

	};
	
	var pt_arrayfacturas;
	websql.facturasemitidas();
	
	var modid;
	var tabla;


	dom.guardarpagoestimado();
	dom.guardarrecibido();
	dom.guardarfechacobro();
	dom.guardarcomentario();
	

	
});
