$(document).delegate('#phss', 'pagecreate', function() {
	
	var dom = {
		"horasseguimiento": function(arrayfacturas){
			var fila = "filaimpar";

			for (i in arrayfacturas){
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
		
				var celdafecha = "<td class=\"textoizda\">" + arrayfacturas[i].fecha+ "</td>";
				var celdaproyecto = "<td class=\"textoizda\">" + arrayfacturas[i].proyecto+ "</td>";
				var celdafase = "<td class=\"textoizda\">" + arrayfacturas[i].fase+ "</td>";
				var celdadetalle = "<td class=\"textoizda\">" + arrayfacturas[i].detalle+ "</td>";
				var celdahoras = "<td class=\"textoizda\">" + arrayfacturas[i].horas+ "</td>";
				var celdatrabajador = "<td class=\"textoizda\">" + arrayfacturas[i].trabajador+ "</td>";
				var celdabolsa = "<td class=\"textoizda\">" + arrayfacturas[i].bolsa+ "</td>";
				
				var celdas = celdafecha + celdaproyecto + celdafase + celdadetalle + celdahoras + celdatrabajador + celdabolsa;
				
				$("#pttablehorasseguimiento").append("<tr class=" + fila + ">" + celdas + "</tr>");
				
			}
			
			
		},
		"filtrohoras": function(){
			$("#filtrourte span").text(horasfecha);
			$("#modfecha").val(horasfecha);
		},
		"guardarfecha" : function() {
			$("#botonurte").on("tap", function() {
				
				horasfecha = $("#modfecha").val();
				console.log(horasfecha);
				$("#pttablehorasseguimiento .filapar").remove();
				$("#pttablehorasseguimiento .filaimpar").remove();
				websql.horasseguimiento();
				dom.filtrohoras();
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
		"horasseguimiento" : function() {
			$.ajax({
				url : 'server/phss_horasurte.php',
				type : 'post',
				dataType : "json",
				data : {
					"horasfecha" : horasfecha
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					console.log(respuesta);
					pt_arrayhoras = respuesta;
					dom.horasseguimiento(respuesta);
					
					
				}
			});
		},
		
		
	};
	
	var pt_arrayhoras;
	var currentTime = new Date()
	var horasfecha = currentTime.getFullYear();
	websql.horasseguimiento();
	dom.filtrohoras();
	dom.guardarfecha();
	dom.cambiarfecha();
	
});
