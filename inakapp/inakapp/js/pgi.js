$(document).delegate('#pgi', 'pagecreate', function() {
	var dom = {
		"gastosindirectos" : function(p_arraygi) {
			var fila = "filaimpar";
			for (i in p_arraygi) {
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				if (p_arraygi[i].coefgi == "") {
						p_arraygi[i].coefgi = "...";
				};
				var celdaalias = "<td class=\"textoizda\">" + p_arraygi[i].urte + "</td>";
				var celdagastosindirectos = "<td class=\"textoizda\"><a id=\"cgi" + p_arraygi[i].id + "\" href=\"#popupgastosindirectos\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + p_arraygi[i].coefgi + "</a></td>";
				var celdas = celdaalias + celdagastosindirectos;
				$("#pttablegi").append("<tr class=" + fila + ">" + celdas + "</tr>");	
				$("#cgi"+ p_arraygi[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("cgi", "");
					tabla = "tb_gastosindirectos";
				})
				}
			
			},	
		"guardarcoefgi" : function() {
			$("#popupgastosindirectosboton").on("tap", function() {
				var campo = "COEF_GI";
				var modgival = $("#modgi").val();
				websql.enviarmod(campo, modgival);
			});
		}
		
	};
	var websql = {

		"gastosindirectos" : function() {
			$.ajax({
				url : 'server/pgi.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					p_arraygi= respuesta;
					dom.gastosindirectos(p_arraygi);
					
				}
			});
		},
		
		"enviarmod" : function(campo, modval) {
			$.ajax({
				url : 'server/pgi_enviarmod.php',
				type : 'post',
				datatype : 'json',
				data : {
					"modid" : modid,
					"modval" : modval,
					"tabla" : tabla,
					"campo": campo,
				},
				success : function() {
					window.location.href = "pgi.php";
				}
			});
		},
		
	};

	var p_arraygi;	
	var tabla;
	var modid;
	dom.guardarcoefgi();
	websql.gastosindirectos();

});
