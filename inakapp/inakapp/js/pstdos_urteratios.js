$(document).delegate('#pstdosratios', 'pagecreate', function() {
	var dom = {
		"trabajos" : function() {
			
			for (i in pst_arrayhorastrabajo) {
				
				
				for (j in pst_arraytrabajos) {
					
					if (pst_arrayhorastrabajo[i].proyecto.trim() == pst_arraytrabajos[j].alias.trim()) {

						pst_arraytrabajos[j].horas = parseFloat(pst_arraytrabajos[j].horas) + parseFloat(pst_arrayhorastrabajo[i].horas);

						if (pst_arrayhorastrabajo[i].fase.trim() == "Replanteo") {
							pst_arraytrabajos[j].horasreplanteo = parseFloat(pst_arraytrabajos[j].horasreplanteo) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasreplanteo = parseFloat(pst_arraytrabajos[j].importehorasreplanteo) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
						}
						if (pst_arrayhorastrabajo[i].fase.trim() == "Delineación") {
							pst_arraytrabajos[j].horasdelineacion = parseFloat(pst_arraytrabajos[j].horasdelineacion) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelineacion = parseFloat(pst_arraytrabajos[j].importehorasdelineacion) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
						}
						if (pst_arrayhorastrabajo[i].fase.trim() == "Cálculo") {
							pst_arraytrabajos[j].horascalculo = parseFloat(pst_arraytrabajos[j].horascalculo) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorascalculo = parseFloat(pst_arraytrabajos[j].importehorascalculo) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
							
						}
						if (pst_arrayhorastrabajo[i].fase.trim() == "Revisión") {
							pst_arraytrabajos[j].horasrevision = parseFloat(pst_arraytrabajos[j].horasrevision) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasrevision = parseFloat(pst_arraytrabajos[j].importehorasrevision) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
							
						}
						if (pst_arrayhorastrabajo[i].fase.trim() == "ModificaciónObra") {
							pst_arraytrabajos[j].horasmodificacionobra = parseFloat(pst_arraytrabajos[j].horasmodificacionobra) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasmodificacionobra = parseFloat(pst_arraytrabajos[j].importehorasmodificacionobra) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
							
						}
						if (pst_arrayhorastrabajo[i].fase.trim() == "AsistenciaObra") {
							pst_arraytrabajos[j].horasasistenciaobra = parseFloat(pst_arraytrabajos[j].horasasistenciaobra) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasasistenciaobra = parseFloat(pst_arraytrabajos[j].importehorasasistenciaobra) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
							
						}

						if (pst_arrayhorastrabajo[i].fase.trim() == "Mediciones") {
							pst_arraytrabajos[j].horasmediciones= parseFloat(pst_arraytrabajos[j].horasmediciones) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasmediciones = parseFloat(pst_arraytrabajos[j].importehorasmediciones) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
							
						}
						if (pst_arrayhorastrabajo[i].fase.trim() == "Otros") {
							pst_arraytrabajos[j].horasotros= parseFloat(pst_arraytrabajos[j].horasotros) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasotros = parseFloat(pst_arraytrabajos[j].importehorasotros) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));
							
						}
					}
					
				}
				
			}
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////
			var fila = "filapar";
			for (j in pst_arraytrabajos) {
				var visadop = parseFloat(pst_arraytrabajos[j].visadop);
			
				pst_arraytrabajos[j].importegastosdirectos = pst_arraytrabajos[j].importehorasreplanteo + pst_arraytrabajos[j].importehorasdelineacion + pst_arraytrabajos[j].importehorascalculo + pst_arraytrabajos[j].importehorasrevision + pst_arraytrabajos[j].importehorasmodificacionobra + pst_arraytrabajos[j].importehorasasistenciaobra + pst_arraytrabajos[j].importehorasmediciones + pst_arraytrabajos[j].importehorasotros + visadop ;
				pst_arraytrabajos[j].porcentajereplanteo = pst_arraytrabajos[j].importehorasreplanteo*100/pst_arraytrabajos[j].importegastosdirectos;
				pst_arraytrabajos[j].porcentajedelineacion = pst_arraytrabajos[j].importehorasdelineacion*100/pst_arraytrabajos[j].importegastosdirectos;
				pst_arraytrabajos[j].porcentajecalculo = pst_arraytrabajos[j].importehorascalculo*100/pst_arraytrabajos[j].importegastosdirectos;
				pst_arraytrabajos[j].porcentajerevision = pst_arraytrabajos[j].importehorasrevision*100/pst_arraytrabajos[j].importegastosdirectos;
				pst_arraytrabajos[j].porcentajemodificacionobra = pst_arraytrabajos[j].importehorasmodificacionobra*100/pst_arraytrabajos[j].importegastosdirectos;
				//pst_arraytrabajos[j].porcentajeasistenciaobra = pst_arraytrabajos[j].importehorasasistenciaobra*100/pst_arraytrabajos[j].importegastosdirectos;
				if (pst_arraytrabajos[j].ingresos>0){
				pst_arraytrabajos[j].porcentajeasistenciaobra = pst_arraytrabajos[j].importehorasasistenciaobra*100/pst_arraytrabajos[j].ingresos;
				}
				pst_arraytrabajos[j].porcentajemediciones = pst_arraytrabajos[j].importehorasmediciones*100/pst_arraytrabajos[j].importegastosdirectos;
				pst_arraytrabajos[j].porcentajeotros = pst_arraytrabajos[j].importehorasotros*100/pst_arraytrabajos[j].importegastosdirectos;
				var pst_arraytrabajoporcentajevisadop = pst_arraytrabajos[j].visadop*100/pst_arraytrabajos[j].importegastosdirectos;
				///////////////////////////////////////REDONDEO////////////////////////////////////////////////////////////////////////////////////////////////////////////
				pst_arraytrabajos[j].importehorasreplanteo = pst_arraytrabajos[j].importehorasreplanteo.toFixed(0);
				pst_arraytrabajos[j].importehorasdelineacion = pst_arraytrabajos[j].importehorasdelineacion.toFixed(0);
				pst_arraytrabajos[j].importehorascalculo = pst_arraytrabajos[j].importehorascalculo.toFixed(0);
				pst_arraytrabajos[j].importehorasrevision = pst_arraytrabajos[j].importehorasrevision.toFixed(0);
				pst_arraytrabajos[j].importehorasmodificacionobra = pst_arraytrabajos[j].importehorasmodificacionobra.toFixed(0);
				pst_arraytrabajos[j].importehorasasistenciaobra = pst_arraytrabajos[j].importehorasasistenciaobra.toFixed(0);
				//pst_arraytrabajos[j].importehorasvisado = pst_arraytrabajos[j].importehorasvisado.toFixed(0);
				pst_arraytrabajos[j].importehorasmediciones = pst_arraytrabajos[j].importehorasmediciones.toFixed(0);
				pst_arraytrabajos[j].importehorasotros = pst_arraytrabajos[j].importehorasotros.toFixed(0);
				pst_arraytrabajos[j].importegastosdirectos = pst_arraytrabajos[j].importegastosdirectos.toFixed(0);
				pst_arraytrabajos[j].porcentajereplanteo = pst_arraytrabajos[j].porcentajereplanteo.toFixed(0);
				if (isNaN(pst_arraytrabajos[j].porcentajereplanteo)==1){
					pst_arraytrabajos[j].porcentajereplanteo = "0.00";
				};
				pst_arraytrabajos[j].porcentajedelineacion = pst_arraytrabajos[j].porcentajedelineacion.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajedelineacion)==1){
					pst_arraytrabajos[j].porcentajedelineacion = "0.00";
				};
				pst_arraytrabajos[j].porcentajecalculo = pst_arraytrabajos[j].porcentajecalculo.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajecalculo)==1){
					pst_arraytrabajos[j].porcentajecalculo = "0.00";
				};
				pst_arraytrabajos[j].porcentajerevision = pst_arraytrabajos[j].porcentajerevision.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajerevision)==1){
					pst_arraytrabajos[j].porcentajerevision = "0.00";
				};
				pst_arraytrabajos[j].porcentajemodificacionobra = pst_arraytrabajos[j].porcentajemodificacionobra.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajemodificacionobra)==1){
					pst_arraytrabajos[j].porcentajemodificacionobra = "0.00";
				};
				pst_arraytrabajos[j].porcentajeasistenciaobra = pst_arraytrabajos[j].porcentajeasistenciaobra.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajeasistenciaobra)==1){
					pst_arraytrabajos[j].porcentajeasistenciaobra = "0.00";
				};
				pst_arraytrabajos[j].porcentajemediciones = pst_arraytrabajos[j].porcentajemediciones.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajemediciones)==1){
					pst_arraytrabajos[j].porcentajemediciones = "0.00";
				};
				pst_arraytrabajos[j].porcentajeotros = pst_arraytrabajos[j].porcentajeotros.toFixed(2);
				if (isNaN(pst_arraytrabajos[j].porcentajeotros)==1){
					pst_arraytrabajos[j].porcentajeotros = "0.00";
				};
				pst_arraytrabajoporcentajevisadop = pst_arraytrabajoporcentajevisadop.toFixed(2);
				if (isNaN(pst_arraytrabajoporcentajevisadop)==1){
					pst_arraytrabajoporcentajevisadop = "0.00";
				};
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if ((pst_arraytrabajos[j].horas != 0) && (pst_arraytrabajos[j].codigo[0]!="A")) {
				//if ((pst_arraytrabajos[j].horas != 0) ) {
					if (fila == "filapar") {
						fila = "filaimpar";
					} else {
						fila = "filapar";
					}
					if (pst_arraytrabajos[j].horasreplanteo == 0.00){pst_arraytrabajos[j].horasreplanteo="";}
					if (pst_arraytrabajos[j].importehorasreplanteo == 0.00){pst_arraytrabajos[j].importehorasreplanteo="";}
					if (pst_arraytrabajos[j].porcentajereplanteo == 0.00){pst_arraytrabajos[j].porcentajereplanteo="";}
					
					if (pst_arraytrabajos[j].horasdelineacion == 0.00){pst_arraytrabajos[j].horasdelineacion="";}
					if (pst_arraytrabajos[j].importehorasdelineacion == 0.00){pst_arraytrabajos[j].importehorasdelineacion="";}
					if (pst_arraytrabajos[j].porcentajedelineacion == 0.00){pst_arraytrabajos[j].porcentajedelineacion="";}
					
					if (pst_arraytrabajos[j].horascalculo == 0.00){pst_arraytrabajos[j].horascalculo="";}
					if (pst_arraytrabajos[j].importehorascalculo == 0.00){pst_arraytrabajos[j].importehorascalculo="";}
					if (pst_arraytrabajos[j].porcentajecalculo == 0.00){pst_arraytrabajos[j].porcentajecalculo="";}
					
					if (pst_arraytrabajos[j].horasrevision == 0.00){pst_arraytrabajos[j].horasrevision="";}
					if (pst_arraytrabajos[j].importehorasrevision == 0.00){pst_arraytrabajos[j].importehorasrevision="";}
					if (pst_arraytrabajos[j].porcentajerevision == 0.00){pst_arraytrabajos[j].porcentajerevision="";}
					
					if (pst_arraytrabajos[j].horasmodificacionobra == 0.00){pst_arraytrabajos[j].horasmodificacionobra="";}
					if (pst_arraytrabajos[j].importehorasmodificacionobra == 0.00){pst_arraytrabajos[j].importehorasmodificacionobra="";}
					if (pst_arraytrabajos[j].porcentajemodificacionobra == 0.00){pst_arraytrabajos[j].porcentajemodificacionobra="";}
					
					if (pst_arraytrabajos[j].horasasistenciaobra == 0.00){pst_arraytrabajos[j].horasasistenciaobra="";}
					if (pst_arraytrabajos[j].importehorasasistenciaobra == 0.00){pst_arraytrabajos[j].importehorasasistenciaobra="";}
					if (pst_arraytrabajos[j].porcentajeasistenciaobra == 0.00){pst_arraytrabajos[j].porcentajeasistenciaobra="";}
					
					if (pst_arraytrabajos[j].horasmediciones == 0.00){pst_arraytrabajos[j].horasmediciones="";}
					if (pst_arraytrabajos[j].importehorasmediciones == 0.00){pst_arraytrabajos[j].importehorasmediciones="";}
					if (pst_arraytrabajos[j].porcentajemediciones == 0.00){pst_arraytrabajos[j].porcentajemediciones="";}
					
					if (pst_arraytrabajos[j].horasotros == 0.00){pst_arraytrabajos[j].horasotros="";}
					if (pst_arraytrabajos[j].importehorasotros == 0.00){pst_arraytrabajos[j].importehorasotros="";}
					if (pst_arraytrabajos[j].porcentajeotros == 0.00){pst_arraytrabajos[j].porcentajeotros="";}
					
					if (pst_arraytrabajos[j].visadop == 0.00){pst_arraytrabajos[j].visadop="";}
					if (pst_arraytrabajoporcentajevisadop == 0.00){pst_arraytrabajoporcentajevisadop="";}
					
					//var gastosindirectosimporte = pst_arraytrabajos[j].ingresos*0.52;
					var gastosindirectosimporte = pst_arraytrabajos[j].ingresos*coefgi;
					gastosindirectosimporte = gastosindirectosimporte.toFixed(2);
					var gastostotalimporte = parseFloat(pst_arraytrabajos[j].importegastosdirectos) + parseFloat(gastosindirectosimporte);
					gastostotalimporte = gastostotalimporte.toFixed(2);
					var beneficio = pst_arraytrabajos[j].ingresos - gastostotalimporte;
					beneficio = beneficio.toFixed(2);
					
					if (pst_arraytrabajos[j].visadop  == 0) {
							pst_arraytrabajos[j].visadop  = "...";
					};
					////////////////////////////////////REDONDEO////////////////////////////////////////////////////////////////////////////////////////////////////////////
					pst_arraytrabajos[j].horasreplanteo = Math.round(pst_arraytrabajos[j].horasreplanteo*100)/100;
					pst_arraytrabajos[j].horasreplanteo = pst_arraytrabajos[j].horasreplanteo.toFixed(0);
					pst_arraytrabajos[j].horasdelineacion = Math.round(pst_arraytrabajos[j].horasdelineacion*100)/100;
					pst_arraytrabajos[j].horasdelineacion = pst_arraytrabajos[j].horasdelineacion.toFixed(0);
					pst_arraytrabajos[j].horascalculo = Math.round(pst_arraytrabajos[j].horascalculo*100)/100;
					pst_arraytrabajos[j].horascalculo = pst_arraytrabajos[j].horascalculo.toFixed(0);
					pst_arraytrabajos[j].horasrevision = Math.round(pst_arraytrabajos[j].horasrevision*100)/100;
					pst_arraytrabajos[j].horasrevision = pst_arraytrabajos[j].horasrevision.toFixed(0);
					pst_arraytrabajos[j].horasmodificacionobra = Math.round(pst_arraytrabajos[j].horasmodificacionobra*100)/100;
					pst_arraytrabajos[j].horasasistenciaobra = Math.round(pst_arraytrabajos[j].horasasistenciaobra*100)/100;
					pst_arraytrabajos[j].horasasistenciaobra = pst_arraytrabajos[j].horasasistenciaobra.toFixed(0);
					pst_arraytrabajos[j].horasmediciones = Math.round(pst_arraytrabajos[j].horasmediciones*100)/100;
					pst_arraytrabajos[j].horasmediciones = pst_arraytrabajos[j].horasmediciones.toFixed(0);
					pst_arraytrabajos[j].horasotros = Math.round(pst_arraytrabajos[j].horasotros*100)/100;
					pst_arraytrabajos[j].horasotros = pst_arraytrabajos[j].horasotros.toFixed(0);
					
					var celdacodigo = "<th class=\"textoizda " + fila + "\"><a  href=\"ptidos.php\"  id=\"" + pst_arraytrabajos[j].alias + "\">" + pst_arraytrabajos[j].codigo + "</a></th>";
					var celdaalias = "<th class=\"textoizda " + fila + "\">" + pst_arraytrabajos[j].alias + "</th>";
					var celdacliente = "<th class=\"textoizda " + fila + "\">" + pst_arraytrabajos[j].cliente + "</th>";
					var celdaingresos = "<th class=" + fila + "><a id=\"ingresos" + pst_arraytrabajos[j].id + "\" href=\"#popupingreso\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + pst_arraytrabajos[j].ingresos + "</a></th>";										
					var celdabeneficios = "<th class=" + fila + ">" + beneficio + "</th>";
					////////////////////////////////CON PORCENTAJES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
					// var celdasreplanteo = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasreplanteo + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasreplanteo+"</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajereplanteo+"</th>";
					// var celdasdelineacion = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelineacion + "</th><th class=" + fila + ">" +pst_arraytrabajos[j].importehorasdelineacion + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajedelineacion+"</th>";
					// var celdascalculo = "<th class=" + fila + ">" + pst_arraytrabajos[j].horascalculo + "</th><th class=" + fila + ">" +pst_arraytrabajos[j].importehorascalculo + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajecalculo+"</th>";
					// var celdasrevision = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasrevision + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasrevision+"</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajerevision+"</th>";
					// var celdasmodificacionobra = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasmodificacionobra + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasmodificacionobra+"</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajemodificacionobra+"</th>";
					// var celdasasistenciaobra = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasasistenciaobra + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasasistenciaobra+"</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajeasistenciaobra+"</th>";
					// var celdasmediciones = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasmediciones + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasmediciones+"</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajemediciones+"</th>";
					// var celdasotros = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasotros + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasotros+"</th><th class=" + fila + ">"+pst_arraytrabajos[j].porcentajeotros+"</th>";
					// var celdasvisado = "<th class=" + fila + "><a id=\"visadop" + pst_arraytrabajos[j].id + "\" href=\"#popupvarios\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + pst_arraytrabajos[j].visadop + "</a><th class=" + fila + ">" + pst_arraytrabajoporcentajevisadop + "</th>";
					//////////////////////////////SIN PORCENTAJES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
					var asist = "verdepar";
					if (pst_arraytrabajos[j].porcentajeasistenciaobra >15){
						asist = "rojo";
					}else{
						asist = "verde";
					}
					if (fila=="filapar"){
						asist= asist + "filapar";
					}else{
						asist= asist + "filaimpar";
					}
					
					var celdasreplanteo = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasreplanteo + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasreplanteo+"</th>";
					var celdasdelineacion = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelineacion + "</th><th class=" + fila + ">" +pst_arraytrabajos[j].importehorasdelineacion + "</th>";
					var celdascalculo = "<th class=" + fila + ">" + pst_arraytrabajos[j].horascalculo + "</th><th class=" + fila + ">" +pst_arraytrabajos[j].importehorascalculo + "</th>";
					var celdasrevision = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasrevision + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasrevision+"</th>";
					var celdasmodificacionobra = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasmodificacionobra + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasmodificacionobra+"</th>";
					var celdasasistenciaobra = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasasistenciaobra + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasasistenciaobra+"</th><th class=" + asist + " >"+pst_arraytrabajos[j].porcentajeasistenciaobra+"</th>";
					var celdasmediciones = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasmediciones + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasmediciones+"</th>";
					var celdasotros = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasotros + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasotros+"</th>";
					var celdasvisado = "<th class=" + fila + "><a id=\"visadop" + pst_arraytrabajos[j].id + "\" href=\"#popupvarios\" data-rel=\"popup\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">" + pst_arraytrabajos[j].visadop + "</a>";
					
					var celdastotalgastosdirectos = "</th class=" + fila + "><th class=" + fila + ">"+pst_arraytrabajos[j].importegastosdirectos+"</th>";
					var celdastotalgastosindirectos = "<th class=" + fila + ">"+gastosindirectosimporte+"</th>";
					var celdatotalgastos = "<th class=" + fila + ">"+gastostotalimporte+"</th>";
					var ratiobeneficioingreso = 0;
					if (pst_arraytrabajos[j].ingresos *100>0){
						ratiobeneficioingreso = beneficio/pst_arraytrabajos[j].ingresos *100;
					}
					ratiobeneficioingreso = Math.round(ratiobeneficioingreso*100)/100;
					var celdaratiobeneficioingreso = "<th class=" + fila + ">"+ratiobeneficioingreso+" %</th>";
					//var celdas = celdacodigo + celdaalias + celdacliente + celdaingresos + celdabeneficios + celdaratiobeneficioingreso + celdatotalgastos + celdastotalgastosindirectos + celdastotalgastosdirectos  + celdasreplanteo + celdasdelineacion + celdascalculo + celdasrevision + celdasmodificacionobra + celdasasistenciaobra + celdasmediciones + celdasotros + celdasvisado;
					var celdas = celdacodigo + celdaalias + celdacliente + celdaingresos + celdabeneficios + celdaratiobeneficioingreso + celdatotalgastos + celdastotalgastosindirectos + celdastotalgastosdirectos  + celdasreplanteo + celdasdelineacion + celdascalculo + celdasrevision + celdasasistenciaobra + celdasmediciones + celdasotros + celdasvisado;
					$("#psttable").append("<tr id=\""+pst_arraytrabajos[j].codigo+"\" class=" + fila + ">" + celdas + "</tr>");
					console.log(pst_arraytrabajos[j].codigo);

				}
				
				$("#" + pst_arraytrabajos[j].alias).on("tap", function(event){
					var local = this.getAttribute('id');
					localStorage.setItem("alias", local);
				});
				$("#ingresos" + pst_arraytrabajos[j].id).on("tap", function(event){
					modid = this.getAttribute('id');
					modid = modid.replace("__", "/").replace("ingresos", "");
					tabla = "tb_trabajos";
				});
				$("#visadop" + pst_arraytrabajos[j].id).on("tap", function(event){
					idtrv = this.getAttribute('id');
					idtrv = idtrv.replace("__", "/").replace("visadop", "");
					websql.tablavarios();
				});
			}
		},
		"guardaringreso" : function() {
			$("#popupingresoboton").on("tap", function() {
				var campo = "INGRESOS";
				var modingresoval = $("#modingreso").val();
				$("#modingreso").val("");
				websql.enviarmod(campo, modingresoval);
			});
		},
		"tablavarios": function(){
			$("#tablavarios .filapar").empty();
			$("#tablavarios .filaimpar").empty();
			var fila = "filapar";
			sumvarios = 0;
			for (j in arraytrv) {
				if (arraytrv[j].codigo == idtrv){
					sumvarios = sumvarios + parseFloat(arraytrv[j].euros);
					if (fila == "filapar") {
						fila = "filaimpar";
					} else {
						fila = "filapar";
					}
					var celdavariostipo = "<th class=\"textoizda " + fila + "\">" + arraytrv[j].tipo + "</th>";
					var celdavarioseuros = "<th class=" + fila + ">" + arraytrv[j].euros + "</th>";
					var celdasvarios = celdavariostipo + celdavarioseuros;
					$("#tablavarios").append("<tr class=" + fila + ">" + celdasvarios + "</tr>");
				}
			}
		},
		"guardarvarios" : function() {
			var tipovarios = "Visado";
			$('#tipovarios input').change(function(event) {
       			tipovarios = $(this).next('label').text();
    		});
			$("#popupvariosboton").on("tap", function() {
				var euros = $("#modeuros").val();
				sumvarios = sumvarios + parseFloat(euros);
				$("#modeuros").val("");
				websql.tablavariosenviar(tipovarios, euros);
			});
		},
		"guardarcoeficientegi" : function() {
			$("#popupgiboton").on("tap", function() {
				var campo = "COEFICIENTE";
				var modgival = $("#modgi").val();
				$("#modgi").val("");
				tabla = "tb_coeficientes";
				modid = 1;
				websql.enviarmod(campo, modgival);
			});
		},
		"filtrohoras": function(){
			$("#filtrourte span").text(horasfecha);
			$("#modfecha").val(horasfecha);
		},
		"guardarfecha" : function() {
			$("#botonurte").on("tap", function() {
				
				horasfecha = $("#modfecha").val();
				fechadosdigitos = horasfecha.substring(2,4);
				$("#psttable .filapar").remove();
				$("#psttable .filaimpar").remove();
				dom.filtrohoras();
				websql.recogergi();
				websql.costeusuarios();
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
				url : 'pst_trabajos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestatrabajos) {
					pst_arraytrabajos = respuestatrabajos;
					
					websql.horastrabajo();
					console.log(respuestatrabajos);

				}
			});
		},
		"horastrabajo" : function() {
			$.ajax({
				url : 'server/pst_urte.php',
				type : 'post',
				dataType : "json",
				data : {
					"horasfecha" : fechadosdigitos
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(respuestahorastrabajo) {
					pst_arrayhorastrabajo = respuestahorastrabajo;

					for (i in pst_arrayhorastrabajo) {
												
						for (j in pst_arraycosteusuariosxfecha) {
							if (pst_arraycosteusuariosxfecha[j].fechafin=="0000-00-00"){
							pst_arraycosteusuariosxfecha[j].fechafin=formatDate(Date());
						}
							
								if(pst_arrayhorastrabajo[i].fecha<=pst_arraycosteusuariosxfecha[j].fechafin && pst_arrayhorastrabajo[i].fecha>=pst_arraycosteusuariosxfecha[j].fechaini && pst_arrayhorastrabajo[i].usuario.trim()==pst_arraycosteusuariosxfecha[j].usuario.trim() ){
								pst_arrayhorastrabajo[i].coste=pst_arraycosteusuariosxfecha[j].coste;
								
								}	
							
							
														
						}
						
					}
				dom.trabajos();
				}
			});
		},
		"costeusuarios": function(){
			$.ajax({
				url: 'server/pst_costeusuarios.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success: function(respuestacosteusuarios){
					pst_arraycosteusuarios = respuestacosteusuarios;
				}
			});
		},
		"costeusuariosxfecha": function(){
			$.ajax({
				url: 'server/pst_costeusuariosxfecha.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success: function(respuestacosteusuariosxfecha){
					pst_arraycosteusuariosxfecha = respuestacosteusuariosxfecha;
					for (i in pst_arraycosteusuariosxfecha) {
						for (j in pst_arraycosteusuarios) {
							if (pst_arraycosteusuariosxfecha[i].idusuario==pst_arraycosteusuarios[j].id){
								pst_arraycosteusuariosxfecha[i].usuario=pst_arraycosteusuarios[j].usuario;
							}
						}
						
					}
					websql.recogergi();
					console.log(pst_arraycosteusuariosxfecha);
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
					//window.location.href = "pst.php";
					$("#psttable .filapar").remove();
					$("#psttable .filaimpar").remove();
					dom.filtrohoras();
					websql.recogergi();
					websql.costeusuarios();
					

				}
			});
		},
		"tablavarios": function(){
			$.ajax({
				url: 'server/pst_tbtrv.php',
				type : 'post',
				dataType: "json",
				success: function(respuesta){
					arraytrv = respuesta;
					dom.tablavarios();
				}
			});
		},
		"tablavariosenviar": function(tipo,euros){
			$.ajax({
				url : 'server/pst_tbtrvenviar.php',
				type: 'post',
				data: {
					"codigo" : idtrv,
					"tipo": tipo,
					"euros": euros,
				},
				success : function() {
					websql.tablatrabajosenviarvarios();
					
					
				}
			});
		},
		"tablatrabajosenviarvarios": function(){
			$.ajax({
				url : 'server/pst_tbtrenviarvarios.php',
				type: 'post',
				data: {
					"id": idtrv,
					"sumvarios": sumvarios,
				},
				success : function(){
					$("#psttable .filapar").remove();
					$("#psttable .filaimpar").remove();
					dom.filtrohoras();
					websql.recogergi();
					websql.costeusuarios();
				}
			});
		},
		"recogergi": function(){
			$.ajax({
				url: 'server/pst_tbcoef.php',
				type : 'post',
				dataType: "json",
				success: function(respuesta){
					coefgi = respuesta[0].coeficiente;
					websql.trabajos();
					console.log(respuesta);
				}
			});
		},
		//RATIOS/////////////////////////////////
		"facturas": function(){
			$.ajax({
				url: 'server/pfe_facturas',
				type : 'post',
				dataType: "json",
				success: function(respuesta){
					var prueba = respuesta;
					var numclientes = 0;
					
					arrayclientesb = 1;
					arrayclientesb = [];
					console.log(arrayclientesb);
					console.log(numclientes);
					console.log(prueba[0].cliente);
					arrayclientesb.push(prueba[1].cliente);
					console.log(prueba[1].cliente);
					console.log(arrayclientesb);
					
					 //for (i in respuesta){
						 console.log(respuesta[0].id);
						 var mismocliente = "SI";
						 for (j in arrayclientesb){
							 mismocliente="SI"
							 console.log("b");
							// console.log(respuesta[i].cliente);
							 if (arrayclientesb[j].trim()!=respuesta[0].cliente.trim()){
								 mismocliente = "NO";
								 console.log(mismocliente);
							 };
							if (mismocliente=="NO"){
								numclientes = numclientes + 1;
								arrayclientesb[numclientes]=(respuesta[0].cliente);
								
							};
						 };
					 //};
					  console.log(arrayclientesb);
					 //for (i in respuesta){
						 console.log(respuesta[1].id);
						 var mismocliente = "SI";
						 for (j in arrayclientesb){
							 mismocliente="SI"
							 console.log("b");
							// console.log(respuesta[i].cliente);
							 if (arrayclientesb[j].trim()!=respuesta[1].cliente.trim()){
								 mismocliente = "NO";
								 console.log(mismocliente);
							 };
							if (mismocliente=="NO"){
								numclientes = numclientes + 1;
								arrayclientesb[numclientes]=(respuesta[1].cliente);
								mismocliente="SI"
							};
						 };
					 //};
					  console.log(arrayclientesb);
					 //for (i in respuesta){
						 console.log(respuesta[2].id);
						 var mismocliente = "SI";
						 for (j in arrayclientesb){
							 mismocliente="SI"
							 console.log("b");
							// console.log(respuesta[i].cliente);
							 if (arrayclientesb[j].trim()!=respuesta[2].cliente.trim()){
								 mismocliente = "NO";
								 console.log(mismocliente);
							 };
							if (mismocliente=="NO"){
								numclientes = numclientes + 1;
								arrayclientesb[numclientes]=(respuesta[2].cliente);
								mismocliente="SI"
							};
							console.log(mismocliente);
						 };
						 console.log(arrayclientesb);
						 console.log(arrayclientesb);
					 //};
					  //for (i in respuesta){
						  // console.log(respuesta[3].id);
						 // var mismocliente = "SI";
						 // for (j in arrayclientes){
							 // console.log("b");
							//console.log(respuesta[i].cliente);
							 // if (arrayclientes[j].trim()!=respuesta[3].cliente.trim()){
								 // mismocliente = "NO";
								 // console.log(mismocliente);
							 // };
							// if (mismocliente=="NO"){
								// numclientes = numclientes + 1;
								// arrayclientes[numclientes]=(respuesta[3].cliente);
							// };
						 // };
						  //for (i in respuesta){
						  // console.log(respuesta[10].id);
						 // var mismocliente = "SI";
						 // for (j in arrayclientes){
							 // console.log("b");
							//console.log(respuesta[i].cliente);
							 // if (arrayclientes[j].trim()!=respuesta[10].cliente.trim()){
								 // mismocliente = "NO";
								 // console.log(mismocliente);
							 // };
							// if (mismocliente=="NO"){
								// numclientes = numclientes + 1;
								// arrayclientes[numclientes]=(respuesta[10].cliente);
							// };
						 // };
					 //};
					 //};
					 //console.log(arrayclientes);
				}
			});
		},
	};
	///////////////////////////////////////////
	function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
	}
	//RATIOS/////////////////////////////////
	var arrayclientesb;
	
	////////////////////////////////////////////////
	pst_arraytrabajos = [];
	pst_arrayhorastrabajo = [];
	pst_arraycosteusuarios= [];
	pst_arraycosteusuariosxfecha= [];
	var tabla;
	var modid;
	var arraytrv = [];
	var idtrv;
	var sumvarios;
	var coefgi;
	dom.guardaringreso();
	dom.guardarvarios();
	dom.guardarcoeficientegi();
	
	websql.costeusuarios();
	websql.costeusuariosxfecha();
	
	var currentTime = new Date()
	var horasfecha = currentTime.getFullYear();
	var fechadosdigitos = $("#filtrourte").text();
	fechadosdigitos = fechadosdigitos.substring(2,4);
	dom.filtrohoras();
	dom.guardarfecha();
	dom.cambiarfecha();
	websql.facturas();
	
});
