$(document).delegate('#phrtres', 'pagecreate', function () {
	function extraerfecha(a) {
		var mesa = a.split(" ")[1];

		/////////////////////////////////////////////////////////////////////////////////////////////
		switch (mesa) {
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

		return a.split(" ")[3] + "-" + mesa + "-" + a.split(" ")[2]
	}
	function extraerurtedefecha(u) {
		return u.substr(0, 4);
	}
	function extraerdiadefechainteger(d) {
		return parseInt(d.substr(d.length - 2, d.length));
	}
	function extraermesdefechainteger(m) {
		return parseInt(m.split("-")[1]);
	}
	function extraerhoraentrada(he) {
		return he.split(" ")[4];
	}
	function extraerhorasalida(hs) {
		return hs.split(" ")[4];
	}
	function formatofecha(f) {
		var ffurte = f.split("-")[0];
		var ffmes = f.split("-")[1];
		var ffdia = f.split("-")[2];
		if (ffmes.length == 1) {
			ffmes = "0" + ffmes;
		}
		if (ffdia.length == 1) {
			ffdia = "0" + ffdia;
		}
		return ffurte + "-" + ffmes + "-" + ffdia;
	}
	function extraermesnombre(a) {
		/* 		var mesnombre = a;
				console.log(mesnombre); */
		/////////////////////////////////////////////////////////////////////////////////////////////
		switch (a) {
			case 12:
				a = "Diciembre";
				break;
			case 11:
				a = "Noviembre";
				break;
			case 10:
				a = "Octubre";
				break;
			case 9:
				a = "Septiembre";
				break;
			case 8:
				a = "Agosto";
				break;
			case 7:
				a = "Julio";
				break;
			case 6:
				a = "Junio";
				break;
			case 5:
				a = "Mayo";
				break;
			case 4:
				a = "Abril";
				break;
			case 3:
				a = "Marzo";
				break;
			case 2:
				a = "Febrero";
				break;
			case 1:
				a = "Enero";
				break;
		}

		return a;
	}
	var dom = {
		"tablames": function () {

			$("#tablasmeses").append("<div id=" + mes + " class='borrar'> \
						<table id='phresumenhorasmes' class='titulomes borrar'> \
						<tr  class='titulomes borrar'> \
							<th colspan = '42' rowspan = '2' id='tablecodigo' class='titulomesnombre'>" + extraermesnombre(mes) + " </th> \
							<th colspan = '3' style='opacity:0.8'> HT </th> \
							<th colspan = '3' id=" + mes + "horascalendario class='teoricashoy' style='font-size:14px'> horas </th> \
						</tr> \
						<tr  class='titulomes borrar'> \
							<th colspan = '3' style='opacity:0.8'> HR </th> \
							<th colspan = '3' id=" + mes + "horas class='imputadas' style='font-size:14px'> horas </th> \
						</tr> \
						</table> \
					<div> 					");

		},
		"diasemana": function () {
			var s = dia + " " + diasemanastring;
			var weekendClass = (diasemanastring === "S" || diasemanastring === "D") ? " class='weekend'" : "";
			domdias = domdias + "<th colspan='3'" + weekendClass + ">" + s + "</th>"
		},
		"diasemanaadjuntar": function () {
			$("#" + mes + " table").append("<tr class='borrar'>" + domdias + "</tr>");
			domdias = "";
		},
		"esh": function () {
			domesh = domesh + "<th>E</th><th>S</th><th>H</th>"
		},
		"eshadjuntar": function () {
			$("#" + mes + " table").append("<tr class='borrar'>" + domesh + "</tr>");
			domesh = "";
		},
		"eshhoras": function () {
			var arrayfilasdos;
			var a = parseInt(d.getMonth() + 1);
			if (urte < parseInt(d.getFullYear())) {
				a = 12;
				console.log(parseInt(d.getFullYear()));
			};

			while (a > 0) {
				b = 0;
				mes = a;
				a = a - 1;
				diasmes = new Date(urte || new Date().getFullYear(), mes, 0).getDate();
				arrayfilas = [];
				arrayfilahoras = [];
				arrayfilahorasfuera = "";
				arrayfilahorasimputadas = "";
				var arrayfichaje = [];
				var numarrayfichaje;
				var controldomdia;
				var numarrayfilasdos = 0;
				numarrayfilas = 0;

				var arraydia = [];
				var arraydias;
				procesos.filasarraycontadorquince();
				while (b < 15) {
					numarrayfilahoras = b;
					arrayfilahoras[numarrayfilahoras] = 0;
					//arrayfilahorasfuera[numarrayfilahoras] = 0;
					controldomdia = "NO";
					b = b + 1;
					dia = b;
					diasemana = new Date(urte, mes - 1, dia).getDay();
					procesos.diasemana();
					diasemana = new Date(urte, mes - 1, dia).getDay();
					////////////////////////////////////
					//fecha = urte + "-" + parseInt(mes) + "-" + dia;
					dom.diasemana();
					dom.esh();
					/////////////////////////////////////////////////			
					var diadosdigitos = dia.toString();
					if (diadosdigitos.length == 1) {
						dia = "0" + dia;
					};
					fecha = urte + "-" + parseInt(mes) + "-" + dia;
					for (i in arraycontador) {
						var arrayfechaentrada;
						var arrayfechasalida;
						var arrayhoraentrada;
						var arrayhorasalida;
						arrayfechaentrada = arraycontador[i].fichaje;
						arrayfechaentrada = arrayfechaentrada.split(" ");
						arrayhoraentrada = arrayfechaentrada[4].split(":");
						arrayfechasalida = arraycontador[i].salida;
						var mesentrada = arrayfechaentrada[1];

						/////////////////////////////////////////////////////////////////////////////////////////////
						switch (mesentrada) {
							case "Jan":
								mesentrada = "1";
								break;
							case "Feb":
								mesentrada = "2";
								break;
							case "Mar":
								mesentrada = "3";
								break;
							case "Apr":
								mesentrada = "4";
								break;
							case "May":
								mesentrada = "5";
								break;
							case "Jun":
								mesentrada = "6";
								break;
							case "Jul":
								mesentrada = "7";
								break;
							case "Aug":
								mesentrada = "8";
								break;
							case "Sep":
								mesentrada = "9";
								break;
							case "Oct":
								mesentrada = "10";
								break;
							case "Nov":
								mesentrada = "11";
								break;
							case "Dec":
								mesentrada = "12";
								break;
						}



						if (fecha == arrayfechaentrada[3] + "-" + mesentrada + "-" + arrayfechaentrada[2]) {
							//console.log("coincide");
							controldomdia = "SI";
							if (arraycontador[i].salida == "") {
								arrayfilas[numarrayfilas] = arrayfilas[numarrayfilas] + "<td>" + arrayfechaentrada[4] + "</td><td></td><td></td>"
								numarrayfilas = numarrayfilas + 1;

							} else {
								arrayfechasalida = arrayfechasalida.split(" ");
								arrayhorasalida = arrayfechasalida[4].split(":");
								horas = (Date.UTC(arrayfechasalida[3], mes, arrayfechasalida[2], arrayhorasalida[0], arrayhorasalida[1], arrayhorasalida[2]) - Date.UTC(arrayfechaentrada[3], mes, arrayfechaentrada[2], arrayhoraentrada[0], arrayhoraentrada[1], arrayhoraentrada[2])) / 1000 / 3600;
								horas = Math.round(horas * 100) / 100;
								horasdia = horasdia + horas;
								horasdia = Math.round(horasdia * 100) / 100;
								arrayfilas[numarrayfilas] = arrayfilas[numarrayfilas] + "<td>" + arrayfechaentrada[4].substr(0, 5) + "</td><td>" + arrayfechasalida[4].substr(0, 5) + "</td><td><span class='pill'>" + horas + "</span></td>"
								numarrayfilas = numarrayfilas + 1;

								arrayfilahoras[numarrayfilahoras] = arrayfilahoras[numarrayfilahoras] + horas;
								//arrayfilahorasfuera[numarrayfilahoras] = arrayfilahorasfuera[numarrayfilahoras] + horas;
							};


						};
					}
					//////HORAS FUERA
					dom.horasfuera();
					dom.horasimputadas();

					if (numarrayfilas < numfilasarraycontador && controldomdia == "SI") {
						while (numarrayfilas < numfilasarraycontador) {
							numarrayfilas = numarrayfilas + 1;
							arrayfilas[numarrayfilas - 1] = arrayfilas[numarrayfilas - 1] + "<td></td><td></td><td></td>"
						}

					};


					if (controldomdia == "NO") {
						//numfilasarraycontador
						for (i = 0; i < numfilasarraycontador; i++) {
							arrayfilas[i] = arrayfilas[i] + "<td></td><td></td><td></td>"

						};
						for (j in numfilasarraycontador) {

						};
					};
					numarrayfilas = 0;

				};
				dom.diasemanaadjuntar();
				dom.eshadjuntar();
				procesos.eshhorasadjuntar();
				dom.horascontadoradjuntar();
				dom.horasfueraadjuntar();
				dom.horasimputadasadjuntar();

				//websql.horas();
				b = 15;

				arrayfilas_ = [];
				arrayfilahoras = [];
				arrayfilahorasfuera = "";
				arrayfilahorasimputadas = "";
				procesos.filasarraycontadordos();
				while (b < diasmes) {
					numarrayfilahoras = b;
					arrayfilahoras[numarrayfilahoras] = 0;
					//arrayfilahorasfuera[numarrayfilahoras] = 0;
					controldomdia = "NO";
					b = b + 1;
					dia = b;
					diasemana = new Date(urte, mes - 1, dia).getDay();
					procesos.diasemana();
					diasemana = new Date(urte, mes - 1, dia).getDay();
					////////////////////////////////////
					//fecha = urte + "-" + parseInt(mes) + "-" + dia;
					dom.diasemana();
					dom.esh();
					/////////////////////////////////////////////////			
					var diadosdigitos = dia.toString();
					if (diadosdigitos.length == 1) {
						dia = "0" + dia;
					};
					fecha = urte + "-" + parseInt(mes) + "-" + dia;
					for (i in arraycontador) {
						var arrayfechaentrada;
						var arrayfechasalida;
						var arrayhoraentrada;
						var arrayhorasalida;
						arrayfechaentrada = arraycontador[i].fichaje;
						arrayfechaentrada = arrayfechaentrada.split(" ");
						arrayhoraentrada = arrayfechaentrada[4].split(":");
						arrayfechasalida = arraycontador[i].salida;
						var mesentrada = arrayfechaentrada[1];

						/////////////////////////////////////////////////////////////////////////////////////////////
						switch (mesentrada) {
							case "Jan":
								mesentrada = "1";
								break;
							case "Feb":
								mesentrada = "2";
								break;
							case "Mar":
								mesentrada = "3";
								break;
							case "Apr":
								mesentrada = "4";
								break;
							case "May":
								mesentrada = "5";
								break;
							case "Jun":
								mesentrada = "6";
								break;
							case "Jul":
								mesentrada = "7";
								break;
							case "Aug":
								mesentrada = "8";
								break;
							case "Sep":
								mesentrada = "9";
								break;
							case "Oct":
								mesentrada = "10";
								break;
							case "Nov":
								mesentrada = "11";
								break;
							case "Dec":
								mesentrada = "12";
								break;
						}



						if (fecha == arrayfechaentrada[3] + "-" + mesentrada + "-" + arrayfechaentrada[2]) {
							//console.log("coincide");
							controldomdia = "SI";
							if (arraycontador[i].salida == "") {
								arrayfilas_[numarrayfilas] = arrayfilas_[numarrayfilas] + "<td>" + arrayfechaentrada[4] + "</td><td></td><td></td>"
								numarrayfilas = numarrayfilas + 1;

							} else {
								arrayfechasalida = arrayfechasalida.split(" ");
								arrayhorasalida = arrayfechasalida[4].split(":");
								horas = (Date.UTC(arrayfechasalida[3], mes, arrayfechasalida[2], arrayhorasalida[0], arrayhorasalida[1], arrayhorasalida[2]) - Date.UTC(arrayfechaentrada[3], mes, arrayfechaentrada[2], arrayhoraentrada[0], arrayhoraentrada[1], arrayhoraentrada[2])) / 1000 / 3600;
								horas = Math.round(horas * 100) / 100;
								horasdia = horasdia + horas;
								horasdia = Math.round(horasdia * 100) / 100;
								arrayfilas_[numarrayfilas] = arrayfilas_[numarrayfilas] + "<td>" + arrayfechaentrada[4].substr(0, 5) + "</td><td>" + arrayfechasalida[4].substr(0, 5) + "</td><td><span class='pill'>" + horas + "</span></td>"
								numarrayfilas = numarrayfilas + 1;

								arrayfilahoras[numarrayfilahoras] = arrayfilahoras[numarrayfilahoras] + horas;
								//arrayfilahorasfuera[numarrayfilahoras] = arrayfilahorasfuera[numarrayfilahoras] + horas;
							};


						};
					}

					//////HORAS FUERA
					dom.horasfuera();
					dom.horasimputadas();

					if (numarrayfilas < numfilasarraycontadordos && controldomdia == "SI") {
						while (numarrayfilas < numfilasarraycontadordos) {
							numarrayfilas = numarrayfilas + 1;
							arrayfilas_[numarrayfilas - 1] = arrayfilas_[numarrayfilas - 1] + "<td></td><td></td><td></td>"
						}
					};


					if (controldomdia == "NO") {
						//numfilasarraycontadordos
						for (i = 0; i < numfilasarraycontadordos; i++) {
							arrayfilas_[i] = arrayfilas_[i] + "<td></td><td></td><td></td>"
						};
						for (j in numfilasarraycontadordos) {

						};
					};
					numarrayfilas = 0;

				};
				dom.diasemanaadjuntar();
				dom.eshadjuntar();
				//procesos.eshhorasadjuntar();
				procesos.eshhorasadjuntar_();
				dom.horascontadoradjuntar();
				dom.horasfueraadjuntar();
				dom.horasimputadasadjuntar();
				//dom.horasfueracontadoradjuntar();
				//websql.horas();

				dom.horasrealesmes();

				dom.horascalendariomeshoy();

			};
			dom.horasrealesurte();
			dom.horasteoricasurte();
			dom.horascalendariourte();
			dom.horascomplementariasyvacaciones();
			dom.vacacionesbaja();


		},
		"vacacionesbaja": function () {
			console.log(horascalendariourte);
			console.log(horasteoricasurte);
			if (urte == "2018") {
				horasteoricasurte = horasteoricasurte - 0
			};
			var vacacionessindisfrutar = horascalendariourte - horasteoricasurte;
			console.log(horasteoricasurte);
			var vacacionesdisfrutadas = 0;
			var baja = 0;
			console.log(usuario);
			$("#tablavacaciones").empty();
			for (i in arrayhoras) {
				if (arrayhoras[i].codigo.substring(0, 4) == "A009") {
					baja = parseFloat(arrayhoras[i].horas) + baja;
				}
			}
			for (i in arrayhoras) {
				if (arrayhoras[i].codigo.substring(0, 4) == "A005") {
					vacacionesdisfrutadas = parseFloat(arrayhoras[i].horas) + vacacionesdisfrutadas;
					console.log(arrayhoras[i].horas);
					$("#tablavacaciones").append("<tr><th>" + arrayhoras[i].fecha + "</th></tr>");
				}
			}
			var horasajustecalendario = 0;
			console.log(horasajustecalendario);
			if (urte == "2017" && usuario.trim() != "eli") {
				if (usuario.trim() == "joanes") {
					horasajustecalendario = horasajustecalendario + 26.85;
				} else {
					horasajustecalendario = horasajustecalendario + 24.02;

				}
			};
			if (urte == "2017" && usuario.trim() == "markel") {
				horasajustecalendario = 0;
			}
			if (urte == "2017" && usuario.trim() == "ziortza") {
				horasajustecalendario = 0;
			}
			if (urte == "2017" && usuario.trim() == "alaitz") {
				horasajustecalendario = 0;
			}
			console.log("eli");
			console.log(vacacionesdisfrutadas);
			console.log(horasajustecalendario);
			$("#vacacionessindisfrutar").html(horasajustecalendario + Math.round(vacacionessindisfrutar * 100) / 100);
			$("#vacacionesdisfrutadas").html(Math.round(vacacionesdisfrutadas * 100) / 100 + "<a  href=\"#popupvacaciones\"  data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\"> VER</a>");
			$("#vacacionesdisfrutadasdos").html(Math.round(vacacionesdisfrutadas * 100) / 100 + "<a  href=\"#popupvacaciones\"  data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\"> VER</a>");
			$("#baja").html(Math.round(baja * 100) / 100);
			console.log(vacacionesdisfrutadas)
			//horasrealesurte = horasrealesurte - Math.round(vacacionesdisfrutadas*100)/100;
			horasrealesurte = Math.round(horasrealesurte * 100) / 100;
			$("#horasrealesurtedos").html(horasrealesurte);
		},
		"horascontadoradjuntar": function () {
			var horascontador;
			for (i in arrayfilahoras) {
				arrayfilahoras[i] = Math.round(arrayfilahoras[i] * 100) / 100;
				horascontador = horascontador + "<td></td><td></td><td><span class='pill pill-contador'>" + arrayfilahoras[i] + "</span></td>"
			};
			$("#" + mes + " table").append("<tr class='contador borrar'>" + horascontador + "</tr>");
			horascontador = "";
		},
		"horasfuera": function () {
			var horasfuera = 0;
			for (i in arrayhoras) {
				if (arrayhoras[i].codigo != "A004-13" && arrayhoras[i].fuera == "SI" && arrayhoras[i].codigo != "A015") {
					if (formatofecha(fecha) == arrayhoras[i].fecha) {
						horasfuera = horasfuera + parseFloat(arrayhoras[i].horas);
						horasfuera = Math.round(horasfuera * 100) / 100;

					};
				}

			}
			arrayfilahorasfuera = arrayfilahorasfuera + "<td></td><td></td><td><span class='pill pill-fuera'>" + (Math.round(horasfuera * 100) / 100) + "</span></td>"
		},
		"horasfueraadjuntar": function () {
			$("#" + mes + " table").append("<tr class='fuera borrar'>" + arrayfilahorasfuera + "</tr>");
		},
		"horasimputadas": function () {
			var horasimputadas = 0;
			for (i in arrayhoras) {
				//if (arrayhoras[i].codigo!="A012-15" && arrayhoras[i].codigo!="A005-14" && arrayhoras[i].codigo!="A006-13" && arrayhoras[i].codigo!="A004-13"){
				if (arrayhoras[i].codigo != "A015") {
					if (formatofecha(fecha) == arrayhoras[i].fecha) {
						horasimputadas = horasimputadas + parseFloat(arrayhoras[i].horas);
						horasimputadas = Math.round(horasimputadas * 100) / 100;
					};
				}

			}
			arrayfilahorasimputadas = arrayfilahorasimputadas + "<td></td><td></td><td><span class='pill pill-imputadas'>" + (Math.round(horasimputadas * 100) / 100) + "</span></td>"
		},
		"horasimputadasadjuntar": function () {
			$("#" + mes + " table").append("<tr class='imputadas borrar'>" + arrayfilahorasimputadas + "</tr>");
		},
		"horasrealesmes": function () {
			var horasrealesmes = 0;
			for (i in arrayhoras) {
				//if (arrayhoras[i].codigo!="A012-15" && arrayhoras[i].codigo!="A005-14" && arrayhoras[i].codigo!="A006-13" && arrayhoras[i].codigo!="A004-13"){
				//if (arrayhoras[i].codigo.split("-")[0]!="A005" ){
				if (arrayhoras[i].codigo != "A015") {
					if (mes == arrayhoras[i].fecha.split("-")[1]) {
						horasrealesmes = horasrealesmes + parseFloat(arrayhoras[i].horas);
						horasrealesmes = Math.round(horasrealesmes * 100) / 100;
					};
				};


				//}
			}
			$("#" + mes + "horas").html(horasrealesmes);

		},
		/////////
		"horasrealesurte": function () {
			horasrealesurte = 0;
			for (i in arrayhoras) {
				//if (arrayhoras[i].codigo!="A012-15" && arrayhoras[i].codigo!="A005-14" && arrayhoras[i].codigo!="A006-13" && arrayhoras[i].codigo!="A004-13"){
				if (arrayhoras[i].codigo != "A015") {
					horasrealesurte = horasrealesurte + parseFloat(arrayhoras[i].horas);
					horasrealesurte = Math.round(horasrealesurte * 100) / 100;
				};
			}

			$("#horasrealesurte").html(horasrealesurte);
			$("#horasorientativasvacaciones").html(Math.round((horasrealesurte - horascalendariourtehoy) * 100) / 100);

		},

		"horasteoricasurte": function () {
			var us = usuario.trim();
			if (urte == "2017") {
				horasteoricasurte = 1752;
				if (us == "eli") { horasteoricasurte = 1456; }
				if (us == "joanes") { horasteoricasurte = 1579; }
				if (us == "markel") { horasteoricasurte = 916.83; }
				if (us == "ziortza") { horasteoricasurte = 545; }
				if (us == "alaitz") { horasteoricasurte = 355; }
			} else {
				horasteoricasurte = 1752;
			};

			$("#horasteoricasurte").html(horasteoricasurte);

		},

		"horascalendariomeshoy": function () {
			//usuario = usuario.trim();
			var horascalendariomeshoy = 0;
			for (i in arraycalendario) {
				if (mes == extraermesdefechainteger(arraycalendario[i].fecha) && new Date() > new Date(extraerurtedefecha(arraycalendario[i].fecha), extraermesdefechainteger(arraycalendario[i].fecha) - 1, extraerdiadefechainteger(arraycalendario[i].fecha)).getTime()) {
					horascalendariomeshoy = horascalendariomeshoy + parseFloat(arraycalendario[i].horas);
				}
			};
			horascalendariomeshoy = Math.round(horascalendariomeshoy * 100) / 100;
			$("#" + mes + "horascalendario").html(horascalendariomeshoy);

		},
		"horascalendariourtehoy": function () {
			horascalendariourtehoy = 0;
			horasorientativasvacacioneshoy = 0;
			var us = usuario.trim();
			for (i in arraycalendario) {
				if (new Date() > new Date(extraerurtedefecha(arraycalendario[i].fecha), extraermesdefechainteger(arraycalendario[i].fecha) - 1, extraerdiadefechainteger(arraycalendario[i].fecha)).getTime()) {
					horascalendariourtehoy = horascalendariourtehoy + parseFloat(arraycalendario[i].horas);
				}

				if (new Date() > new Date(extraerurtedefecha(arraycalendario[i].fecha), extraermesdefechainteger(arraycalendario[i].fecha) - 1, extraerdiadefechainteger(arraycalendario[i].fecha)).getTime() && arraycalendario[i].tipo == "V") {

					if (arraycalendario[i].diasemana == "V") {
						horasorientativasvacacioneshoy = horasorientativasvacacioneshoy + 6.1666;
					} else {
						horasorientativasvacacioneshoy = horasorientativasvacacioneshoy + 8.5333;
					}
				}
			};
			horasorientativasvacacioneshoy = Math.round(horasorientativasvacacioneshoy * 100) / 100;
			//$("#horasorientativasvacaciones").html(horasorientativasvacacioneshoy);
			$("#horasorientativasvacaciones").html(horasorientativasvacacioneshoy);
			////////////////////////CAMBIAR PARA CADA AÑO
			if (urte == "2016") {
				if (us == "eli") {

				} else { horascalendariourtehoy = horascalendariourtehoy + 17.5 }
			};
			if (urte == "2017") {
				horascalendariourtehoy = horascalendariourtehoy + 24.02;
				if (us == "eli" | us == "markel" | us == "ziortza" | us == "alaitz") { horascalendariourtehoy = horascalendariourtehoy - 24.02 }
				if (us == "joanes") { horascalendariourtehoy = horascalendariourtehoy - 24.02 + 26.85 }
			}
			if (urte == "2018") {
				horascalendariourtehoy = horascalendariourtehoy + 0;
			}
			horascalendariourtehoy = Math.round(horascalendariourtehoy * 100) / 100;
			$("#horascalendariourtehoy").html(horascalendariourtehoy);
			$("#horascalendariourtehoydos").html(horascalendariourtehoy);

		},
		"horascalendariourte": function () {
			//usuario = usuario.trim();
			horascalendariourte = 0;
			for (i in arraycalendario) {
				if (new Date(urte + 1, 0, 1) > new Date(extraerurtedefecha(arraycalendario[i].fecha), extraermesdefechainteger(arraycalendario[i].fecha) - 1, extraerdiadefechainteger(arraycalendario[i].fecha)).getTime()) {
					horascalendariourte = horascalendariourte + parseFloat(arraycalendario[i].horas);
				}


			};
			horascalendariourte = Math.round(horascalendariourte * 100) / 100;
			$("#horascalendariourte").html(horascalendariourte);
		},
		"horascomplementariasyvacaciones": function () {
			var us = usuario.trim();
			var horasvacaciones = 0;
			var horascomplementarias = horasrealesurte - horascalendariourtehoy;
			horascomplementarias = Math.round(horascomplementarias * 100) / 100;
			$("#horascomplementarias").html(horascomplementarias);
			if (us == "eli") {
				//horasvacaciones = horascalendariourte - 1241;
			} else {
				//horasvacaciones = horascalendariourte - 1752;
			}
			horasvacaciones = Math.round(horasvacaciones * 100) / 100;
			//$("#horasvacaciones").html(horasvacaciones);
		},
		"usuario": function () {
			//valorasesoria = "Preparada";
			console.log("a");
			$('#usuario input').change(function (event) {

				usuario = $(this).next('label').text().toLowerCase().trim();
				usuario = " " + usuario;
			});
			$("#popupusuarioboton").on("tap", function () {

				dom.adjuntarmeses();
			});

		},
		"urte": function () {
			console.log("a");
			$("#botonurte").on("tap", function () {

				horasfecha = $("#modfecha").val();
				if (horasfecha < 2017) {
					horasfecha = 2017;
				};
				if (horasfecha == 2017) {
					window.location.href = "phresumenus.php";
				};
				if (horasfecha > 2017) {
					window.location.href = "phresumenusdos.php";
				};

				urte = horasfecha;



				dom.adjuntarmeses();
			});
		},
		"adjuntarmeses": function () {
			$("#tablecodigo").html(urte + " - " + usuario.toUpperCase());
			$(".borrar").remove();

			//$("#tablasmeses div").delete;
			d = new Date();
			a = parseInt(d.getMonth() + 1);

			if (urte < parseInt(d.getFullYear())) {
				a = 12;
				console.log(parseInt(d.getFullYear()));
			};
			//urte = parseInt(d.getFullYear());
			arrayfilas = [];
			arrayfilahoras = [];
			arrayhoras = [];
			arrayfilas_ = [];
			arrayfilasmes = [];
			horasrealesurte = 0;
			horascalendariourtehoy = 0;
			horascalendariourte = 0;
			horasteoricasurte = 0;
			horas = 0;
			horasfuera = 0;
			horasimputadas = 0;

			while (a > 0) {

				b = 0;
				mes = a;
				a = a - 1;
				dom.tablames();
				diasmes = new Date(urte || new Date().getFullYear(), mes, 0).getDate();
				while (b < 15) {
					b = b + 1;
					dia = b;
					fecha = urte + "-" + parseInt(mes) + "-" + dia;
				};

				dom.diasemanaadjuntar();
				dom.eshadjuntar();
				b = 15;
				while (b < diasmes) {
					b = b + 1;
					dia = b;
					fecha = urte + "-" + parseInt(mes) + "-" + dia;
				};
			};

			//a=0;
			console.log(a + "......................")
			websql.contador();

			websql.calendario();


		},
	};
	var procesos = {
		"diasemana": function () {
			diasemana = diasemana.toString();
			switch (diasemana) {
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
		"usuariooculto": function () {
			$("#usuariooculto").hide();
			usuario = $("#usuariooculto").text();
			usuario = usuario.replace("\n					", "");
		},
		"eshhorasadjuntar": function () {

			for (i in arrayfilas) {

				$("#" + mes + " table").append("<tr class='borrar'>" + arrayfilas[i] + "</tr>");
				//$("#" + mes + " table").add("<tr>" + arrayfilas[i] + "</tr>");
			};
		},
		"eshhorasadjuntar_": function () {

			for (i in arrayfilas_) {

				$("#" + mes + " table").append("<tr class='borrar'>" + arrayfilas_[i] + "</tr>");
				//$("#" + mes + " table").add("<tr>" + arrayfilas[i] + "</tr>");
			};
		},
		"filasarraycontadorquince": function () {
			numfilasarraycontador = 0;
			var z = 0;
			// var u = 0;
			// while (u<12){
			// u = u + 1;
			while (z < 15) {
				z = z + 1;
				var n = 0;
				for (i in arraycontador) {
					var mesentrada = arraycontador[i].fichaje.split(" ")[1]
					/////////////////////////////////////////////////////////////////////////////////////////
					switch (mesentrada) {
						case "Jan":
							mesentrada = "1";
							break;
						case "Feb":
							mesentrada = "2";
							break;
						case "Mar":
							mesentrada = "03";
							break;
						case "Apr":
							mesentrada = "4";
							break;
						case "May":
							mesentrada = "5";
							break;
						case "Jun":
							mesentrada = "6";
							break;
						case "Jul":
							mesentrada = "7";
							break;
						case "Aug":
							mesentrada = "8";
							break;
						case "Sep":
							mesentrada = "9";
							break;
						case "Oct":
							mesentrada = "10";
							break;
						case "Nov":
							mesentrada = "11";
							break;
						case "Dec":
							mesentrada = "12";
							break;
					}
					if (z == arraycontador[i].fichaje.split(" ")[2] && mesentrada == mes) {
						n = n + 1;

					};
					if (n > numfilasarraycontador) {
						numfilasarraycontador = n;
					};
				}

			};

			// };


		},
		"filasarraycontadordos": function () {
			numfilasarraycontadordos = 0;
			var z = 15;
			// var u = 0;
			// while (u<12){
			// u = u + 1;
			while (z < 31) {
				z = z + 1;
				var n = 0;
				for (i in arraycontador) {
					var mesentrada = arraycontador[i].fichaje.split(" ")[1]
					/////////////////////////////////////////////////////////////////////////////////////////
					switch (mesentrada) {
						case "Jan":
							mesentrada = "1";
							break;
						case "Feb":
							mesentrada = "2";
							break;
						case "Mar":
							mesentrada = "03";
							break;
						case "Apr":
							mesentrada = "4";
							break;
						case "May":
							mesentrada = "5";
							break;
						case "Jun":
							mesentrada = "6";
							break;
						case "Jul":
							mesentrada = "7";
							break;
						case "Aug":
							mesentrada = "8";
							break;
						case "Sep":
							mesentrada = "9";
							break;
						case "Oct":
							mesentrada = "10";
							break;
						case "Nov":
							mesentrada = "11";
							break;
						case "Dec":
							mesentrada = "12";
							break;
					}
					if (z == arraycontador[i].fichaje.split(" ")[2] && mesentrada == mes) {
						n = n + 1;

					};
					if (n > numfilasarraycontadordos) {
						numfilasarraycontadordos = n;
					};
				}

			};

			// };


		},
	}
	var websql = {
		"contador": function () {
			$.ajax({
				url: 'server/phr_usuario.php',
				type: 'post',
				dataType: "json",
				data: {
					"usuario": usuario,
				},
				success: function (responsecontador) {
					arraycontador = responsecontador;
					websql.horas();

				}
			});
		},
		"horas": function () {
			var horasfecha = extraerurtedefecha(fecha);
			//var us=usuario.trim();
			$.ajax({
				url: 'server/phr_horas.php',
				type: 'post',
				dataType: "json",
				data: {
					"horasfecha": horasfecha,
					"usuario": usuario,
				},
				beforeSend: function () {
					$("#msj").html("Calculando...");
				},
				success: function (respuesta) {
					//console.log(respuesta);
					arrayhoras = respuesta;
					dom.eshhoras();
				}
			});
		},
		"calendario": function () {
			var us = usuario.trim();
			console.log(us);
			console.log(urte);
			//us = "jon";
			$.ajax({
				url: 'server/phcalendariotres.php',
				type: 'post',
				dataType: "json",
				data: {
					"urte": urte,
					"usuario": us,
				},
				beforeSend: function () {
					$("#msj").html("Calculando...");
				},
				success: function (respuesta) {
					console.log(respuesta);
					arraycalendario = respuesta;
					dom.horascalendariourtehoy();

				}
			});

		},

	};
	console.log("b");
	procesos.usuariooculto();
	dom.usuario();
	dom.urte();
	var d = new Date();
	var a = parseInt(d.getMonth() + 1);
	var mes;
	var dia;
	var diasmes;
	var urte;
	urte = parseInt(d.getFullYear());
	$("#tablecodigo").html(urte + " - " + usuario.toUpperCase());
	var b;
	var fecha;
	var horas;
	var horasfuera;
	var horasimputadas;
	var tipo;
	var diasemana;
	var diasemanastring;
	var usuario;
	//procesos.usuario();
	var domdias;
	var domesh;
	var arraycontador;
	var arrayfilas = [];
	var arrayfilahoras = [];
	var arrayfilahorasfuera;
	var arrayfilahorasimputadas;
	var arrayhoras = [];
	var arrayfilas_ = [];
	var arrayfilasmes = [];
	var numarrayfilas;
	var numarrayfilahoras;
	var horasdia;
	var arraycalendario;
	var horasrealesurte = 0;
	var horascalendariourtehoy = 0;
	var horascalendariourte = 0;
	var horasteoricasurte = 0;

	var numfilasarraycontador;
	var numfilasarraycontadordos;

	var horasorientativasvacacioneshoy = 0;

	horas = 0;
	horasfuera = 0;
	horasimputadas = 0;

	while (a > 0) {
		b = 0;
		mes = a;
		a = a - 1;
		dom.tablames();
		diasmes = new Date(urte || new Date().getFullYear(), mes, 0).getDate();
		while (b < 15) {
			b = b + 1;
			dia = b;
			//diasemana = new Date(urte, mes, dia).getDay();


			//procesos.diasemana();

			fecha = urte + "-" + parseInt(mes) + "-" + dia;
		};
		dom.diasemanaadjuntar();
		dom.eshadjuntar();
		b = 15;
		while (b < diasmes) {
			b = b + 1;
			dia = b;
			fecha = urte + "-" + parseInt(mes) + "-" + dia;
		};
		// dom.diasemanaadjuntar();
		// dom.eshadjuntar();
		//procesos.eshhorasadjuntar();
	};
	websql.contador();
	websql.calendario();


	//websql.horas();
	console.log(usuario.substring(0, 4));
	//$("#tablecodigo").html(urte + " - " + usuario.toUpperCase());


});


