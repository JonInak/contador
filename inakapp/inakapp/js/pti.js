$(document).delegate('#pti', 'pagecreate', function() {
	var dom = {
		"trabajo" : function(codigoinakdiv) {
			pti_horas = {
				"jon" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"esti" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"marcos" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"markel" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"joanes" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"david" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"oscar" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"unai" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"ainhoa" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"jose" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"andoni" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"ziortza" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"alaitz" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
				"eli" : {
					"delineacion" : 0,
					"delineacionimporte" : 0,
					"delineacionporcentaje" : 0,
					"replanteo" : 0,
					"replanteoimporte" : 0,
					"replanteoporcentaje" : 0,
					"calculo" : 0,
					"calculoimporte" : 0,
					"calculoporcentaje" : 0,
					"revision" : 0,
					"revisionimporte" : 0,
					"revisionporcentaje" : 0,
					"modificacion" : 0,
					"modificacionimporte" : 0,
					"modificacionporcentaje" : 0,
					"asistencia": 0,
					"asistenciaimporte": 0,
					"asistenciaporcentaje": 0,
					"mediciones": 0,
					"medicionesimporte": 0,
					"medicionesporcentaje": 0,
					"otros": 0,
					"otrosimporte": 0,
					"otrosporcentaje": 0,
					"horastotal": 0,
					"importetotal": 0,
				},
			};
			for (i in pti_arrayhorastrabajofiltro) {
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Replanteo") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.replanteo = parseFloat(pti_horas.unai.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.replanteoimporte = parseFloat(pti_horas.unai.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.replanteo = parseFloat(pti_horas.david.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.replanteoimporte = parseFloat(pti_horas.david.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.replanteo = parseFloat(pti_horas.jon.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.replanteoimporte = parseFloat(pti_horas.jon.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.replanteo = parseFloat(pti_horas.oscar.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.replanteoimporte = parseFloat(pti_horas.oscar.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.replanteo = parseFloat(pti_horas.esti.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.replanteoimporte = parseFloat(pti_horas.esti.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.replanteo = parseFloat(pti_horas.marcos.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.replanteoimporte = parseFloat(pti_horas.marcos.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.replanteo = parseFloat(pti_horas.markel.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.replanteoimporte = parseFloat(pti_horas.markel.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.replanteo = parseFloat(pti_horas.joanes.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.replanteoimporte = parseFloat(pti_horas.joanes.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;	
						case "ainhoa":
							pti_horas.ainhoa.replanteo = parseFloat(pti_horas.ainhoa.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.replanteoimporte = parseFloat(pti_horas.ainhoa.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.replanteo = parseFloat(pti_horas.jose.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.replanteoimporte = parseFloat(pti_horas.jose.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
						break;
						case "andoni":
							pti_horas.andoni.replanteo = parseFloat(pti_horas.andoni.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.replanteoimporte = parseFloat(pti_horas.andoni.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.replanteo = parseFloat(pti_horas.ziortza.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.replanteoimporte = parseFloat(pti_horas.ziortza.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.replanteo = parseFloat(pti_horas.alaitz.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.replanteoimporte = parseFloat(pti_horas.alaitz.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.replanteo = parseFloat(pti_horas.udane.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.replanteoimporte = parseFloat(pti_horas.udane.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.replanteo = parseFloat(pti_horas.eli.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.replanteoimporte = parseFloat(pti_horas.eli.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}

				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Delineación") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.delineacion = parseFloat(pti_horas.unai.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.delineacionimporte = parseFloat(pti_horas.unai.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							//pst_arraytrabajos[j].importehorasdelineacion = parseFloat(pst_arraytrabajos[j].importehorasdelineacion) + parseFloat(pst_arrayhorastrabajo[i].horas * pst_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.delineacion = parseFloat(pti_horas.david.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.delineacionimporte = parseFloat(pti_horas.david.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.delineacion = parseFloat(pti_horas.jon.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.delineacionimporte = parseFloat(pti_horas.jon.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.delineacion = parseFloat(pti_horas.oscar.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.delineacionimporte = parseFloat(pti_horas.oscar.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.delineacion = parseFloat(pti_horas.esti.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.delineacionimporte = parseFloat(pti_horas.esti.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.delineacion = parseFloat(pti_horas.marcos.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.delineacionimporte = parseFloat(pti_horas.marcos.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.delineacion = parseFloat(pti_horas.markel.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.delineacionimporte = parseFloat(pti_horas.markel.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.delineacion = parseFloat(pti_horas.joanes.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.delineacionimporte = parseFloat(pti_horas.joanes.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.delineacion = parseFloat(pti_horas.ainhoa.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.delineacionimporte = parseFloat(pti_horas.ainhoa.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.delineacion = parseFloat(pti_horas.jose.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.delineacionimporte = parseFloat(pti_horas.jose.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
							break;
						case "andoni":
							pti_horas.andoni.delineacion = parseFloat(pti_horas.andoni.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.delineacionimporte = parseFloat(pti_horas.andoni.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.delineacion = parseFloat(pti_horas.ziortza.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.delineacionimporte = parseFloat(pti_horas.ziortza.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.delineacion = parseFloat(pti_horas.alaitz.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.delineacionimporte = parseFloat(pti_horas.alaitz.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.delineacion = parseFloat(pti_horas.udane.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.delineacionimporte = parseFloat(pti_horas.udane.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.delineacion = parseFloat(pti_horas.eli.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.delineacionimporte = parseFloat(pti_horas.eli.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}

				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Cálculo") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.calculo = parseFloat(pti_horas.unai.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.calculoimporte = parseFloat(pti_horas.unai.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.calculo = parseFloat(pti_horas.david.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.calculoimporte = parseFloat(pti_horas.david.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.calculo = parseFloat(pti_horas.jon.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.calculoimporte = parseFloat(pti_horas.jon.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.calculo = parseFloat(pti_horas.oscar.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.calculoimporte = parseFloat(pti_horas.oscar.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.calculo = parseFloat(pti_horas.esti.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.calculoimporte = parseFloat(pti_horas.esti.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.calculo = parseFloat(pti_horas.marcos.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.calculoimporte = parseFloat(pti_horas.marcos.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.calculo = parseFloat(pti_horas.markel.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.calculoimporte = parseFloat(pti_horas.markel.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.calculo = parseFloat(pti_horas.joanes.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.calculoimporte = parseFloat(pti_horas.joanes.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.calculo = parseFloat(pti_horas.ainhoa.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.calculoimporte = parseFloat(pti_horas.ainhoa.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.calculo = parseFloat(pti_horas.jose.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.calculoimporte = parseFloat(pti_horas.jose.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
						break;
						case "andoni":
							pti_horas.andoni.calculo = parseFloat(pti_horas.andoni.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.calculoimporte = parseFloat(pti_horas.andoni.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.calculo = parseFloat(pti_horas.ziortza.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.calculoimporte = parseFloat(pti_horas.ziortza.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.calculo = parseFloat(pti_horas.alaitz.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.calculoimporte = parseFloat(pti_horas.alaitz.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.calculo = parseFloat(pti_horas.udane.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.calculoimporte = parseFloat(pti_horas.udane.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.calculo = parseFloat(pti_horas.eli.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.calculoimporte = parseFloat(pti_horas.eli.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Revisión") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.revision = parseFloat(pti_horas.unai.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.revisionimporte = parseFloat(pti_horas.unai.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.revision = parseFloat(pti_horas.david.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.revisionimporte = parseFloat(pti_horas.david.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.revision = parseFloat(pti_horas.jon.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.revisionimporte = parseFloat(pti_horas.jon.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.revision = parseFloat(pti_horas.oscar.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.revisionimporte = parseFloat(pti_horas.oscar.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.revision = parseFloat(pti_horas.esti.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.revisionimporte = parseFloat(pti_horas.esti.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.revision = parseFloat(pti_horas.marcos.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.revisionimporte = parseFloat(pti_horas.marcos.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.revision = parseFloat(pti_horas.markel.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.revisionimporte = parseFloat(pti_horas.markel.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.revision = parseFloat(pti_horas.joanes.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.revisionimporte = parseFloat(pti_horas.joanes.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.revision = parseFloat(pti_horas.ainhoa.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.revisionimporte = parseFloat(pti_horas.ainhoa.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.revision = parseFloat(pti_horas.jose.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.revisionimporte = parseFloat(pti_horas.jose.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
						break;
						case "andoni":
							pti_horas.andoni.revision = parseFloat(pti_horas.andoni.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.revisionimporte = parseFloat(pti_horas.andoni.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.revision = parseFloat(pti_horas.ziortza.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.revisionimporte = parseFloat(pti_horas.ziortza.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.revision = parseFloat(pti_horas.alaitz.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.revisionimporte = parseFloat(pti_horas.alaitz.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.revision = parseFloat(pti_horas.udane.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.revisionimporte = parseFloat(pti_horas.udane.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.revision = parseFloat(pti_horas.eli.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.revisionimporte = parseFloat(pti_horas.eli.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "ModificaciónObra") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.modificacion = parseFloat(pti_horas.unai.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.modificacionimporte = parseFloat(pti_horas.unai.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.modificacion = parseFloat(pti_horas.david.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.modificacionimporte = parseFloat(pti_horas.david.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.modificacion = parseFloat(pti_horas.jon.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.modificacionimporte = parseFloat(pti_horas.jon.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.modificacion = parseFloat(pti_horas.oscar.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.modificacionimporte = parseFloat(pti_horas.oscar.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.modificacion = parseFloat(pti_horas.esti.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.modificacionimporte = parseFloat(pti_horas.esti.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.modificacion = parseFloat(pti_horas.marcos.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.modificacionimporte = parseFloat(pti_horas.marcos.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.modificacion = parseFloat(pti_horas.markel.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.modificacionimporte = parseFloat(pti_horas.markel.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.modificacion = parseFloat(pti_horas.joanes.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.modificacionimporte = parseFloat(pti_horas.joanes.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.modificacion = parseFloat(pti_horas.ainhoa.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.modificacionimporte = parseFloat(pti_horas.ainhoa.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.modificacion = parseFloat(pti_horas.jose.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.modificacionimporte = parseFloat(pti_horas.jose.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
						break;
						case "andoni":
							pti_horas.andoni.modificacion = parseFloat(pti_horas.andoni.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.modificacionimporte = parseFloat(pti_horas.andoni.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.modificacion = parseFloat(pti_horas.ziortza.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.modificacionimporte = parseFloat(pti_horas.ziortza.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.modificacion = parseFloat(pti_horas.alaitz.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.modificacionimporte = parseFloat(pti_horas.alaitz.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.modificacion = parseFloat(pti_horas.udane.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.modificacionimporte = parseFloat(pti_horas.udane.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.modificacion = parseFloat(pti_horas.eli.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.modificacionimporte = parseFloat(pti_horas.eli.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "AsistenciaObra") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.asistencia = parseFloat(pti_horas.unai.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.asistenciaimporte = parseFloat(pti_horas.unai.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.asistencia = parseFloat(pti_horas.david.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.asistenciaimporte = parseFloat(pti_horas.david.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.asistencia = parseFloat(pti_horas.jon.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.asistenciaimporte = parseFloat(pti_horas.jon.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.asistencia = parseFloat(pti_horas.oscar.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.asistenciaimporte = parseFloat(pti_horas.oscar.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.asistencia = parseFloat(pti_horas.esti.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.asistenciaimporte = parseFloat(pti_horas.esti.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.asistencia = parseFloat(pti_horas.marcos.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.asistenciaimporte = parseFloat(pti_horas.marcos.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.asistencia = parseFloat(pti_horas.markel.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.asistenciaimporte = parseFloat(pti_horas.markel.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.asistencia = parseFloat(pti_horas.joanes.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.asistenciaimporte = parseFloat(pti_horas.joanes.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.asistencia = parseFloat(pti_horas.ainhoa.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.asistenciaimporte = parseFloat(pti_horas.ainhoa.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.asistencia = parseFloat(pti_horas.jose.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.asistenciaimporte = parseFloat(pti_horas.jose.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
						break;
						case "andoni":
							pti_horas.andoni.asistencia = parseFloat(pti_horas.andoni.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.asistenciaimporte = parseFloat(pti_horas.andoni.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.asistencia = parseFloat(pti_horas.ziortza.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.asistenciaimporte = parseFloat(pti_horas.ziortza.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.asistencia = parseFloat(pti_horas.alaitz.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.asistenciaimporte = parseFloat(pti_horas.alaitz.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.asistencia = parseFloat(pti_horas.udane.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.asistenciaimporte = parseFloat(pti_horas.udane.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.asistencia = parseFloat(pti_horas.eli.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.asistenciaimporte = parseFloat(pti_horas.eli.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
						};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Mediciones") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.mediciones = parseFloat(pti_horas.unai.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.medicionesimporte = parseFloat(pti_horas.unai.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.mediciones = parseFloat(pti_horas.david.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.medicionesimporte = parseFloat(pti_horas.david.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.mediciones = parseFloat(pti_horas.jon.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.medicionesimporte = parseFloat(pti_horas.jon.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.mediciones = parseFloat(pti_horas.oscar.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.medicionesimporte = parseFloat(pti_horas.oscar.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.mediciones = parseFloat(pti_horas.esti.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.medicionesimporte = parseFloat(pti_horas.esti.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.mediciones = parseFloat(pti_horas.marcos.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.medicionesimporte = parseFloat(pti_horas.marcos.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.mediciones = parseFloat(pti_horas.markel.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.medicionesimporte = parseFloat(pti_horas.markel.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.mediciones = parseFloat(pti_horas.joanes.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.medicionesimporte = parseFloat(pti_horas.joanes.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.mediciones = parseFloat(pti_horas.ainhoa.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.medicionesimporte = parseFloat(pti_horas.ainhoa.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.mediciones = parseFloat(pti_horas.jose.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.medicionesimporte = parseFloat(pti_horas.jose.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
							break;
						case "andoni":
							pti_horas.andoni.mediciones = parseFloat(pti_horas.andoni.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.medicionesimporte = parseFloat(pti_horas.andoni.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
							break;
						case "ziortza":
							pti_horas.ziortza.mediciones = parseFloat(pti_horas.ziortza.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.medicionesimporte = parseFloat(pti_horas.ziortza.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
							break;
						case "alaitz":
							pti_horas.alaitz.mediciones = parseFloat(pti_horas.alaitz.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.medicionesimporte = parseFloat(pti_horas.alaitz.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
							break;
						case "udane":
							pti_horas.udane.mediciones = parseFloat(pti_horas.udane.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.medicionesimporte = parseFloat(pti_horas.udane.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.mediciones = parseFloat(pti_horas.eli.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.medicionesimporte = parseFloat(pti_horas.eli.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Otros") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.otros = parseFloat(pti_horas.unai.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.otrosimporte = parseFloat(pti_horas.unai.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.otros = parseFloat(pti_horas.david.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.otrosimporte = parseFloat(pti_horas.david.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.david.coste);
							break;
						case "jon":
							pti_horas.jon.otros = parseFloat(pti_horas.jon.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.otrosimporte = parseFloat(pti_horas.jon.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jon.coste);
							break;
						case "oscar":
							pti_horas.oscar.otros = parseFloat(pti_horas.oscar.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.otrosimporte = parseFloat(pti_horas.oscar.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.oscar.coste);
							break;
						case "esti":
							pti_horas.esti.otros = parseFloat(pti_horas.esti.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.otrosimporte = parseFloat(pti_horas.esti.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.esti.coste);
							break;
						case "marcos":
							pti_horas.marcos.otros = parseFloat(pti_horas.marcos.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.otrosimporte = parseFloat(pti_horas.marcos.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.marcos.coste);
							break;
						case "markel":
							pti_horas.markel.otros = parseFloat(pti_horas.markel.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.otrosimporte = parseFloat(pti_horas.markel.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.markel.coste);
							break;
						case "joanes":
							pti_horas.joanes.otros = parseFloat(pti_horas.joanes.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.otrosimporte = parseFloat(pti_horas.joanes.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.joanes.coste);
							break;
						case "ainhoa":
							pti_horas.ainhoa.otros = parseFloat(pti_horas.ainhoa.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.otrosimporte = parseFloat(pti_horas.ainhoa.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ainhoa.coste);
							break;
						case "jose":
							pti_horas.jose.otros = parseFloat(pti_horas.jose.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.otrosimporte = parseFloat(pti_horas.jose.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.jose.coste);
						break;
						case "andoni":
							pti_horas.andoni.otros = parseFloat(pti_horas.andoni.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.otrosimporte = parseFloat(pti_horas.andoni.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.andoni.coste);
						break;
						case "ziortza":
							pti_horas.ziortza.otros = parseFloat(pti_horas.ziortza.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.otrosimporte = parseFloat(pti_horas.ziortza.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.ziortza.coste);
						break;
						case "alaitz":
							pti_horas.alaitz.otros = parseFloat(pti_horas.alaitz.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.otrosimporte = parseFloat(pti_horas.alaitz.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.alaitz.coste);
						break;
						case "udane":
							pti_horas.udane.otros = parseFloat(pti_horas.udane.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.otrosimporte = parseFloat(pti_horas.udane.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.udane.coste);
							break;
						case "eli":
							pti_horas.eli.otros = parseFloat(pti_horas.eli.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.otrosimporte = parseFloat(pti_horas.eli.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * pti_arraycosteusuarios.eli.coste);
					};
				}

			}
			/////////////////////////////////TOTALES///////////////////////////////////////////////
			pti_horas.jon.horastotal = pti_horas.jon.replanteo + pti_horas.jon.delineacion + pti_horas.jon.calculo + pti_horas.jon.revision + pti_horas.jon.modificacion + pti_horas.jon.asistencia + pti_horas.jon.mediciones + pti_horas.jon.otros;
			pti_horas.unai.horastotal = pti_horas.unai.replanteo + pti_horas.unai.delineacion + pti_horas.unai.calculo + pti_horas.unai.revision + pti_horas.unai.modificacion + pti_horas.unai.asistencia + pti_horas.unai.mediciones + pti_horas.unai.otros;
			pti_horas.esti.horastotal = pti_horas.esti.replanteo + pti_horas.esti.delineacion + pti_horas.esti.calculo + pti_horas.esti.revision + pti_horas.esti.modificacion + pti_horas.esti.asistencia + pti_horas.esti.mediciones + pti_horas.esti.otros;
			pti_horas.marcos.horastotal = pti_horas.marcos.replanteo + pti_horas.marcos.delineacion + pti_horas.marcos.calculo + pti_horas.marcos.revision + pti_horas.marcos.modificacion + pti_horas.marcos.asistencia + pti_horas.marcos.mediciones + pti_horas.marcos.otros;
			pti_horas.markel.horastotal = pti_horas.markel.replanteo + pti_horas.markel.delineacion + pti_horas.markel.calculo + pti_horas.markel.revision + pti_horas.markel.modificacion + pti_horas.markel.asistencia + pti_horas.markel.mediciones + pti_horas.markel.otros;
			pti_horas.joanes.horastotal = pti_horas.joanes.replanteo + pti_horas.joanes.delineacion + pti_horas.joanes.calculo + pti_horas.joanes.revision + pti_horas.joanes.modificacion + pti_horas.joanes.asistencia + pti_horas.joanes.mediciones + pti_horas.joanes.otros;
			pti_horas.ainhoa.horastotal = pti_horas.ainhoa.replanteo + pti_horas.ainhoa.delineacion + pti_horas.ainhoa.calculo + pti_horas.ainhoa.revision + pti_horas.ainhoa.modificacion + pti_horas.ainhoa.asistencia + pti_horas.ainhoa.mediciones + pti_horas.ainhoa.otros;
			pti_horas.jose.horastotal = pti_horas.jose.replanteo + pti_horas.jose.delineacion + pti_horas.jose.calculo + pti_horas.jose.revision + pti_horas.jose.modificacion + pti_horas.jose.asistencia + pti_horas.jose.mediciones + pti_horas.jose.otros;
			pti_horas.andoni.horastotal = pti_horas.andoni.replanteo + pti_horas.andoni.delineacion + pti_horas.andoni.calculo + pti_horas.andoni.revision + pti_horas.andoni.modificacion + pti_horas.andoni.asistencia + pti_horas.andoni.mediciones + pti_horas.andoni.otros;
			pti_horas.ziortza.horastotal = pti_horas.ziortza.replanteo + pti_horas.ziortza.delineacion + pti_horas.ziortza.calculo + pti_horas.ziortza.revision + pti_horas.ziortza.modificacion + pti_horas.ziortza.asistencia + pti_horas.ziortza.mediciones + pti_horas.ziortza.otros;
			pti_horas.alaitz.horastotal = pti_horas.alaitz.replanteo + pti_horas.alaitz.delineacion + pti_horas.alaitz.calculo + pti_horas.alaitz.revision + pti_horas.alaitz.modificacion + pti_horas.alaitz.asistencia + pti_horas.alaitz.mediciones + pti_horas.alaitz.otros;
			pti_horas.oscar.horastotal = pti_horas.oscar.replanteo + pti_horas.oscar.delineacion + pti_horas.oscar.calculo + pti_horas.oscar.revision + pti_horas.oscar.modificacion + pti_horas.oscar.asistencia + pti_horas.oscar.mediciones + pti_horas.oscar.otros;
			pti_horas.david.horastotal = pti_horas.david.replanteo + pti_horas.david.delineacion + pti_horas.david.calculo + pti_horas.david.revision + pti_horas.david.modificacion + pti_horas.david.asistencia + pti_horas.david.mediciones + pti_horas.david.otros;
			pti_horas.eli.horastotal = pti_horas.eli.replanteo + pti_horas.eli.delineacion + pti_horas.eli.calculo + pti_horas.eli.revision + pti_horas.eli.modificacion + pti_horas.eli.asistencia + pti_horas.eli.mediciones + pti_horas.eli.otros;
			
			pti_horas.jon.importetotal = pti_horas.jon.replanteoimporte + pti_horas.jon.delineacionimporte + pti_horas.jon.calculoimporte + pti_horas.jon.revisionimporte + pti_horas.jon.modificacionimporte + pti_horas.jon.asistenciaimporte + pti_horas.jon.medicionesimporte + pti_horas.jon.otrosimporte;
			pti_horas.jon.importetotal = pti_horas.jon.importetotal.toFixed(2);
			pti_horas.unai.importetotal = pti_horas.unai.replanteoimporte + pti_horas.unai.delineacionimporte + pti_horas.unai.calculoimporte + pti_horas.unai.revisionimporte + pti_horas.unai.modificacionimporte + pti_horas.unai.asistenciaimporte + pti_horas.unai.medicionesimporte + pti_horas.unai.otrosimporte;
			pti_horas.unai.importetotal = pti_horas.unai.importetotal.toFixed(2);
			pti_horas.esti.importetotal = pti_horas.esti.replanteoimporte + pti_horas.esti.delineacionimporte + pti_horas.esti.calculoimporte + pti_horas.esti.revisionimporte + pti_horas.esti.modificacionimporte + pti_horas.esti.asistenciaimporte + pti_horas.esti.medicionesimporte + pti_horas.esti.otrosimporte;
			pti_horas.esti.importetotal = pti_horas.esti.importetotal.toFixed(2);
			pti_horas.marcos.importetotal = pti_horas.marcos.replanteoimporte + pti_horas.marcos.delineacionimporte + pti_horas.marcos.calculoimporte + pti_horas.marcos.revisionimporte + pti_horas.marcos.modificacionimporte + pti_horas.marcos.asistenciaimporte + pti_horas.marcos.medicionesimporte + pti_horas.marcos.otrosimporte;
			pti_horas.marcos.importetotal = pti_horas.marcos.importetotal.toFixed(2);
			pti_horas.markel.importetotal = pti_horas.markel.replanteoimporte + pti_horas.markel.delineacionimporte + pti_horas.markel.calculoimporte + pti_horas.markel.revisionimporte + pti_horas.markel.modificacionimporte + pti_horas.markel.asistenciaimporte + pti_horas.markel.medicionesimporte + pti_horas.markel.otrosimporte;
			pti_horas.markel.importetotal = pti_horas.markel.importetotal.toFixed(2);
			pti_horas.joanes.importetotal = pti_horas.joanes.replanteoimporte + pti_horas.joanes.delineacionimporte + pti_horas.joanes.calculoimporte + pti_horas.joanes.revisionimporte + pti_horas.joanes.modificacionimporte + pti_horas.joanes.asistenciaimporte + pti_horas.joanes.medicionesimporte + pti_horas.joanes.otrosimporte;
			pti_horas.joanes.importetotal = pti_horas.joanes.importetotal.toFixed(2);
			pti_horas.ainhoa.importetotal = pti_horas.ainhoa.replanteoimporte + pti_horas.ainhoa.delineacionimporte + pti_horas.ainhoa.calculoimporte + pti_horas.ainhoa.revisionimporte + pti_horas.ainhoa.modificacionimporte + pti_horas.ainhoa.asistenciaimporte + pti_horas.ainhoa.medicionesimporte + pti_horas.ainhoa.otrosimporte;
			pti_horas.ainhoa.importetotal = pti_horas.ainhoa.importetotal.toFixed(2);
			pti_horas.jose.importetotal = pti_horas.jose.replanteoimporte + pti_horas.jose.delineacionimporte + pti_horas.jose.calculoimporte + pti_horas.jose.revisionimporte + pti_horas.jose.modificacionimporte + pti_horas.jose.asistenciaimporte + pti_horas.jose.medicionesimporte + pti_horas.jose.otrosimporte;
			pti_horas.jose.importetotal = pti_horas.jose.importetotal.toFixed(2);
			pti_horas.andoni.importetotal = pti_horas.andoni.replanteoimporte + pti_horas.andoni.delineacionimporte + pti_horas.andoni.calculoimporte + pti_horas.andoni.revisionimporte + pti_horas.andoni.modificacionimporte + pti_horas.andoni.asistenciaimporte + pti_horas.andoni.medicionesimporte + pti_horas.andoni.otrosimporte;
			pti_horas.andoni.importetotal = pti_horas.andoni.importetotal.toFixed(2);
			pti_horas.ziortza.importetotal = pti_horas.ziortza.replanteoimporte + pti_horas.ziortza.delineacionimporte + pti_horas.ziortza.calculoimporte + pti_horas.ziortza.revisionimporte + pti_horas.ziortza.modificacionimporte + pti_horas.ziortza.asistenciaimporte + pti_horas.ziortza.medicionesimporte + pti_horas.ziortza.otrosimporte;
			pti_horas.alaitz.importetotal = pti_horas.alaitz.importetotal.toFixed(2);
			pti_horas.alaitz.importetotal = pti_horas.alaitz.replanteoimporte + pti_horas.alaitz.delineacionimporte + pti_horas.alaitz.calculoimporte + pti_horas.alaitz.revisionimporte + pti_horas.alaitz.modificacionimporte + pti_horas.alaitz.asistenciaimporte + pti_horas.alaitz.medicionesimporte + pti_horas.alaitz.otrosimporte;
			pti_horas.oscar.importetotal = pti_horas.oscar.replanteoimporte + pti_horas.oscar.delineacionimporte + pti_horas.oscar.calculoimporte + pti_horas.oscar.revisionimporte + pti_horas.oscar.modificacionimporte + pti_horas.oscar.asistenciaimporte + pti_horas.oscar.medicionesimporte + pti_horas.oscar.otrosimporte;
			pti_horas.oscar.importetotal = pti_horas.oscar.importetotal.toFixed(2);
			pti_horas.david.importetotal = pti_horas.david.replanteoimporte + pti_horas.david.delineacionimporte + pti_horas.david.calculoimporte + pti_horas.david.revisionimporte + pti_horas.david.modificacionimporte + pti_horas.david.asistenciaimporte + pti_horas.david.medicionesimporte + pti_horas.david.otrosimporte;
			pti_horas.david.importetotal = pti_horas.david.importetotal.toFixed(2);
			pti_horas.eli.importetotal = pti_horas.eli.replanteoimporte + pti_horas.eli.delineacionimporte + pti_horas.eli.calculoimporte + pti_horas.eli.revisionimporte + pti_horas.eli.modificacionimporte + pti_horas.eli.asistenciaimporte + pti_horas.eli.medicionesimporte + pti_horas.eli.otrosimporte;
			pti_horas.eli.importetotal = pti_horas.eli.importetotal.toFixed(2);
			/////////////////////////////////REDONDEOS/////////////////////////////////////////////
			pti_horas.jon.replanteoimporte = pti_horas.jon.replanteoimporte.toFixed(2);
			if (pti_horas.jon.replanteoimporte == 0.00){pti_horas.jon.replanteoimporte="";}
			pti_horas.oscar.replanteoimporte = pti_horas.oscar.replanteoimporte.toFixed(2);
			if (pti_horas.oscar.replanteoimporte == 0.00){pti_horas.oscar.replanteoimporte="";}
			pti_horas.david.replanteoimporte = pti_horas.david.replanteoimporte.toFixed(2);
			if (pti_horas.david.replanteoimporte== 0.00){pti_horas.david.replanteoimporte="";}
			pti_horas.esti.replanteoimporte = pti_horas.esti.replanteoimporte.toFixed(2);
			if (pti_horas.esti.replanteoimporte== 0.00){pti_horas.esti.replanteoimporte="";}
			pti_horas.marcos.replanteoimporte = pti_horas.marcos.replanteoimporte.toFixed(2);
			if (pti_horas.marcos.replanteoimporte== 0.00){pti_horas.marcos.replanteoimporte="";}
			pti_horas.markel.replanteoimporte = pti_horas.markel.replanteoimporte.toFixed(2);
			if (pti_horas.markel.replanteoimporte== 0.00){pti_horas.markel.replanteoimporte="";}
			pti_horas.joanes.replanteoimporte = pti_horas.joanes.replanteoimporte.toFixed(2);
			if (pti_horas.joanes.replanteoimporte== 0.00){pti_horas.joanes.replanteoimporte="";}
			pti_horas.ainhoa.replanteoimporte = pti_horas.ainhoa.replanteoimporte.toFixed(2);
			if (pti_horas.ainhoa.replanteoimporte== 0.00){pti_horas.ainhoa.replanteoimporte="";}
			pti_horas.jose.replanteoimporte = pti_horas.jose.replanteoimporte.toFixed(2);
			if (pti_horas.jose.replanteoimporte== 0.00){pti_horas.jose.replanteoimporte="";}
			pti_horas.andoni.replanteoimporte = pti_horas.andoni.replanteoimporte.toFixed(2);
			if (pti_horas.andoni.replanteoimporte== 0.00){pti_horas.andoni.replanteoimporte="";}
			pti_horas.ziortza.replanteoimporte = pti_horas.ziortza.replanteoimporte.toFixed(2);
			if (pti_horas.ziortza.replanteoimporte== 0.00){pti_horas.ziortza.replanteoimporte="";}
			pti_horas.alaitz.replanteoimporte = pti_horas.alaitz.replanteoimporte.toFixed(2);
			if (pti_horas.alaitz.replanteoimporte== 0.00){pti_horas.alaitz.replanteoimporte="";}
			pti_horas.unai.replanteoimporte = pti_horas.unai.replanteoimporte.toFixed(2);
			if (pti_horas.unai.replanteoimporte== 0.00){pti_horas.unai.replanteoimporte="";}
			pti_horas.eli.replanteoimporte = pti_horas.eli.replanteoimporte.toFixed(2);
			if (pti_horas.eli.replanteoimporte== 0.00){pti_horas.eli.replanteoimporte="";}
			
			pti_horas.jon.delineacionimporte = pti_horas.jon.delineacionimporte.toFixed(2);
			if (pti_horas.jon.delineacionimporte== 0.00){pti_horas.jon.delineacionimporte="";}
			pti_horas.oscar.delineacionimporte = pti_horas.oscar.delineacionimporte.toFixed(2);
			if (pti_horas.oscar.delineacionimporte== 0.00){pti_horas.oscar.delineacionimporte="";}
			pti_horas.david.delineacionimporte = pti_horas.david.delineacionimporte.toFixed(2);
			if (pti_horas.david.delineacionimporte== 0.00){pti_horas.david.delineacionimporte="";}
			pti_horas.esti.delineacionimporte = pti_horas.esti.delineacionimporte.toFixed(2);
			if (pti_horas.esti.delineacionimporte== 0.00){pti_horas.esti.delineacionimporte="";}
			pti_horas.marcos.delineacionimporte = pti_horas.marcos.delineacionimporte.toFixed(2);
			if (pti_horas.marcos.delineacionimporte== 0.00){pti_horas.marcos.delineacionimporte="";}
			pti_horas.markel.delineacionimporte = pti_horas.markel.delineacionimporte.toFixed(2);
			if (pti_horas.markel.delineacionimporte== 0.00){pti_horas.markel.delineacionimporte="";}
			pti_horas.joanes.delineacionimporte = pti_horas.joanes.delineacionimporte.toFixed(2);
			if (pti_horas.joanes.delineacionimporte== 0.00){pti_horas.joanes.delineacionimporte="";}
			pti_horas.ainhoa.delineacionimporte = pti_horas.ainhoa.delineacionimporte.toFixed(2);
			if (pti_horas.ainhoa.delineacionimporte== 0.00){pti_horas.ainhoa.delineacionimporte="";}
			pti_horas.jose.delineacionimporte = pti_horas.jose.delineacionimporte.toFixed(2);
			if (pti_horas.jose.delineacionimporte== 0.00){pti_horas.jose.delineacionimporte="";}
			pti_horas.andoni.delineacionimporte = pti_horas.andoni.delineacionimporte.toFixed(2);
			if (pti_horas.andoni.delineacionimporte== 0.00){pti_horas.andoni.delineacionimporte="";}
			pti_horas.ziortza.delineacionimporte = pti_horas.ziortza.delineacionimporte.toFixed(2);
			if (pti_horas.ziortza.delineacionimporte== 0.00){pti_horas.ziortza.delineacionimporte="";}
			pti_horas.alaitz.delineacionimporte = pti_horas.alaitz.delineacionimporte.toFixed(2);
			if (pti_horas.alaitz.delineacionimporte== 0.00){pti_horas.alaitz.delineacionimporte="";}
			pti_horas.unai.delineacionimporte = pti_horas.unai.delineacionimporte.toFixed(2);
			if (pti_horas.unai.delineacionimporte== 0.00){pti_horas.unai.delineacionimporte="";}
			pti_horas.eli.delineacionimporte = pti_horas.eli.delineacionimporte.toFixed(2);
			if (pti_horas.eli.delineacionimporte== 0.00){pti_horas.eli.delineacionimporte="";}
			
			pti_horas.jon.calculoimporte = pti_horas.jon.calculoimporte.toFixed(2);
			if (pti_horas.jon.calculoimporte== 0.00){pti_horas.jon.calculoimporte="";}
			pti_horas.oscar.calculoimporte = pti_horas.oscar.calculoimporte.toFixed(2);
			if (pti_horas.oscar.calculoimporte== 0.00){pti_horas.oscar.calculoimporte="";}
			pti_horas.david.calculoimporte = pti_horas.david.calculoimporte.toFixed(2);
			if (pti_horas.david.calculoimporte == 0.00){pti_horas.david.calculoimporte ="";}
			pti_horas.esti.calculoimporte = pti_horas.esti.calculoimporte.toFixed(2);
			if (pti_horas.esti.calculoimporte == 0.00){pti_horas.esti.calculoimporte ="";}
			pti_horas.marcos.calculoimporte = pti_horas.marcos.calculoimporte.toFixed(2);
			if (pti_horas.marcos.calculoimporte == 0.00){pti_horas.marcos.calculoimporte ="";}
			pti_horas.markel.calculoimporte = pti_horas.markel.calculoimporte.toFixed(2);
			if (pti_horas.markel.calculoimporte == 0.00){pti_horas.markel.calculoimporte ="";}
			pti_horas.joanes.calculoimporte = pti_horas.joanes.calculoimporte.toFixed(2);
			if (pti_horas.joanes.calculoimporte == 0.00){pti_horas.joanes.calculoimporte ="";}
			pti_horas.ainhoa.calculoimporte = pti_horas.ainhoa.calculoimporte.toFixed(2);
			if (pti_horas.ainhoa.calculoimporte == 0.00){pti_horas.ainhoa.calculoimporte ="";}
			pti_horas.jose.calculoimporte = pti_horas.jose.calculoimporte.toFixed(2);
			if (pti_horas.jose.calculoimporte == 0.00){pti_horas.jose.calculoimporte ="";}
			pti_horas.andoni.calculoimporte = pti_horas.andoni.calculoimporte.toFixed(2);
			if (pti_horas.andoni.calculoimporte == 0.00){pti_horas.andoni.calculoimporte ="";}
			pti_horas.ziortza.calculoimporte = pti_horas.ziortza.calculoimporte.toFixed(2);
			if (pti_horas.ziortza.calculoimporte == 0.00){pti_horas.ziortza.calculoimporte ="";}
			pti_horas.alaitz.calculoimporte = pti_horas.alaitz.calculoimporte.toFixed(2);
			if (pti_horas.alaitz.calculoimporte == 0.00){pti_horas.alaitz.calculoimporte ="";}
			pti_horas.unai.calculoimporte = pti_horas.unai.calculoimporte.toFixed(2);
			if (pti_horas.unai.calculoimporte == 0.00){pti_horas.unai.calculoimporte ="";}
			pti_horas.eli.calculoimporte = pti_horas.eli.calculoimporte.toFixed(2);
			if (pti_horas.eli.calculoimporte == 0.00){pti_horas.eli.calculoimporte ="";}
			
			pti_horas.jon.revisionimporte = pti_horas.jon.revisionimporte.toFixed(2);
			if (pti_horas.jon.revisionimporte == 0.00){pti_horas.jon.revisionimporte ="";}
			pti_horas.oscar.revisionimporte = pti_horas.oscar.revisionimporte.toFixed(2);
			if (pti_horas.oscar.revisionimporte == 0.00){pti_horas.oscar.revisionimporte ="";}
			pti_horas.david.revisionimporte = pti_horas.david.revisionimporte.toFixed(2);
			if (pti_horas.david.revisionimporte == 0.00){pti_horas.david.revisionimporte ="";}
			pti_horas.esti.revisionimporte = pti_horas.esti.revisionimporte.toFixed(2);
			if (pti_horas.esti.revisionimporte == 0.00){pti_horas.esti.revisionimporte ="";}
			pti_horas.marcos.revisionimporte = pti_horas.marcos.revisionimporte.toFixed(2);
			if (pti_horas.marcos.revisionimporte == 0.00){pti_horas.marcos.revisionimporte ="";}
			pti_horas.markel.revisionimporte = pti_horas.markel.revisionimporte.toFixed(2);
			if (pti_horas.markel.revisionimporte == 0.00){pti_horas.markel.revisionimporte ="";}
			pti_horas.joanes.revisionimporte = pti_horas.joanes.revisionimporte.toFixed(2);
			if (pti_horas.joanes.revisionimporte == 0.00){pti_horas.joanes.revisionimporte ="";}
			pti_horas.ainhoa.revisionimporte = pti_horas.ainhoa.revisionimporte.toFixed(2);
			if (pti_horas.ainhoa.revisionimporte == 0.00){pti_horas.ainhoa.revisionimporte ="";}
			pti_horas.jose.revisionimporte = pti_horas.jose.revisionimporte.toFixed(2);
			if (pti_horas.jose.revisionimporte == 0.00){pti_horas.jose.revisionimporte ="";}
			pti_horas.andoni.revisionimporte = pti_horas.andoni.revisionimporte.toFixed(2);
			if (pti_horas.andoni.revisionimporte == 0.00){pti_horas.andoni.revisionimporte ="";}
			pti_horas.ziortza.revisionimporte = pti_horas.ziortza.revisionimporte.toFixed(2);
			if (pti_horas.ziortza.revisionimporte == 0.00){pti_horas.ziortza.revisionimporte ="";}
			pti_horas.alaitz.revisionimporte = pti_horas.alaitz.revisionimporte.toFixed(2);
			if (pti_horas.alaitz.revisionimporte == 0.00){pti_horas.alaitz.revisionimporte ="";}
			pti_horas.unai.revisionimporte = pti_horas.unai.revisionimporte.toFixed(2);
			if (pti_horas.unai.revisionimporte == 0.00){pti_horas.unai.revisionimporte ="";}
			pti_horas.eli.revisionimporte = pti_horas.eli.revisionimporte.toFixed(2);
			if (pti_horas.eli.revisionimporte == 0.00){pti_horas.eli.revisionimporte ="";}
			
			pti_horas.jon.modificacionimporte = pti_horas.jon.modificacionimporte.toFixed(2);
			if (pti_horas.jon.modificacionimporte == 0.00){pti_horas.jon.modificacionimporte ="";}
			pti_horas.oscar.modificacionimporte = pti_horas.oscar.modificacionimporte.toFixed(2);
			if (pti_horas.oscar.modificacionimporte == 0.00){pti_horas.oscar.modificacionimporte ="";}
			pti_horas.david.modificacionimporte = pti_horas.david.modificacionimporte.toFixed(2);
			if (pti_horas.david.modificacionimporte == 0.00){pti_horas.david.modificacionimporte ="";}
			pti_horas.esti.modificacionimporte = pti_horas.esti.modificacionimporte.toFixed(2);
			if (pti_horas.esti.modificacionimporte == 0.00){pti_horas.esti.modificacionimporte ="";}
			pti_horas.marcos.modificacionimporte = pti_horas.marcos.modificacionimporte.toFixed(2);
			if (pti_horas.marcos.modificacionimporte == 0.00){pti_horas.marcos.modificacionimporte ="";}
			pti_horas.markel.modificacionimporte = pti_horas.markel.modificacionimporte.toFixed(2);
			if (pti_horas.markel.modificacionimporte == 0.00){pti_horas.markel.modificacionimporte ="";}
			pti_horas.joanes.modificacionimporte = pti_horas.joanes.modificacionimporte.toFixed(2);
			if (pti_horas.joanes.modificacionimporte == 0.00){pti_horas.joanes.modificacionimporte ="";}
			pti_horas.ainhoa.modificacionimporte = pti_horas.ainhoa.modificacionimporte.toFixed(2);
			if (pti_horas.ainhoa.modificacionimporte == 0.00){pti_horas.ainhoa.modificacionimporte ="";}
			pti_horas.jose.modificacionimporte = pti_horas.jose.modificacionimporte.toFixed(2);
			if (pti_horas.jose.modificacionimporte == 0.00){pti_horas.jose.modificacionimporte ="";}
			pti_horas.andoni.modificacionimporte = pti_horas.andoni.modificacionimporte.toFixed(2);
			if (pti_horas.andoni.modificacionimporte == 0.00){pti_horas.andoni.modificacionimporte ="";}
			pti_horas.ziortza.modificacionimporte = pti_horas.ziortza.modificacionimporte.toFixed(2);
			if (pti_horas.ziortza.modificacionimporte == 0.00){pti_horas.ziortza.modificacionimporte ="";}
			pti_horas.alaitz.modificacionimporte = pti_horas.alaitz.modificacionimporte.toFixed(2);
			if (pti_horas.alaitz.modificacionimporte == 0.00){pti_horas.alaitz.modificacionimporte ="";}
			pti_horas.unai.modificacionimporte = pti_horas.unai.modificacionimporte.toFixed(2);
			if (pti_horas.unai.modificacionimporte == 0.00){pti_horas.unai.modificacionimporte ="";}
			pti_horas.eli.modificacionimporte = pti_horas.eli.modificacionimporte.toFixed(2);
			if (pti_horas.eli.modificacionimporte == 0.00){pti_horas.eli.modificacionimporte ="";}
			
			pti_horas.jon.asistenciaimporte = pti_horas.jon.asistenciaimporte.toFixed(2);
			if (pti_horas.jon.asistenciaimporte == 0.00){pti_horas.jon.asistenciaimporte ="";}
			pti_horas.oscar.asistenciaimporte = pti_horas.oscar.asistenciaimporte.toFixed(2);
			if (pti_horas.oscar.asistenciaimporte == 0.00){pti_horas.oscar.asistenciaimporte ="";}
			pti_horas.david.asistenciaimporte = pti_horas.david.asistenciaimporte.toFixed(2);
			if (pti_horas.david.asistenciaimporte == 0.00){pti_horas.david.asistenciaimporte ="";}
			pti_horas.esti.asistenciaimporte = pti_horas.esti.asistenciaimporte.toFixed(2);
			if (pti_horas.esti.asistenciaimporte == 0.00){pti_horas.esti.asistenciaimporte ="";}
			pti_horas.marcos.asistenciaimporte = pti_horas.marcos.asistenciaimporte.toFixed(2);
			if (pti_horas.marcos.asistenciaimporte == 0.00){pti_horas.marcos.asistenciaimporte ="";}
			pti_horas.markel.asistenciaimporte = pti_horas.markel.asistenciaimporte.toFixed(2);
			if (pti_horas.markel.asistenciaimporte == 0.00){pti_horas.markel.asistenciaimporte ="";}
			pti_horas.joanes.asistenciaimporte = pti_horas.joanes.asistenciaimporte.toFixed(2);
			if (pti_horas.joanes.asistenciaimporte == 0.00){pti_horas.joanes.asistenciaimporte ="";}
			pti_horas.ainhoa.asistenciaimporte = pti_horas.ainhoa.asistenciaimporte.toFixed(2);
			if (pti_horas.ainhoa.asistenciaimporte == 0.00){pti_horas.ainhoa.asistenciaimporte ="";}
			pti_horas.jose.asistenciaimporte = pti_horas.jose.asistenciaimporte.toFixed(2);
			if (pti_horas.jose.asistenciaimporte == 0.00){pti_horas.jose.asistenciaimporte ="";}
			pti_horas.andoni.asistenciaimporte = pti_horas.andoni.asistenciaimporte.toFixed(2);
			if (pti_horas.andoni.asistenciaimporte == 0.00){pti_horas.andoni.asistenciaimporte ="";}
			pti_horas.ziortza.asistenciaimporte = pti_horas.ziortza.asistenciaimporte.toFixed(2);
			if (pti_horas.ziortza.asistenciaimporte == 0.00){pti_horas.ziortza.asistenciaimporte ="";}
			pti_horas.alaitz.asistenciaimporte = pti_horas.alaitz.asistenciaimporte.toFixed(2);
			if (pti_horas.alaitz.asistenciaimporte == 0.00){pti_horas.alaitz.asistenciaimporte ="";}
			pti_horas.unai.asistenciaimporte = pti_horas.unai.asistenciaimporte.toFixed(2);
			if (pti_horas.unai.asistenciaimporte == 0.00){pti_horas.unai.asistenciaimporte ="";}
			pti_horas.eli.asistenciaimporte = pti_horas.eli.asistenciaimporte.toFixed(2);
			if (pti_horas.eli.asistenciaimporte == 0.00){pti_horas.eli.asistenciaimporte ="";}
			
			pti_horas.jon.medicionesimporte = pti_horas.jon.medicionesimporte.toFixed(2);
			if (pti_horas.jon.medicionesimporte == 0.00){pti_horas.jon.medicionesimporte ="";}
			pti_horas.oscar.medicionesimporte = pti_horas.oscar.medicionesimporte.toFixed(2);
			if (pti_horas.oscar.medicionesimporte == 0.00){pti_horas.oscar.medicionesimporte ="";}
			pti_horas.david.medicionesimporte = pti_horas.david.medicionesimporte.toFixed(2);
			if (pti_horas.david.medicionesimporte == 0.00){pti_horas.david.medicionesimporte ="";}
			pti_horas.esti.medicionesimporte = pti_horas.esti.medicionesimporte.toFixed(2);
			if (pti_horas.esti.medicionesimporte == 0.00){pti_horas.esti.medicionesimporte ="";}
			pti_horas.marcos.medicionesimporte = pti_horas.marcos.medicionesimporte.toFixed(2);
			if (pti_horas.marcos.medicionesimporte == 0.00){pti_horas.marcos.medicionesimporte ="";}
			pti_horas.markel.medicionesimporte = pti_horas.markel.medicionesimporte.toFixed(2);
			if (pti_horas.markel.medicionesimporte == 0.00){pti_horas.markel.medicionesimporte ="";}
			pti_horas.joanes.medicionesimporte = pti_horas.joanes.medicionesimporte.toFixed(2);
			if (pti_horas.joanes.medicionesimporte == 0.00){pti_horas.joanes.medicionesimporte ="";}
			pti_horas.ainhoa.medicionesimporte = pti_horas.ainhoa.medicionesimporte.toFixed(2);
			if (pti_horas.ainhoa.medicionesimporte == 0.00){pti_horas.ainhoa.medicionesimporte ="";}
			pti_horas.jose.medicionesimporte = pti_horas.jose.medicionesimporte.toFixed(2);
			if (pti_horas.jose.medicionesimporte == 0.00){pti_horas.jose.medicionesimporte ="";}
			pti_horas.andoni.medicionesimporte = pti_horas.andoni.medicionesimporte.toFixed(2);
			if (pti_horas.andoni.medicionesimporte == 0.00){pti_horas.andoni.medicionesimporte ="";}
			pti_horas.ziortza.medicionesimporte = pti_horas.ziortza.medicionesimporte.toFixed(2);
			if (pti_horas.ziortza.medicionesimporte == 0.00){pti_horas.ziortza.medicionesimporte ="";}
			pti_horas.alaitz.medicionesimporte = pti_horas.alaitz.medicionesimporte.toFixed(2);
			if (pti_horas.alaitz.medicionesimporte == 0.00){pti_horas.alaitz.medicionesimporte ="";}
			pti_horas.unai.medicionesimporte = pti_horas.unai.medicionesimporte.toFixed(2);
			if (pti_horas.unai.medicionesimporte == 0.00){pti_horas.unai.medicionesimporte ="";}
			pti_horas.eli.medicionesimporte = pti_horas.eli.medicionesimporte.toFixed(2);
			if (pti_horas.eli.medicionesimporte == 0.00){pti_horas.eli.medicionesimporte ="";}
			
			pti_horas.jon.otrosimporte = pti_horas.jon.otrosimporte.toFixed(2);
			if (pti_horas.jon.otrosimporte == 0.00){pti_horas.jon.otrosimporte ="";}
			pti_horas.oscar.otrosimporte = pti_horas.oscar.otrosimporte.toFixed(2);
			if (pti_horas.oscar.otrosimporte == 0.00){pti_horas.oscar.otrosimporte ="";}
			pti_horas.david.otrosimporte = pti_horas.david.otrosimporte.toFixed(2);
			if (pti_horas.david.otrosimporte == 0.00){pti_horas.david.otrosimporte ="";}
			pti_horas.esti.otrosimporte = pti_horas.esti.otrosimporte.toFixed(2);
			if (pti_horas.esti.otrosimporte == 0.00){pti_horas.esti.otrosimporte ="";}
			pti_horas.marcos.otrosimporte = pti_horas.marcos.otrosimporte.toFixed(2);
			if (pti_horas.marcos.otrosimporte == 0.00){pti_horas.marcos.otrosimporte ="";}
			pti_horas.markel.otrosimporte = pti_horas.markel.otrosimporte.toFixed(2);
			if (pti_horas.markel.otrosimporte == 0.00){pti_horas.markel.otrosimporte ="";}
			pti_horas.joanes.otrosimporte = pti_horas.joanes.otrosimporte.toFixed(2);
			if (pti_horas.joanes.otrosimporte == 0.00){pti_horas.joanes.otrosimporte ="";}
			pti_horas.ainhoa.otrosimporte = pti_horas.ainhoa.otrosimporte.toFixed(2);
			if (pti_horas.ainhoa.otrosimporte == 0.00){pti_horas.ainhoa.otrosimporte ="";}
			pti_horas.jose.otrosimporte = pti_horas.jose.otrosimporte.toFixed(2);
			if (pti_horas.jose.otrosimporte == 0.00){pti_horas.jose.otrosimporte ="";}
			pti_horas.andoni.otrosimporte = pti_horas.andoni.otrosimporte.toFixed(2);
			if (pti_horas.andoni.otrosimporte == 0.00){pti_horas.andoni.otrosimporte ="";}
			pti_horas.ziortza.otrosimporte = pti_horas.ziortza.otrosimporte.toFixed(2);
			if (pti_horas.ziortza.otrosimporte == 0.00){pti_horas.ziortza.otrosimporte ="";}
			pti_horas.alaitz.otrosimporte = pti_horas.alaitz.otrosimporte.toFixed(2);
			if (pti_horas.alaitz.otrosimporte == 0.00){pti_horas.alaitz.otrosimporte ="";}
			pti_horas.unai.otrosimporte = pti_horas.unai.otrosimporte.toFixed(2);
			if (pti_horas.unai.otrosimporte == 0.00){pti_horas.unai.otrosimporte ="";}
			pti_horas.eli.otrosimporte = pti_horas.eli.otrosimporte.toFixed(2);
			if (pti_horas.eli.otrosimporte == 0.00){pti_horas.eli.otrosimporte ="";}
			
			pti_horas.jon.horastotal = pti_horas.jon.horastotal.toFixed(2);
			pti_horas.oscar.horastotal = pti_horas.oscar.horastotal.toFixed(2);
			pti_horas.david.horastotal = pti_horas.david.horastotal.toFixed(2);
			pti_horas.esti.horastotal = pti_horas.esti.horastotal.toFixed(2);
			pti_horas.marcos.horastotal = pti_horas.marcos.horastotal.toFixed(2);
			pti_horas.markel.horastotal = pti_horas.markel.horastotal.toFixed(2);
			pti_horas.joanes.horastotal = pti_horas.joanes.horastotal.toFixed(2);
			pti_horas.ainhoa.horastotal = pti_horas.ainhoa.horastotal.toFixed(2);
			pti_horas.jose.horastotal = pti_horas.jose.horastotal.toFixed(2);
			pti_horas.andoni.horastotal = pti_horas.andoni.horastotal.toFixed(2);
			pti_horas.ziortza.horastotal = pti_horas.ziortza.horastotal.toFixed(2);
			pti_horas.alaitz.horastotal = pti_horas.alaitz.horastotal.toFixed(2);
			pti_horas.unai.horastotal = pti_horas.unai.horastotal.toFixed(2);
			pti_horas.eli.horastotal = pti_horas.eli.horastotal.toFixed(2);
			
			////////////////////////////////////REDONDEO////////////////////////////////////////////////////////////////////////////////////////////////////////////
			pti_horas.jon.replanteo = Math.round(pti_horas.jon.replanteo*100)/100;
			pti_horas.jon.delineacion = Math.round(pti_horas.jon.delineacion*100)/100;
			pti_horas.jon.calculo = Math.round(pti_horas.jon.calculo*100)/100;
			pti_horas.jon.revision = Math.round(pti_horas.jon.revision*100)/100;
			pti_horas.jon.modificacion = Math.round(pti_horas.jon.modificacion*100)/100;
			pti_horas.jon.asistencia = Math.round(pti_horas.jon.asistencia*100)/100;
			pti_horas.jon.mediciones = Math.round(pti_horas.jon.mediciones*100)/100;
			pti_horas.jon.otros = Math.round(pti_horas.jon.otros*100)/100;
			
			pti_horas.oscar.replanteo = Math.round(pti_horas.oscar.replanteo*100)/100;
			pti_horas.oscar.delineacion = Math.round(pti_horas.oscar.delineacion*100)/100;
			pti_horas.oscar.calculo = Math.round(pti_horas.oscar.calculo*100)/100;
			pti_horas.oscar.revision = Math.round(pti_horas.oscar.revision*100)/100;
			pti_horas.oscar.modificacion = Math.round(pti_horas.oscar.modificacion*100)/100;
			pti_horas.oscar.asistencia = Math.round(pti_horas.oscar.asistencia*100)/100;
			pti_horas.oscar.mediciones = Math.round(pti_horas.oscar.mediciones*100)/100;
			pti_horas.oscar.otros = Math.round(pti_horas.oscar.otros*100)/100;
			
			pti_horas.david.replanteo = Math.round(pti_horas.david.replanteo*100)/100;
			pti_horas.david.delineacion = Math.round(pti_horas.david.delineacion*100)/100;
			pti_horas.david.calculo = Math.round(pti_horas.david.calculo*100)/100;
			pti_horas.david.revision = Math.round(pti_horas.david.revision*100)/100;
			pti_horas.david.modificacion = Math.round(pti_horas.david.modificacion*100)/100;
			pti_horas.david.asistencia = Math.round(pti_horas.david.asistencia*100)/100;
			pti_horas.david.mediciones = Math.round(pti_horas.david.mediciones*100)/100;
			pti_horas.david.otros = Math.round(pti_horas.david.otros*100)/100;
			
			pti_horas.esti.replanteo = Math.round(pti_horas.esti.replanteo*100)/100;
			pti_horas.esti.delineacion = Math.round(pti_horas.esti.delineacion*100)/100;
			pti_horas.esti.calculo = Math.round(pti_horas.esti.calculo*100)/100;
			pti_horas.esti.revision = Math.round(pti_horas.esti.revision*100)/100;
			pti_horas.esti.modificacion = Math.round(pti_horas.esti.modificacion*100)/100;
			pti_horas.esti.asistencia = Math.round(pti_horas.esti.asistencia*100)/100;
			pti_horas.esti.mediciones = Math.round(pti_horas.esti.mediciones*100)/100;
			pti_horas.esti.otros = Math.round(pti_horas.esti.otros*100)/100;
			
			pti_horas.marcos.replanteo = Math.round(pti_horas.marcos.replanteo*100)/100;
			pti_horas.marcos.delineacion = Math.round(pti_horas.marcos.delineacion*100)/100;
			pti_horas.marcos.calculo = Math.round(pti_horas.marcos.calculo*100)/100;
			pti_horas.marcos.revision = Math.round(pti_horas.marcos.revision*100)/100;
			pti_horas.marcos.modificacion = Math.round(pti_horas.marcos.modificacion*100)/100;
			pti_horas.marcos.asistencia = Math.round(pti_horas.marcos.asistencia*100)/100;
			pti_horas.marcos.mediciones = Math.round(pti_horas.marcos.mediciones*100)/100;
			pti_horas.marcos.otros = Math.round(pti_horas.marcos.otros*100)/100;
			
			pti_horas.markel.replanteo = Math.round(pti_horas.markel.replanteo*100)/100;
			pti_horas.markel.delineacion = Math.round(pti_horas.markel.delineacion*100)/100;
			pti_horas.markel.calculo = Math.round(pti_horas.markel.calculo*100)/100;
			pti_horas.markel.revision = Math.round(pti_horas.markel.revision*100)/100;
			pti_horas.markel.modificacion = Math.round(pti_horas.markel.modificacion*100)/100;
			pti_horas.markel.asistencia = Math.round(pti_horas.markel.asistencia*100)/100;
			pti_horas.markel.mediciones = Math.round(pti_horas.markel.mediciones*100)/100;
			pti_horas.markel.otros = Math.round(pti_horas.markel.otros*100)/100;
			
			pti_horas.joanes.replanteo = Math.round(pti_horas.joanes.replanteo*100)/100;
			pti_horas.joanes.delineacion = Math.round(pti_horas.joanes.delineacion*100)/100;
			pti_horas.joanes.calculo = Math.round(pti_horas.joanes.calculo*100)/100;
			pti_horas.joanes.revision = Math.round(pti_horas.joanes.revision*100)/100;
			pti_horas.joanes.modificacion = Math.round(pti_horas.joanes.modificacion*100)/100;
			pti_horas.joanes.asistencia = Math.round(pti_horas.joanes.asistencia*100)/100;
			pti_horas.joanes.mediciones = Math.round(pti_horas.joanes.mediciones*100)/100;
			pti_horas.joanes.otros = Math.round(pti_horas.joanes.otros*100)/100;
			
			pti_horas.ainhoa.replanteo = Math.round(pti_horas.ainhoa.replanteo*100)/100;
			pti_horas.ainhoa.delineacion = Math.round(pti_horas.ainhoa.delineacion*100)/100;
			pti_horas.ainhoa.calculo = Math.round(pti_horas.ainhoa.calculo*100)/100;
			pti_horas.ainhoa.revision = Math.round(pti_horas.ainhoa.revision*100)/100;
			pti_horas.ainhoa.modificacion = Math.round(pti_horas.ainhoa.modificacion*100)/100;
			pti_horas.ainhoa.asistencia = Math.round(pti_horas.ainhoa.asistencia*100)/100;
			pti_horas.ainhoa.mediciones = Math.round(pti_horas.ainhoa.mediciones*100)/100;
			pti_horas.ainhoa.otros = Math.round(pti_horas.ainhoa.otros*100)/100;
			
			
			pti_horas.jose.replanteo = Math.round(pti_horas.jose.replanteo*100)/100;
			pti_horas.jose.delineacion = Math.round(pti_horas.jose.delineacion*100)/100;
			pti_horas.jose.calculo = Math.round(pti_horas.jose.calculo*100)/100;
			pti_horas.jose.revision = Math.round(pti_horas.jose.revision*100)/100;
			pti_horas.jose.modificacion = Math.round(pti_horas.jose.modificacion*100)/100;
			pti_horas.jose.asistencia = Math.round(pti_horas.jose.asistencia*100)/100;
			pti_horas.jose.mediciones = Math.round(pti_horas.jose.mediciones*100)/100;
			pti_horas.jose.otros = Math.round(pti_horas.jose.otros*100)/100;
			
			pti_horas.andoni.replanteo = Math.round(pti_horas.andoni.replanteo*100)/100;
			pti_horas.andoni.delineacion = Math.round(pti_horas.andoni.delineacion*100)/100;
			pti_horas.andoni.calculo = Math.round(pti_horas.andoni.calculo*100)/100;
			pti_horas.andoni.revision = Math.round(pti_horas.andoni.revision*100)/100;
			pti_horas.andoni.modificacion = Math.round(pti_horas.andoni.modificacion*100)/100;
			pti_horas.andoni.asistencia = Math.round(pti_horas.andoni.asistencia*100)/100;
			pti_horas.andoni.mediciones = Math.round(pti_horas.andoni.mediciones*100)/100;
			pti_horas.andoni.otros = Math.round(pti_horas.andoni.otros*100)/100;
			
			pti_horas.ziortza.replanteo = Math.round(pti_horas.ziortza.replanteo*100)/100;
			pti_horas.ziortza.delineacion = Math.round(pti_horas.ziortza.delineacion*100)/100;
			pti_horas.ziortza.calculo = Math.round(pti_horas.ziortza.calculo*100)/100;
			pti_horas.ziortza.revision = Math.round(pti_horas.ziortza.revision*100)/100;
			pti_horas.ziortza.modificacion = Math.round(pti_horas.ziortza.modificacion*100)/100;
			pti_horas.ziortza.asistencia = Math.round(pti_horas.ziortza.asistencia*100)/100;
			pti_horas.ziortza.mediciones = Math.round(pti_horas.ziortza.mediciones*100)/100;
			pti_horas.ziortza.otros = Math.round(pti_horas.ziortza.otros*100)/100;
			
			pti_horas.alaitz.replanteo = Math.round(pti_horas.alaitz.replanteo*100)/100;
			pti_horas.alaitz.delineacion = Math.round(pti_horas.alaitz.delineacion*100)/100;
			pti_horas.alaitz.calculo = Math.round(pti_horas.alaitz.calculo*100)/100;
			pti_horas.alaitz.revision = Math.round(pti_horas.alaitz.revision*100)/100;
			pti_horas.alaitz.modificacion = Math.round(pti_horas.alaitz.modificacion*100)/100;
			pti_horas.alaitz.asistencia = Math.round(pti_horas.alaitz.asistencia*100)/100;
			pti_horas.alaitz.mediciones = Math.round(pti_horas.alaitz.mediciones*100)/100;
			pti_horas.alaitz.otros = Math.round(pti_horas.alaitz.otros*100)/100;
			
			pti_horas.unai.replanteo = Math.round(pti_horas.unai.replanteo*100)/100;
			pti_horas.unai.delineacion = Math.round(pti_horas.unai.delineacion*100)/100;
			pti_horas.unai.calculo = Math.round(pti_horas.unai.calculo*100)/100;
			pti_horas.unai.revision = Math.round(pti_horas.unai.revision*100)/100;
			pti_horas.unai.modificacion = Math.round(pti_horas.unai.modificacion*100)/100;
			pti_horas.unai.asistencia = Math.round(pti_horas.unai.asistencia*100)/100;
			pti_horas.unai.mediciones = Math.round(pti_horas.unai.mediciones*100)/100;
			pti_horas.unai.otros = Math.round(pti_horas.unai.otros*100)/100;
			
			pti_horas.eli.replanteo = Math.round(pti_horas.eli.replanteo*100)/100;
			pti_horas.eli.delineacion = Math.round(pti_horas.eli.delineacion*100)/100;
			pti_horas.eli.calculo = Math.round(pti_horas.eli.calculo*100)/100;
			pti_horas.eli.revision = Math.round(pti_horas.eli.revision*100)/100;
			pti_horas.eli.modificacion = Math.round(pti_horas.eli.modificacion*100)/100;
			pti_horas.eli.asistencia = Math.round(pti_horas.eli.asistencia*100)/100;
			pti_horas.eli.mediciones = Math.round(pti_horas.eli.mediciones*100)/100;
			pti_horas.eli.otros = Math.round(pti_horas.eli.otros*100)/100;
			/////////////////////////////////////////////////////////////////////////////////////////////
			var fila = "filaimpar";
			for (i in pti_arraycosteusuarios) {
				switch (pti_arraycosteusuarios[i].usuario) {
					case "jon":
						var horastotal = pti_horas.jon.replanteo + pti_horas.jon.delineacion + pti_horas.jon.calculo + pti_horas.jon.revision + pti_horas.jon.modificacion + pti_horas.jon.asistencia + pti_horas.jon.mediciones + pti_horas.jon.otros;
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.jon.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.jon.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.jon.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.jon.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.jon.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.jon.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.jon.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.jon.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.jon.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.jon.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.jon.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.jon.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.jon.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.jon.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.jon.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.jon.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.jon.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.jon.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje + celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje + celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje + celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "oscar":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.oscar.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.oscar.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.oscar.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.oscar.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.oscar.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.oscar.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.oscar.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.oscar.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.oscar.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.oscar.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.oscar.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.oscar.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.oscar.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.oscar.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.oscar.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.oscar.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.oscar.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.oscar.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "david":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.david.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.david.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.david.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.david.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.david.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.david.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.david.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.david.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.david.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.david.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.david.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.david.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.david.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.david.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.david.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.david.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.david.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.david.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal ;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "esti":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.esti.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.esti.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.esti.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.esti.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.esti.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.esti.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.esti.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.esti.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.esti.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.esti.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.esti.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.esti.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.esti.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.esti.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.esti.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.esti.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.esti.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.esti.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "marcos":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.marcos.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.marcos.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.marcos.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.marcos.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.marcos.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.marcos.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.marcos.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.marcos.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.marcos.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.marcos.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.marcos.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.marcos.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.marcos.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.marcos.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.marcos.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.marcos.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.marcos.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.marcos.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "markel":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.markel.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.markel.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.markel.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.markel.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.markel.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.markel.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.markel.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.markel.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.markel.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.markel.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.markel.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.markel.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.markel.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.markel.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.markel.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.markel.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.markel.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.markel.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "joanes":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.joanes.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.joanes.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.joanes.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.joanes.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.joanes.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.joanes.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.joanes.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.joanes.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.joanes.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.joanes.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.joanes.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.joanes.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.joanes.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.joanes.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.joanes.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.joanes.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.joanes.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.joanes.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "ainhoa":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.ainhoa.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.ainhoa.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.ainhoa.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.ainhoa.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.ainhoa.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.ainhoa.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.ainhoa.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.ainhoa.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.ainhoa.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.ainhoa.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.ainhoa.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.ainhoa.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.ainhoa.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.ainhoa.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.ainhoa.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.ainhoa.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.ainhoa.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.ainhoa.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "jose":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.jose.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.jose.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.jose.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.jose.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.jose.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.jose.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.jose.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.jose.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.jose.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.jose.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.jose.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.jose.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.jose.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.jose.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.jose.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.jose.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.jose.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.jose.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "andoni":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.andoni.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.andoni.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.andoni.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.andoni.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.andoni.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.andoni.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.andoni.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.andoni.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.andoni.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.andoni.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.andoni.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.andoni.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.andoni.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.andoni.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.andoni.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.andoni.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.andoni.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.andoni.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "ziortza":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.ziortza.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.ziortza.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.ziortza.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.ziortza.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.ziortza.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.ziortza.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.ziortza.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.ziortza.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.ziortza.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.ziortza.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.ziortza.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.ziortza.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.ziortza.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.ziortza.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.ziortza.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.ziortza.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.ziortza.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.ziortza.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "alaitz":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.alaitz.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.alaitz.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.alaitz.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.alaitz.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.alaitz.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.alaitz.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.alaitz.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.alaitz.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.alaitz.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.alaitz.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.alaitz.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.alaitz.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.alaitz.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.alaitz.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.alaitz.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.alaitz.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.alaitz.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.alaitz.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "unai":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.unai.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.unai.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.unai.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.unai.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.unai.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.unai.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.unai.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.unai.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.unai.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.unai.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.unai.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.unai.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.unai.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.unai.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.unai.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.unai.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.unai.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.unai.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;
					case "eli":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.eli.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.eli.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  </td>";
						var celdahorasdel = "<td>" + pti_horas.eli.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.eli.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  </td>";
						var celdacalculohoras = "<td>" + pti_horas.eli.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.eli.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.eli.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.eli.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.eli.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.eli.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.eli.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.eli.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.eli.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.eli.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  </td>";
						var celdaotroshoras = "<td>" + pti_horas.eli.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.eli.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  </td>";
						var celdahorastotal = "<td>" + pti_horas.eli.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.eli.importetotal+ "</td>";
						var celdas = celdatrabajodiv + celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdamodificacionhoras + celdamodificacionimporte + celdamodificacionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						break;

				}

			}

		},
	};
	var websql = {
		"horastrabajo" : function() {
			$.ajax({
				url : 'server/pti_horas.php',
				type : 'post',
				dataType : "json",
				data : {
					"codigoinak" : codigoinak
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestahorastrabajo) {
					pti_arrayhorastrabajo = respuestahorastrabajo;
					var n = 0;
					for (i in pti_arrayhorastrabajo) {
						if (pti_arrayhorastrabajo[i].proyecto.trim() == localStorage.getItem("alias").trim()) {
							pti_arrayhorastrabajofiltro.push(pti_arrayhorastrabajo[i]);
							n = n + 1;
						}
					}
					console.log(respuestahorastrabajo);
					var control = ""
					for (i in respuestahorastrabajo){
						control = control + " " + respuestahorastrabajo[i].id;
					};
					console.log (control);
					dom.trabajo();
				}
			});
		},

		"trabajodiv" : function() {
			$.ajax({
				url : 'server/pst_div.php',
				type : 'post',
				dataType : "json",
				data : {
					"alias" : localStorage.getItem("alias"),
				},
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(respuestatrabajodiv) {
					pti_arraytrabajosdiv = respuestatrabajodiv;
					console.log(pti_arraytrabajosdiv);
					for (i in pti_arraytrabajosdiv) {
						var fechaini = pti_arraytrabajosdiv[i].fechaini;
						var fechafin = pti_arraytrabajosdiv[i].fechafin;
						var alias = localStorage.getItem("alias").trim();
						console.log(alias);

						websql.horastrabajo(fechaini, fechafin, pti_arraytrabajosdiv[i].codigoinakdiv);
					}
				}
			});
		},
		"trabajos" : function() {
			$.ajax({
				url : 'server/pti_trabajos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuesta) {
					
					pt_arraytrabajos = respuesta;
					for (i in pt_arraytrabajos){
						if (pt_arraytrabajos[i].alias.trim() == localStorage.getItem("alias").trim()){
							codigoinak = pt_arraytrabajos[i].codigo.trim();
							console.log(codigoinak);
						}
					};
					websql.horastrabajo();
									
				}
			});
		},
		"costeusuarios" : function() {
			$.ajax({
				url : 'pst_costeusuarios.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(respuestacosteusuarios) {
					pti_arraycosteusuarios = respuestacosteusuarios;
					websql.trabajos();
					//websql.horastrabajo();
				}
			});
		},
	};

	console.log(localStorage.getItem("alias"));
	
	websql.costeusuarios();
	
	var pti_arrayhorastrabajo;
	var pti_arrayhorastrabajofiltro = [];
	var pti_arraytrabajosdiv;
	var pti_arrayusuarios;
	var pti_trabajosdiv;
	
	var pt_arraytrabajos;
	var codigoinak;
	

	var pti_horas = {
		"jon" : {
			"delineacion" : 0,
			"delineacionimporte" : 0,
			"delineacionporcentaje" : 0,
			"replanteo" : 0
		},
		"esti" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"marcos" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"markel" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"joanes" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"ainhoa" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"jose" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"andoni" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"ziortza" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"alaitz" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"david" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"oscar" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"unai" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"eli" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
	};

});
