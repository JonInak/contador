$(document).delegate('#pfe', 'pagecreate', function() {
	var dom = {
		"facturasemitidas": function(arrayfacturas){
			var fila = "filaimpar";

			for (i in arrayfacturas){
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				if (arrayfacturas[i].tipo== "") {
						arrayfacturas[i].tipo = "...";
				};
				if (arrayfacturas[i].fecha== "") {
						arrayfacturas[i].fecha = "...";
				};
				if (arrayfacturas[i].cliente== "") {
						arrayfacturas[i].cliente = "...";
				};
				if (arrayfacturas[i].alias== "") {
						arrayfacturas[i].alias = "...";
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
				if (arrayfacturas[i].fechacobro== "") {
						arrayfacturas[i].fechacobro = "...";
				};
				if (arrayfacturas[i].comentario== "") {
						arrayfacturas[i].comentario = "...";
				};
				if (arrayfacturas[i].asesoria== "") {
						arrayfacturas[i].asesoria = "...";
				};
				if (arrayfacturas[i].codigow== "") {
						arrayfacturas[i].codigow = "...";
				};
				var celdatipo = "<td class=\"textoizda\">" + arrayfacturas[i].tipo+ "</td>";
				var celdacodigo = "<td class=\"textoizda\">" + arrayfacturas[i].codigo+ "</td>";
				var celdafecha = "<td class=\"textoizda\"><a id=\"ffecha" + arrayfacturas[i].id + "\" href=\"#popupfecha\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].fecha + "</a></td>";
				var celdacliente = "<td class=\"textoizda\"><a id=\"fcliente" + arrayfacturas[i].id + "\" href=\"#popupcliente\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].cliente + "</a></td>";
				var celdaalias = "<td class=\"textoizda\"><a id=\"falias" + arrayfacturas[i].id + "\" href=\"#popupalias\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].alias + "</a></td>";
				var celdabaseimponible = "<td class=\"textodcha\"><a id=\"fbaseimponible" + arrayfacturas[i].id + "\" href=\"#popupbaseimponible\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].baseimponible + "</a></td>";
				var celdaivaporc = "<td class=\"textoizda\"><a id=\"fivaporc" + arrayfacturas[i].id + "\" href=\"#popupivaporc\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].ivaporc + "</a></td>";
				var celdaiva = "<td class=\"textodcha\">" + arrayfacturas[i].iva+ "</td>";
				var celdairpfporc = "<td class=\"textoizda\"><a id=\"firpfporc" + arrayfacturas[i].id + "\" href=\"#popupirpfporc\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].irpfporc + "</a></td>";
				var celdaiva = "<td class=\"textodcha\">" + arrayfacturas[i].iva+ "</td>";
				var celdairpf = "<td class=\"textodcha\">" + arrayfacturas[i].irpf+ "</td>";
				var celdaimportetotal = "<td class=\"textodcha\">" + arrayfacturas[i].importetotal+ "</td>";
				var celdafechacobro = "<td class=\"textoizda\"><a id=\"ffechacobro" + arrayfacturas[i].id + "\" href=\"#popupfechacobro\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].fechacobro + "</a></td>";
				var celdacomentario = "<td class=\"textoizda\"><a id=\"fcomentario" + arrayfacturas[i].id + "\" href=\"#popupcomentario\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].comentario + "</a></td>";
				var celdaasesoria = "<td class=\"textoizda\"><a id=\"fasesoria" + arrayfacturas[i].id + "\" href=\"#popupasesoria\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].asesoria + "</a></td>";
				var celdacodigotrabajo = "<td class=\"textoizda\"><a id=\"fcodigow" + arrayfacturas[i].id + "\" href=\"#popupcodigotrabajo\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arrayfacturas[i].codigow + "</a></td>";
				
				var celdas = celdatipo + celdacodigo + celdafecha + celdacliente + celdaalias + celdabaseimponible + celdaivaporc + celdaiva + celdairpfporc + celdairpf + celdaimportetotal + celdafechacobro + celdacomentario + celdaasesoria+ celdacodigotrabajo;
				$("#pttablefacturasemitidas").append("<tr class=" + fila + ">" + celdas + "</tr>");
				$("#ffecha" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("ffecha", "");
					tabla = "tb_facturasemitidas";
				});
				$("#fcliente" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fcliente", "");
					tabla = "tb_facturasemitidas";
				});
				$("#falias" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("falias", "");
					tabla = "tb_facturasemitidas";
				});
				$("#fbaseimponible" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fbaseimponible", "");
					tabla = "tb_facturasemitidas";
				});
				$("#fivaporc" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fivaporc", "");
					tabla = "tb_facturasemitidas";
				});
				$("#firpfporc" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("firpfporc", "");
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
				$("#fasesoria" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fasesoria", "");
					tabla = "tb_facturasemitidas";
				});
				$("#fcodigow" + arrayfacturas[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("fcodigow", "");
					tabla = "tb_facturasemitidas";
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
		"guardarcliente" : function() {
			$("#popupclienteboton").on("tap", function() {
				var campo = "CLIENTE";
				var modclienteval = $("#modcliente").val();
				websql.enviarmod(campo, modclienteval);
			});
		},
		"guardaralias" : function() {
			$("#popupaliasboton").on("tap", function() {
				var campo = "ALIAS";
				var modaliasval = $("#modalias").val();
				websql.enviarmod(campo, modaliasval);
			});
		},
		"guardarbaseimponible" : function() {
			$("#popupbaseimponibleboton").on("tap", function() {
				var campo = "BASE_IMPONIBLE";
				var modbaseimponibleval = $("#modbaseimponible").val();
				//websql.enviarmod(campo, modbaseimponibleval);
				cambio = "baseimponible";
				websql.facturasemitidas();
			});
		},
		"guardarivaporc" : function() {
			$("#popupivaporcboton").on("tap", function() {
				var campo = "IVA_PORC";
				var modivaporcval = $("#modivaporc").val();
				//websql.consultarbaseimponible();
				cambio = "ivaporc";
				//websql.enviarmod(campo, modivaporcval);
				websql.facturasemitidas();
				
			});
		},
		"guardarirpfporc" : function() {
			$("#popupirpfporcboton").on("tap", function() {
				var campo = "IRPF_PORC";
				var modirpfporcval = $("#modirpfporc").val();
				websql.enviarmod(campo, modirpfporcval);
				cambio = "irpfporc";
				websql.facturasemitidas();
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
		"nuevafacturaemitida" : function() {
			$("#nuevafacturaemitida").on("tap", function() {
				tipoabono = "N";
				websql.consultarultimocodigo();
			});
		},
		"nuevafacturaemitidaabono" : function() {
			$("#nuevafacturaemitidaabono").on("tap", function() {
				tipoabono = "A";
				websql.consultarultimocodigo();
			});
		},
		"guardarcodigow" : function() {
			$("#popupcodigowboton").on("tap", function() {
				var campo = "CODIGO_W";
				var modcodigowval = $("#modcodigow").val();
				websql.enviarmod(campo, modcodigowval);
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
					switch(cambio){
						case "baseimponible":
							for (i in respuesta){
								if (modid==respuesta[i].id){
									campo = "BASE_IMPONIBLE";
									var modbaseimponibleval = $("#modbaseimponible").val();
									websql.enviarmod(campo, modbaseimponibleval);
									campo = "IVA";
									var modivaval = modbaseimponibleval * respuesta[i].ivaporc / 100;
									websql.enviarmod(campo, modivaval);
									campo = "IRPF";
									var modirpfval = modbaseimponibleval * respuesta[i].irpfporc / 100;
									websql.enviarmod(campo, modirpfval);
									campo = "IMPORTE_TOTAL";
									var modimportetotalval = parseFloat(modbaseimponibleval)  + parseFloat(modivaval) - parseFloat(modirpfval);
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
									websql.enviarmod(campo, modirpfval);
									campo = "IMPORTE_TOTAL";
									var modimportetotalval = parseFloat(respuesta[i].baseimponible) - parseFloat(modirpfval) + parseFloat(respuesta[i].iva);
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
									websql.enviarmod(campo, modivaval);
									campo = "IMPORTE_TOTAL";
									var modimportetotalval = parseFloat(respuesta[i].baseimponible) + parseFloat(modivaval) - parseFloat(respuesta[i].irpf);
									websql.enviarmod(campo,modimportetotalval);
								}
							}
						break;
						case "":
							pt_arrayfacturas = respuesta;
							urteinicio = parseInt(pt_arrayfacturas[0].codigo.slice(-2));
							urtefin = parseInt(pt_arrayfacturas[0].codigo.slice(-2));
							
							for (i in pt_arrayfacturas){
								if(pt_arrayfacturas[i].codigo.slice(-2)<urteinicio){
									urteinicio = pt_arrayfacturas[i].codigo.slice(-2);
								}if(pt_arrayfacturas[i].codigo.slice(-2)>urtefin){
									urtefin = pt_arrayfacturas[i].codigo.slice(-2);
								}
							}
							console.log(urteinicio);
							console.log(urtefin);
							while (parseInt(urtefin) >= parseInt(urteinicio)){
								j= 0;
								for (i in pt_arrayfacturas){
									if(pt_arrayfacturas[i].codigo.slice(-2)==urtefin){
										pt_arrayfacturasurte[j]=pt_arrayfacturas[i];
										j = j + 1;
									}
								}
								//
								//
							//}
							urtefin = parseInt(urtefin) - 1;
							dom.facturasemitidas(pt_arrayfacturasurte);
							pt_arrayfacturasurte= [];
							//dom.facturasemitidas(pt_arrayfacturas);
					}
						break;
					};
					if (cambio=="baseimponible"){
						
					}
					if (cambio=="irpfporc"){
						
					}
					else{
						
					}
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
					window.location.href = "pfe.php";
				}
			});
		},
		"consultarbaseimponible" : function(){
			$.ajax({
				url : 'server/pfe_facturas.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					for (i in respuesta){
						if (modid==respuesta[i].id){
							campo = "IVA";
							var modivaval = respuesta[i].baseimponible * $("#modivaporc").val()/100;
							websql.enviarmod(campo, modivaval);
							campo = "IMPORTE_TOTAL";
							var modimportetotalval = parseFloat(respuesta[i].baseimponible)  + parseFloat(modivaval);
							websql.enviarmod(campo,modimportetotalval);
						}
					}
					
				}
			});
		},
		"consultarultimocodigo" : function(){
			$.ajax({
				url : 'server/pfe_facturas.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					console.log("SI");
					for (i in respuesta){
						if (tipoabono=="A"){
							if (respuesta[i].tipo== "A"){
								var codigofloat = parseFloat(respuesta[i].codigo);
								console.log(codigofloat);
							if(ultimocodigo<codigofloat){
								ultimocodigo = parseFloat(respuesta[i].codigo);
							}
							}	
						}
						if (tipoabono=="N"){
							if (respuesta[i].tipo== "N"){
								var codigofloat = parseFloat(respuesta[i].codigo);
								console.log(codigofloat);
							if(ultimocodigo<codigofloat){
								ultimocodigo = parseFloat(respuesta[i].codigo);
							}
							}	
						}
						
					}
					
					websql.enviarfactura();
				}
			});
		},
		"enviarfactura" : function() {
			codigo = ultimocodigo + 1;
			year = d.getUTCFullYear().toString().substring(2,4);
			codigocompleto = codigo + "/" + year;
			console.log(codigocompleto);
			console.log(tipoabono);
			if (tipoabono== "A"){
				codigocompleto = "A" + codigocompleto;
			}
			$.ajax({
				url : 'server/pfe_enviar.php',
				type : 'post',
				data : {
					"tipo": tipoabono,
					"codigo" : codigocompleto,
				},

				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function() {
					console.log("ok");
					window.location.href = "pfe.php";
				}
			});
		},
	};
	var modid;
	var tabla;
	var pt_arrayfacturas;
	var pt_arrayfacturasurte=[];
	var urteinicio;
	var urtefin;
	var valorasesoria;
	var codigo;
	var ultimocodigo = 0;
	var year;
	var d = new Date();
	var tipoabono;
	var cambio = "";
	dom.guardarfecha();
	dom.guardarcliente();
	dom.guardaralias();
	dom.guardarbaseimponible();
	dom.guardarivaporc();
	dom.guardarirpfporc();
	dom.guardarfechacobro();
	dom.guardarcomentario();
	dom.guardarasesoria();
	dom.nuevafacturaemitida();
	dom.nuevafacturaemitidaabono();
	dom.guardarcodigow();
	websql.facturasemitidas();
});
