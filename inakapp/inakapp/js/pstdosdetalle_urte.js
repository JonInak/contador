$(document).delegate('#pstdosdetalle', 'pagecreate', function() {
	var dom = {
		"trabajos" : function() {
			for (i in pst_arrayhorastrabajo) {
				if(pst_arrayhorastrabajo[i].usuario.trim() != "gorka" ){
					
				
				
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
						if ("Del-Cambios" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasdelcambios= parseFloat(pst_arraytrabajos[j].horasdelcambios) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelcambios = parseFloat(pst_arraytrabajos[j].importehorasdelcambios) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Del-ContenciónEspecial" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasdelcontencionespecial= parseFloat(pst_arraytrabajos[j].horasdelcontencionespecial) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelcontencionespecial = parseFloat(pst_arraytrabajos[j].importehorasdelcontencionespecial) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Del-ElementosDetalles" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasdelelementosdetalles= parseFloat(pst_arraytrabajos[j].horasdelelementosdetalles) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelelementosdetalles = parseFloat(pst_arraytrabajos[j].importehorasdelelementosdetalles) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Del-Refuerzos" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasdelrefuerzos= parseFloat(pst_arraytrabajos[j].horasdelrefuerzos) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelrefuerzos = parseFloat(pst_arraytrabajos[j].importehorasdelrefuerzos) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Del-ReplanteoPresentaciones" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasreplanteopresentaciones= parseFloat(pst_arraytrabajos[j].horasreplanteopresentaciones) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasreplanteopresentaciones = parseFloat(pst_arraytrabajos[j].importehorasreplanteopresentaciones) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Del-Revisión" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasdelrevisión= parseFloat(pst_arraytrabajos[j].horasdelrevisión) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelrevisión = parseFloat(pst_arraytrabajos[j].importehorasdelrevisión) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Del-SuperpuestoEstructura" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasdelsuperpuestoestructura= parseFloat(pst_arraytrabajos[j].horasdelsuperpuestoestructura) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasdelsuperpuestoestructura = parseFloat(pst_arraytrabajos[j].importehorasdelsuperpuestoestructura) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Ing-Cálculo" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasingcalculo= parseFloat(pst_arraytrabajos[j].horasingcalculo) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasingcalculo = parseFloat(pst_arraytrabajos[j].importehorasingcalculo) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Ing-Cambios" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasingcambios= parseFloat(pst_arraytrabajos[j].horasingcambios) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasingcambios = parseFloat(pst_arraytrabajos[j].importehorasingcambios) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Ing-ContenciónEspecial" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasingcontenciónespecial= parseFloat(pst_arraytrabajos[j].horasingcontenciónespecial) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasingcontenciónespecial = parseFloat(pst_arraytrabajos[j].importehorasingcontenciónespecial) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Ing-Revisión" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasingrevisión= parseFloat(pst_arraytrabajos[j].horasingrevisión) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasingrevisión = parseFloat(pst_arraytrabajos[j].importehorasingrevisión) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Gen-Ampliación" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasgenampliación= parseFloat(pst_arraytrabajos[j].horasgenampliación) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasgenampliación = parseFloat(pst_arraytrabajos[j].importehorasgenampliación) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Gen-AsistenciaObra" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasgenasistenciaobra= parseFloat(pst_arraytrabajos[j].horasgenasistenciaobra) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasgenasistenciaobra = parseFloat(pst_arraytrabajos[j].importehorasgenasistenciaobra) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Gen-AsistenciaObraContenciónEspecial" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasgenasistenciaobraOE= parseFloat(pst_arraytrabajos[j].horasgenasistenciaobraOE) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasgenasistenciaobraOE = parseFloat(pst_arraytrabajos[j].importehorasgenasistenciaobraOE) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Gen-Mediciones" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasgenmediciones= parseFloat(pst_arraytrabajos[j].horasgenmediciones) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasgenmediciones = parseFloat(pst_arraytrabajos[j].importehorasgenmediciones) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Gen-MedicionesContenciónEspecial" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasgenmedicionesCE= parseFloat(pst_arraytrabajos[j].horasgenmedicionesCE) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasgenmedicionesCE = parseFloat(pst_arraytrabajos[j].importehorasgenmedicionesCE) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
						if ("Gen-Otros" == pst_arrayhorastrabajo[i].detalle.substring(0,pst_arrayhorastrabajo[i].detalle.search(":"))) {
							pst_arraytrabajos[j].horasgenotros= parseFloat(pst_arraytrabajos[j].horasgenotros) + parseFloat(pst_arrayhorastrabajo[i].horas);
							pst_arraytrabajos[j].importehorasgenotros = parseFloat(pst_arraytrabajos[j].importehorasgenotros) + parseFloat(pst_arrayhorastrabajo[i].horas*parseFloat(pst_arrayhorastrabajo[i].coste));							
						}
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
				
				pst_arraytrabajos[j].importehorasdelcambios = pst_arraytrabajos[j].importehorasdelcambios.toFixed(0);
				pst_arraytrabajos[j].importehorasdelcontencionespecial = pst_arraytrabajos[j].importehorasdelcontencionespecial.toFixed(0);
				pst_arraytrabajos[j].importehorasdelelementosdetalles = pst_arraytrabajos[j].importehorasdelelementosdetalles.toFixed(0);
				pst_arraytrabajos[j].importehorasdelrefuerzos = pst_arraytrabajos[j].importehorasdelrefuerzos.toFixed(0);
				pst_arraytrabajos[j].importehorasreplanteopresentaciones = pst_arraytrabajos[j].importehorasreplanteopresentaciones.toFixed(0);
				pst_arraytrabajos[j].importehorasdelrevisión = pst_arraytrabajos[j].importehorasdelrevisión.toFixed(0);
				pst_arraytrabajos[j].importehorasdelsuperpuestoestructura = pst_arraytrabajos[j].importehorasdelsuperpuestoestructura.toFixed(0);
				pst_arraytrabajos[j].importehorasingcalculo = pst_arraytrabajos[j].importehorasingcalculo.toFixed(0);
				pst_arraytrabajos[j].importehorasingcambios = pst_arraytrabajos[j].importehorasingcambios.toFixed(0);
				pst_arraytrabajos[j].importehorasingcontenciónespecial = pst_arraytrabajos[j].importehorasingcontenciónespecial.toFixed(0);
				pst_arraytrabajos[j].importehorasingrevisión = pst_arraytrabajos[j].importehorasingrevisión.toFixed(0);
				pst_arraytrabajos[j].importehorasgenampliación = pst_arraytrabajos[j].importehorasgenampliación.toFixed(0);
				pst_arraytrabajos[j].importehorasgenasistenciaobra = pst_arraytrabajos[j].importehorasgenasistenciaobra.toFixed(0);
				pst_arraytrabajos[j].importehorasgenasistenciaobraOE = pst_arraytrabajos[j].importehorasgenasistenciaobraOE.toFixed(0);
				pst_arraytrabajos[j].importehorasgenmediciones = pst_arraytrabajos[j].importehorasgenmediciones.toFixed(0);
				pst_arraytrabajos[j].importehorasgenmedicionesCE = pst_arraytrabajos[j].importehorasgenmedicionesCE.toFixed(0);
				pst_arraytrabajos[j].importehorasgenotros = pst_arraytrabajos[j].importehorasgenotros.toFixed(0);
				
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
				//if ((pst_arraytrabajos[j].horas != 0) && (pst_arraytrabajos[j].codigo[0]!="A") ) {
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
					
					if (pst_arraytrabajos[j].horasdelcambios == 0.00){pst_arraytrabajos[j].horasdelcambios="";}					
					if (pst_arraytrabajos[j].importehorasdelcambios == 0.00){pst_arraytrabajos[j].importehorasdelcambios="";}
					if (pst_arraytrabajos[j].horasdelcontencionespecial == 0.00){pst_arraytrabajos[j].horasdelcontencionespecial="";}					
					if (pst_arraytrabajos[j].importehorasdelcontencionespecial == 0.00){pst_arraytrabajos[j].importehorasdelcontencionespecial="";}
					if (pst_arraytrabajos[j].horasdelelementosdetalles == 0.00){pst_arraytrabajos[j].horasdelelementosdetalles="";}					
					if (pst_arraytrabajos[j].importehorasdelelementosdetalles == 0.00){pst_arraytrabajos[j].importehorasdelelementosdetalles="";}
					if (pst_arraytrabajos[j].horasdelrefuerzos == 0.00){pst_arraytrabajos[j].horasdelrefuerzos="";}					
					if (pst_arraytrabajos[j].importehorasdelrefuerzos == 0.00){pst_arraytrabajos[j].importehorasdelrefuerzos="";}
					if (pst_arraytrabajos[j].horasreplanteopresentaciones == 0.00){pst_arraytrabajos[j].horasreplanteopresentaciones="";}					
					if (pst_arraytrabajos[j].importehorasreplanteopresentaciones == 0.00){pst_arraytrabajos[j].importehorasreplanteopresentaciones="";}
					if (pst_arraytrabajos[j].horasdelrevisión == 0.00){pst_arraytrabajos[j].horasdelrevisión="";}					
					if (pst_arraytrabajos[j].importehorasdelrevisión == 0.00){pst_arraytrabajos[j].importehorasdelrevisión="";}
					if (pst_arraytrabajos[j].horasdelsuperpuestoestructura == 0.00){pst_arraytrabajos[j].horasdelsuperpuestoestructura="";}					
					if (pst_arraytrabajos[j].importehorasdelsuperpuestoestructura == 0.00){pst_arraytrabajos[j].importehorasdelsuperpuestoestructura="";}
					if (pst_arraytrabajos[j].horasingcalculo == 0.00){pst_arraytrabajos[j].horasingcalculo="";}					
					if (pst_arraytrabajos[j].importehorasingcalculo == 0.00){pst_arraytrabajos[j].importehorasingcalculo="";}
					if (pst_arraytrabajos[j].horasingcambios == 0.00){pst_arraytrabajos[j].horasingcambios="";}					
					if (pst_arraytrabajos[j].importehorasingcambios == 0.00){pst_arraytrabajos[j].importehorasingcambios="";}
					if (pst_arraytrabajos[j].horasingcontenciónespecial == 0.00){pst_arraytrabajos[j].horasingcontenciónespecial="";}					
					if (pst_arraytrabajos[j].importehorasingcontenciónespecial == 0.00){pst_arraytrabajos[j].importehorasingcontenciónespecial="";}
					if (pst_arraytrabajos[j].horasingrevisión == 0.00){pst_arraytrabajos[j].horasingrevisión="";}					
					if (pst_arraytrabajos[j].importehorasingrevisión == 0.00){pst_arraytrabajos[j].importehorasingrevisión="";}
					if (pst_arraytrabajos[j].horasgenampliación == 0.00){pst_arraytrabajos[j].horasgenampliación="";}					
					if (pst_arraytrabajos[j].importehorasgenampliación == 0.00){pst_arraytrabajos[j].importehorasgenampliación="";}
					if (pst_arraytrabajos[j].horasgenasistenciaobra == 0.00){pst_arraytrabajos[j].horasgenasistenciaobra="";}					
					if (pst_arraytrabajos[j].importehorasgenasistenciaobra == 0.00){pst_arraytrabajos[j].importehorasgenasistenciaobra="";}
					if (pst_arraytrabajos[j].horasgenasistenciaobraOE == 0.00){pst_arraytrabajos[j].horasgenasistenciaobraOE="";}					
					if (pst_arraytrabajos[j].importehorasgenasistenciaobraOE == 0.00){pst_arraytrabajos[j].importehorasgenasistenciaobraOE="";}
					if (pst_arraytrabajos[j].horasgenmediciones == 0.00){pst_arraytrabajos[j].horasgenmediciones="";}					
					if (pst_arraytrabajos[j].importehorasgenmediciones == 0.00){pst_arraytrabajos[j].importehorasgenmediciones="";}
					if (pst_arraytrabajos[j].horasgenmedicionesCE == 0.00){pst_arraytrabajos[j].horasgenmedicionesCE="";}					
					if (pst_arraytrabajos[j].importehorasgenmedicionesCE == 0.00){pst_arraytrabajos[j].importehorasgenmedicionesCE="";}
					if (pst_arraytrabajos[j].horasgenotros == 0.00){pst_arraytrabajos[j].horasgenotros="";}					
					if (pst_arraytrabajos[j].importehorasgenotros == 0.00){pst_arraytrabajos[j].importehorasgenotros="";}
					
					
					
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
					
					pst_arraytrabajos[j].horasdelcambios = Math.round(pst_arraytrabajos[j].horasdelcambios*100)/100;
					pst_arraytrabajos[j].horasdelcambios = pst_arraytrabajos[j].horasdelcambios.toFixed(0);
					pst_arraytrabajos[j].horasdelcontencionespecial = Math.round(pst_arraytrabajos[j].horasdelcontencionespecial*100)/100;
					pst_arraytrabajos[j].horasdelcontencionespecial = pst_arraytrabajos[j].horasdelcontencionespecial.toFixed(0);
					pst_arraytrabajos[j].horasdelelementosdetalles = Math.round(pst_arraytrabajos[j].horasdelelementosdetalles*100)/100;
					pst_arraytrabajos[j].horasdelelementosdetalles = pst_arraytrabajos[j].horasdelelementosdetalles.toFixed(0);
					pst_arraytrabajos[j].horasdelrefuerzos = Math.round(pst_arraytrabajos[j].horasdelrefuerzos*100)/100;
					pst_arraytrabajos[j].horasdelrefuerzos = pst_arraytrabajos[j].horasdelrefuerzos.toFixed(0);
					pst_arraytrabajos[j].horasreplanteopresentaciones = Math.round(pst_arraytrabajos[j].horasreplanteopresentaciones*100)/100;
					pst_arraytrabajos[j].horasreplanteopresentaciones = pst_arraytrabajos[j].horasreplanteopresentaciones.toFixed(0);
					pst_arraytrabajos[j].horasdelrevisión = Math.round(pst_arraytrabajos[j].horasdelrevisión*100)/100;
					pst_arraytrabajos[j].horasdelrevisión = pst_arraytrabajos[j].horasdelrevisión.toFixed(0);
					pst_arraytrabajos[j].horasdelsuperpuestoestructura = Math.round(pst_arraytrabajos[j].horasdelsuperpuestoestructura*100)/100;
					pst_arraytrabajos[j].horasdelsuperpuestoestructura = pst_arraytrabajos[j].horasdelsuperpuestoestructura.toFixed(0);
					pst_arraytrabajos[j].horasingcalculo = Math.round(pst_arraytrabajos[j].horasingcalculo*100)/100;
					pst_arraytrabajos[j].horasingcalculo = pst_arraytrabajos[j].horasingcalculo.toFixed(0);
					pst_arraytrabajos[j].horasingcambios = Math.round(pst_arraytrabajos[j].horasingcambios*100)/100;
					pst_arraytrabajos[j].horasingcambios = pst_arraytrabajos[j].horasingcambios.toFixed(0);
					pst_arraytrabajos[j].horasingcontenciónespecial = Math.round(pst_arraytrabajos[j].horasingcontenciónespecial*100)/100;
					pst_arraytrabajos[j].horasingcontenciónespecial = pst_arraytrabajos[j].horasingcontenciónespecial.toFixed(0);
					pst_arraytrabajos[j].horasingrevisión = Math.round(pst_arraytrabajos[j].horasingrevisión*100)/100;
					pst_arraytrabajos[j].horasingrevisión = pst_arraytrabajos[j].horasingrevisión.toFixed(0);
					pst_arraytrabajos[j].horasgenampliación = Math.round(pst_arraytrabajos[j].horasgenampliación*100)/100;
					pst_arraytrabajos[j].horasgenampliación = pst_arraytrabajos[j].horasgenampliación.toFixed(0);
					pst_arraytrabajos[j].horasgenasistenciaobra = Math.round(pst_arraytrabajos[j].horasgenasistenciaobra*100)/100;
					pst_arraytrabajos[j].horasgenasistenciaobra = pst_arraytrabajos[j].horasgenasistenciaobra.toFixed(0);
					pst_arraytrabajos[j].horasgenasistenciaobraOE = Math.round(pst_arraytrabajos[j].horasgenasistenciaobraOE*100)/100;
					pst_arraytrabajos[j].horasgenasistenciaobraOE = pst_arraytrabajos[j].horasgenasistenciaobraOE.toFixed(0);
					pst_arraytrabajos[j].horasgenmediciones = Math.round(pst_arraytrabajos[j].horasgenmediciones*100)/100;
					pst_arraytrabajos[j].horasgenmediciones = pst_arraytrabajos[j].horasgenmediciones.toFixed(0);
					pst_arraytrabajos[j].horasgenmedicionesCE = Math.round(pst_arraytrabajos[j].horasgenmedicionesCE*100)/100;
					pst_arraytrabajos[j].horasgenmedicionesCE = pst_arraytrabajos[j].horasgenmedicionesCE.toFixed(0);
					pst_arraytrabajos[j].horasgenotros = Math.round(pst_arraytrabajos[j].horasgenotros*100)/100;
					pst_arraytrabajos[j].horasgenotros = pst_arraytrabajos[j].horasgenotros.toFixed(0);
					
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
					
					var celdasdelcambios = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelcambios + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasdelcambios+"</th>";
					var celdasdelcontencionespecial = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelcontencionespecial + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasdelcontencionespecial+"</th>";
					var celdasdelelementosdetalles = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelelementosdetalles + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasdelelementosdetalles+"</th>";
					var celdasdelrefuerzos = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelrefuerzos + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasdelrefuerzos+"</th>";
					var celdasreplanteopresentaciones = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasreplanteopresentaciones + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasreplanteopresentaciones+"</th>";
					var celdasdelrevisión = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelrevisión + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasdelrevisión+"</th>";
					var celdasdelsuperpuestoestructura = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasdelsuperpuestoestructura + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasdelsuperpuestoestructura+"</th>";
					var celdasingcalculo = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasingcalculo + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasingcalculo+"</th>";
					var celdasingcambios = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasingcambios + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasingcambios+"</th>";
					var celdasingcontenciónespecial = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasingcontenciónespecial + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasingcontenciónespecial+"</th>";
					var celdasingrevisión = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasingrevisión + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasingrevisión+"</th>";
					var celdasgenampliación = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasgenampliación + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasgenampliación+"</th>";
					var celdasgenasistenciaobra = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasgenasistenciaobra + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasgenasistenciaobra+"</th>";
					var celdasgenasistenciaobraOE = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasgenasistenciaobraOE + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasgenasistenciaobraOE+"</th>";
					var celdasgenmediciones = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasgenmediciones + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasgenmediciones+"</th>";
					var celdasgenmedicionesCE = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasgenmedicionesCE + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasgenmedicionesCE+"</th>";
					var celdasgenotros = "<th class=" + fila + ">" + pst_arraytrabajos[j].horasgenotros + "</th><th class=" + fila + ">"+pst_arraytrabajos[j].importehorasgenotros+"</th>";
					
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
					//var celdas = celdacodigo + celdaalias + celdacliente + celdaingresos + celdabeneficios + celdaratiobeneficioingreso + celdatotalgastos + celdastotalgastosindirectos + celdastotalgastosdirectos  + celdasreplanteo + celdasdelineacion + celdascalculo + celdasrevision + celdasasistenciaobra + celdasmediciones + celdasotros + celdasvisado 
					//			+ celdasdelcambios+ celdasdelcontencionespecial+ celdasdelelementosdetalles+ celdasdelrefuerzos+ celdasreplanteopresentaciones+ celdasdelrevisión+ celdasdelsuperpuestoestructura+ celdasingcalculo+ celdasingcambios+ celdasingcontenciónespecial+ celdasingrevisión+ celdasgenampliación+ celdasgenasistenciaobra+ celdasgenasistenciaobraOE+ celdasgenmediciones+ celdasgenmedicionesCE+ celdasgenotros;
					var celdas = celdacodigo + celdaalias + celdacliente + celdaingresos + celdabeneficios + celdaratiobeneficioingreso + celdatotalgastos + celdastotalgastosindirectos + celdastotalgastosdirectos + celdasvisado 
								+ celdasdelcambios+ celdasdelcontencionespecial+ celdasdelelementosdetalles+ celdasdelrefuerzos+ celdasreplanteopresentaciones+ celdasdelrevisión+ celdasdelsuperpuestoestructura+ celdasingcalculo+ celdasingcambios+ celdasingcontenciónespecial+ celdasingrevisión+ celdasgenampliación+ celdasgenasistenciaobra+ celdasgenasistenciaobraOE+ celdasgenmediciones+ celdasgenmedicionesCE+ celdasgenotros;
					$("#psttable").append("<tr id=\""+pst_arraytrabajos[j].codigo+"\" class=" + fila + ">" + celdas + "</tr>");
					

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
				urte=horasfecha;
				fechadosdigitos = horasfecha.substring(2,4);
				$("#psttable .filapar").remove();
				$("#psttable .filaimpar").remove();
				dom.filtrohoras();
				// websql.recogergi();
				websql.gastosindirectos();
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
				url : 'server/pst_trabajosdetalle.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestatrabajos) {
					pst_arraytrabajos = respuestatrabajos;
					websql.horastrabajo();
					

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
									// if(pst_arrayhorastrabajo[i].usuario.trim() == "mayra" {
										// if(pst_arrayhorastrabajo[i].fecha.split(-).[0]=="2018" {
										// pst_arrayhorastrabajo[i].coste=26.91;
										
										// }else{
											// if(pst_arrayhorastrabajo[i].proyecto.trim() == "Termibus"{
												// pst_arrayhorastrabajo[i].coste=25;
												// console.log("a");
											// }else{
												// pst_arrayhorastrabajo[i].coste=22.5;
											// }
										// }
										
										
									// }else{
										// pst_arrayhorastrabajo[i].coste=pst_arraycosteusuariosxfecha[j].coste;
									// }
									
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
					// websql.recogergi();
					websql.gastosindirectos();
					
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
					// websql.recogergi();
					websql.gastosindirectos();
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
					//websql.recogergi();
					websql.gastosindirectos();
					websql.costeusuarios();
				}
			});
		},
		// "recogergi": function(){
			// $.ajax({
				// url: 'server/pst_tbcoef.php',
				// type : 'post',
				// dataType: "json",
				// success: function(respuesta){
					// coefgi = respuesta[0].coeficiente;
					// websql.trabajos();
					// console.log(respuesta);
				// }
			// });
		// },
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
					for (i in p_arraygi){
						if (p_arraygi[i].urte==urte){
							coefgi=p_arraygi[i].coefgi;
						}
					}
					websql.trabajos();					
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
	var urte ="";
	urte=fechadosdigitos;
	fechadosdigitos = fechadosdigitos.substring(2,4);
	dom.filtrohoras();
	dom.guardarfecha();
	dom.cambiarfecha();
	var p_arraygi;
	
});
