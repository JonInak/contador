$(document).delegate('#pcalcrear', 'pagecreate', function() {
	var dom = {
		"tablames" : function() {
			$("#tablasmeses").append("<div id=" + mes + "> \
						<table id='phtablehorasresumen'> \
						<tr> \
							<th colspan = '42' id='tablecodigo'>" + mes + "MES - AÑO </th> \
							<th colspan = '3'> H MES </th> \
							<th colspan = '3'> horas </th> \
						</tr> \
						<tr> \
							<th> 1 </th> \
							<th> 2 </th> \
							<th> 3 </th> \
							<th> 4 </th> \
							<th> 5 </th> \
							<th> 6 </th> \
							<th> 7 </th> \
							<th> 8 </th> \
							<th> 9 </th> \
							<th> 10 </th> \
							<th> 11 </th> \
							<th> 12 </th> \
							<th> 13 </th> \
							<th> 14 </th> \
							<th> 15 </th> \
							<th>  </th> \
						</tr> \
						</table> \
					<div> 					");
			$("#" + mes + " table").append("<tr> \
							<td colspan='3' id='" + mes + dia + "'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
						</tr>			");
		},

		
		"horasimputadas" : function() {
			$("#10 table").append("<tr> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
							<td colspan='3'>8:00</td> \
						</tr>			");

		},
	};
	var procesos = {
		"fecha" : function() {
			var mesdosdigitos;
			var diadosdigitos;
			mesdosdigitos = parseInt(mes);
			diadosdigitos = parseInt(dia);
			mesdosdigitos = mesdosdigitos.toString();
			diadosdigitos = diadosdigitos.toString();
			if (mesdosdigitos.length== 1){
				mesdosdigitos = "0" + mesdosdigitos;
			}
			if (diadosdigitos.length == 1){
				diadosdigitos = "0" + diadosdigitos;
			}
			fecha = urte + "-" + mesdosdigitos + "-" + diadosdigitos;
			
		},
		"diasemana" : function(){
			diasemana = diasemana.toString();
			switch(diasemana){
				case "0":
					diasemanastring = "D";		
				break;
				case "1":
					diasemanastring = "L";		
				break;
				case "2":
					diasemanastring = "M";		
				break;
				case "3":
					diasemanastring = "X";		
				break;
				case "4":
					diasemanastring = "J";		
				break;
				case "5":
					diasemanastring = "V";		
				break;
				case "6":
					diasemanastring = "S";		
				break;
			};
		},
		"horas" : function(){
			switch(diasemanastring){
				case "D":
					horas = "0";		
				break;
				case "L":
					horas = "8.25";		
				break;
				case "M":
					horas = "8.25";		
				break;
				case "X":
					horas = "8.25";		
				break;
				case "J":
					horas = "8.25";		
				break;
				case "V":
					horas = "7";		
				break;
				case "S":
					horas = "0";		
				break;
			};
		},
		"tipo" : function(){
			switch(diasemanastring){
				case "D":
					tipo = "D";		
				break;
				case "L":
					tipo = "N";		
				break;
				case "M":
					tipo = "N";		
				break;
				case "X":
					tipo = "N";		
				break;
				case "J":
					tipo = "N";		
				break;
				case "V":
					tipo = "N";		
				break;
				case "S":
					tipo = "S";		
				break;
			};
		},
		"usuario" : function(){
			usuario = "GENERAL"
		},
	};
	var websql = {
		
		"enviarcalendario" : function() {
			$.ajax({
				url : 'server/pcal_enviar.php',
				type : 'post',
				data : {
					"fecha" : fecha,
					"horas" : horas,
					"tipo" : tipo,
					"diasemanastring" : diasemanastring,
					"usuario" : usuario,
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(fecha, horas, tipo, diasemana) {
				}
			});
		}
	};


	var a = 12;
	var mes;
	var dia;
	var diasmes;
	var urte;
	urte = 2022;
	var b;
	var fecha;
	var horas;
	var tipo;
	var diasemana;
	var diasemanastring;
	var usuario;
	procesos.usuario();
	console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
	console.log(urte);
	horas = 0;
	diasemana = new Date(2022 || new Date().getFullYear(), 0, 1).getDay();
	while (a > 0){
		b = 0;
		mes = a;
		a = a - 1;
		diasmes = new Date(urte || new Date().getFullYear(), mes, 0).getDate();
		while (b<diasmes){
			b = b + 1;
			dia = b;
			diasemana = new Date(urte, mes-1, dia).getDay();
			procesos.fecha();
			procesos.diasemana();
			procesos.horas();
			procesos.tipo();
			
			//var d = new Date();
			console.log(diasemana);
			fecha = urte + "-" + parseInt(mes) + "-" + dia;
			console.log(fecha);
			console.log(diasemanastring + "__" + tipo + "__" + horas);
			websql.enviarcalendario();
			
		};
	};
	
	
});
	

