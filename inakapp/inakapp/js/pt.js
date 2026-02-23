$(document).delegate('#pt', 'pagecreate', function() {
	var dom = {
		"trabajos" : function(arraytrabajos, arraytrabajossub) {
			var fila = "filaimpar";
			for (i in arraytrabajos) {
				if (fila == "filapar") {
					fila = "filaimpar";
				} else {
					fila = "filapar";
				}
				if (arraytrabajos[i].codigo[0] != "A" && arraytrabajos[i].codigo[0] != "E") {
					if (arraytrabajos[i].titulo == "") {
						arraytrabajos[i].titulo = "...";
					};
					if (arraytrabajos[i].asignadoa == "") {
						arraytrabajos[i].asignadoa = "...";
					};
					if (arraytrabajos[i].visado == "") {
						arraytrabajos[i].visado = "...";
					};
					if (arraytrabajos[i].calculoestructura == "") {
						arraytrabajos[i].calculoestructura = "...";
					};
					if (arraytrabajos[i].proyectocompleto == "") {
						arraytrabajos[i].proyectocompleto = "...";
					};
					if (arraytrabajos[i].ccespecial == "") {
						arraytrabajos[i].ccespecial = "...";
					};
					if (arraytrabajos[i].informe == "") {
						arraytrabajos[i].informe = "...";
					};
					if (arraytrabajos[i].comentarios == "") {
						arraytrabajos[i].comentarios = "...";
					};
					var celdacodigo = "<td class=\"textoizda\"><a id=\"" + arraytrabajos[i].codigo + "\" href=\"#popupws\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].codigo + "</a></td>";
					var celdaalias = "<td class=\"textoizda\">" + arraytrabajos[i].alias + "</td>";
					var celdatitulo = "<td class=\"textoizda\"><a id=\"wtitulo" + arraytrabajos[i].id + "\" href=\"#popupwtitulocompleto\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].titulo + "</a></td>";
					var celdaubicacion = "<td class=\"textoizda\"><a id=\"wubicacion" + arraytrabajos[i].id + "\" href=\"#popupubicacion\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].ubicacion + "</a></td>";
					var celdapromotor = "<td class=\"textoizda\"><a id=\"wpromotor" + arraytrabajos[i].id + "\" href=\"#popuppromotor\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].promotor + "</a></td>";
					var celdacliente = "<td class=\"textoizda\"><a id=\"wcliente" + arraytrabajos[i].id + "\" href=\"#popupcliente\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].cliente + "</a></td>";
					var celdaarquitecto = "<td class=\"textoizda\"><a id=\"warquitecto" + arraytrabajos[i].id + "\" href=\"#popuparquitecto\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].arquitecto + "</a></td>";
					var celdaasignadoa = "<td class=\"textoizda\"><a id=\"wasignadoa" + arraytrabajos[i].id + "\" href=\"#popupasignadoa\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].asignadoa + "</a></td>";
					var fechainicio = "<td class=\"textoizda\">" + arraytrabajos[i].fechainicio + "</td>";
					var fechafin = "<td class=\"textoizda\">" + arraytrabajos[i].fechafin + "</td>";
					if (arraytrabajos[i].visado=="..."){
						var visado = "<td class=\"textoizda visadorojo\"><a id=\"wvisado" + arraytrabajos[i].id + "\" href=\"#popupvisado\" data-rel=\"popup\" data-position-to=\"window\" data-transition=\"pop\">" + arraytrabajos[i].visado + "</a></td>";
					}else{
						var visado = "<td class=\"textoizda\"><a id=\"wvisado" + arraytrabajos[i].id + "\" href=\"#popupvisado\" data-rel=\"popup\" data-position-to=\"window\" data-transition=\"pop\">" + arraytrabajos[i].visado + "</a></td>";
					}
					//var visado = "<td class=\"textoizda visadorojo\"><a id=\"wvisado" + arraytrabajos[i].id + "\" href=\"#popupvisado\" data-rel=\"popup\" data-position-to=\"window\" data-transition=\"pop\">" + arraytrabajos[i].visado + "</a></td>";
					var calculoestructura = "<td class=\"textoizda\"><a id=\"wcalculoestructura" + arraytrabajos[i].id + "\" href=\"#popupcalculoestructura\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].calculoestructura + "</a></td>";
					var proyectocompleto = "<td class=\"textoizda\"><a id=\"wproyectocompleto" + arraytrabajos[i].id + "\" href=\"#popupproyectocompleto\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].proyectocompleto + "</a></td>";
					var ccespecial = "<td class=\"textoizda\"><a id=\"wccespecial" + arraytrabajos[i].id + "\" href=\"#popupccespecial\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].ccespecial + "</a></td>";
					var celdaotros = "<td class=\"textoizda\"><a id=\"wotros" + arraytrabajos[i].id + "\" href=\"#popupotros\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].informe + "</a></td>";
					var celdacomentarios = "<td class=\"textoizda\"><a id=\"wcomentarios" + arraytrabajos[i].id + "\" href=\"#popupcomentarios\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajos[i].comentarios + "</a></td>";
					
					var celdas = celdacodigo + celdaalias + celdatitulo + celdaubicacion + celdapromotor + celdacliente + celdaarquitecto + celdaasignadoa + fechainicio + fechafin + visado + calculoestructura + proyectocompleto + ccespecial + celdaotros+ celdacomentarios;
					$("#pttable").append("<tr class=" + fila + ">" + celdas + "</tr>");
					for (j in arraytrabajossub) {
						if (arraytrabajos[i].id == arraytrabajossub[j].idw) {
							if (arraytrabajossub[j].descripcionws == "") {
								arraytrabajossub[j].descripcionws = "...";
							};
							if (arraytrabajossub[j].asignadoa  == "") {
								arraytrabajossub[j].asignadoa  = "...";
							};
							if (arraytrabajossub[j].visado  == "") {
								arraytrabajossub[j].visado  = "...";
							};
							if (arraytrabajossub[j].calculoestructura  == "") {
								arraytrabajossub[j].calculoestructura  = "...";
							};
							if (arraytrabajossub[j].proyectocompleto  == "") {
								arraytrabajossub[j].proyectocompleto  = "...";
							};
							if (arraytrabajossub[j].ccespecial  == "") {
								arraytrabajossub[j].ccespecial  = "...";
							};
							if (arraytrabajossub[j].otros  == "") {
								arraytrabajossub[j].otros  = "...";
							};
							if (arraytrabajossub[j].comentarios  == "") {
								arraytrabajossub[j].comentarios  = "...";
							};

							var celdacodigosub = "<td class=\"textoizda\">" + arraytrabajossub[j].codigows + "</td>";
							var celdaaliassub = "<td class=\"textoizda\">" + arraytrabajossub[j].aliasws + "</td>";
							var celdadescripcionsub = "<td class=\"textoizda\" colspan=\"5\"><a id=\"wstitulo" + arraytrabajossub[j].idws + "\" href=\"#popupwtitulocompleto\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].descripcionws + "</a></td>";
							var celdaasignadoasub = "<td class=\"textoizda\"><a id=\"wsasignadoa" + arraytrabajossub[j].idws + "\" href=\"#popupasignadoa\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].asignadoa + "</a></td>";
							var celdafechainiciosub = "<td class=\"textoizda\">" + arraytrabajossub[j].fechainicio + "</td>";
							var celdafechafinsub = "<td class=\"textoizda\">" + arraytrabajossub[j].fechafin + "</td>";
							var celdavisadosub = "<td class=\"textoizda\"><a id=\"wsvisado" + arraytrabajossub[j].idws + "\" href=\"#popupvisado\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].visado + "</a></td>";
							var celdacalculoestructurasub = "<td class=\"textoizda\"><a id=\"wscalculoestructura" + arraytrabajossub[j].idws + "\" href=\"#popupcalculoestructura\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].calculoestructura + "</a></td>";
							var celdaproyectocompletosub = "<td class=\"textoizda\"><a id=\"wsproyectocompleto" + arraytrabajossub[j].idws + "\" href=\"#popupproyectocompleto\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].proyectocompleto + "</a></td>";
							var celdaccespecialsub = "<td class=\"textoizda\"><a id=\"wsccespecial" + arraytrabajossub[j].idws + "\" href=\"#popupccespecial\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].ccespecial + "</a></td>";
							var celdaotrossub = "<td class=\"textoizda\"><a id=\"wsotros" + arraytrabajossub[j].idws + "\" href=\"#popupotros\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + arraytrabajossub[j].otros + "</a></td>";
							var celdassub = celdacodigosub + celdaaliassub + celdadescripcionsub + celdaasignadoasub + celdafechainiciosub + celdafechafinsub + celdavisadosub + celdacalculoestructurasub + celdaproyectocompletosub + celdaccespecialsub + celdaotrossub;
							$("#pttable").append("<tr class=" + fila + ">" + celdassub + "</tr>");

							$("#wstitulo" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wstitulo", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wsasignadoa" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wsasignadoa", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wsvisado" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wsvisado", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wscalculoestructura" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wscalculoestructura", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wsproyectocompleto" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wsproyectocompleto", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wsccespecial" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wsccespecial", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wsotros" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wsotros", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
							$("#wscomentarios" + arraytrabajossub[j].idws).on("tap", function(event) {
								modid = this.getAttribute("id");
								modid = modid.replace("__", "/").replace("wscomentarios", "");
								console.log(modid);
								tabla = "tb_trabajos_sub";
							});
						}

					}

				}

				$("#" + arraytrabajos[i].codigo).on("tap", function(event) {
					wcod = this.getAttribute("id");
					console.log(wcod);

				});
				$("#wtitulo" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wtitulo", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wubicacion" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wubicacion", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wpromotor" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wpromotor", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wcliente" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wcliente", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#warquitecto" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("warquitecto", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wasignadoa" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wasignadoa", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wvisado" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wvisado", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wcalculoestructura" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wcalculoestructura", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wproyectocompleto" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wproyectocompleto", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wccespecial" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wccespecial", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wotros" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wotros", "");
					console.log(modid);
					tabla = "tb_trabajos";
				});
				$("#wcomentarios" + arraytrabajos[i].id).on("tap", function(event) {
					modid = this.getAttribute("id");
					modid = modid.replace("__", "_").replace("wcomentarios", "");
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
		"guardartitulo" : function() {
			$("#popupwtitulocompletoboton").on("tap", function() {
				var campo = "TITULO_COMPLETO";
				var modtituloval = $("#modtitulo").val();
				$("#modtitulo").val("");
				websql.enviarmod(campo, modtituloval);
			});
		},
		"guardarubicacion" : function() {
			$("#popupubicacionboton").on("tap", function() {
				var campo = "UBICACION";
				var modubicacionval = $("#modubicacion").val();
				$("#modubicacion").val("");
				websql.enviarmod(campo, modubicacionval);
			});
		},
		"guardarpromotor" : function() {
			$("#popuppromotorboton").on("tap", function() {
				var campo = "PROMOTOR";
				var modpromotorval = $("#modpromotor").val();
				$("#modpromotor").val("");
				websql.enviarmod(campo, modpromotorval);
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
		"guardararquitecto" : function() {
			$("#popuparquitectoboton").on("tap", function() {
				var campo = "ARQUITECTO";
				var modarquitectoval = $("#modarquitecto").val();
				$("#modarquitecto").val("");
				websql.enviarmod(campo, modarquitectoval);
			});
		},
		"guardarasignadoa" : function() {
			var david = "";
			var mikel = "";
			var eros = "";
			var izaskun = "";
			var cristina = "";
			var esti = "";
			var marcos = "";
			var markel = "";
			var joanes = "";
			var jon = "";
			var oscar = "";
			var unai = "";
			var ainhoa = "";
			var jose = "";
			var andoni = "";
			var ziortza = "";
			var cris = "";
			var inigo = "";
			var ana = "";
			var alaitz = "";
			$("input[id='david']").bind( "change", function(event, ui) {
				if (david==""){
					david = "David, ";
				}else{
					david = "";
				}
			});
			$("input[id='mikel']").bind( "change", function(event, ui) {
				if (mikel==""){
					mikel = "Mikel, ";
				}else{
					mikel = "";
				}
			});
			$("input[id='eros']").bind( "change", function(event, ui) {
				if (eros==""){
					eros = "Eros, ";
				}else{
					eros = "";
				}
			});
			$("input[id='izaskun']").bind( "change", function(event, ui) {
				if (izaskun==""){
					izaskun = "Izaskun, ";
				}else{
					izaskun = "";
				}
			});
			$("input[id='cristina']").bind( "change", function(event, ui) {
				if (cristina==""){
					cristina = "Cristina, ";
				}else{
					cristina = "";
				}
			});
			$("input[id='esti']").bind( "change", function(event, ui) {
				if (esti==""){
					esti = "Esti, ";
				}else{
					esti = "";
				}
			});
			$("input[id='marcos']").bind( "change", function(event, ui) {
				if (marcos==""){
					marcos = "Marcos, ";
				}else{
					marcos = "";
				}
			});
			$("input[id='markel']").bind( "change", function(event, ui) {
				if (markel==""){
					markel = "Markel, ";
				}else{
					markel = "";
				}
			});
			$("input[id='joanes']").bind( "change", function(event, ui) {
				if (joanes==""){
					joanes = "Joanes, ";
				}else{
					joanes = "";
				}
				console.log(joanes);
			});
			$("input[id='jon']").bind( "change", function(event, ui) {
				if (jon==""){
					jon = "Jon, ";
				}else{
					jon = "";
				}
			});
			$("input[id='oscar']").bind( "change", function(event, ui) {
				if (oscar==""){
					oscar = "Oscar, ";
				}else{
					oscar = "";
				}
			});
			$("input[id='unai']").bind( "change", function(event, ui) {
				if (unai==""){
					unai = "Unai, ";
				}else{
					unai = "";
				}
			});
			$("input[id='ainhoa']").bind( "change", function(event, ui) {
				if (ainhoa==""){
					ainhoa = "Ainhoa, ";
				}else{
					ainhoa = "";
				}
			});
			$("input[id='jose']").bind( "change", function(event, ui) {
				if (jose==""){
					jose = "Jose, ";
				}else{
					jose = "";
				}
			});
			$("input[id='andoni']").bind( "change", function(event, ui) {
				if (andoni==""){
					andoni = "Andoni, ";
				}else{
					andoni = "";
				}
			});
			$("input[id='ziortza']").bind( "change", function(event, ui) {
				if (ziortza==""){
					ziortza = "Ziortza, ";
				}else{
					ziortza = "";
				}
			});
			$("input[id='cris']").bind( "change", function(event, ui) {
				if (cris==""){
					cris = "cris, ";
				}else{
					cris = "";
				}
			});
			$("input[id='inigo']").bind( "change", function(event, ui) {
				if (inigo==""){
					inigo = "inigo, ";
				}else{
					inigo = "";
				}
			});
			$("input[id='ana']").bind( "change", function(event, ui) {
				if (ana==""){
					ana = "ana, ";
				}else{
					ana = "";
				}
			});
			$("input[id='alaitz']").bind( "change", function(event, ui) {
				if (alaitz==""){
					alaitz = "Alaitz, ";
				}else{
					alaitz = "";
				}
			});
			$("#popupasignadoaboton").on("tap", function() {
				var campo = "ASIGNADO_A";
				var modasignadoaval = david + izaskun  + esti + marcos + markel + joanes + jon + oscar + unai + ainhoa + eros +jose + andoni + ziortza+ cris+ inigo + ana + alaitz + cristina+mikel ;
				console.log(modasignadoaval.slice(0,modasignadoaval.length-2));
				modasignadoaval = modasignadoaval.slice(0,modasignadoaval.length-2);
				var asignarotro = $("#modasignadoa").val();
				
				if (unai == "" & oscar == "" & jon == "" & marcos == "" & markel == "" & joanes == "" & esti == "" & david == ""& izaskun == "" & ainhoa == "" & eros == ""&cristina == ""& jose == "" & andoni == "" & ziortza == ""& cris == ""& inigo == "" & ana == "" & alaitz == ""& mikel == ""){
					modasignadoaval = $("#modasignadoa").val();
				}else{
					if (asignarotro == ""){
						modasignadoaval = modasignadoaval;
					}else{
						modasignadoaval = modasignadoaval + ", " + $("#modasignadoa").val();
					}
					
				}
				
				//console.log($('input[checkbox-v-2a]:checked').val());
				
				websql.enviarmod(campo, modasignadoaval);
			});
			
		},
		"guardarvisado" : function() {
			valorvisado = "No procede";
			$('#visado input').change(function(event) {
       			valorvisado = $(this).next('label').text();
    		});
			$("#popupvisadoboton").on("tap", function() {
				var campo = "VISADO";
				websql.enviarmod(campo, valorvisado);
			});
			
		},
		"guardarcalculoestructura": function(){
			valorcalculoestructura = "Sí";
			$("#calculoestructura input").change(function(event){
				valorcalculoestructura = $(this).next('label').text();
			});
			$("#popupcalculoestructura").on("tap", function(){
				var campo = "CALCULO_ESTRUCTURA";
				websql.enviarmod(campo, valorcalculoestructura);
			});
		},
		"guardarproyectocompleto": function(){
			valorproyectocompleto = "Sí";
			$("#proyectocompleto input").change(function(){
				valorproyectocompleto = $(this).next('label').text();
			});
			$("#popupproyectocompleto").on("tap", function(event){
				var campo = "PROYECTO_COMPLETO";
				websql.enviarmod(campo, valorproyectocompleto);
			});
		},
		"guardarccespecial": function(){
			valorccespecial = "Sí";
			$("#ccespecial input").change(function(){
				valorccespecial = $(this).next('label').text();
			});
			$("#popupccespecial").on("tap", function(event){
				var campo = "CC_ESPECIAL";
				websql.enviarmod(campo, valorccespecial);
			});
		},
		"guardarotros" : function() {
			$("#popupotrosboton").on("tap", function() {
				var campo = "OTROS";
				var modotrosval = $("#modotros").val();
				$("#modotros").val("");
				websql.enviarmod(campo, modotrosval);
			});
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
	var wsdescripcion;
	var wsasignadoa;
	var wscalculoestructura;
	var wsproyectocompleto;
	var wsccespecial;
	var wsotros;
	var wscomentarios;
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
	var valorvisado;
	var valorcalculoestructura;
	var valorproyectocompleto;
	var valorccespecial;
	
	dom.guardarws();
	dom.guardartitulo();
	dom.guardarubicacion();
	dom.guardarpromotor();
	dom.guardarcliente();
	dom.guardararquitecto();
	dom.guardarasignadoa();
	dom.guardarvisado();
	dom.guardarcalculoestructura();
	dom.guardarproyectocompleto();
	dom.guardarccespecial();
	dom.guardarotros();
	dom.guardarcomentarios();
	websql.trabajos();

});
