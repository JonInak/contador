$(document).delegate('#phress', 'pagecreate', function() {
	function extraerurtedefecha(u){
		u = "a " + u;
		return u.split(" ")[4];
	}
	function extraerdiadefechacompleta(fc){
		fc = "a " + fc;
		return fc.split(" ")[1];
	}
	function extraerfechadefechacompleta(a){
		a = "a " +a;
		var mesa = a.split(" ")[2];
							
								/////////////////////////////////////////////////////////////////////////////////////////////
								switch(mesa){
									case "Jan":
										mesa = "1";
										break;
									case "Feb":
										mesa = "2";
										break;
									case "Mar":
										mesa = "3";
										break;
									case "Apr":
										mesa = "4";
										break;
									case "May":
										mesa = "5";
										break;
									case "Jun":
										mesa = "6";
										break;
									case "Jul":
										mesa = "7";
										break;
									case "Aug":
										mesa = "8";
										break;
									case "Sep":
										mesa = "9";
										break;
									case "Oct":
										mesa = "10";
										break;
									case "Nov":
										mesa = "11";
										break;
									case "Dec":
										mesa = "12";
										break;
								}
		
		return a.split(" ")[4]+"-"+mesa+"-"+a.split(" ")[3]
	}
	function formatofecha(f){
		var ffurte = f.split("-")[0];
		var ffmes = f.split("-")[1];
		var ffdia = f.split("-")[2];
		if (ffmes.length==1){
			ffmes = "0" + ffmes;
		}
		if (ffdia.length==1){
			ffdia = "0" + ffdia;
		}
		return ffurte + "-" + ffmes + "-" + ffdia;
	}
	var dom = {
		"anterior" : function() {
			$("#anterior").on("tap", function() {
				$(".borrar").empty();
				nsemana = nsemana - 86400000*7;
				procesos.lunes();
				if (extraerurtedefecha(lunes)!=urte){
					urte = extraerurtedefecha(lunes);
				}
				websql.horasusuario();
			});
		},
		"siguiente" : function() {
			$("#siguiente").on("tap", function() {
				$(".borrar").empty();
				nsemana = nsemana + 86400000*7;
				procesos.lunes();
				if (extraerurtedefecha(lunes)!=urte){
					urte = extraerurtedefecha(lunes);
				}
				websql.horasusuario();
			});
		},
	};
	var procesos = {
		"usuariooculto" : function(){
			
			$("#usuariooculto").hide();
			usuario = $("#usuariooculto").text();
			usuario = usuario.replace("\n					", "");
		},
		"usuarioscontador": function(){
			
			arrayusuarios=[];
			
			arrayusuarios.push(arraycontadorurte[0].usuario);
		
			for (i in arraycontadorurte){
				var coincide = "NO";
				for (j in arrayusuarios){
					if (arrayusuarios[j].trim()==arraycontadorurte[i].usuario.trim()){
						coincide = "SI";
					}
				}
			if (coincide=="NO"){
				arrayusuarios.push(arraycontadorurte[i].usuario);
			}
			}
			//arrayusuarios.push("jon");
			for (i in arrayusuarios){
						us = arrayusuarios[i];
						websql.contadorusuario();
					}
			
			
		},
		"lunes": function(){
			lunes = extraerdiadefechacompleta(hoy);
			switch(lunes){
									case "Mon":
										lunes = hoy.getTime() - 86400000*0 + nsemana;
										break;
									case "Tue":
										lunes = hoy.getTime() - 86400000*1 + nsemana;
										break;
									case "Wed":
										lunes = hoy.getTime() - 86400000*2 + nsemana;
										break;
									case "Thu":
										lunes = hoy.getTime() - 86400000*3 + nsemana;
										break;
									case "Fri":
										lunes = hoy.getTime() - 86400000*4 + nsemana;
										break;
									case "Sat":
										lunes = hoy.getTime() - 86400000*5 + nsemana;
										break;
									case "Sun":
										lunes = hoy.getTime() - 86400000*6 + nsemana;
										break;
								}
			lunes = new Date(lunes);
			extraerfechadefechacompleta(lunes);
		},
		"horas": function(){
			
			horascontador = 0;
			horascontadordia = 0;
			
			var arrayfechaentrada;
			var arrayfechasalida;
			var arrayhoraentrada;
			var arrayhorasalida;
			var mes;
			var ia = 0;
			filausuario = "";
			var horasausenciassemana =0;
			while (ia<7){
				//var nueva = 0;
				//horasausencias = 0;
				hoyx = lunes.getTime() + 86400000*ia;
				ia = ia + 1;
				hoyx = new Date(hoyx);
				$("#semanaseleccionada").html("Semana del " + extraerfechadefechacompleta(lunes));
				/////////////////////////////HORASCONTADOR/////////////////////////////////////////////////////////////////////////////////////////////
				horascontadordia = 0;
				for (i in arrayuscontador){
				
					if (arrayuscontador[i].salida!="" && extraerfechadefechacompleta(hoyx)== extraerfechadefechacompleta(arrayuscontador[i].fichaje)){
						arrayfechaentrada = arrayuscontador[i].fichaje;
						arrayfechaentrada = arrayfechaentrada.split(" ");
						arrayhoraentrada = arrayfechaentrada[4].split(":");
						arrayfechasalida = arrayuscontador[i].salida;
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
						horascontador = (Date.UTC(arrayfechasalida[3],mes,arrayfechasalida[2],arrayhorasalida[0],arrayhorasalida[1],arrayhorasalida[2]) - Date.UTC(arrayfechaentrada[3],mes,arrayfechaentrada[2],arrayhoraentrada[0],arrayhoraentrada[1],arrayhoraentrada[2]))/1000/3600;
						horascontador = Math.round(horascontador*100)/100;
						horascontadordia = horascontadordia + horascontador;
						horascontadordia = Math.round(horascontadordia*100)/100;
					}
				
				}
				///////////////////////////HORASIMPUTADAS/////////////////////////////////////////////////////////////////////////////////////////////
				horasfueraoficina = 0;
				horasausencias = 0;
				for (j in arrayusuarios){
					
					if (arrayuscontador[0].usuario.trim()==arrayusuarios[j].trim()){
						for (i in arrayusimputadas){
							
						var fechaformateada = formatofecha(extraerfechadefechacompleta(hoyx));
						if (arrayusuarios[j].trim()==arrayusimputadas[i].usuario.trim() && fechaformateada== arrayusimputadas[i].fecha && arrayusimputadas[i].fuera.trim()=="SI" && arrayusimputadas[i].codigo!="A012-15"){
							horasfueraoficina = horasfueraoficina + Math.round(arrayusimputadas[i].horas*100)/100;
							
							
						}
						if (arrayusuarios[j].trim()==arrayusimputadas[i].usuario.trim() && fechaformateada== arrayusimputadas[i].fecha && arrayusimputadas[i].proyecto.split("Baja").length>1){
							horasbaja = horasbaja + Math.round(arrayusimputadas[i].horas*100)/100;
						}
						if (arrayusuarios[j].trim()==arrayusimputadas[i].usuario.trim() && fechaformateada== arrayusimputadas[i].fecha && arrayusimputadas[i].proyecto.split("Vacaciones").length>1){
							horasvacaciones = horasvacaciones + Math.round(arrayusimputadas[i].horas*100)/100;
						}
						if (arrayusuarios[j].trim()==arrayusimputadas[i].usuario.trim() && fechaformateada== arrayusimputadas[i].fecha && arrayusimputadas[i].proyecto.trim()=="Otros"){
							horasotros = horasotros + Math.round(arrayusimputadas[i].horas*100)/100;
							
						}
						
						if (arrayusuarios[j].trim()==arrayusimputadas[i].usuario.trim() && fechaformateada== arrayusimputadas[i].fecha && arrayusimputadas[i].proyecto.trim()=="Ausencias"){
							 horasausencias = horasausencias + Math.round(arrayusimputadas[i].horas*100)/100;
							 horasausenciassemana = horasausenciassemana + horasausencias
						 }
						 // if (arrayusuarios[j].trim()==arrayusimputadas[i].usuario.trim() && fechaformateada== arrayusimputadas[i].fecha && arrayusimputadas[i].proyecto.trim()=="Permiso"){
							 // horasausencias = horasausencias + Math.round(arrayusimputadas[i].horas*100)/100;
							 // horasausenciassemana = horasausencias
						 // }
						
						}
					};	
					
				}
			
			
			var horasfueramenosausencias = horasfueraoficina - horasausencias
			
			horasdia = horascontadordia + horasfueraoficina - horasausencias;
			
			horasfueramenosausencias = Math.round(horasfueramenosausencias*100)/100;
			horasfueraoficina = Math.round(horasfueraoficina*100)/100;
			horassemana = horassemana + horasdia;
			horassemana = Math.round(horassemana*100)/100;
			horasbaja = Math.round(horasbaja*100)/100;
			horasvacaciones = Math.round(horasvacaciones*100)/100;
			horasotros = Math.round(horasotros*100)/100;
			horasausencias = Math.round(horasausencias*100)/100;
			horasdia = Math.round(horasdia*100)/100;
			filausuario = filausuario + "<td>" + horascontadordia + "</td><td>" + horasfueramenosausencias + "</td><td class=total>" + horasdia + "</td><td class=total>" + horasausencias + "</td>"
			
					
			}
			
			horassemana = Math.round(horassemana*100)/100;
			horasausenciassemana = Math.round(horasausenciassemana*100)/100;
			if (horassemana!=0){
				filausuario = "<td>" + arrayuscontador[0].usuario.trim() + "</td>" + filausuario + "<td class=totalsemana>" + horassemana + "</td> + <td class=totalsemana>" + horasbaja + "</td> + <td class=totalsemana>" + horasvacaciones + "</td>+ <td class=totalsemana>" + horasotros + "</td>+ <td class=totalsemana>" +  horasausenciassemana + "</td>"
				$("#phresumentabledos").append("<tr class='borrar'>" + filausuario + "</tr>");
			}
			
			horassemana = 0;
			horasbaja = 0;
			horasvacaciones = 0;
			horasotros = 0;
			horasausencias = 0;
		},
		"horascontadordia": function(){
			
		},
	}
	var websql = {
		"contadorurte": function(){
			$.ajax({
				url : 'server/phress_contadorurte.php',
				type : 'post',
				dataType : "json",
				data : {
					"urte" : urte,
				},
				success : function(responsecontador) {
					arraycontadorurte = responsecontador;
					procesos.usuarioscontador();
				}
			});
		},
		"contadorusuario": function(){
			$.ajax({
				url : 'server/phress_usuario.php',
				type : 'post',
				dataType : "json",
				data : {
					"usuario" : us,
				},
				success : function(responsecontador) {
					arrayuscontador = responsecontador;
					procesos.horas();
					
				}
			});	
		},
		"horasusuario" : function() {
			$.ajax({
				url : 'server/phress_horasurte.php',
				type : 'post',
				dataType : "json",
				data : {
					"horasfecha" : urte,
					"usuario": us,
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					arrayusimputadas = respuesta;
					websql.contadorurte();
					
					
				}
			});
		},
	};
	
	dom.anterior();
	dom.siguiente();
	var urte;
	var hoy = new Date();
	procesos.usuariooculto();
	urte = parseInt(hoy.getFullYear());
	//urte = "2016"
	var arraycontadorurte;
	var arrayusuarios=[];
	var arrayuscontador=[];
	var arrayusimputadas=[];
	var us;
	var lunes;
	var filausuario;
	var horascontador;
	var horascontadordia;
	var horasfueraoficina;
	var horasausencias =0;
	var horasdia;
	var horassemana = 0;
	var horasbaja = 0;
	var horasvacaciones = 0;
	var horasotros = 0;
	var nsemana = 0;
	procesos.lunes();
	websql.horasusuario();
	
});

	