$(document).delegate('#ptv', 'pagecreate', function() {
	var dom = {
		"trabajos" : function(arraytrabajos, arraytrabajossub) {
			var fila = "filaimpar";
			for (i in arraytrabajos) {
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				if (arraytrabajos[i].codigo[0] != "A") {
					if (arraytrabajos[i].comentarios == "") {
						arraytrabajos[i].comentarios = "...";
					};
					var celdacodigo = "<td class=\"textoizda\">" + arraytrabajos[i].codigo + "</td>";
					var celdaalias = "<td class=\"textoizda\">" + arraytrabajos[i].alias + "</td>";
					var celdatitulo = "<td class=\"textoizda\">" + arraytrabajos[i].titulo + "</td>";
					var celdaubicacion = "<td class=\"textoizda\">" + arraytrabajos[i].ubicacion + "</td>";
					var celdapromotor = "<td class=\"textoizda\">" + arraytrabajos[i].promotor + "</td>";
					var celdacliente = "<td class=\"textoizda\">" + arraytrabajos[i].cliente + "</td>";
					var celdaarquitecto = "<td class=\"textoizda\">" + arraytrabajos[i].arquitecto + "</td>";
					var celdaasignadoa = "<td class=\"textoizda\">" + arraytrabajos[i].asignadoa + "</td>";
					var fechainicio = "<td class=\"textoizda\">" + arraytrabajos[i].fechainicio + "</td>";
					var fechafin = "<td class=\"textoizda\">" + arraytrabajos[i].fechafin + "</td>";
					var visado = "<td class=\"textoizda\">" + arraytrabajos[i].visado + "</td>";
					var calculoestructura = "<td class=\"textoizda\">" + arraytrabajos[i].calculoestructura + "</td>";
					var proyectocompleto = "<td class=\"textoizda\">" + arraytrabajos[i].proyectocompleto + "</td>";
					var ccespecial = "<td class=\"textoizda\">" + arraytrabajos[i].ccespecial + "</td>";
					var celdaotros = "<td class=\"textoizda\">" + arraytrabajos[i].informe + "</td>";
					var celdacomentarios = "<td class=\"textoizda\"><a id=\"wcomentarios" + arraytrabajos[i].id + "\" href=\"#popupcomentarios\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].comentarios + "</a></td>";
					
					var celdas = celdacodigo + celdaalias + celdatitulo + celdaubicacion + celdapromotor + celdacliente + celdaarquitecto + celdaasignadoa + fechainicio + fechafin + visado + calculoestructura + proyectocompleto + ccespecial + celdaotros + celdacomentarios;
					$("#pttable").append("<tr class=" + fila + ">" + celdas + "</tr>");
					for (j in arraytrabajossub) {
						if (arraytrabajos[i].id == arraytrabajossub[j].idw) {
							
							var celdacodigosub = "<td class=\"textoizda\">" + arraytrabajossub[j].codigows + "</td>";
							var celdaaliassub = "<td class=\"textoizda\">" + arraytrabajossub[j].aliasws + "</td>";
							var celdadescripcionsub = "<td class=\"textoizda\" colspan=\"5\">" + arraytrabajossub[j].descripcionws + "</td>";
							var celdaasignadoasub = "<td class=\"textoizda\">" + arraytrabajossub[j].asignadoa + "</td>";
							var celdafechainiciosub = "<td class=\"textoizda\">" + arraytrabajossub[j].fechainicio + "</td>";
							var celdafechafinsub = "<td class=\"textoizda\">" + arraytrabajossub[j].fechafin + "</td>";
							var celdavisadosub = "<td class=\"textoizda\">" + arraytrabajossub[j].visado + "</td>";
							var celdacalculoestructurasub = "<td class=\"textoizda\">" + arraytrabajossub[j].calculoestructura + "</td>";
							var celdaproyectocompletosub = "<td class=\"textoizda\">" + arraytrabajossub[j].proyectocompleto + "</td>";
							var celdaccespecialsub = "<td class=\"textoizda\">" + arraytrabajossub[j].ccespecial + "</td>";
							var celdaotrossub = "<td class=\"textoizda\">" + arraytrabajossub[j].otros + "</td>";
							var celdassub = celdacodigosub + celdaaliassub + celdadescripcionsub + celdaasignadoasub + celdafechainiciosub + celdafechafinsub + celdavisadosub + celdacalculoestructurasub + celdaproyectocompletosub + celdaccespecialsub + celdaotrossub;
							$("#pttable").append("<tr class=" + fila + ">" + celdassub + "</tr>");
						}

					}

				}
				$("#wcomentarios" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wcomentarios", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
			}
		},
		"guardarcomentarios" : function() {
			$("#popupcomentariosboton").on("tap", function() {
				var campo = "COMENTARIOS";
				var modcomentariosval = $("#modcomentarios").val();
				$("#modcomentarios").val("");
				websql.enviarmod(campo, modcomentariosval);
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
					window.location.href = "ptv.php";
				}
			});
		},
	};

	var pt_arraytrabajos;
	var pt_arraytrabajossub;
	dom.guardarcomentarios();
	websql.trabajos();

});
