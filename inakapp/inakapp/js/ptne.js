$(document).delegate('#ptne', 'pagecreate', function() {
	var dom = {
		"guardartrabajo" : function() {
			$("#guardartrabajo").on("tap", function() {
				alias = $("#ptn_alias").val();
				titulo = $("#ptn_titulo").val();
				promotor = $("#ptn_promotor").val();
				cliente = $("#ptn_cliente").val();
				ubicacion = $("#ptn_ubicacion").val();
				arquitecto = $("#ptn_arquitecto").val();
				asignadoa = $("#ptn_asignadoa").val();
				calculoestructura = $("#ptn_calculoestructura").val();
				proyectocompleto = $("#ptn_proyectocompleto").val();
				ccespecial = $("#ptn_ccespecial").val();
				otros = $("#ptn_otros").val();
				websql.consultarultimocodigo();
			});
		},
	};
	var websql = {
		"consultarultimocodigo" : function(){
			$.ajax({
				url : 'pt_trabajos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestatrabajos) {
					for (i in respuestatrabajos){
						if (respuestatrabajos[i].codigo[0]== "E"){
							var codigofloat = parseFloat(respuestatrabajos[i].codigo.substring(1,4));
							if(ultimocodigo<codigofloat){
								ultimocodigo = parseFloat(respuestatrabajos[i].codigo.substring(1,4));
							}
						}	
					}
					websql.enviartrabajo();
				}
			});
		},
		"enviartrabajo" : function() {
			codigo = ultimocodigo + 1;
			year = d.getUTCFullYear().toString().substring(2,4);
			codigocompleto = "E" + codigo + "-" + year;
			var mes = d.getMonth();
			mes = mes + 1;
			mes = String(mes);
			if (mes.length==1){
				mes = "0" + mes;
			}
			fechaini = d.getUTCFullYear()+ "-"+ mes+"-"+d.getDate();
			$.ajax({
				url : 'server/ptn_enviar.php',
				type : 'post',
				//dataType: 'json',
				data : {
					"codigo" : codigocompleto,
					"alias" : alias,
					"titulo" : titulo,
					"promotor" : promotor,
					"cliente" : cliente,
					"ubicacion" : ubicacion,
					"arquitecto" : arquitecto,
					"asignadoa" : asignadoa,
					"fechaini" : fechaini,
					"calculoestructura": calculoestructura,
					"proyectocompleto": proyectocompleto,
					"ccespecial": ccespecial,
					"otros": otros,
				},

				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(codigo, alias, titulo, promotor, cliente, ubicacion, arquitecto, asignadoa, calculoestructura) {
					console.log("trabajo nuevo guardado......................");
					$('.trabajoguardado').fadeIn(200).delay(1500).fadeOut(200);
					$("#ptn_alias").val("");
					$("#ptn_titulo").val("");
					$("#ptn_promotor").val("");
					$("#ptn_cliente").val("");
					$("#ptn_ubicacion").val("");
					$("#ptn_arquitecto").val("");
					$("#ptn_asignadoa").val("");
					$("#ptn_calculoestructura").val("");
					$("#ptn_proyectocompleto").val("");
					$("#ptn_ccespecial").val("");
					$("#ptn_otros").val("");
				}
			});
		},
		
		
	};

	var ultimocodigo = 0;
	var codigo;
	var codigocompleto;
	var alias;
	var titulo;
	var promotor;
	var cliente;
	var ubicacion;
	var arquitecto;
	var asignadoa;
	var calculoestructura;
	var proyectocompleto;
	var ccespecial;
	var otros;
	var year;
	var d = new Date();
	var fechaini = new Date;
	dom.guardartrabajo();
	

});
