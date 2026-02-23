$(document).delegate('#pte', 'pagecreate', function() {
	var dom = {
		"trabajos" : function(arraytrabajos, arraytrabajossub) {
			var fila = "filaimpar";
			for (i in arraytrabajos) {
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				if (arraytrabajos[i].codigo[0] == "E") {
					
					var celdacodigo = "<td class=\"textoizda\"><a id=\"" + arraytrabajos[i].codigo +  " data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].codigo + "</a></td>";
					var celdaalias = "<td class=\"textoizda\">" + arraytrabajos[i].alias + "</td>";
					var celdacliente = "<td class=\"textoizda\"><a id=\"wcliente" + arraytrabajos[i].id + "\" href=\"#popupcliente\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].cliente + "</a></td>";
					var fechainicio = "<td class=\"textoizda\">" + arraytrabajos[i].fechainicio + "</td>";
					var celdas = celdacodigo + celdaalias    + celdacliente   + fechainicio    ;
					$("#pttable").append("<tr class=" + fila + ">" + celdas + "</tr>");		
				}
				$("#wcliente" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wcliente", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				
			}
		},

		"guardarws" : function() {
			$("#popupwsmenuboton").on("tap", function(event) {

				wsalias = $("#wsalias").val();
				wsdescripcion = $("#wsdescripcion").val();
				wsasignadoa = $("#wsasignadoa").val();
				wscalculoestructura = $("#wscalculoestructura").val();
				wsproyectocompleto = $("#wsproyectocompleto").val();
				wsccespecial = $("#wsccespecial").val();
				wsotros = $("#wsotros").val();
				wscomentarios = $("#wscomentarios").val();
				$("#wsalias").val("");
				$("#wsdescripcion").val("");
				$("#wsasignadoa").val("");
				$("#wscalculoestructura").val("");
				$("#wsproyectocompleto").val("");
				$("#wsccespecial").val("");
				$("#wsotros").val("");
				$("#wscomentarios").val("");
				websql.recogerdatosw();

			});
		},
		
		"guardarcliente" : function() {
			$("#popupclienteboton").on("tap", function() {
				var campo = "CLIENTE";
				var modclienteval = $("#modcliente").val();
				$("#modcliente").val("");
				websql.enviarmod(campo, modclienteval);
			});
		},
		
		
		
		
		
		
	};
	var websql = {

		"trabajos" : function() {
			$.ajax({
				url : 'server/pt_trabajos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					websql.trabajossub(respuesta);
					pt_arraytrabajos = respuesta;
					console.log(respuesta);
					
				}
			});
		},
		"trabajossub" : function(arraytrabajos) {
			$.ajax({
				url : 'server/pt_trabajossub.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestasub) {
					dom.trabajos(arraytrabajos, respuestasub);
					pt_arraytrabajossub = respuestasub;

				}
			});
		},
		"enviarws" : function() {
			console.log(wid);
			console.log(wsalias);
			$.ajax({
				url : 'server/pt_enviarws.php',
				type : 'post',
				datatype : 'json',
				data : {
					"wsalias" : wsalias,
					"wsdescripcion" : wsdescripcion,
					"wsasignadoa" : wsasignadoa,
					"wscalculoestructura" : wscalculoestructura,
					"wsproyectocompleto" : wsproyectocompleto,
					"wsccespecial" : wsccespecial,
					"wsotros" : wsotros,
					"wscomentarios" : wscomentarios,
					"wid" : wid,
					"wcod" : wcod,
					"walias" : walias,
					"wscod" : wscod,
					"fechaini" : fechaini,
				},
				success : function() {
					window.location.href = "pt.php";
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
					window.location.href = "pt.php";
				}
			});
		},
		"recogerdatosw" : function() {
			$.ajax({
				url : 'server/pt_trabajos.php',
				type : 'post',
				dataType : 'json',
				success : function(response) {
					console.log("RECOGER TRABAJO................................");
					var wscodigoultimo;
					var wscodigonuevo = 1;
					for (j in pt_arraytrabajossub) {
						if (pt_arraytrabajossub[j].codigow == wcod) {
							wscodigoultimo = pt_arraytrabajossub[j].codigows;
							wscodigoultimo = wscodigoultimo.substring(wscodigoultimo.lastIndexOf("/") + 1, wscodigoultimo.length);
							if (wscodigonuevo <= parseInt(wscodigoultimo)) {
								wscodigonuevo = parseInt(wscodigoultimo) + 1;
							}
						}
					}
					for (i in response) {
						if (response[i].codigo == wcod) {
							walias = response[i].alias;
							wid = response[i].id;
							wscod = wcod + "/" + wscodigonuevo;
						}
					}
					var mes = d.getMonth();
					mes = mes + 1;
					mes = String(mes);
					if (mes.length == 1) {
						mes = "0" + mes;
					}
					fechaini = d.getUTCFullYear() + "-" + mes + "-" + d.getDate();
					websql.enviarws();
				}
			});
		},
	};

	var wsalias;
	
	var wid;
	var wcod;
	var walias;
	var wscod;
	var d = new Date();
	var fechaini;
	var pt_arraytrabajos;
	var pt_arraytrabajossub;
	var tabla;
	var modid;
	
	
	dom.guardarws();

	
	dom.guardarcliente();
	
	websql.trabajos();

});
