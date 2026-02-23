$(document).delegate('#pstdelinratios', 'pagecreate', function() {
	var dom = {
		
		"filaviviendas" : function(tipo) {
			var filaviviendas;
			filaviviendas = "";
			var filamedias;
			filamedias = "";
			var filasumas;
			filasumas = ""

			for (i in pst_arraytrabajostiposviviendas){
				if(tipo==pst_arraytrabajostiposviviendas[i].tipo){
					filaviviendas = filaviviendas + "<th class='black' colspan="+4+">"+pst_arraytrabajostiposviviendas[i].viviendas.substring(2, pst_arraytrabajostiposviviendas[i].length)+"</th>"				
					filamedias = filamedias + "<th class='black' >Horas (media)</th><th class='black'>σ Horas (desviación)</th><th class='black'>%      (media)</th><th class='black'>σ % (desviación)</th>"
					if (parseFloat(pst_arraytrabajostiposviviendas[i].sumadesv)>0){
						filasumas = filasumas + "<th class='black' >"+parseFloat(pst_arraytrabajostiposviviendas[i].sumamedia)+"</th><th class='black' >"+parseFloat(pst_arraytrabajostiposviviendas[i].sumadesv)+"</th class='black' ><th class='black' >100</th><th class='black' >.</th>"
					}else{
						filasumas = filasumas + "<th class='black' >.</th><th class='black' >.</th class='black' ><th class='black' >.</th><th class='black' >.</th>"
					}
					}
			}
			$("#psttabledelinratios").append("<tr><th>.</th></tr>");
			$("#psttabledelinratios").append("<tr><th class='black' colspan="+1+1+pst_arraytrabajosviviendas.length*4+">"+pst_arraytrabajostipos[k]+"</th></tr>");
			$("#psttabledelinratios").append("<tr><th class='black' ><th>"+filaviviendas+"</tr>");
			$("#psttabledelinratios").append("<tr><th class='black' >FASE<th>"+filamedias+"</tr>");					
			dom.filasratios(tipo,filasumas);			
		},
		
		"tablastipo" : function() {
			for (k in pst_arraytrabajostipos){		
				dom.filaviviendas(pst_arraytrabajostipos[k]);
			}				
		},
		"filasratios" : function(tipo, filasumas) {
		
			var filasratios;					
			for (i in pst_arrayfasesdelin){
				filasratios=""
				filasratios = "<th class='grisgrande' >"+pst_arrayfasesdelin[i].replace("Del-","")+"</th><th></th>";
				for (j in pst_arraytrabajosviviendas){					
					for (k in pst_arrayhorasratios){
						if((tipo==pst_arrayhorasratios[k].tipo)&& (pst_arrayfasesdelin[i]==pst_arrayhorasratios[k].fase)&& (pst_arraytrabajosviviendas[j]==pst_arrayhorasratios[k].viviendas)){
							if (pst_arrayhorasratios[k].numtrabajos>1){
							if(pst_arrayhorasratios[k].media>0){
									filasratios = filasratios + "<th class='gris'>"+Math.round(pst_arrayhorasratios[k].sumahorasfase/pst_arrayhorasratios[k].numtrabajos*100)/100+"</th><th class='gris'>"+pst_arrayhorasratios[k].desv+"</th><th class='gris'>"+pst_arrayhorasratios[k].porcentajemedia+"</th><th class='gris'>"+Math.round((pst_arrayhorasratios[k].desv/pst_arrayhorasratios[k].media)*100*100)/100+"</th>";
								}else{
									filasratios = filasratios + "<th class='gris'>"+Math.round(pst_arrayhorasratios[k].sumahorasfase/pst_arrayhorasratios[k].numtrabajos*100)/100+"</th><th class='gris'>"+pst_arrayhorasratios[k].desv+"</th><th class='gris'>"+pst_arrayhorasratios[k].porcentajemedia+"</th><th class='gris'>.</th>";
								}
							 } else{
								 if (pst_arrayhorasratios[k].numtrabajos==1){
									 filasratios = filasratios + "<th class='gris'>"+Math.round(pst_arrayhorasratios[k].sumahorasfase/pst_arrayhorasratios[k].numtrabajos*100)/100+"</th><th class='gris'>.</th><th class='gris'>"+pst_arrayhorasratios[k].porcentajemedia+"</th><th class='gris'>.</th>";
								
								 }else{
									 filasratios = filasratios + "<th class='gris'>.</th><th class='gris'>.</th><th class='gris'>.</th><th class='gris'>.</th>";
								 }
							}	
							
										
						}
							
					}
				}
				$("#psttabledelinratios").append("<tr>>"+filasratios+"</tr>");
			}
			$("#psttabledelinratios").append("<tr><th class='black' >TOTAL<th>"+filasumas+"</tr>"	);		
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
					
				}
			});
		},	
		"horas" : function() {
			$.ajax({
				url : 'server/pstdelin_horas.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(responsehoras) {
					pst_arrayhoras = responsehoras
					datos.sumarhoras();
					dom.tablastipo();
					
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
					pst_arraytrabajosviviendas[n] = pst_arraytrabajos[i].viviendas.replace("<","&lt")
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
				pst_arraytrabajosviviendas[i] = pst_arraytrabajosviviendas[i];
			}
			datos.trabajosdelin();
		},
		"trabajosdelin" : function() {
			var n;		
			n=-1;
			for (i in pst_arraytrabajos) {
				if ((pst_arraytrabajos[i].tipo !="")&&(pst_arraytrabajos[i].viviendas !="") ){	
					n = n +1;
					pst_arraytrabajosdelin[n] = pst_arraytrabajos[i]
				}					
			}
			for (j in pst_arraytrabajosdelin){
				pst_arraytrabajosdelin[j].viviendas;
			}
				websql.fases();
				datos.trabajostiposviviendas();
		},
		"fasesdelin" : function() {
			var n;
			var verificar;			
			n=-1;

			for (i in pst_arrayfases) {	
				verificar = "NO";
				if (pst_arrayfases[i].substring(0, 4)== "Del-"){
					for (j in pst_arrayfasesdelin) {
						if (pst_arrayfases == pst_arrayfasesdelin[j]){
							verificar = "SI"
						}					
					}			
					if ((verificar == "NO") && (pst_arrayfases[i].substring(0, 4)== "Del-"))  {
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
							pst_arraytrabajossumahorasfases[n]= {alias: pst_arraytrabajos[i].alias,codigo: pst_arraytrabajos[i].codigo,fase: pst_arrayfasesdelin[k], horas: sumahoras,tipo:pst_arraytrabajos[i].tipo,viviendas:pst_arraytrabajos[i].viviendas.replace("<","&lt")};
							sumahorastrabajo = sumahorastrabajo + sumahoras;
							sumahoras = 0;
					};
					
					
			}
			pst_arraytrabajos[i].sumahorastrabajo=sumahorastrabajo
			sumahorastrabajo = 0;
			}
			datos.sumarhorasfase();
			
		},
		"sumarhorasfase" : function() {

			var n;
			
			n = 0;
			var desv;
			desv = 0;	
			
			for (i in pst_arraytrabajostiposviviendas){	
				for (m in pst_arrayfasesdelin){
						n = n+1;
						pst_arrayhorasratios[n] = {tipo: pst_arraytrabajostiposviviendas[i].tipo, viviendas: pst_arraytrabajostiposviviendas[i].viviendas,fase:pst_arrayfasesdelin[m],sumahorasfase:0,numtrabajos:pst_arraytrabajostiposviviendas[i].numero, desv:0,media:0, sumamedia:0, sumadesv:0}
						for (k in pst_arraytrabajossumahorasfases){			
							if((pst_arrayhorasratios[n].tipo==pst_arraytrabajossumahorasfases[k].tipo) && (pst_arrayhorasratios[n].viviendas==pst_arraytrabajossumahorasfases[k].viviendas) && (pst_arrayhorasratios[n].fase==pst_arraytrabajossumahorasfases[k].fase)){
								pst_arrayhorasratios[n].sumahorasfase = pst_arrayhorasratios[n].sumahorasfase + pst_arraytrabajossumahorasfases[k].horas;
								
							}
						}
						
					}
			}	
			
			
			for (n in pst_arrayhorasratios){	
				desv = 0;			
				for (k in pst_arraytrabajossumahorasfases){			
					if((pst_arrayhorasratios[n].tipo==pst_arraytrabajossumahorasfases[k].tipo) && (pst_arrayhorasratios[n].viviendas==pst_arraytrabajossumahorasfases[k].viviendas) && (pst_arrayhorasratios[n].fase==pst_arraytrabajossumahorasfases[k].fase)){
						desv = desv + (pst_arraytrabajossumahorasfases[k].horas - pst_arrayhorasratios[n].sumahorasfase/pst_arrayhorasratios[n].numtrabajos)*(pst_arraytrabajossumahorasfases[k].horas - pst_arrayhorasratios[n].sumahorasfase/pst_arrayhorasratios[n].numtrabajos);
						
					}
				}
				desv = desv / (pst_arrayhorasratios[n].numtrabajos-1);
				desv = Math.sqrt(desv)
				pst_arrayhorasratios[n].desv = Math.round(desv*100)/100;
				pst_arrayhorasratios[n].media = pst_arrayhorasratios[n].media + pst_arrayhorasratios[n].sumahorasfase/pst_arrayhorasratios[n].numtrabajos;		
				
			}

			for (n in pst_arrayhorasratios){	
				for (i in pst_arrayhorasratios){	
					if((pst_arrayhorasratios[n].tipo==pst_arrayhorasratios[i].tipo) && (pst_arrayhorasratios[n].viviendas==pst_arrayhorasratios[i].viviendas)){
						pst_arrayhorasratios[n].sumamedia = pst_arrayhorasratios[n].sumamedia + pst_arrayhorasratios[i].media;	
						pst_arrayhorasratios[n].sumadesv = pst_arrayhorasratios[n].sumadesv + pst_arrayhorasratios[i].desv;	
					}
				}
				pst_arrayhorasratios[n].sumamedia  =   Math.round(pst_arrayhorasratios[n].sumamedia*100)/100;
				pst_arrayhorasratios[n].porcentajemedia  =   Math.round((pst_arrayhorasratios[n].media / pst_arrayhorasratios[n].sumamedia*100)*100)/100;
				
			}		
			for (j in pst_arraytrabajostiposviviendas){	
				for (i in pst_arrayhorasratios){
					if((pst_arraytrabajostiposviviendas[j].tipo==pst_arrayhorasratios[i].tipo) && (pst_arraytrabajostiposviviendas[j].viviendas==pst_arrayhorasratios[i].viviendas)){			
						pst_arraytrabajostiposviviendas[j].sumamedia = Math.round((pst_arrayhorasratios[i].sumamedia)*100)/100;			
						pst_arraytrabajostiposviviendas[j].sumadesv = Math.round((pst_arrayhorasratios[i].sumadesv)*100)/100;			
					}
				}
			}
		},
		"trabajostiposviviendas" : function() {
			var n;
			n=-1
			for (i in pst_arraytrabajostipos){
				for (j in pst_arraytrabajosviviendas) {
					n = n +1
					pst_arraytrabajostiposviviendas[n] = {tipo:pst_arraytrabajostipos[i] , viviendas:pst_arraytrabajosviviendas[j], numero:0, sumamedia:0, porcentajemedia:0 };
					
				}
			}
			
			for(k in pst_arraytrabajostiposviviendas){
				for (m in pst_arraytrabajosdelin){
					if((pst_arraytrabajostiposviviendas[k].tipo==pst_arraytrabajosdelin[m].tipo)&&(pst_arraytrabajostiposviviendas[k].viviendas==pst_arraytrabajosdelin[m].viviendas.replace("<","&lt"))){
						pst_arraytrabajostiposviviendas[k].numero= pst_arraytrabajostiposviviendas[k].numero +1
					}
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
	pst_arrayhoras = []
	pst_arraytrabajos = [];
	pst_arraytrabajosdelin = [];
	pst_arraytrabajostipos = [0];
	pst_arraytrabajosviviendas = [0];
	pst_arraytrabajostiposviviendas = [];
	pst_arrayfases = [];
	pst_arrayfasesdelin = [0];
	pst_arraytrabajossumahorasfases = [0];
	pst_arrayhorasratios = [];
	//pst_arraytrabajostiposviviendasnumproy = [];
	

	websql.trabajos();
	

	
	
	
	
	
});
