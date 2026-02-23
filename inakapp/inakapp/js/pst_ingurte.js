$(document).delegate('#pstingurte', 'pagecreate', function() {
	var dom = {
		"tabla" : function(tipo, viviendas) {			
			var fila;
			var filaini;
			filaini = "";
			for (j in pst_arrayfasesdelin){
				filaini = filaini + "<th class='black'>"+pst_arrayfasesdelin[j].replace("Ing-","")+"</th>"
			}
			filaini = "<tr class='filas'><th class='black'>TRABAJO</th>"+filaini+"<th class='black'>HORAS</th></tr>"
			$("#psttabledelin").append("<tr class='filas'><th>..</th></tr>");
			$("#psttabledelin").append("<tr class='filas'><th class='black' colspan="+pst_arrayfasesdelin.length+2+">"+tipo+"</th></tr>");
			$("#psttabledelin").append("<tr class='filas'><th class='black' colspan="+pst_arrayfasesdelin.length+2+">"+viviendas+"</th></tr>");
			$("#psttabledelin").append(filaini);
			for (i in pst_arraytrabajosdelin){
				fila = ""
				if ((pst_arraytrabajosdelin[i].tipo==tipo)&&(pst_arraytrabajosdelin[i].viviendas.replace("<","&lt").substring(2, pst_arraytrabajosdelin[i].length)==viviendas&&(pst_arraytrabajosdelin[i].sumahorastrabajo!=0))){
				for (j in pst_arraytrabajossumahorasfases){
					if(pst_arraytrabajosdelin[i].codigo==pst_arraytrabajossumahorasfases[j].codigo){
						fila = fila + "<th class='gris'>"+pst_arraytrabajossumahorasfases[j].horas+"</th>"
					}
				}
				fila = "<tr class='filas'><th class='grisgrande'>" + pst_arraytrabajosdelin[i].alias + "</th>" + fila+ "<th  class='black'>"+pst_arraytrabajosdelin[i].sumahorastrabajo+"</th></tr>"
				$("#psttabledelin").append(fila);
				}
			}		
		},
		"tablastipo" : function() {
			for (k in pst_arraytrabajostiposviviendas){
				
				dom.tabla(pst_arraytrabajostiposviviendas[k].tipo, pst_arraytrabajostiposviviendas[k].viviendas);
			}				
		},
		"filtrohoras": function(){
			$("#filtrourte span").text(horasfecha);
			$("#modfecha").val(horasfecha);
		},
		"guardarfecha" : function() {
			$("#botonurte").on("tap", function() {
				
				horasfecha = $("#modfecha").val();
				urte=horasfecha;
				console.log(urte);
				fechadosdigitos = horasfecha.substring(2,4);
				console.log(fechadosdigitos);
				$("#psttabledelin .filas").remove();
				$("#psttabledelin .filas").remove();
				dom.filtrohoras();
				websql.trabajos();
				$("#popupurte").hide();
			});
		},
		"cambiarfecha" : function() {
			$("#filtrourte").on("tap", function() {
				
				$("#popupurte").show();
			});
		},
	};
	var websql = {
		"trabajos" : function() {
			$.ajax({
				url : 'server/pstdelin_trabajos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestatrabajos) {
					pst_arraytrabajos = respuestatrabajos;
					datos.trabajostipos();
					console.log(pst_arraytrabajos);
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
					pst_arrayfases = response
					datos.fasesdelin();
					console.log(pst_arrayfases);
					
				}
			});
		},	
		"horas" : function() {
			$.ajax({
				url : 'server/pstdelin_horasurte.php',
				type : 'post',
				dataType : "json",
				data : {
					"horasfecha" : fechadosdigitos
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(responsehoras) {
					pst_arrayhoras = responsehoras;
					datos.sumarhoras();
					dom.tablastipo();
					console.log(pst_arrayhoras);
					
				}
			});
		},		
	};
	var datos = {		
		"trabajostipos" : function() {
			var n;
			var verificar;			
			n=-1;
			for (i in pst_arraytrabajos) {	
			verificar = "NO";			
				if (pst_arraytrabajos[i].tipo.trim()!==""){			
					for (j in pst_arraytrabajostipos) {
						if (pst_arraytrabajos[i].tipo == pst_arraytrabajostipos[j]){
							verificar = "SI"
						}					
					}			
				if ((verificar == "NO") && (pst_arraytrabajos[i].tipo.trim()!="")) {
				n = n +1;
				pst_arraytrabajostipos[n] = pst_arraytrabajos[i].tipo
				}
				};
			}
			datos.trabajosviviendas();
					
		},
		"trabajosviviendas" : function() {
			var n;
			var verificar;			
			n=-1;
			for (i in pst_arraytrabajos) {
			verificar = "NO";						
				if (pst_arraytrabajos[i].viviendas.trim()!==""){					
					for (j in pst_arraytrabajosviviendas) {
						if (pst_arraytrabajos[i].viviendas.replace("<","&lt") == pst_arraytrabajosviviendas[j]){
							verificar = "SI"
						}					
					}			
					if (verificar == "NO") {
					n = n +1;
					pst_arraytrabajosviviendas[n] = pst_arraytrabajos[i].viviendas.replace("<","&lt");
					}
				};
			}
			pst_arraytrabajosviviendas.sort(function(a, b){
				if (b > a) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
					return 0;
			});
			for (i in pst_arraytrabajosviviendas) {
				pst_arraytrabajosviviendas[i] = pst_arraytrabajosviviendas[i].substring(2, pst_arraytrabajosviviendas[i].length);
			}
			datos.trabajostiposviviendas();
			datos.trabajosdelin();
		},
		"trabajosdelin" : function() {
			var n;		
			n=-1;
			for (i in pst_arraytrabajos) {
				if ((pst_arraytrabajos[i].tipo !="")&&(pst_arraytrabajos[i].viviendas !="") ){	
					n = n +1;
					pst_arraytrabajosdelin[n] = pst_arraytrabajos[i];
				}					
			}
				websql.fases();
		},
		"fasesdelin" : function() {
			var n;
			var verificar;			
			n=-1;

			for (i in pst_arrayfases) {	
				verificar = "NO";
				if (pst_arrayfases[i].substring(0, 4)== "Ing-"){
					for (j in pst_arrayfasesdelin) {
						if (pst_arrayfases == pst_arrayfasesdelin[j]){
							verificar = "SI"
						}					
					}			
					if ((verificar == "NO") && (pst_arrayfases[i].substring(0, 4)== "Ing-"))  {
					n = n + 1;
					pst_arrayfasesdelin[n] = pst_arrayfases[i];
					}
				};
			}
			
			websql.horas();
			
		},
		"sumarhoras" : function() {
			var n;
			n = -1;
			var fasedetalle;
			var sumahoras;
			var sumahorastrabajo;
			sumahoras = 0;
			sumahorastrabajo = 0;
			var detallecaracteres;
			for (i in pst_arraytrabajos){				
				if ((pst_arraytrabajos[i].tipo !="")&&(pst_arraytrabajos[i].viviendas !="") ){					
					for (k in pst_arrayfasesdelin){
								for (j in pst_arrayhoras){
									detallecaracteres = pst_arrayhoras[j].detalle.split(":",1)
									if (detallecaracteres=="Del-RevisiÃ³n"){
										detallecaracteres = "Del-Revisión"
										}
									if (detallecaracteres=="Del-ContenciÃ³nEspecial"){
										detallecaracteres = "Del-ContenciónEspecial"
										}
									if ((pst_arraytrabajos[i].codigo == pst_arrayhoras[j].codigo)&&(pst_arrayfasesdelin[k]==detallecaracteres)){
										sumahoras = sumahoras + parseFloat(pst_arrayhoras[j].horas)					 
									}
								}
							n = n + 1;
							pst_arraytrabajossumahorasfases[n]= {alias: pst_arraytrabajos[i].alias,codigo: pst_arraytrabajos[i].codigo,fase: pst_arrayfasesdelin[k], horas: sumahoras.toFixed(2),tipo:pst_arraytrabajos[i].tipo,viviendas:pst_arraytrabajos[i].viviendas};
							sumahorastrabajo = sumahorastrabajo + sumahoras;
							sumahoras = 0;
					};
					
					
			}
			pst_arraytrabajos[i].sumahorastrabajo=sumahorastrabajo.toFixed(2);
			sumahorastrabajo = 0;
			}
			
		},
		"trabajostiposviviendas" : function() {
			var n;
			n=-1
			for (i in pst_arraytrabajostipos){
				for (j in pst_arraytrabajosviviendas) {
					n = n +1
					pst_arraytrabajostiposviviendas[n] = {tipo:pst_arraytrabajostipos[i] , viviendas:pst_arraytrabajosviviendas[j] };
					
				}
			}
		},
	};
	///////////////////////////////////////////
	//websql.trabajos();
	////datos.trabajostipos(); pst_arraytrabajostipos
	////datos.trabajosviviendas(); pst_arraytrabajosviviendas
	////datos.trabajosdelin(); pst_arraytrabajosdelin	
	//////websql.fases();
	//////datos.fasesdelin(); pst_arrayfasesdelin
	////////websql.horas();
	///////datos.sumarhoras(); pst_arraytrabajossumahorasfases   pst_arraytrabajos[i].sumahorastrabajo
	//////////dom.tablastipo()
	//datos.trabajostiposviviendas(); pst_arraytrabajostiposviviendas
	//pst_arrayhoras
	pst_arrayhoras = []
	pst_arraytrabajos = [];
	pst_arraytrabajosdelin = [];
	pst_arraytrabajostipos = [0];
	pst_arraytrabajosviviendas = [0];
	pst_arraytrabajostiposviviendas = [];
	pst_arrayfases = [];
	pst_arrayfasesdelin = [0];
	pst_arraytrabajossumahorasfases = [0];
	
	var currentTime = new Date()
	var horasfecha = currentTime.getFullYear();
	var fechadosdigitos = $("#filtrourte").text();
	var urte ="";
	urte=fechadosdigitos;
	fechadosdigitos = fechadosdigitos.substring(2,4);
	dom.filtrohoras();
	dom.guardarfecha();
	dom.cambiarfecha();
	
	websql.trabajos();
});
