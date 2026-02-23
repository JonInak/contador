//window.onload = function() {
//$(document).ready(function(){
$(document).delegate('#paghoras_contador', 'pagecreate', function() {
	var dom = {
		"usuario" : function() {
			$("#usuariooculto").hide();
			trabajousuario = $("#usuariooculto").text();
			trabajousuario = trabajousuario.replace("\n					", "");
			websql.horasbolsa();
		},
		"fecha" : function() {
			$("#plustrabajos").toggle();
			var fecha = $("#fecha").val();
			trabajofecha = $("#fecha").val();
			$("#fecha").on("change", function() {
				totalhorassinimputar = 0;
				totalhorasdia = 0;
				trabajofecha = $("#fecha").val();
				if (trabajofecha == "") {
					$("#formtrabajos").children().hide();
					$("#plustrabajos").hide();
					dom.borrarlistatrabajosdia();

				} else {
					$("#plustrabajos").show();
					$("#numtotalhorasdiarias").html(totalhorasdia);
					websql.cargartrabajosdia();
				}
				fechaseleccionada = trabajofecha
				if (fechaseleccionada==""){
					fechaseleccionada = d.getFullYear()+ "-" + parseInt(d.getMonth()+1) + "-" + d.getDate();
				}
				console.log(fechaseleccionada);
				websql.horasimputadasusuario();
				dom.cambiofecha();
				
				
			});
		},
		"plustrabajos" : function() {
			$("#formtrabajos").children().toggle();
			$("#plustrabajos").on("tap", function() {
				$("#formtrabajos").children().show();
			});
		},
		"listafases" : function(fase) {
			$("#listafase ul").append("<li id=\"" + fase + "\" data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a  class=\"ui-link-inherit\">" + fase + "</a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");

			$("#" + fase).on("tap", function(event) {
				$("#listafase h2 span span:nth-child(1)").html("Fase: " + $("#" + fase).text() + "");
				$("#listafase ul").trigger('collapse');
			});
		},
		"selbolsahoras" : function() {
			if (trabajousuario.trim()!="eli"){
				$("#selhorasbolsa").hide();
			};
			$("#bolsasi").on("tap", function(event) {
				$("#selhorasbolsa h2 span span:nth-child(1)").html("Bolsa de horas: " + $("#bolsasi").text() + "");
				$("#bolsasi").trigger('collapse');
			});
			$("#bolsano").on("tap", function(event) {
				$("#selhorasbolsa h2 span span:nth-child(1)").html("Bolsa de horas: " + $("#bolsano").text() + "");
				$("#bolsano").trigger('collapse');
			});
		},
		"selhorasfueraoficina" : function() {
			$("#bolsafueraoficinasi").on("tap", function(event) {
				$("#selhorasfueraoficina h2 span span:nth-child(1)").html("Horas fuera oficina: " + $("#bolsafueraoficinasi").text() + "");
				$("#bolsafueraoficinasi").trigger('collapse');
			});
			$("#bolsafueraoficinano").on("tap", function(event) {
				$("#selhorasfueraoficina h2 span span:nth-child(1)").html("Horas fuera oficina: " + $("#bolsafueraoficinano").text() + "");
				$("#bolsafueraoficinano").trigger('collapse');
			});
		},
		"listatrabajos" : function(trabajo,codigo) {
			$("#listatrabajos ul").append("<li id=\"" + trabajo + "\" data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a  class=\"ui-link-inherit\">" + trabajo + "</a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");
			$("#" + trabajo).on("tap", function(event) {
				
				$("#listatrabajos h2 span span:nth-child(1)").html("Trabajo: " + $("#" + trabajo).text() + "");
				$("#listatrabajos h2 span span:nth-child(1)").attr("value",codigo);
				$("#selhorasbolsa h2 span span:nth-child(1)").html("Bolsa de horas: ");
				$("#selhorasfueraoficina h2 span span:nth-child(1)").html("Horas fuera oficina: ");
				$("#listafase").show();
				if (trabajousuario.trim()=="eli"){
					$("#selhorasbolsa").show();	
				}
				
				trabajotipoa = $("#listatrabajos h2 span span:nth-child(1)").attr("value");
				if (trabajotipoa.substring(0,1)== "A" || trabajotipoa.substring(0,1)== "B" || trabajotipoa.substring(0,1)== "V"){
					$("#listafase h2 span span:nth-child(1)").html("Fase");
					$("#listafase").hide();
					
				}
				if (trabajotipoa.substring(0,1)== "B" || trabajotipoa.substring(0,1)== "V"){
					$("#selhorasbolsa").hide();
				}
				if ($("#" + trabajo).text().trim() == "BolsaHoras-13" || $("#" + trabajo).text().trim() == "Vacaciones-15" || $("#" + trabajo).text().trim() == "Vacaciones-13" || $("#" + trabajo).text().trim() == "Vacaciones-12") {
					$("#selhorasbolsa").hide();
				}
				dom.listatrabajos();
				$("#" + trabajo).trigger('collapse');
				
			});
		},
		"listatrabajosdia" : function(trabajodia) {
			trabajodia_c = trabajodia['usuario'].trim();
			trabajousuario_c = trabajousuario.replace(" ", "").trim();
			trabajofecha_c = trabajodia['fecha'].trim();
			$("#numtotalhorasdiarias").html(totalhorasdia);
			if (trabajodia_c == trabajousuario_c && trabajofecha_c == trabajofecha) {
				$("#trabajosguardados ul").append("<li id=\"" + trabajodia['id'] + "\" <li class=\"ui-li ui-li-static ui-btn-up-c ui-first-child ui-last-child\"><div id=\"lialias\">Alias: " + trabajodia['proyecto'] + "</div><div id=\"lifase\">Fase: " + trabajodia['fase'] + "</div><div id=\"lidetalle\">Detalle: " + trabajodia['detalle'] + "</div><div id=\"lihoras\">Horas: " + trabajodia['horas'] + "</div></li>");
				totalhorasdia = totalhorasdia + parseFloat(trabajodia['horas']);
				totalhorasdia = Math.round(totalhorasdia*100)/100;
				$("#numtotalhorasdiarias").html(totalhorasdia);
				
				var b = trabajodia['bolsa'];
				b = b.replace(" ", "").trim();
				if (b == "SI"){
					$("#"+ trabajodia['id']).append("<div  data-theme=\"b\">Bolsa: " + trabajodia['bolsa'] + "</div>");
				}
				var f = trabajodia['fuera'];
				f = f.replace(" ", "").trim();
				if (f == "SI"){
					$("#"+ trabajodia['id']).append("<div  data-theme=\"b\">Horas fuera oficina: " + trabajodia['fuera'] + "</div>");
				}
				$("#"+ trabajodia['id']).append("<a id=" +trabajodia['id']+ "borra href=\"#\" data-role=\"button\" data-inline=\"true\" data-theme=\"b\">Borrar</a>");
				$("#" + trabajodia['id'] + "borra").on("tap", function(event) {
					idhoras = this.getAttribute("id");
					idhoras = idhoras.replace("borra","");
					websql.borrarhoras(idhoras);
				});
				
			} else {
			}
		},
		"borrarlistatrabajosdia" : function() {
			$("#trabajosguardados ul").empty();
			websql.horasimputadasusuario();
		},

		"guardarhoras" : function() {
			$("#guardarhoras").on("tap", function() {
				console.log("tap");
				var trabajoproyecto_ = $("#listatrabajos h2 span span:nth-child(1)").text();
				var trabajofase_ = $("#listafase h2 span span:nth-child(1)").text();
				trabajohorasbolsa_ = $("#selhorasbolsa h2 span span:nth-child(1)").text();
				trabajoproyecto = trabajoproyecto_.replace("Trabajo: ", "");
				trabajofase = trabajofase_.replace("Fase: ", "");
				trabajohoras = $("#horas").val();
				trabajodetalle = $("#detalle").val();
				trabajofecha = $("#fecha").val();
				trabajohorasbolsa = trabajohorasbolsa_.replace("Bolsa de horas: ", "");
				trabajocodigo = $("#listatrabajos h2 span span:nth-child(1)").attr("value");
				if (trabajofase.trim() == "Ampliación") {
					trabajofase = trabajofase.replace("Ampliación","Otros");
					trabajodetalle = "Ampliación - " + trabajodetalle;
				}
				if (trabajofase.trim() == "Del-ReplanteoPresentaciones"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Replanteo ";
				};
				if (trabajofase.trim() == "Del-Revisión"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Revisión ";
				};
				if ((trabajofase.trim() == "Del-SuperpuestoEstructura") || (trabajofase.trim() == "Del-ElementosDetalles") || (trabajofase.trim() == "Del-Refuerzos") || (trabajofase.trim() == "Del-ContenciónEspecial") || (trabajofase.trim() == "Del-Cambios")){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Delineación ";					
				};
				if (trabajofase.trim() == "Ing-Revisión"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Revisión ";					
				};
				if (trabajofase.trim() == "Ing-Cálculo"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Cálculo ";					
				};
				if (trabajofase.trim() == "Ing-ContenciónEspecial"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Cálculo ";					
				};
				if (trabajofase.trim() == "Ing-Cambios"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Cálculo ";					
				};
				if (trabajofase.trim() == "Gen-AsistenciaObra"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "AsistenciaObra ";					
				};
				if (trabajofase.trim() == "Gen-Mediciones"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Mediciones ";					
				};
				if (trabajofase.trim() == "Gen-Otros"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Otros ";					
				};
				if (trabajofase.trim() == "Gen-Ampliación"){
					trabajodetalle = trabajofase.trim() + ": " + trabajodetalle;
					trabajofase = "Otros ";					
				};
				if (trabajocodigo=="undefined"){		
				}else{
					trabajotipoa = $("#listatrabajos h2 span span:nth-child(1)").attr("value").substring(0,1);
				}
				
				if (trabajotipoa=="A" || trabajotipoa=="B" || trabajotipoa=="V"){
					trabajofase = "Otros";
				}
				trabajoproyecto = trabajoproyecto.replace(" ", "").trim();
				if (trabajofase == "Fase" || trabajofase == "Fase click to expand contents click to expand contents" || trabajofase == "Trabajo click to collapse contents click to collapse contents"
				|| trabajoproyecto == "Trabajo" || trabajoproyecto == "Trabajo click to expand contents click to expand contents" || trabajoproyecto == "Trabajo click to collapse contents click to collapse contents"
				|| trabajohoras == "" || trabajohoras == "0" || trabajodetalle.trim()==""|| trabajodetalle.replace("Ampliación - ","")=="") {
					
					$('.popuphorasrevisar').fadeIn(200).delay(1500).fadeOut(400);
				}else{
					
					trabajooficina = $("#selhorasfueraoficina h2 span span:nth-child(1)").text();
					trabajooficina = trabajooficina.replace("Horas fuera oficina: ", "").trim();
					if ((trabajohoras + totalhorasdia)< horasdia){
					}
					if ((parseFloat(trabajohoras) + horasimputadasusuario) <= horasdia || trabajooficina== "SI" || trabajoproyecto=="BolsaHoras-13"){
						
						websql.consultarultimocodigo();
						dom.fecha();
						$("#plustrabajos").show();
						$("#listatrabajos h2 span span:nth-child(1)").text("Trabajo");
						$("#listafase h2 span span:nth-child(1)").text("Fase");
						$("#horas").val("");
						$("#detalle").val("");
						$("#formtrabajos").children().toggle();
						dom.borrarlistatrabajosdia();
						$("#listafase").hide();
						websql.cargartrabajosdia();
						websql.contador();
					}else{
						$('.popuphorasrevisar').fadeIn(200).delay(1500).fadeOut(400);
					}
				}	
			});
		},
		"refrescar" : function() {
			$("#refrescar").on("tap", function() {
				dom.guardarhoras
				console.log("refrescar");
				$("#numtotalhorasdiarias").html(totalhorasdia);
				websql.cargartrabajosdia();
				websql.horasbolsa();
				horassinimputar = 0;
				websql.contador();
				procesos.horassinimputar();
			});
		},
		
		"horasbolsausuario" : function(horasbolsa) {
			var horasbolsausuario = 0;
			for (i in horasbolsa) {
				if (horasbolsa[i]['usuario'].trim() == trabajousuario.trim()) {
					horasbolsausuario = horasbolsausuario + parseFloat(horasbolsa[i]['horas']);
				}
			}
			horasbolsausuario = Math.round(horasbolsausuario*100)/100;
			//BOLSA DE HORAS AÑADIDA EN OTRA VENTANA
			//$("#bolsahoras").html(horasbolsausuario);
		},
		"contadortap" : function() {
			$("#botoncontador").on("tap", function() {
				procesos.fechaactual();
				$("#fecha").val(fechaseleccionada);
				websql.contadortap();
				/////////////////////////////////
				totalhorasdia = 0;
				trabajofecha = $("#fecha").val();
				if (trabajofecha == "") {
					$("#formtrabajos").children().hide();
					$("#plustrabajos").hide();
					dom.borrarlistatrabajosdia();

				} else {
					$("#plustrabajos").show();
					$("#numtotalhorasdiarias").html(totalhorasdia);
					websql.cargartrabajosdia();
				}
				fechaseleccionada = trabajofecha;
				if (fechaseleccionada==""){
					fechaseleccionada = d.getFullYear()+ "-" + parseInt(d.getMonth()+1) + "-" + d.getDate();
					
					
				}
				
			});
		},
		"contador" : function(responsecontador) {
			$("#tablacontador .filaborra").empty();
			
			horasdia = 0;
						 
			for (i in responsecontador){
				var arrayfechaentrada;
				var arrayfechasalida;
				var horas;
				var arrayhoraentrada;
				var arrayhorasalida;
				var mes;
				arrayfechaentrada = responsecontador[i].fichaje;
				arrayfechaentrada = arrayfechaentrada.split(" ");
				arrayhoraentrada = arrayfechaentrada[4].split(":");
				if (responsecontador[i].salida==""){
					$("#tablacontador").append("<tr class='filaborra'><td class='filaborra'>" + arrayfechaentrada[2] +"/"+ arrayfechaentrada[1]+"/"+arrayfechaentrada[3] +"</td><td class='filaborra'>" + arrayfechaentrada[4] + "</td></tr>");
				}else{
					
					arrayfechasalida = responsecontador[i].salida;
					arrayfechasalida = arrayfechasalida.split(" ");
					arrayhorasalida = arrayfechasalida[4].split(":");
					mes = arrayfechasalida[1];
					/////////////////////////////////////////////////////////////////////////////////////////////
					switch(mes){
						case "Jan":
							mes = "00";
							break;
						case "Feb":
							mes = "01";
							break;
						case "Mar":
							mes = "02";
							break;
						case "Apr":
							mes = "03";
							break;
						case "May":
							mes = "04";
							break;
						case "Jun":
							mes = "05";
							break;
						case "Jul":
							mes = "06";
							break;
						case "Aug":
							mes = "07";
							break;
						case "Sep":
							mes = "08";
							break;
						case "Oct":
							mes = "09";
							break;
						case "Nov":
							mes = "10";
							break;
						case "Dec":
							mes = "11";
							break;
					}
					horas = (Date.UTC(arrayfechasalida[3],mes,arrayfechasalida[2],arrayhorasalida[0],arrayhorasalida[1],arrayhorasalida[2]) - Date.UTC(arrayfechaentrada[3],mes,arrayfechaentrada[2],arrayhoraentrada[0],arrayhoraentrada[1],arrayhoraentrada[2]))/1000/3600;
					horas = Math.round(horas*100)/100;
					horasdia = horasdia + horas;
					horasdia = Math.round(horasdia*100)/100;
					$("#tablacontador").append("<tr class='filaborra'><td class='filaborra'>" + arrayfechaentrada[2] +"/"+ arrayfechaentrada[1]+"/"+arrayfechaentrada[3] +"</td><td class='filaborra'>" + arrayfechaentrada[4] + "</td><td class='filaborra'>" + arrayfechasalida[2] +"/"+ arrayfechasalida[1]+"/"+arrayfechasalida[3] +"</td><td class='filaborra'>" + arrayfechasalida[4] + "</td><td class='filaborra'>" + horas + "</td></tr>");
				}
				
							
				
				
			}
				$("#tablacontador").append("<tr id='idhorascontador' class='filaborra'><th colspan="+4+"class='filaborra'>TOTAL HORAS</th><th  class='filaborra'>" + horasdia + "</th></tr>");
				$("#tablacontador").append("<tr  class='filaborra'><th colspan="+4+"class='filaborra'>TOTAL HORAS SIN IMPUTAR</th><th id='totalhorassinimputar' class='filaborra'>" + "aaaaaaaaaa" + "</th></tr>");
				websql.horasimputadasusuario();
				
				

		},
		"cambiofecha" : function() {
			$("#fecha").val(fechaseleccionada);
			totalhorasdia = 0;
			trabajofecha = $("#fecha").val();
			if (trabajofecha == "") {
				$("#formtrabajos").children().hide();
				$("#plustrabajos").hide();
				dom.borrarlistatrabajosdia();

			} else {
				$("#plustrabajos").show();
				$("#numtotalhorasdiarias").html(totalhorasdia);
				websql.cargartrabajosdia();
			}
			fechaseleccionada = trabajofecha;
			if (fechaseleccionada==""){
				fechaseleccionada = d.getFullYear()+ "-" + parseInt(d.getMonth()+1) + "-" + d.getDate();		
			}

			websql.contador();

			
		},
	};
	var panel = {
		"paneltrabajos" : function() {
			$("#paneltrabajos a").on("tap", function() {
				$.mobile.changePage("#paglistadotrabajos");
			});

		},
	};
	var procesos = {
		"fechaactual" : function() {
			var mesdosdigitos;
			var diadosdigitos;
			mesdosdigitos = parseInt(d.getMonth()+1);
			mesdosdigitos = mesdosdigitos.toString();
			if (mesdosdigitos.length == 1){
				mesdosdigitos = "0" + mesdosdigitos;
			}
			diadosdigitos = parseInt(d.getDate());
			diadosdigitos = diadosdigitos.toString();
			if (diadosdigitos.length == 1){
				diadosdigitos = "0" + diadosdigitos;
			}
			fechaseleccionada = d.getFullYear()+ "-" + mesdosdigitos + "-" + diadosdigitos;
		},
	
		"horassinimputar" : function() {
			horassinimputar = parseFloat(horasdia) - horasimputadasusuario;
			horassinimputar = horassinimputar.toFixed(2);
			if (horassinimputar<0){
				horassinimputar = 0;
			};
			$("#totalhorassinimputar").html(horassinimputar)
		},
	};
	var websql = {
		"cargartrabajos" : function() {
			$.ajax({
				url : 'server/pt_trabajos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(responsetrabajos) {
					for (i in responsetrabajos) {
						if(responsetrabajos[i].codigo.substring(0,1)!= "E"){
							dom.listatrabajos(responsetrabajos[i].alias,responsetrabajos[i].codigo);
						}				
					}
				}
			});
		},
		"enviarhoras" : function(ultimoidhoras) {
			console.log(".............................................");
			console.log(ultimoidhoras);
			console.log(trabajoproyecto);
			console.log(trabajofase);
			console.log(trabajofase);
			console.log(trabajofase.trim().substr(0,4));
			
			$.ajax({
				url : 'server/ph_enviartrabajoscontador.php',
				type : 'post',
				data : {
					"trabajoid" : ultimoidhoras,
					"trabajoproyecto" : trabajoproyecto,
					"trabajofase" : trabajofase,
					"trabajohoras" : trabajohoras,
					"trabajodetalle" : trabajodetalle,
					"trabajofecha" : trabajofecha,
					"trabajousuario" : trabajousuario,
					"trabajohorasbolsa" : trabajohorasbolsa,
					"trabajofuera" : trabajooficina,
					"trabajocodigo": trabajocodigo
				},

				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(trabajoproyecto, trabajofase, trabajohoras, trabajodetalle, trabajofecha, trabajousuario) {
					
					
				}
				
			});
			if (trabajocodigo.substring(0,4)=="A005"){
					websql.enviarvacaciones();
				}
			
		},
		"consultarultimocodigo" : function(){
			console.log("ultimo");
			$.ajax({
				url : 'server/pti_horastrabajo.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestahoras) {
					
					for (i in respuestahoras){
						var idfloat = parseFloat(respuestahoras[i].id);
						if(ultimoidhoras<idfloat){
							ultimoidhoras = parseFloat(respuestahoras[i].id);
						}
					}
					ultimoidhoras = ultimoidhoras +1;
					console.log(ultimoidhoras);
					websql.enviarhoras(ultimoidhoras);
					
					
					
					if (trabajohorasbolsa.replace(" ", "") == "SI") {
						websql.enviarhorasbolsa(ultimoidhoras);
					}
					if (trabajoproyecto.trim() == "BolsaHoras-13" || trabajoproyecto.trim() == "BolsaHoras-15" ) {
						trabajohoras = -1 * trabajohoras;
						websql.enviarhorasbolsa(ultimoidhoras);
					}
				}
			});
		},
		"enviarhorasbolsa" : function(ultimoidhoras) {
			$.ajax({
				url : 'server/ph_enviarbolsa.php',
				type : 'post',
				data : {
					"trabajofecha" : trabajofecha,
					"trabajousuario" : trabajousuario,
					"trabajohoras" : trabajohoras,
					"trabajoidhoras" : ultimoidhoras
				},

				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(trabajohoras, trabajofecha, trabajousuario) {
				}
			});
		},
		"cargartrabajosdia" : function() {
			totalhorasdia = 0;
			console.log(trabajousuario);
			console.log(trabajofecha);
			$.ajax({
				url : 'server/ph_trabajosdiacontador.php',
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
					totalhorasdia = 0;
					for (i in responsetrabajos) {
						dom.listatrabajosdia(responsetrabajos[i]);
					}
				}
			});
		},
		"horasbolsa" : function() {
			$.ajax({
				url : 'server/ph_bolsa.php',
				type : 'post',
				dataType : "json",
				success : function(responsehorasbolsa) {
					dom.horasbolsausuario(responsehorasbolsa);
				}
			});
		},
		"borrarhoras" : function(idhoras){
			$.ajax({
				url : 'server/ph_borrarhoras.php',
				type : 'post',
				datatype : 'json',
				data : {
					"idhoras" : idhoras,
				},
				success : function() {
					dom.borrarlistatrabajosdia();
					websql.cargartrabajosdia();
				}
			});
		},
		"enviarcontador" : function() {
			
			$.ajax({
				url : 'server/ph_contadorenviar.php',
				type : 'post',
				data : {
					"trabajousuario" : trabajousuario,
					"fechaentrada": fechaseleccionada,
					"fichaje": fichaje,
					"salida": salida,
				},

				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(trabajousuario,fechaseleccionada, fichaje, salida) {
					console.log("ok");
				}
			});
		},
		"enviarcontadormod" : function(campo, modval) {
			console.log("tap");
			$.ajax({
				url : 'server/ph_contadorenviarsalida.php',
				type : 'post',
				datatype : 'json',
				data : {
					"id" : idtablacontador,
					"fechasalida" : fechaseleccionada,
					"salida" : salida,
				},
				success : function() {
				}
			});
		},
		"contadortap": function(){
			
			$.ajax({
				url : 'server/ph_contador.php',
				type : 'post',
				dataType : "json",
				data : {
					"usuario" : trabajousuario,
					"fechaentrada" : fechaseleccionada,
				},
				success : function(responsecontador) {
					idtablacontador = 0;
					if (responsecontador.length ==0){
						fichaje = new Date();
						salida = "";
						websql.enviarcontador();
						var start = new Date().getTime();
						var end = start;
						while(end < start + 1000) {
							end = new Date().getTime();
						}
					}else{
					for (i in responsecontador){
						if (parseInt(responsecontador[i].id) > idtablacontador){
							idtablacontador = responsecontador[i].id;
							idarraytablacontador = i;
							
						}
					}
					if (responsecontador[idarraytablacontador].salida ==""){
						salida = new Date();
						fichaje = "";
						websql.enviarcontadormod();
						dom.contador
					}else{
						fichaje = new Date();
						salida = "";
						websql.enviarcontador();
					}
					
					var start = new Date().getTime();
					var end = start;
					while(end < start + 1000) {
						end = new Date().getTime();
						}
					}
					websql.contador();
					
					
				}
			});
		},
		"contador": function(){
			$.ajax({
				url : 'server/ph_contador.php',
				type : 'post',
				dataType : "json",
				data : {
					"usuario" : trabajousuario,
					"fechaentrada" : fechaseleccionada,
				},
				success : function(responsecontador) {
					dom.contador(responsecontador);
					
				}
			});
		},
		"horasimputadasusuario" : function() {
			if (fechaseleccionada == ""){
				procesos.fechaactual();
			}
			fechaseleccionada = fechaseleccionada.replace(" ","");
			fechaseleccionada = trabajofecha;
			
			$.ajax({
				url : 'server/ph_trabajosdiacontador.php',
				type : 'post',
				dataType : "json",
				data : {
					"trabajousuario" : trabajousuario,
					"trabajofecha" : trabajofecha
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(responsehorasdiausuario) {
					horasimputadasusuario = 0;
					for (i in responsehorasdiausuario) {
						if (responsehorasdiausuario[i].fuera.trim() == "SI" || responsehorasdiausuario[i].usuario.trim() != trabajousuario.trim() ){
						}else{
							horasimputadasusuario = horasimputadasusuario + parseFloat(responsehorasdiausuario[i].horas);
						}
					}
					
					procesos.horassinimputar();
					}
		});
		},
		"enviarvacaciones" : function() {
			$.ajax({
				url : 'server/ph_enviarvacacionescalendario.php',
				type : 'post',
				datatype : 'json',
				data : {
					"fecha" : trabajofecha,
					"usuario" : trabajousuario.trim(),
					
				},
				success : function() {
				}
			});
		},
		"fases" : function() {
			$.ajax({
				url : 'fases.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
					},
				success : function(response) {

					for (i in response) {
						dom.listafases(response[i]);
					}
				}
			});
		},
	};
	localStorage.setItem("urteresumen","2022");
	console.log("aaaa");
	var idtablacontador;
	var idarraytablacontador;
	var fichaje;
	var entrada;
	var salida;	
	var ultimoidhoras = 0;
	var trabajofase;
	var trabajohoras;
	var trabajodetalle;
	var trabajofecha;
	var trabajousuario;
	var trabajohorasbolsa;
	var totalhorasdia;
	var trabajocodigo;
	var trabajotipoa;
	var fechaseleccionada;
	var horassinimputar;
	var horasdia;
	var horasimputadasusuario;
	var d = new Date();
	var trabajooficina;
	fechaseleccionada = "";
	dom.usuario();
	dom.fecha();
	dom.plustrabajos();
	dom.guardarhoras();
	dom.selbolsahoras();
	dom.selhorasfueraoficina();
	websql.cargartrabajos();
	dom.refrescar();
	dom.contadortap();
	dom.cambiofecha();
	websql.horasimputadasusuario();
	websql.fases();
	
	

});

