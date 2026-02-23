$(document).delegate('#pfr', 'pagecreate', function() {
	var dom = {
		"facturasrecibidas": function(arrayfacturas){
			var fila = "filaimpar";

			for (i in arrayfacturas){
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				if (arrayfacturas[i].fecha== "") {
						arrayfacturas[i].fecha = "...";
				};
				if (arrayfacturas[i].proveedor== "") {
						arrayfacturas[i].proveedor= "...";
				};
				if (arrayfacturas[i].baseimponible== "") {
						arrayfacturas[i].baseimponible= "...";
				};
				if (arrayfacturas[i].ivaporc== "") {
						arrayfacturas[i].ivaporc = "...";
				};
				if (arrayfacturas[i].irpfporc== "") {
						arrayfacturas[i].irpfporc= "...";
				};
				if (arrayfacturas[i].fechapago== "") {
						arrayfacturas[i].fechapago = "...";
				};
				if (arrayfacturas[i].comentario== "") {
						arrayfacturas[i].comentario = "...";
				};
				if (arrayfacturas[i].asesoria== "") {
						arrayfacturas[i].asesoria = "...";
				};
				var celdanumero = "<td class=\"textoizda\">" + arrayfacturas[i].numero+ "</td>";
				var celdafecha = "<td class=\"textoizda\"><a id=\"ffecha" + arrayfacturas[i].id + "\" href=\"#popupfecha\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].fecha + "</a></td>";
				var celdaproveedor = "<td class=\"textoizda\"><a id=\"fproveedor" + arrayfacturas[i].id + "\" href=\"#popupproveedor\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].proveedor + "</a></td>";
				var celdabaseimponible = "<td class=\"textoizda\"><a id=\"fbaseimponible" + arrayfacturas[i].id + "\" href=\"#popupbaseimponible\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].baseimponible + "</a></td>";
				var celdaivaporc = "<td class=\"textoizda\"><a id=\"fivaporc" + arrayfacturas[i].id + "\" href=\"#popupivaporc\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].ivaporc + "</a></td>";
				var celdaiva = "<td class=\"textoizda\">" + arrayfacturas[i].iva+ "</td>";
				var celdairpfporc = "<td class=\"textoizda\"><a id=\"firpfporc" + arrayfacturas[i].id + "\" href=\"#popupirpfporc\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].irpfporc + "</a></td>";
				var celdaiva = "<td class=\"textoizda\">" + arrayfacturas[i].iva+ "</td>";
				var celdairpf = "<td class=\"textoizda\">" + arrayfacturas[i].irpf+ "</td>";
				var celdaimportetotal = "<td class=\"textoizda\">" + arrayfacturas[i].importetotal+ "</td>";
				var celdafechapago = "<td class=\"textoizda\"><a id=\"ffechapago" + arrayfacturas[i].id + "\" href=\"#popupfechapago\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].fechapago + "</a></td>";
				var celdacomentario = "<td class=\"textoizda\"><a id=\"fcomentario" + arrayfacturas[i].id + "\" href=\"#popupcomentario\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].comentario + "</a></td>";
				var celdaasesoria = "<td class=\"textoizda\"><a id=\"fasesoria" + arrayfacturas[i].id + "\" href=\"#popupasesoria\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].asesoria + "</a></td>";
				
				var celdas = celdanumero + celdafecha + celdaproveedor + celdabaseimponible + celdaivaporc + celdaiva + celdairpfporc + celdairpf + celdaimportetotal + celdafechapago + celdacomentario + celdaasesoria;
				$("#pttablefacturasrecibidas").append("<tr class=" + fila + ">" + celdas + "</tr>");
				$("#ffecha" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("ffecha", "");
					tabla = "tb_facturasrecibidas";
				});
				$("#fproveedor" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fproveedor", "");
					tabla = "tb_facturasrecibidas";
					});
				$("#fbaseimponible" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fbaseimponible", "");
					tabla = "tb_facturasrecibidas";
				});
				$("#fivaporc" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fivaporc", "");
					tabla = "tb_facturasrecibidas";
				});
				$("#firpfporc" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("firpfporc", "");
					tabla = "tb_facturasrecibidas";
				});
				$("#ffechapago" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("ffechapago", "");
					tabla = "tb_facturasrecibidas";
				});
				$("#fcomentario" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fcomentario", "");
					tabla = "tb_facturasrecibidas";
				});
				$("#fasesoria" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fasesoria", "");
					tabla = "tb_facturasrecibidas";
				});
			}
			
			
		},
		"guardarfecha" : function() {
			$("#popupfechaboton").on("tap", function() {
				var campo = "FECHA";
				var modfechaval = $("#modfecha").val();
				websql.enviarmod(campo, modfechaval);
			});
		},
		"guardarproveedor" : function() {
			$("#popupproveedorboton").on("tap", function() {
				var campo = "PROVEEDOR";
				var modproveedorval = $("#modproveedor").val();
				websql.enviarmod(campo, modproveedorval);
			});
		},
		"guardarbaseimponible" : function() {
			$("#popupbaseimponibleboton").on("tap", function() {
				var campo = "BASE_IMPONIBLE";
				var modbaseimponibleval = $("#modbaseimponible").val();
				//websql.enviarmod(campo, modbaseimponibleval);
				cambio = "baseimponible";
				websql.facturasrecibidas();
			});
		},
		"guardarivaporc" : function() {
			$("#popupivaporcboton").on("tap", function() {
				var campo = "IVA_PORC";
				var modivaporcval = $("#modivaporc").val();
				cambio = "ivaporc";
				//websql.enviarmod(campo, modivaporcval);
				websql.facturasrecibidas();
				
			});
		},
		"guardarirpfporc" : function() {
			$("#popupirpfporcboton").on("tap", function() {
				var campo = "IRPF_PORC";
				var modirpfporcval = $("#modirpfporc").val();
				websql.enviarmod(campo, modirpfporcval);
				cambio = "irpfporc";
				websql.facturasrecibidas();
			});
		},
		"guardarfechapago" : function() {
			$("#popupfechapagoboton").on("tap", function() {
				var campo = "FECHA_PAGO";
				var modfechapagoval = $("#modfechapago").val();
				websql.enviarmod(campo, modfechapagoval);
			});
		},
		"guardarcomentario" : function() {
			$("#popupcomentarioboton").on("tap", function() {
				var campo = "COMENTARIO";
				var modcomentarioval = $("#modcomentario").val();
				websql.enviarmod(campo, modcomentarioval);
			});
		},
		"guardarasesoria" : function() {
			valorasesoria = "Preparada";
			$('#asesoria input').change(function(event) {
       			valorasesoria = $(this).next('label').text();
    		});
			$("#popupasesoriaboton").on("tap", function() {
				var campo = "ASESORIA";
				websql.enviarmod(campo, valorasesoria);
			});
			
		},
		"nuevafacturarecibida" : function() {
			$("#nuevafacturarecibida").on("tap", function() {
				websql.consultarultimocodigo();
			});
		},
	};
	var websql = {
		"facturasrecibidas" : function() {
			$.ajax({
				url : 'server/pfr_facturas.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					console.log(respuesta);
					switch(cambio){
						case "baseimponible":
							for (i in respuesta){
								if (modid==respuesta[i].id){
									campo = "BASE_IMPONIBLE";
									var modbaseimponibleval = $("#modbaseimponible").val();
									websql.enviarmod(campo, modbaseimponibleval);
									campo = "IVA";
									var modivaval = modbaseimponibleval * respuesta[i].ivaporc / 100;
									modivaval = parseFloat(modivaval).toFixed(2);
									websql.enviarmod(campo, modivaval);
									campo = "IRPF";
									var modirpfval = modbaseimponibleval * respuesta[i].irpfporc / 100;
									modirpfval = modirpfval.toFixed(2);
									websql.enviarmod(campo, modirpfval);
									campo = "IMPORTE_TOTAL";
									var modimportetotalval = parseFloat(modbaseimponibleval)  + parseFloat(modivaval) - parseFloat(modirpfval);
									modimportetotalval = modimportetotalval.toFixed(2);
									websql.enviarmod(campo,modimportetotalval);
								}
							}
						break;
						case "irpfporc":
							for (i in respuesta){
								if (modid==respuesta[i].id){
									campo = "IRPF_PORC";
									var modirpfporcval = $("#modirpfporc").val();
									websql.enviarmod(campo, modirpfporcval);
									campo = "IRPF";
									var modirpfval = parseFloat(respuesta[i].baseimponible) * modirpfporcval/100;
									modirpfval = modirpfval.toFixed(2);
									websql.enviarmod(campo, modirpfval);
									campo = "IMPORTE_TOTAL";
									var modimportetotalval = parseFloat(respuesta[i].baseimponible) - parseFloat(modirpfval) + parseFloat(respuesta[i].iva);
									modimportetotalval = modimportetotalval.toFixed(2);
									websql.enviarmod(campo,modimportetotalval);
								}
							}
						break;
						case "ivaporc":
							for (i in respuesta){
								if (modid==respuesta[i].id){
									campo = "IVA_PORC";
									var modivaporcval = $("#modivaporc").val();
									websql.enviarmod(campo, modivaporcval);
									campo = "IVA";
									var modivaval = parseFloat(respuesta[i].baseimponible) * modivaporcval/100;
									modivaval = parseFloat(modivaval).toFixed(2);
									websql.enviarmod(campo, modivaval);
									campo = "IMPORTE_TOTAL";
									var modimportetotalval = parseFloat(respuesta[i].baseimponible) + parseFloat(modivaval) - parseFloat(respuesta[i].irpf);
									modimportetotalval = modimportetotalval.toFixed(2);
									websql.enviarmod(campo,modimportetotalval);
								}
							}
						break;
						case "":
							pt_arrayfacturas = respuesta;
							dom.facturasrecibidas(respuesta);
						break;
					};
				}
			});
		},
		"enviarmod" : function(campo, modval) {
			
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
					window.location.href = "pfr.php";
				}
			});
		},
		"consultarultimocodigo" : function(){
			console.log("hola");
			$.ajax({
				url : 'server/pfr_facturas.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					console.log(ultimocodigo);
					for (i in respuesta){
						var codigofloat = parseFloat(respuesta[i].numero);
						if(ultimocodigo<codigofloat){
							ultimocodigo = parseFloat(respuesta[i].numero);
						}
					}
					console.log(ultimocodigo);
					websql.enviarfactura();
				}
			});
		},
		"enviarfactura" : function() {
			console.log(codigo);
			codigo = ultimocodigo + 1;
			$.ajax({
				url : 'server/pfr_enviar.php',
				type : 'post',
				data : {
					"codigo" : codigo,
				},

				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function() {
					console.log("ok");
					window.location.href = "pfr.php";
				}
			});
		},
	};
	var modid;
	var tabla;
	var pt_arrayfacturas;
	var valorasesoria;
	var codigo;
	var ultimocodigo = 0;
	var cambio = "";
	dom.guardarfecha();
	dom.guardarproveedor();
	dom.guardarbaseimponible();
	dom.guardarivaporc();
	dom.guardarirpfporc();
	dom.guardarfechapago();
	dom.guardarcomentario();
	dom.guardarasesoria();
	dom.nuevafacturarecibida();
	websql.facturasrecibidas();
});
