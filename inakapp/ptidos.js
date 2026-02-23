$(document).delegate('#ptidos', 'pagecreate', function() {
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
				"cris" : {
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
				"izaskun" : {
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
				
				"andres" : {
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
				
				"mikelrankin" : {
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
				
				"erosdasilva" : {
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
				
				
				"nataliagarcia" : {
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
				
				"nicolasmejia" : {
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
				"nerea" : {
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
				"ikervillar" : {
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
				"jontolosa" : {
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
				"leiremartin" : {
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
				"gorka" : {
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
				"mayra" : {
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
				
				"cristina" : {
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
				"inigo" : {
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
				"ana" : {
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
				"inigoflorindo" : {
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
				"carolinauchuari" : {
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
							pti_horas.unai.replanteoimporte = parseFloat(pti_horas.unai.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.replanteo = parseFloat(pti_horas.david.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.replanteoimporte = parseFloat(pti_horas.david.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.replanteo = parseFloat(pti_horas.jon.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.replanteoimporte = parseFloat(pti_horas.jon.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.replanteo = parseFloat(pti_horas.oscar.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.replanteoimporte = parseFloat(pti_horas.oscar.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.replanteo = parseFloat(pti_horas.esti.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.replanteoimporte = parseFloat(pti_horas.esti.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.replanteo = parseFloat(pti_horas.marcos.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.replanteoimporte = parseFloat(pti_horas.marcos.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.replanteo = parseFloat(pti_horas.markel.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.replanteoimporte = parseFloat(pti_horas.markel.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.replanteo = parseFloat(pti_horas.joanes.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.replanteoimporte = parseFloat(pti_horas.joanes.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;	
						case "ainhoa":
							pti_horas.ainhoa.replanteo = parseFloat(pti_horas.ainhoa.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.replanteoimporte = parseFloat(pti_horas.ainhoa.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.replanteo = parseFloat(pti_horas.jose.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.replanteoimporte = parseFloat(pti_horas.jose.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andoni":
							pti_horas.andoni.replanteo = parseFloat(pti_horas.andoni.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.replanteoimporte = parseFloat(pti_horas.andoni.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.replanteo = parseFloat(pti_horas.ziortza.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.replanteoimporte = parseFloat(pti_horas.ziortza.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.replanteo = parseFloat(pti_horas.cris.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.replanteoimporte = parseFloat(pti_horas.cris.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.replanteo = parseFloat(pti_horas.izaskun.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.replanteoimporte = parseFloat(pti_horas.izaskun.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.replanteo = parseFloat(pti_horas.andres.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.replanteoimporte = parseFloat(pti_horas.andres.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mikelrankin":
							pti_horas.mikelrankin.replanteo = parseFloat(pti_horas.mikelrankin.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.replanteoimporte = parseFloat(pti_horas.mikelrankin.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "erosdasilva":
							pti_horas.erosdasilva.replanteo = parseFloat(pti_horas.erosdasilva.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.replanteoimporte = parseFloat(pti_horas.erosdasilva.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "nataliagarcia":
							pti_horas.nataliagarcia.replanteo = parseFloat(pti_horas.nataliagarcia.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.replanteoimporte = parseFloat(pti_horas.nataliagarcia.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "nicolasmejia":
							pti_horas.nicolasmejia.replanteo = parseFloat(pti_horas.nicolasmejia.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.replanteoimporte = parseFloat(pti_horas.nicolasmejia.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "nerea":
							pti_horas.nerea.replanteo = parseFloat(pti_horas.nerea.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.replanteoimporte = parseFloat(pti_horas.nerea.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.replanteo = parseFloat(pti_horas.ikervillar.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.replanteoimporte = parseFloat(pti_horas.ikervillar.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.replanteo = parseFloat(pti_horas.jontolosa.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.replanteoimporte = parseFloat(pti_horas.jontolosa.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "leiremartin":
							pti_horas.leiremartin.replanteo = parseFloat(pti_horas.leiremartin.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.replanteoimporte = parseFloat(pti_horas.leiremartin.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "gorka":
							pti_horas.gorka.replanteo = parseFloat(pti_horas.gorka.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.replanteoimporte = parseFloat(pti_horas.gorka.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mayra":
							pti_horas.mayra.replanteo = parseFloat(pti_horas.mayra.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.replanteoimporte = parseFloat(pti_horas.mayra.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "cristina":
							pti_horas.cristina.replanteo = parseFloat(pti_horas.cristina.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.replanteoimporte = parseFloat(pti_horas.cristina.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.replanteo = parseFloat(pti_horas.inigo.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.replanteoimporte = parseFloat(pti_horas.inigo.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.replanteo = parseFloat(pti_horas.ana.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.replanteoimporte = parseFloat(pti_horas.ana.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.replanteo = parseFloat(pti_horas.inigoflorindo.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.replanteoimporte = parseFloat(pti_horas.inigoflorindo.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.replanteo = parseFloat(pti_horas.carolinauchuari.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.replanteoimporte = parseFloat(pti_horas.carolinauchuari.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "alaitz":
							pti_horas.alaitz.replanteo = parseFloat(pti_horas.alaitz.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.replanteoimporte = parseFloat(pti_horas.alaitz.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.replanteo = parseFloat(pti_horas.udane.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.replanteoimporte = parseFloat(pti_horas.udane.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.replanteo = parseFloat(pti_horas.eli.replanteo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.replanteoimporte = parseFloat(pti_horas.eli.replanteoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}

				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Delineación") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.delineacion = parseFloat(pti_horas.unai.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.delineacionimporte = parseFloat(pti_horas.unai.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							//pst_arraytrabajos[j].importehorasdelineacion = parseFloat(pst_arraytrabajos[j].importehorasdelineacion) + parseFloat(pst_arrayhorastrabajo[i].horas * pst_arraycosteusuarios.unai.coste);
							break;
						case "david":
							pti_horas.david.delineacion = parseFloat(pti_horas.david.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.delineacionimporte = parseFloat(pti_horas.david.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.delineacion = parseFloat(pti_horas.jon.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.delineacionimporte = parseFloat(pti_horas.jon.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.delineacion = parseFloat(pti_horas.oscar.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.delineacionimporte = parseFloat(pti_horas.oscar.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.delineacion = parseFloat(pti_horas.esti.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.delineacionimporte = parseFloat(pti_horas.esti.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.delineacion = parseFloat(pti_horas.marcos.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.delineacionimporte = parseFloat(pti_horas.marcos.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.delineacion = parseFloat(pti_horas.markel.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.delineacionimporte = parseFloat(pti_horas.markel.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.delineacion = parseFloat(pti_horas.joanes.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.delineacionimporte = parseFloat(pti_horas.joanes.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.delineacion = parseFloat(pti_horas.ainhoa.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.delineacionimporte = parseFloat(pti_horas.ainhoa.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.delineacion = parseFloat(pti_horas.jose.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.delineacionimporte = parseFloat(pti_horas.jose.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "andoni":
							pti_horas.andoni.delineacion = parseFloat(pti_horas.andoni.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.delineacionimporte = parseFloat(pti_horas.andoni.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.delineacion = parseFloat(pti_horas.ziortza.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.delineacionimporte = parseFloat(pti_horas.ziortza.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.delineacion = parseFloat(pti_horas.cris.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.delineacionimporte = parseFloat(pti_horas.cris.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.delineacion = parseFloat(pti_horas.izaskun.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.delineacionimporte = parseFloat(pti_horas.izaskun.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.delineacion = parseFloat(pti_horas.andres.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.delineacionimporte = parseFloat(pti_horas.andres.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mikelrankin":
							pti_horas.mikelrankin.delineacion = parseFloat(pti_horas.mikelrankin.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.delineacionimporte = parseFloat(pti_horas.mikelrankin.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "erosdasilva":
							pti_horas.erosdasilva.delineacion = parseFloat(pti_horas.erosdasilva.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.delineacionimporte = parseFloat(pti_horas.erosdasilva.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nataliagarcia":
							pti_horas.nataliagarcia.delineacion = parseFloat(pti_horas.nataliagarcia.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.delineacionimporte = parseFloat(pti_horas.nataliagarcia.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nicolasmejia":
							pti_horas.nicolasmejia.delineacion = parseFloat(pti_horas.nicolasmejia.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.delineacionimporte = parseFloat(pti_horas.nicolasmejia.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "nerea":
							pti_horas.nerea.delineacion = parseFloat(pti_horas.nerea.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.delineacionimporte = parseFloat(pti_horas.nerea.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.delineacion = parseFloat(pti_horas.ikervillar.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.delineacionimporte = parseFloat(pti_horas.ikervillar.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.delineacion = parseFloat(pti_horas.jontolosa.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.delineacionimporte = parseFloat(pti_horas.jontolosa.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "leiremartin":
							pti_horas.leiremartin.delineacion = parseFloat(pti_horas.leiremartin.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.delineacionimporte = parseFloat(pti_horas.leiremartin.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "gorka":
							pti_horas.gorka.delineacion = parseFloat(pti_horas.gorka.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.delineacionimporte = parseFloat(pti_horas.gorka.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mayra":
							pti_horas.mayra.delineacion = parseFloat(pti_horas.mayra.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.delineacionimporte = parseFloat(pti_horas.mayra.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "cristina":
							pti_horas.cristina.delineacion = parseFloat(pti_horas.cristina.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.delineacionimporte = parseFloat(pti_horas.cristina.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.delineacion = parseFloat(pti_horas.inigo.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.delineacionimporte = parseFloat(pti_horas.inigo.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.delineacion = parseFloat(pti_horas.ana.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.delineacionimporte = parseFloat(pti_horas.ana.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.delineacion = parseFloat(pti_horas.inigoflorindo.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.delineacionimporte = parseFloat(pti_horas.inigoflorindo.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.delineacion = parseFloat(pti_horas.carolinauchuari.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.delineacionimporte = parseFloat(pti_horas.carolinauchuari.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "alaitz":
							pti_horas.alaitz.delineacion = parseFloat(pti_horas.alaitz.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.delineacionimporte = parseFloat(pti_horas.alaitz.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.delineacion = parseFloat(pti_horas.udane.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.delineacionimporte = parseFloat(pti_horas.udane.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.delineacion = parseFloat(pti_horas.eli.delineacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.delineacionimporte = parseFloat(pti_horas.eli.delineacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}

				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Cálculo") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.calculo = parseFloat(pti_horas.unai.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.calculoimporte = parseFloat(pti_horas.unai.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.calculo = parseFloat(pti_horas.david.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.calculoimporte = parseFloat(pti_horas.david.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.calculo = parseFloat(pti_horas.jon.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.calculoimporte = parseFloat(pti_horas.jon.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.calculo = parseFloat(pti_horas.oscar.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.calculoimporte = parseFloat(pti_horas.oscar.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.calculo = parseFloat(pti_horas.esti.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.calculoimporte = parseFloat(pti_horas.esti.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.calculo = parseFloat(pti_horas.marcos.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.calculoimporte = parseFloat(pti_horas.marcos.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.calculo = parseFloat(pti_horas.markel.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.calculoimporte = parseFloat(pti_horas.markel.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.calculo = parseFloat(pti_horas.joanes.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.calculoimporte = parseFloat(pti_horas.joanes.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.calculo = parseFloat(pti_horas.ainhoa.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.calculoimporte = parseFloat(pti_horas.ainhoa.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.calculo = parseFloat(pti_horas.jose.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.calculoimporte = parseFloat(pti_horas.jose.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andoni":
							pti_horas.andoni.calculo = parseFloat(pti_horas.andoni.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.calculoimporte = parseFloat(pti_horas.andoni.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.calculo = parseFloat(pti_horas.ziortza.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.calculoimporte = parseFloat(pti_horas.ziortza.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.calculo = parseFloat(pti_horas.cris.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.calculoimporte = parseFloat(pti_horas.cris.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.calculo = parseFloat(pti_horas.izaskun.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.calculoimporte = parseFloat(pti_horas.izaskun.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.calculo = parseFloat(pti_horas.andres.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.calculoimporte = parseFloat(pti_horas.andres.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mikelrankin":
							pti_horas.mikelrankin.calculo = parseFloat(pti_horas.mikelrankin.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.calculoimporte = parseFloat(pti_horas.mikelrankin.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "erosdasilva":
							pti_horas.erosdasilva.calculo = parseFloat(pti_horas.erosdasilva.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.calculoimporte = parseFloat(pti_horas.erosdasilva.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nataliagarcia":
							pti_horas.nataliagarcia.calculo = parseFloat(pti_horas.nataliagarcia.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.calculoimporte = parseFloat(pti_horas.nataliagarcia.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nicolasmejia":
							pti_horas.nicolasmejia.calculo = parseFloat(pti_horas.nicolasmejia.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.calculoimporte = parseFloat(pti_horas.nicolasmejia.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nerea":
							pti_horas.nerea.calculo = parseFloat(pti_horas.nerea.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.calculoimporte = parseFloat(pti_horas.nerea.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.calculo = parseFloat(pti_horas.ikervillar.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.calculoimporte = parseFloat(pti_horas.ikervillar.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.calculo = parseFloat(pti_horas.jontolosa.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.calculoimporte = parseFloat(pti_horas.jontolosa.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "leiremartin":
							pti_horas.leiremartin.calculo = parseFloat(pti_horas.leiremartin.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.calculoimporte = parseFloat(pti_horas.leiremartin.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "gorka":
							pti_horas.gorka.calculo = parseFloat(pti_horas.gorka.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.calculoimporte = parseFloat(pti_horas.gorka.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mayra":
							pti_horas.mayra.calculo = parseFloat(pti_horas.mayra.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.calculoimporte = parseFloat(pti_horas.mayra.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "cristina":
							pti_horas.cristina.calculo = parseFloat(pti_horas.cristina.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.calculoimporte = parseFloat(pti_horas.cristina.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.calculo = parseFloat(pti_horas.inigo.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.calculoimporte = parseFloat(pti_horas.inigo.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.calculo = parseFloat(pti_horas.ana.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.calculoimporte = parseFloat(pti_horas.ana.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.calculo = parseFloat(pti_horas.inigoflorindo.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.calculoimporte = parseFloat(pti_horas.inigoflorindo.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.calculo = parseFloat(pti_horas.carolinauchuari.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.calculoimporte = parseFloat(pti_horas.carolinauchuari.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "alaitz":
							pti_horas.alaitz.calculo = parseFloat(pti_horas.alaitz.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.calculoimporte = parseFloat(pti_horas.alaitz.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.calculo = parseFloat(pti_horas.udane.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.calculoimporte = parseFloat(pti_horas.udane.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.calculo = parseFloat(pti_horas.eli.calculo) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.calculoimporte = parseFloat(pti_horas.eli.calculoimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Revisión") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.revision = parseFloat(pti_horas.unai.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.revisionimporte = parseFloat(pti_horas.unai.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.revision = parseFloat(pti_horas.david.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.revisionimporte = parseFloat(pti_horas.david.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.revision = parseFloat(pti_horas.jon.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.revisionimporte = parseFloat(pti_horas.jon.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.revision = parseFloat(pti_horas.oscar.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.revisionimporte = parseFloat(pti_horas.oscar.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.revision = parseFloat(pti_horas.esti.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.revisionimporte = parseFloat(pti_horas.esti.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.revision = parseFloat(pti_horas.marcos.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.revisionimporte = parseFloat(pti_horas.marcos.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.revision = parseFloat(pti_horas.markel.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.revisionimporte = parseFloat(pti_horas.markel.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.revision = parseFloat(pti_horas.joanes.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.revisionimporte = parseFloat(pti_horas.joanes.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.revision = parseFloat(pti_horas.ainhoa.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.revisionimporte = parseFloat(pti_horas.ainhoa.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.revision = parseFloat(pti_horas.jose.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.revisionimporte = parseFloat(pti_horas.jose.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andoni":
							pti_horas.andoni.revision = parseFloat(pti_horas.andoni.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.revisionimporte = parseFloat(pti_horas.andoni.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.revision = parseFloat(pti_horas.ziortza.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.revisionimporte = parseFloat(pti_horas.ziortza.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.revision = parseFloat(pti_horas.cris.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.revisionimporte = parseFloat(pti_horas.cris.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.revision = parseFloat(pti_horas.izaskun.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.revisionimporte = parseFloat(pti_horas.izaskun.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.revision = parseFloat(pti_horas.andres.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.revisionimporte = parseFloat(pti_horas.andres.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mikelrankin":
							pti_horas.mikelrankin.revision = parseFloat(pti_horas.mikelrankin.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.revisionimporte = parseFloat(pti_horas.mikelrankin.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "erosdasilva":
							pti_horas.erosdasilva.revision = parseFloat(pti_horas.erosdasilva.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.revisionimporte = parseFloat(pti_horas.erosdasilva.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nataliagarcia":
							pti_horas.nataliagarcia.revision = parseFloat(pti_horas.nataliagarcia.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.revisionimporte = parseFloat(pti_horas.nataliagarcia.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nicolasmejia":
							pti_horas.nicolasmejia.revision = parseFloat(pti_horas.nicolasmejia.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.revisionimporte = parseFloat(pti_horas.nicolasmejia.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nerea":
							pti_horas.nerea.revision = parseFloat(pti_horas.nerea.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.revisionimporte = parseFloat(pti_horas.nerea.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.revision = parseFloat(pti_horas.ikervillar.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.revisionimporte = parseFloat(pti_horas.ikervillar.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.revision = parseFloat(pti_horas.jontolosa.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.revisionimporte = parseFloat(pti_horas.jontolosa.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "leiremartin":
							pti_horas.leiremartin.revision = parseFloat(pti_horas.leiremartin.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.revisionimporte = parseFloat(pti_horas.leiremartin.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "gorka":
							pti_horas.gorka.revision = parseFloat(pti_horas.gorka.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.revisionimporte = parseFloat(pti_horas.gorka.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mayra":
							pti_horas.mayra.revision = parseFloat(pti_horas.mayra.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.revisionimporte = parseFloat(pti_horas.mayra.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "cristina":
							pti_horas.cristina.revision = parseFloat(pti_horas.cristina.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.revisionimporte = parseFloat(pti_horas.cristina.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.revision = parseFloat(pti_horas.inigo.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.revisionimporte = parseFloat(pti_horas.inigo.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.revision = parseFloat(pti_horas.ana.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.revisionimporte = parseFloat(pti_horas.ana.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.revision = parseFloat(pti_horas.inigoflorindo.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.revisionimporte = parseFloat(pti_horas.inigoflorindo.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.revision = parseFloat(pti_horas.carolinauchuari.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.revisionimporte = parseFloat(pti_horas.carolinauchuari.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "alaitz":
							pti_horas.alaitz.revision = parseFloat(pti_horas.alaitz.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.revisionimporte = parseFloat(pti_horas.alaitz.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.revision = parseFloat(pti_horas.udane.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.revisionimporte = parseFloat(pti_horas.udane.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.revision = parseFloat(pti_horas.eli.revision) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.revisionimporte = parseFloat(pti_horas.eli.revisionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "ModificaciónObra") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.modificacion = parseFloat(pti_horas.unai.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.modificacionimporte = parseFloat(pti_horas.unai.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.modificacion = parseFloat(pti_horas.david.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.modificacionimporte = parseFloat(pti_horas.david.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.modificacion = parseFloat(pti_horas.jon.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.modificacionimporte = parseFloat(pti_horas.jon.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.modificacion = parseFloat(pti_horas.oscar.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.modificacionimporte = parseFloat(pti_horas.oscar.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.modificacion = parseFloat(pti_horas.esti.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.modificacionimporte = parseFloat(pti_horas.esti.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.modificacion = parseFloat(pti_horas.marcos.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.modificacionimporte = parseFloat(pti_horas.marcos.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.modificacion = parseFloat(pti_horas.markel.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.modificacionimporte = parseFloat(pti_horas.markel.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.modificacion = parseFloat(pti_horas.joanes.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.modificacionimporte = parseFloat(pti_horas.joanes.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.modificacion = parseFloat(pti_horas.ainhoa.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.modificacionimporte = parseFloat(pti_horas.ainhoa.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.modificacion = parseFloat(pti_horas.jose.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.modificacionimporte = parseFloat(pti_horas.jose.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andoni":
							pti_horas.andoni.modificacion = parseFloat(pti_horas.andoni.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.modificacionimporte = parseFloat(pti_horas.andoni.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.modificacion = parseFloat(pti_horas.ziortza.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.modificacionimporte = parseFloat(pti_horas.ziortza.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.modificacion = parseFloat(pti_horas.cris.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.modificacionimporte = parseFloat(pti_horas.cris.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.modificacion = parseFloat(pti_horas.izaskun.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.modificacionimporte = parseFloat(pti_horas.izaskun.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.modificacion = parseFloat(pti_horas.andres.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.modificacionimporte = parseFloat(pti_horas.andres.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mikelrankin":
							pti_horas.mikelrankin.modificacion = parseFloat(pti_horas.mikelrankin.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.modificacionimporte = parseFloat(pti_horas.mikelrankin.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "erosdasilva":
							pti_horas.erosdasilva.modificacion = parseFloat(pti_horas.erosdasilva.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.modificacionimporte = parseFloat(pti_horas.erosdasilva.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nataliagarcia":
							pti_horas.nataliagarcia.modificacion = parseFloat(pti_horas.nataliagarcia.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.modificacionimporte = parseFloat(pti_horas.nataliagarcia.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nicolasmejia":
							pti_horas.nicolasmejia.modificacion = parseFloat(pti_horas.nicolasmejia.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.modificacionimporte = parseFloat(pti_horas.nicolasmejia.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nerea":
							pti_horas.nerea.modificacion = parseFloat(pti_horas.nerea.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.modificacionimporte = parseFloat(pti_horas.nerea.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.modificacion = parseFloat(pti_horas.ikervillar.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.modificacionimporte = parseFloat(pti_horas.ikervillar.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.modificacion = parseFloat(pti_horas.jontolosa.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.modificacionimporte = parseFloat(pti_horas.jontolosa.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "leiremartin":
							pti_horas.leiremartin.modificacion = parseFloat(pti_horas.leiremartin.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.modificacionimporte = parseFloat(pti_horas.leiremartin.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "gorka":
							pti_horas.gorka.modificacion = parseFloat(pti_horas.gorka.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.modificacionimporte = parseFloat(pti_horas.gorka.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "mayra":
							pti_horas.mayra.modificacion = parseFloat(pti_horas.mayra.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.modificacionimporte = parseFloat(pti_horas.mayra.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "cristina":
							pti_horas.cristina.modificacion = parseFloat(pti_horas.cristina.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.modificacionimporte = parseFloat(pti_horas.cristina.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.modificacion = parseFloat(pti_horas.inigo.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.modificacionimporte = parseFloat(pti_horas.inigo.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.modificacion = parseFloat(pti_horas.ana.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.modificacionimporte = parseFloat(pti_horas.ana.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.modificacion = parseFloat(pti_horas.inigoflorindo.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.modificacionimporte = parseFloat(pti_horas.inigoflorindo.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.modificacion = parseFloat(pti_horas.carolinauchuari.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.modificacionimporte = parseFloat(pti_horas.carolinauchuari.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "alaitz":
							pti_horas.alaitz.modificacion = parseFloat(pti_horas.alaitz.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.modificacionimporte = parseFloat(pti_horas.alaitz.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.modificacion = parseFloat(pti_horas.udane.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.modificacionimporte = parseFloat(pti_horas.udane.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.modificacion = parseFloat(pti_horas.eli.modificacion) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.modificacionimporte = parseFloat(pti_horas.eli.modificacionimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "AsistenciaObra") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.asistencia = parseFloat(pti_horas.unai.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.asistenciaimporte = parseFloat(pti_horas.unai.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.asistencia = parseFloat(pti_horas.david.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.asistenciaimporte = parseFloat(pti_horas.david.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.asistencia = parseFloat(pti_horas.jon.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.asistenciaimporte = parseFloat(pti_horas.jon.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.asistencia = parseFloat(pti_horas.oscar.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.asistenciaimporte = parseFloat(pti_horas.oscar.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.asistencia = parseFloat(pti_horas.esti.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.asistenciaimporte = parseFloat(pti_horas.esti.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.asistencia = parseFloat(pti_horas.marcos.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.asistenciaimporte = parseFloat(pti_horas.marcos.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.asistencia = parseFloat(pti_horas.markel.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.asistenciaimporte = parseFloat(pti_horas.markel.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.asistencia = parseFloat(pti_horas.joanes.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.asistenciaimporte = parseFloat(pti_horas.joanes.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.asistencia = parseFloat(pti_horas.ainhoa.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.asistenciaimporte = parseFloat(pti_horas.ainhoa.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.asistencia = parseFloat(pti_horas.jose.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.asistenciaimporte = parseFloat(pti_horas.jose.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andoni":
							pti_horas.andoni.asistencia = parseFloat(pti_horas.andoni.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.asistenciaimporte = parseFloat(pti_horas.andoni.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.asistencia = parseFloat(pti_horas.ziortza.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.asistenciaimporte = parseFloat(pti_horas.ziortza.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.asistencia = parseFloat(pti_horas.cris.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.asistenciaimporte = parseFloat(pti_horas.cris.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.asistencia = parseFloat(pti_horas.izaskun.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.asistenciaimporte = parseFloat(pti_horas.izaskun.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.asistencia = parseFloat(pti_horas.andres.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.asistenciaimporte = parseFloat(pti_horas.andres.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mikelrankin":
							pti_horas.mikelrankin.asistencia = parseFloat(pti_horas.mikelrankin.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.asistenciaimporte = parseFloat(pti_horas.mikelrankin.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "erosdasilva":
							pti_horas.erosdasilva.asistencia = parseFloat(pti_horas.erosdasilva.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.asistenciaimporte = parseFloat(pti_horas.erosdasilva.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nataliagarcia":
							pti_horas.nataliagarcia.asistencia = parseFloat(pti_horas.nataliagarcia.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.asistenciaimporte = parseFloat(pti_horas.nataliagarcia.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nicolasmejia":
							pti_horas.nicolasmejia.asistencia = parseFloat(pti_horas.nicolasmejia.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.asistenciaimporte = parseFloat(pti_horas.nicolasmejia.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nerea":
							pti_horas.nerea.asistencia = parseFloat(pti_horas.nerea.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.asistenciaimporte = parseFloat(pti_horas.nerea.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.asistencia = parseFloat(pti_horas.ikervillar.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.asistenciaimporte = parseFloat(pti_horas.ikervillar.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.asistencia = parseFloat(pti_horas.jontolosa.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.asistenciaimporte = parseFloat(pti_horas.jontolosa.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "leiremartin":
							pti_horas.leiremartin.asistencia = parseFloat(pti_horas.leiremartin.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.asistenciaimporte = parseFloat(pti_horas.leiremartin.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "gorka":
							pti_horas.gorka.asistencia = parseFloat(pti_horas.gorka.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.asistenciaimporte = parseFloat(pti_horas.gorka.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mayra":
							pti_horas.mayra.asistencia = parseFloat(pti_horas.mayra.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.asistenciaimporte = parseFloat(pti_horas.mayra.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "cristina":
							pti_horas.cristina.asistencia = parseFloat(pti_horas.cristina.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.asistenciaimporte = parseFloat(pti_horas.cristina.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.asistencia = parseFloat(pti_horas.inigo.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.asistenciaimporte = parseFloat(pti_horas.inigo.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.asistencia = parseFloat(pti_horas.ana.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.asistenciaimporte = parseFloat(pti_horas.ana.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.asistencia = parseFloat(pti_horas.inigoflorindo.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.asistenciaimporte = parseFloat(pti_horas.inigoflorindo.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.asistencia = parseFloat(pti_horas.carolinauchuari.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.asistenciaimporte = parseFloat(pti_horas.carolinauchuari.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "alaitz":
							pti_horas.alaitz.asistencia = parseFloat(pti_horas.alaitz.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.asistenciaimporte = parseFloat(pti_horas.alaitz.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.asistencia = parseFloat(pti_horas.udane.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.asistenciaimporte = parseFloat(pti_horas.udane.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.asistencia = parseFloat(pti_horas.eli.asistencia) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.asistenciaimporte = parseFloat(pti_horas.eli.asistenciaimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Mediciones") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.mediciones = parseFloat(pti_horas.unai.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.medicionesimporte = parseFloat(pti_horas.unai.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.mediciones = parseFloat(pti_horas.david.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.medicionesimporte = parseFloat(pti_horas.david.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.mediciones = parseFloat(pti_horas.jon.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.medicionesimporte = parseFloat(pti_horas.jon.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.mediciones = parseFloat(pti_horas.oscar.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.medicionesimporte = parseFloat(pti_horas.oscar.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.mediciones = parseFloat(pti_horas.esti.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.medicionesimporte = parseFloat(pti_horas.esti.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.mediciones = parseFloat(pti_horas.marcos.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.medicionesimporte = parseFloat(pti_horas.marcos.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.mediciones = parseFloat(pti_horas.markel.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.medicionesimporte = parseFloat(pti_horas.markel.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.mediciones = parseFloat(pti_horas.joanes.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.medicionesimporte = parseFloat(pti_horas.joanes.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.mediciones = parseFloat(pti_horas.ainhoa.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.medicionesimporte = parseFloat(pti_horas.ainhoa.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.mediciones = parseFloat(pti_horas.jose.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.medicionesimporte = parseFloat(pti_horas.jose.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "andoni":
							pti_horas.andoni.mediciones = parseFloat(pti_horas.andoni.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.medicionesimporte = parseFloat(pti_horas.andoni.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ziortza":
							pti_horas.ziortza.mediciones = parseFloat(pti_horas.ziortza.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.medicionesimporte = parseFloat(pti_horas.ziortza.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "cris":
							pti_horas.cris.mediciones = parseFloat(pti_horas.cris.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.medicionesimporte = parseFloat(pti_horas.cris.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "izaskun":
							pti_horas.izaskun.mediciones = parseFloat(pti_horas.izaskun.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.medicionesimporte = parseFloat(pti_horas.izaskun.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
							
						case "andres":
							pti_horas.andres.mediciones = parseFloat(pti_horas.andres.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.medicionesimporte = parseFloat(pti_horas.andres.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						
						case "mikelrankin":
							pti_horas.mikelrankin.mediciones = parseFloat(pti_horas.mikelrankin.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.medicionesimporte = parseFloat(pti_horas.mikelrankin.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
							
						case "erosdasilva":
							pti_horas.erosdasilva.mediciones = parseFloat(pti_horas.erosdasilva.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.medicionesimporte = parseFloat(pti_horas.erosdasilva.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
							
						case "nataliagarcia":
							pti_horas.nataliagarcia.mediciones = parseFloat(pti_horas.nataliagarcia.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.medicionesimporte = parseFloat(pti_horas.nataliagarcia.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
							
						case "nicolasmejia":
							pti_horas.nicolasmejia.mediciones = parseFloat(pti_horas.nicolasmejia.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.medicionesimporte = parseFloat(pti_horas.nicolasmejia.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
								
						case "nerea":
							pti_horas.nerea.mediciones = parseFloat(pti_horas.nerea.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.medicionesimporte = parseFloat(pti_horas.nerea.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
								
						case "ikervillar":
							pti_horas.ikervillar.mediciones = parseFloat(pti_horas.ikervillar.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.medicionesimporte = parseFloat(pti_horas.ikervillar.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
										
						case "jontolosa":
							pti_horas.jontolosa.mediciones = parseFloat(pti_horas.jontolosa.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.medicionesimporte = parseFloat(pti_horas.jontolosa.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
									
						case "leiremartin":
							pti_horas.leiremartin.mediciones = parseFloat(pti_horas.leiremartin.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.medicionesimporte = parseFloat(pti_horas.leiremartin.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
										
						case "gorka":
							pti_horas.gorka.mediciones = parseFloat(pti_horas.gorka.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.medicionesimporte = parseFloat(pti_horas.gorka.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
												
						case "mayra":
							pti_horas.mayra.mediciones = parseFloat(pti_horas.mayra.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.medicionesimporte = parseFloat(pti_horas.mayra.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "cristina":
							pti_horas.cristina.mediciones = parseFloat(pti_horas.cristina.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.medicionesimporte = parseFloat(pti_horas.cristina.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						
						case "inigo":
							pti_horas.inigo.mediciones = parseFloat(pti_horas.inigo.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.medicionesimporte = parseFloat(pti_horas.inigo.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ana":
							pti_horas.ana.mediciones = parseFloat(pti_horas.ana.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.medicionesimporte = parseFloat(pti_horas.ana.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.mediciones = parseFloat(pti_horas.inigoflorindo.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.medicionesimporte = parseFloat(pti_horas.inigoflorindo.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.mediciones = parseFloat(pti_horas.carolinauchuari.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.medicionesimporte = parseFloat(pti_horas.carolinauchuari.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						
						case "alaitz":
							pti_horas.alaitz.mediciones = parseFloat(pti_horas.alaitz.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.medicionesimporte = parseFloat(pti_horas.alaitz.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "udane":
							pti_horas.udane.mediciones = parseFloat(pti_horas.udane.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.medicionesimporte = parseFloat(pti_horas.udane.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.mediciones = parseFloat(pti_horas.eli.mediciones) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.medicionesimporte = parseFloat(pti_horas.eli.medicionesimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}
				if (pti_arrayhorastrabajofiltro[i].fase.trim() == "Otros") {
					switch(pti_arrayhorastrabajofiltro[i].usuario.trim()) {
						case "unai":
							pti_horas.unai.otros = parseFloat(pti_horas.unai.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.unai.otrosimporte = parseFloat(pti_horas.unai.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "david":
							pti_horas.david.otros = parseFloat(pti_horas.david.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.david.otrosimporte = parseFloat(pti_horas.david.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jon":
							pti_horas.jon.otros = parseFloat(pti_horas.jon.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jon.otrosimporte = parseFloat(pti_horas.jon.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "oscar":
							pti_horas.oscar.otros = parseFloat(pti_horas.oscar.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.oscar.otrosimporte = parseFloat(pti_horas.oscar.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "esti":
							pti_horas.esti.otros = parseFloat(pti_horas.esti.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.esti.otrosimporte = parseFloat(pti_horas.esti.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "marcos":
							pti_horas.marcos.otros = parseFloat(pti_horas.marcos.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.marcos.otrosimporte = parseFloat(pti_horas.marcos.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "markel":
							pti_horas.markel.otros = parseFloat(pti_horas.markel.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.markel.otrosimporte = parseFloat(pti_horas.markel.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "joanes":
							pti_horas.joanes.otros = parseFloat(pti_horas.joanes.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.joanes.otrosimporte = parseFloat(pti_horas.joanes.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "ainhoa":
							pti_horas.ainhoa.otros = parseFloat(pti_horas.ainhoa.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ainhoa.otrosimporte = parseFloat(pti_horas.ainhoa.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "jose":
							pti_horas.jose.otros = parseFloat(pti_horas.jose.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jose.otrosimporte = parseFloat(pti_horas.jose.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andoni":
							pti_horas.andoni.otros = parseFloat(pti_horas.andoni.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andoni.otrosimporte = parseFloat(pti_horas.andoni.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ziortza":
							pti_horas.ziortza.otros = parseFloat(pti_horas.ziortza.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ziortza.otrosimporte = parseFloat(pti_horas.ziortza.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cris":
							pti_horas.cris.otros = parseFloat(pti_horas.cris.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cris.otrosimporte = parseFloat(pti_horas.cris.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "izaskun":
							pti_horas.izaskun.otros = parseFloat(pti_horas.izaskun.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.izaskun.otrosimporte = parseFloat(pti_horas.izaskun.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "andres":
							pti_horas.andres.otros = parseFloat(pti_horas.andres.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.andres.otrosimporte = parseFloat(pti_horas.andres.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mikelrankin":
							pti_horas.mikelrankin.otros = parseFloat(pti_horas.mikelrankin.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mikelrankin.otrosimporte = parseFloat(pti_horas.mikelrankin.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "erosdasilva":
							pti_horas.erosdasilva.otros = parseFloat(pti_horas.erosdasilva.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.erosdasilva.otrosimporte = parseFloat(pti_horas.erosdasilva.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;

						case "nataliagarcia":
							pti_horas.nataliagarcia.otros = parseFloat(pti_horas.nataliagarcia.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nataliagarcia.otrosimporte = parseFloat(pti_horas.nataliagarcia.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nicolasmejia":
							pti_horas.nicolasmejia.otros = parseFloat(pti_horas.nicolasmejia.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nicolasmejia.otrosimporte = parseFloat(pti_horas.nicolasmejia.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "nerea":
							pti_horas.nerea.otros = parseFloat(pti_horas.nerea.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.nerea.otrosimporte = parseFloat(pti_horas.nerea.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "ikervillar":
							pti_horas.ikervillar.otros = parseFloat(pti_horas.ikervillar.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ikervillar.otrosimporte = parseFloat(pti_horas.ikervillar.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "jontolosa":
							pti_horas.jontolosa.otros = parseFloat(pti_horas.jontolosa.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.jontolosa.otrosimporte = parseFloat(pti_horas.jontolosa.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "leiremartin":
							pti_horas.leiremartin.otros = parseFloat(pti_horas.leiremartin.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.leiremartin.otrosimporte = parseFloat(pti_horas.leiremartin.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "gorka":
							pti_horas.gorka.otros = parseFloat(pti_horas.gorka.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.gorka.otrosimporte = parseFloat(pti_horas.gorka.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "mayra":
							pti_horas.mayra.otros = parseFloat(pti_horas.mayra.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.mayra.otrosimporte = parseFloat(pti_horas.mayra.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "cristina":
							pti_horas.cristina.otros = parseFloat(pti_horas.cristina.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.cristina.otrosimporte = parseFloat(pti_horas.cristina.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "inigo":
							pti_horas.inigo.otros = parseFloat(pti_horas.inigo.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigo.otrosimporte = parseFloat(pti_horas.inigo.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "ana":
							pti_horas.ana.otros = parseFloat(pti_horas.ana.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.ana.otrosimporte = parseFloat(pti_horas.ana.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "inigoflorindo":
							pti_horas.inigoflorindo.otros = parseFloat(pti_horas.inigoflorindo.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.inigoflorindo.otrosimporte = parseFloat(pti_horas.inigoflorindo.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "carolinauchuari":
							pti_horas.carolinauchuari.otros = parseFloat(pti_horas.carolinauchuari.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.carolinauchuari.otrosimporte = parseFloat(pti_horas.carolinauchuari.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						
						case "alaitz":
							pti_horas.alaitz.otros = parseFloat(pti_horas.alaitz.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.alaitz.otrosimporte = parseFloat(pti_horas.alaitz.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
						break;
						case "udane":
							pti_horas.udane.otros = parseFloat(pti_horas.udane.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.udane.otrosimporte = parseFloat(pti_horas.udane.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
							break;
						case "eli":
							pti_horas.eli.otros = parseFloat(pti_horas.eli.otros) + parseFloat(pti_arrayhorastrabajofiltro[i].horas);
							pti_horas.eli.otrosimporte = parseFloat(pti_horas.eli.otrosimporte) + parseFloat(pti_arrayhorastrabajofiltro[i].horas * parseFloat(pti_arrayhorastrabajofiltro[i].coste));
					};
				}

			}
			////////////////////////////////////REDONDEO HORAS////////////////////////////////////////////////////////////////////////////////////////////////////////////
			pti_horas.jon.replanteo = (Math.round(pti_horas.jon.replanteo*100)/100).toFixed(0);
			pti_horas.jon.delineacion = (Math.round(pti_horas.jon.delineacion*100)/100).toFixed(0);
			pti_horas.jon.calculo = (Math.round(pti_horas.jon.calculo*100)/100).toFixed(0);
			pti_horas.jon.revision = (Math.round(pti_horas.jon.revision*100)/100).toFixed(0);
			pti_horas.jon.modificacion = (Math.round(pti_horas.jon.modificacion*100)/100).toFixed(0);
			pti_horas.jon.asistencia = (Math.round(pti_horas.jon.asistencia*100)/100).toFixed(0);
			pti_horas.jon.mediciones = (Math.round(pti_horas.jon.mediciones*100)/100).toFixed(0);
			pti_horas.jon.otros = (Math.round(pti_horas.jon.otros*100)/100).toFixed(0);
			
			pti_horas.oscar.replanteo = (Math.round(pti_horas.oscar.replanteo*100)/100).toFixed(0);
			pti_horas.oscar.delineacion = (Math.round(pti_horas.oscar.delineacion*100)/100).toFixed(0);
			pti_horas.oscar.calculo = (Math.round(pti_horas.oscar.calculo*100)/100).toFixed(0);
			pti_horas.oscar.revision = (Math.round(pti_horas.oscar.revision*100)/100).toFixed(0);
			pti_horas.oscar.modificacion = (Math.round(pti_horas.oscar.modificacion*100)/100).toFixed(0);
			pti_horas.oscar.asistencia = (Math.round(pti_horas.oscar.asistencia*100)/100).toFixed(0);
			pti_horas.oscar.mediciones = (Math.round(pti_horas.oscar.mediciones*100)/100).toFixed(0);
			pti_horas.oscar.otros = (Math.round(pti_horas.oscar.otros*100)/100).toFixed(0);
			
			pti_horas.david.replanteo = (Math.round(pti_horas.david.replanteo*100)/100).toFixed(0);
			pti_horas.david.delineacion = (Math.round(pti_horas.david.delineacion*100)/100).toFixed(0);
			pti_horas.david.calculo = (Math.round(pti_horas.david.calculo*100)/100).toFixed(0);
			pti_horas.david.revision = (Math.round(pti_horas.david.revision*100)/100).toFixed(0);
			pti_horas.david.modificacion = (Math.round(pti_horas.david.modificacion*100)/100).toFixed(0);
			pti_horas.david.asistencia = (Math.round(pti_horas.david.asistencia*100)/100).toFixed(0);
			pti_horas.david.mediciones = (Math.round(pti_horas.david.mediciones*100)/100).toFixed(0);
			pti_horas.david.otros = (Math.round(pti_horas.david.otros*100)/100).toFixed(0);
			
			pti_horas.esti.replanteo = (Math.round(pti_horas.esti.replanteo*100)/100).toFixed(0);
			pti_horas.esti.delineacion = (Math.round(pti_horas.esti.delineacion*100)/100).toFixed(0);
			pti_horas.esti.calculo = (Math.round(pti_horas.esti.calculo*100)/100).toFixed(0);
			pti_horas.esti.revision = (Math.round(pti_horas.esti.revision*100)/100).toFixed(0);
			pti_horas.esti.modificacion = (Math.round(pti_horas.esti.modificacion*100)/100).toFixed(0);
			pti_horas.esti.asistencia = (Math.round(pti_horas.esti.asistencia*100)/100).toFixed(0);
			pti_horas.esti.mediciones = (Math.round(pti_horas.esti.mediciones*100)/100).toFixed(0);
			pti_horas.esti.otros = (Math.round(pti_horas.esti.otros*100)/100).toFixed(0);
			
			pti_horas.marcos.replanteo = (Math.round(pti_horas.marcos.replanteo*100)/100).toFixed(0);
			pti_horas.marcos.delineacion = (Math.round(pti_horas.marcos.delineacion*100)/100).toFixed(0);
			pti_horas.marcos.calculo = (Math.round(pti_horas.marcos.calculo*100)/100).toFixed(0);
			pti_horas.marcos.revision = (Math.round(pti_horas.marcos.revision*100)/100).toFixed(0);
			pti_horas.marcos.modificacion = (Math.round(pti_horas.marcos.modificacion*100)/100).toFixed(0);
			pti_horas.marcos.asistencia = (Math.round(pti_horas.marcos.asistencia*100)/100).toFixed(0);
			pti_horas.marcos.mediciones = (Math.round(pti_horas.marcos.mediciones*100)/100).toFixed(0);
			pti_horas.marcos.otros = (Math.round(pti_horas.marcos.otros*100)/100).toFixed(0);
			
			pti_horas.markel.replanteo = (Math.round(pti_horas.markel.replanteo*100)/100).toFixed(0);
			pti_horas.markel.delineacion = (Math.round(pti_horas.markel.delineacion*100)/100).toFixed(0);
			pti_horas.markel.calculo = (Math.round(pti_horas.markel.calculo*100)/100).toFixed(0);
			pti_horas.markel.revision = (Math.round(pti_horas.markel.revision*100)/100).toFixed(0);
			pti_horas.markel.modificacion = (Math.round(pti_horas.markel.modificacion*100)/100).toFixed(0);
			pti_horas.markel.asistencia = (Math.round(pti_horas.markel.asistencia*100)/100).toFixed(0);
			pti_horas.markel.mediciones = (Math.round(pti_horas.markel.mediciones*100)/100).toFixed(0);
			pti_horas.markel.otros = (Math.round(pti_horas.markel.otros*100)/100).toFixed(0);
			
			pti_horas.joanes.replanteo = (Math.round(pti_horas.joanes.replanteo*100)/100).toFixed(0);
			pti_horas.joanes.delineacion = (Math.round(pti_horas.joanes.delineacion*100)/100).toFixed(0);
			pti_horas.joanes.calculo = (Math.round(pti_horas.joanes.calculo*100)/100).toFixed(0);
			pti_horas.joanes.revision = (Math.round(pti_horas.joanes.revision*100)/100).toFixed(0);
			pti_horas.joanes.modificacion = (Math.round(pti_horas.joanes.modificacion*100)/100).toFixed(0);
			pti_horas.joanes.asistencia = (Math.round(pti_horas.joanes.asistencia*100)/100).toFixed(0);
			pti_horas.joanes.mediciones = (Math.round(pti_horas.joanes.mediciones*100)/100).toFixed(0);
			pti_horas.joanes.otros = (Math.round(pti_horas.joanes.otros*100)/100).toFixed(0);
			
			pti_horas.ainhoa.replanteo = (Math.round(pti_horas.ainhoa.replanteo*100)/100).toFixed(0);
			pti_horas.ainhoa.delineacion = (Math.round(pti_horas.ainhoa.delineacion*100)/100).toFixed(0);
			pti_horas.ainhoa.calculo = (Math.round(pti_horas.ainhoa.calculo*100)/100).toFixed(0);
			pti_horas.ainhoa.revision = (Math.round(pti_horas.ainhoa.revision*100)/100).toFixed(0);
			pti_horas.ainhoa.modificacion = (Math.round(pti_horas.ainhoa.modificacion*100)/100).toFixed(0);
			pti_horas.ainhoa.asistencia = (Math.round(pti_horas.ainhoa.asistencia*100)/100).toFixed(0);
			pti_horas.ainhoa.mediciones = (Math.round(pti_horas.ainhoa.mediciones*100)/100).toFixed(0);
			pti_horas.ainhoa.otros = (Math.round(pti_horas.ainhoa.otros*100)/100).toFixed(0);
			
			
			pti_horas.jose.replanteo = (Math.round(pti_horas.jose.replanteo*100)/100).toFixed(0);
			pti_horas.jose.delineacion = (Math.round(pti_horas.jose.delineacion*100)/100).toFixed(0);
			pti_horas.jose.calculo = (Math.round(pti_horas.jose.calculo*100)/100).toFixed(0);
			pti_horas.jose.revision = (Math.round(pti_horas.jose.revision*100)/100).toFixed(0);
			pti_horas.jose.modificacion = (Math.round(pti_horas.jose.modificacion*100)/100).toFixed(0);
			pti_horas.jose.asistencia = (Math.round(pti_horas.jose.asistencia*100)/100).toFixed(0);
			pti_horas.jose.mediciones = (Math.round(pti_horas.jose.mediciones*100)/100).toFixed(0);
			pti_horas.jose.otros = (Math.round(pti_horas.jose.otros*100)/100).toFixed(0);
			
			pti_horas.andoni.replanteo = (Math.round(pti_horas.andoni.replanteo*100)/100).toFixed(0);
			pti_horas.andoni.delineacion = (Math.round(pti_horas.andoni.delineacion*100)/100).toFixed(0);
			pti_horas.andoni.calculo = (Math.round(pti_horas.andoni.calculo*100)/100).toFixed(0);
			pti_horas.andoni.revision = (Math.round(pti_horas.andoni.revision*100)/100).toFixed(0);
			pti_horas.andoni.modificacion = (Math.round(pti_horas.andoni.modificacion*100)/100).toFixed(0);
			pti_horas.andoni.asistencia = (Math.round(pti_horas.andoni.asistencia*100)/100).toFixed(0);
			pti_horas.andoni.mediciones = (Math.round(pti_horas.andoni.mediciones*100)/100).toFixed(0);
			pti_horas.andoni.otros = (Math.round(pti_horas.andoni.otros*100)/100).toFixed(0);
			
			pti_horas.ziortza.replanteo = (Math.round(pti_horas.ziortza.replanteo*100)/100).toFixed(0);
			pti_horas.ziortza.delineacion = (Math.round(pti_horas.ziortza.delineacion*100)/100).toFixed(0);
			pti_horas.ziortza.calculo = (Math.round(pti_horas.ziortza.calculo*100)/100).toFixed(0);
			pti_horas.ziortza.revision = (Math.round(pti_horas.ziortza.revision*100)/100).toFixed(0);
			pti_horas.ziortza.modificacion = (Math.round(pti_horas.ziortza.modificacion*100)/100).toFixed(0);
			pti_horas.ziortza.asistencia = (Math.round(pti_horas.ziortza.asistencia*100)/100).toFixed(0);
			pti_horas.ziortza.mediciones = (Math.round(pti_horas.ziortza.mediciones*100)/100).toFixed(0);
			pti_horas.ziortza.otros = (Math.round(pti_horas.ziortza.otros*100)/100).toFixed(0);
			
			pti_horas.cris.replanteo = (Math.round(pti_horas.cris.replanteo*100)/100).toFixed(0);
			pti_horas.cris.delineacion = (Math.round(pti_horas.cris.delineacion*100)/100).toFixed(0);
			pti_horas.cris.calculo = (Math.round(pti_horas.cris.calculo*100)/100).toFixed(0);
			pti_horas.cris.revision = (Math.round(pti_horas.cris.revision*100)/100).toFixed(0);
			pti_horas.cris.modificacion = (Math.round(pti_horas.cris.modificacion*100)/100).toFixed(0);
			pti_horas.cris.asistencia = (Math.round(pti_horas.cris.asistencia*100)/100).toFixed(0);
			pti_horas.cris.mediciones = (Math.round(pti_horas.cris.mediciones*100)/100).toFixed(0);
			pti_horas.cris.otros = (Math.round(pti_horas.cris.otros*100)/100).toFixed(0);
			
			pti_horas.izaskun.replanteo = (Math.round(pti_horas.izaskun.replanteo*100)/100).toFixed(0);
			pti_horas.izaskun.delineacion = (Math.round(pti_horas.izaskun.delineacion*100)/100).toFixed(0);
			pti_horas.izaskun.calculo = (Math.round(pti_horas.izaskun.calculo*100)/100).toFixed(0);
			pti_horas.izaskun.revision = (Math.round(pti_horas.izaskun.revision*100)/100).toFixed(0);
			pti_horas.izaskun.modificacion = (Math.round(pti_horas.izaskun.modificacion*100)/100).toFixed(0);
			pti_horas.izaskun.asistencia = (Math.round(pti_horas.izaskun.asistencia*100)/100).toFixed(0);
			pti_horas.izaskun.mediciones = (Math.round(pti_horas.izaskun.mediciones*100)/100).toFixed(0);
			pti_horas.izaskun.otros = (Math.round(pti_horas.izaskun.otros*100)/100).toFixed(0);
			
			
			pti_horas.andres.replanteo = (Math.round(pti_horas.andres.replanteo*100)/100).toFixed(0);
			pti_horas.andres.delineacion = (Math.round(pti_horas.andres.delineacion*100)/100).toFixed(0);
			pti_horas.andres.calculo = (Math.round(pti_horas.andres.calculo*100)/100).toFixed(0);
			pti_horas.andres.revision = (Math.round(pti_horas.andres.revision*100)/100).toFixed(0);
			pti_horas.andres.modificacion = (Math.round(pti_horas.andres.modificacion*100)/100).toFixed(0);
			pti_horas.andres.asistencia = (Math.round(pti_horas.andres.asistencia*100)/100).toFixed(0);
			pti_horas.andres.mediciones = (Math.round(pti_horas.andres.mediciones*100)/100).toFixed(0);
			pti_horas.andres.otros = (Math.round(pti_horas.andres.otros*100)/100).toFixed(0);
			
			
			pti_horas.mikelrankin.replanteo = (Math.round(pti_horas.mikelrankin.replanteo*100)/100).toFixed(0);
			pti_horas.mikelrankin.delineacion = (Math.round(pti_horas.mikelrankin.delineacion*100)/100).toFixed(0);
			pti_horas.mikelrankin.calculo = (Math.round(pti_horas.mikelrankin.calculo*100)/100).toFixed(0);
			pti_horas.mikelrankin.revision = (Math.round(pti_horas.mikelrankin.revision*100)/100).toFixed(0);
			pti_horas.mikelrankin.modificacion = (Math.round(pti_horas.mikelrankin.modificacion*100)/100).toFixed(0);
			pti_horas.mikelrankin.asistencia = (Math.round(pti_horas.mikelrankin.asistencia*100)/100).toFixed(0);
			pti_horas.mikelrankin.mediciones = (Math.round(pti_horas.mikelrankin.mediciones*100)/100).toFixed(0);
			pti_horas.mikelrankin.otros = (Math.round(pti_horas.mikelrankin.otros*100)/100).toFixed(0);
			
			pti_horas.erosdasilva.replanteo = (Math.round(pti_horas.erosdasilva.replanteo*100)/100).toFixed(0);
			pti_horas.erosdasilva.delineacion = (Math.round(pti_horas.erosdasilva.delineacion*100)/100).toFixed(0);
			pti_horas.erosdasilva.calculo = (Math.round(pti_horas.erosdasilva.calculo*100)/100).toFixed(0);
			pti_horas.erosdasilva.revision = (Math.round(pti_horas.erosdasilva.revision*100)/100).toFixed(0);
			pti_horas.erosdasilva.modificacion = (Math.round(pti_horas.erosdasilva.modificacion*100)/100).toFixed(0);
			pti_horas.erosdasilva.asistencia = (Math.round(pti_horas.erosdasilva.asistencia*100)/100).toFixed(0);
			pti_horas.erosdasilva.mediciones = (Math.round(pti_horas.erosdasilva.mediciones*100)/100).toFixed(0);
			pti_horas.erosdasilva.otros = (Math.round(pti_horas.erosdasilva.otros*100)/100).toFixed(0);
			
			pti_horas.nataliagarcia.replanteo = (Math.round(pti_horas.nataliagarcia.replanteo*100)/100).toFixed(0);
			pti_horas.nataliagarcia.delineacion = (Math.round(pti_horas.nataliagarcia.delineacion*100)/100).toFixed(0);
			pti_horas.nataliagarcia.calculo = (Math.round(pti_horas.nataliagarcia.calculo*100)/100).toFixed(0);
			pti_horas.nataliagarcia.revision = (Math.round(pti_horas.nataliagarcia.revision*100)/100).toFixed(0);
			pti_horas.nataliagarcia.modificacion = (Math.round(pti_horas.nataliagarcia.modificacion*100)/100).toFixed(0);
			pti_horas.nataliagarcia.asistencia = (Math.round(pti_horas.nataliagarcia.asistencia*100)/100).toFixed(0);
			pti_horas.nataliagarcia.mediciones = (Math.round(pti_horas.nataliagarcia.mediciones*100)/100).toFixed(0);
			pti_horas.nataliagarcia.otros = (Math.round(pti_horas.nataliagarcia.otros*100)/100).toFixed(0);
			
			pti_horas.nicolasmejia.replanteo = (Math.round(pti_horas.nicolasmejia.replanteo*100)/100).toFixed(0);
			pti_horas.nicolasmejia.delineacion = (Math.round(pti_horas.nicolasmejia.delineacion*100)/100).toFixed(0);
			pti_horas.nicolasmejia.calculo = (Math.round(pti_horas.nicolasmejia.calculo*100)/100).toFixed(0);
			pti_horas.nicolasmejia.revision = (Math.round(pti_horas.nicolasmejia.revision*100)/100).toFixed(0);
			pti_horas.nicolasmejia.modificacion = (Math.round(pti_horas.nicolasmejia.modificacion*100)/100).toFixed(0);
			pti_horas.nicolasmejia.asistencia = (Math.round(pti_horas.nicolasmejia.asistencia*100)/100).toFixed(0);
			pti_horas.nicolasmejia.mediciones = (Math.round(pti_horas.nicolasmejia.mediciones*100)/100).toFixed(0);
			pti_horas.nicolasmejia.otros = (Math.round(pti_horas.nicolasmejia.otros*100)/100).toFixed(0);

			pti_horas.nerea.replanteo = (Math.round(pti_horas.nerea.replanteo*100)/100).toFixed(0);
			pti_horas.nerea.delineacion = (Math.round(pti_horas.nerea.delineacion*100)/100).toFixed(0);
			pti_horas.nerea.calculo = (Math.round(pti_horas.nerea.calculo*100)/100).toFixed(0);
			pti_horas.nerea.revision = (Math.round(pti_horas.nerea.revision*100)/100).toFixed(0);
			pti_horas.nerea.modificacion = (Math.round(pti_horas.nerea.modificacion*100)/100).toFixed(0);
			pti_horas.nerea.asistencia = (Math.round(pti_horas.nerea.asistencia*100)/100).toFixed(0);
			pti_horas.nerea.mediciones = (Math.round(pti_horas.nerea.mediciones*100)/100).toFixed(0);
			pti_horas.nerea.otros = (Math.round(pti_horas.nerea.otros*100)/100).toFixed(0);
			
			pti_horas.ikervillar.replanteo = (Math.round(pti_horas.ikervillar.replanteo*100)/100).toFixed(0);
			pti_horas.ikervillar.delineacion = (Math.round(pti_horas.ikervillar.delineacion*100)/100).toFixed(0);
			pti_horas.ikervillar.calculo = (Math.round(pti_horas.ikervillar.calculo*100)/100).toFixed(0);
			pti_horas.ikervillar.revision = (Math.round(pti_horas.ikervillar.revision*100)/100).toFixed(0);
			pti_horas.ikervillar.modificacion = (Math.round(pti_horas.ikervillar.modificacion*100)/100).toFixed(0);
			pti_horas.ikervillar.asistencia = (Math.round(pti_horas.ikervillar.asistencia*100)/100).toFixed(0);
			pti_horas.ikervillar.mediciones = (Math.round(pti_horas.ikervillar.mediciones*100)/100).toFixed(0);
			pti_horas.ikervillar.otros = (Math.round(pti_horas.ikervillar.otros*100)/100).toFixed(0);
			
			pti_horas.jontolosa.replanteo = (Math.round(pti_horas.jontolosa.replanteo*100)/100).toFixed(0);
			pti_horas.jontolosa.delineacion = (Math.round(pti_horas.jontolosa.delineacion*100)/100).toFixed(0);
			pti_horas.jontolosa.calculo = (Math.round(pti_horas.jontolosa.calculo*100)/100).toFixed(0);
			pti_horas.jontolosa.revision = (Math.round(pti_horas.jontolosa.revision*100)/100).toFixed(0);
			pti_horas.jontolosa.modificacion = (Math.round(pti_horas.jontolosa.modificacion*100)/100).toFixed(0);
			pti_horas.jontolosa.asistencia = (Math.round(pti_horas.jontolosa.asistencia*100)/100).toFixed(0);
			pti_horas.jontolosa.mediciones = (Math.round(pti_horas.jontolosa.mediciones*100)/100).toFixed(0);
			pti_horas.jontolosa.otros = (Math.round(pti_horas.jontolosa.otros*100)/100).toFixed(0);
			
			pti_horas.leiremartin.replanteo = (Math.round(pti_horas.leiremartin.replanteo*100)/100).toFixed(0);
			pti_horas.leiremartin.delineacion = (Math.round(pti_horas.leiremartin.delineacion*100)/100).toFixed(0);
			pti_horas.leiremartin.calculo = (Math.round(pti_horas.leiremartin.calculo*100)/100).toFixed(0);
			pti_horas.leiremartin.revision = (Math.round(pti_horas.leiremartin.revision*100)/100).toFixed(0);
			pti_horas.leiremartin.modificacion = (Math.round(pti_horas.leiremartin.modificacion*100)/100).toFixed(0);
			pti_horas.leiremartin.asistencia = (Math.round(pti_horas.leiremartin.asistencia*100)/100).toFixed(0);
			pti_horas.leiremartin.mediciones = (Math.round(pti_horas.leiremartin.mediciones*100)/100).toFixed(0);
			pti_horas.leiremartin.otros = (Math.round(pti_horas.leiremartin.otros*100)/100).toFixed(0);
			
			pti_horas.gorka.replanteo = (Math.round(pti_horas.gorka.replanteo*100)/100).toFixed(0);
			pti_horas.gorka.delineacion = (Math.round(pti_horas.gorka.delineacion*100)/100).toFixed(0);
			pti_horas.gorka.calculo = (Math.round(pti_horas.gorka.calculo*100)/100).toFixed(0);
			pti_horas.gorka.revision = (Math.round(pti_horas.gorka.revision*100)/100).toFixed(0);
			pti_horas.gorka.modificacion = (Math.round(pti_horas.gorka.modificacion*100)/100).toFixed(0);
			pti_horas.gorka.asistencia = (Math.round(pti_horas.gorka.asistencia*100)/100).toFixed(0);
			pti_horas.gorka.mediciones = (Math.round(pti_horas.gorka.mediciones*100)/100).toFixed(0);
			pti_horas.gorka.otros = (Math.round(pti_horas.gorka.otros*100)/100).toFixed(0);
			
			pti_horas.mayra.replanteo = (Math.round(pti_horas.mayra.replanteo*100)/100).toFixed(0);
			pti_horas.mayra.delineacion = (Math.round(pti_horas.mayra.delineacion*100)/100).toFixed(0);
			pti_horas.mayra.calculo = (Math.round(pti_horas.mayra.calculo*100)/100).toFixed(0);
			pti_horas.mayra.revision = (Math.round(pti_horas.mayra.revision*100)/100).toFixed(0);
			pti_horas.mayra.modificacion = (Math.round(pti_horas.mayra.modificacion*100)/100).toFixed(0);
			pti_horas.mayra.asistencia = (Math.round(pti_horas.mayra.asistencia*100)/100).toFixed(0);
			pti_horas.mayra.mediciones = (Math.round(pti_horas.mayra.mediciones*100)/100).toFixed(0);
			pti_horas.mayra.otros = (Math.round(pti_horas.mayra.otros*100)/100).toFixed(0);
			
			pti_horas.cristina.replanteo = (Math.round(pti_horas.cristina.replanteo*100)/100).toFixed(0);
			pti_horas.cristina.delineacion = (Math.round(pti_horas.cristina.delineacion*100)/100).toFixed(0);
			pti_horas.cristina.calculo = (Math.round(pti_horas.cristina.calculo*100)/100).toFixed(0);
			pti_horas.cristina.revision = (Math.round(pti_horas.cristina.revision*100)/100).toFixed(0);
			pti_horas.cristina.modificacion = (Math.round(pti_horas.cristina.modificacion*100)/100).toFixed(0);
			pti_horas.cristina.asistencia = (Math.round(pti_horas.cristina.asistencia*100)/100).toFixed(0);
			pti_horas.cristina.mediciones = (Math.round(pti_horas.cristina.mediciones*100)/100).toFixed(0);
			pti_horas.cristina.otros = (Math.round(pti_horas.cristina.otros*100)/100).toFixed(0);
			
			pti_horas.inigo.replanteo = (Math.round(pti_horas.inigo.replanteo*100)/100).toFixed(0);
			pti_horas.inigo.delineacion = (Math.round(pti_horas.inigo.delineacion*100)/100).toFixed(0);
			pti_horas.inigo.calculo = (Math.round(pti_horas.inigo.calculo*100)/100).toFixed(0);
			pti_horas.inigo.revision = (Math.round(pti_horas.inigo.revision*100)/100).toFixed(0);
			pti_horas.inigo.modificacion = (Math.round(pti_horas.inigo.modificacion*100)/100).toFixed(0);
			pti_horas.inigo.asistencia = (Math.round(pti_horas.inigo.asistencia*100)/100).toFixed(0);
			pti_horas.inigo.mediciones = (Math.round(pti_horas.inigo.mediciones*100)/100).toFixed(0);
			pti_horas.inigo.otros = (Math.round(pti_horas.inigo.otros*100)/100).toFixed(0);
			
			pti_horas.ana.replanteo = (Math.round(pti_horas.ana.replanteo*100)/100).toFixed(0);
			pti_horas.ana.delineacion = (Math.round(pti_horas.ana.delineacion*100)/100).toFixed(0);
			pti_horas.ana.calculo = (Math.round(pti_horas.ana.calculo*100)/100).toFixed(0);
			pti_horas.ana.revision = (Math.round(pti_horas.ana.revision*100)/100).toFixed(0);
			pti_horas.ana.modificacion = (Math.round(pti_horas.ana.modificacion*100)/100).toFixed(0);
			pti_horas.ana.asistencia = (Math.round(pti_horas.ana.asistencia*100)/100).toFixed(0);
			pti_horas.ana.mediciones = (Math.round(pti_horas.ana.mediciones*100)/100).toFixed(0);
			pti_horas.ana.otros = (Math.round(pti_horas.ana.otros*100)/100).toFixed(0);
			
			pti_horas.inigoflorindo.replanteo = (Math.round(pti_horas.inigoflorindo.replanteo*100)/100).toFixed(0);
			pti_horas.inigoflorindo.delineacion = (Math.round(pti_horas.inigoflorindo.delineacion*100)/100).toFixed(0);
			pti_horas.inigoflorindo.calculo = (Math.round(pti_horas.inigoflorindo.calculo*100)/100).toFixed(0);
			pti_horas.inigoflorindo.revision = (Math.round(pti_horas.inigoflorindo.revision*100)/100).toFixed(0);
			pti_horas.inigoflorindo.modificacion = (Math.round(pti_horas.inigoflorindo.modificacion*100)/100).toFixed(0);
			pti_horas.inigoflorindo.asistencia = (Math.round(pti_horas.inigoflorindo.asistencia*100)/100).toFixed(0);
			pti_horas.inigoflorindo.mediciones = (Math.round(pti_horas.inigoflorindo.mediciones*100)/100).toFixed(0);
			pti_horas.inigoflorindo.otros = (Math.round(pti_horas.inigoflorindo.otros*100)/100).toFixed(0);
			
			pti_horas.carolinauchuari.replanteo = (Math.round(pti_horas.carolinauchuari.replanteo*100)/100).toFixed(0);
			pti_horas.carolinauchuari.delineacion = (Math.round(pti_horas.carolinauchuari.delineacion*100)/100).toFixed(0);
			pti_horas.carolinauchuari.calculo = (Math.round(pti_horas.carolinauchuari.calculo*100)/100).toFixed(0);
			pti_horas.carolinauchuari.revision = (Math.round(pti_horas.carolinauchuari.revision*100)/100).toFixed(0);
			pti_horas.carolinauchuari.modificacion = (Math.round(pti_horas.carolinauchuari.modificacion*100)/100).toFixed(0);
			pti_horas.carolinauchuari.asistencia = (Math.round(pti_horas.carolinauchuari.asistencia*100)/100).toFixed(0);
			pti_horas.carolinauchuari.mediciones = (Math.round(pti_horas.carolinauchuari.mediciones*100)/100).toFixed(0);
			pti_horas.carolinauchuari.otros = (Math.round(pti_horas.carolinauchuari.otros*100)/100).toFixed(0);
			
			pti_horas.alaitz.replanteo = (Math.round(pti_horas.alaitz.replanteo*100)/100).toFixed(0);
			pti_horas.alaitz.delineacion = (Math.round(pti_horas.alaitz.delineacion*100)/100).toFixed(0);
			pti_horas.alaitz.calculo = (Math.round(pti_horas.alaitz.calculo*100)/100).toFixed(0);
			pti_horas.alaitz.revision = (Math.round(pti_horas.alaitz.revision*100)/100).toFixed(0);
			pti_horas.alaitz.modificacion = (Math.round(pti_horas.alaitz.modificacion*100)/100).toFixed(0);
			pti_horas.alaitz.asistencia = (Math.round(pti_horas.alaitz.asistencia*100)/100).toFixed(0);
			pti_horas.alaitz.mediciones = (Math.round(pti_horas.alaitz.mediciones*100)/100).toFixed(0);
			pti_horas.alaitz.otros = (Math.round(pti_horas.alaitz.otros*100)/100).toFixed(0);
			
			pti_horas.unai.replanteo = (Math.round(pti_horas.unai.replanteo*100)/100).toFixed(0);
			pti_horas.unai.delineacion = (Math.round(pti_horas.unai.delineacion*100)/100).toFixed(0);
			pti_horas.unai.calculo = (Math.round(pti_horas.unai.calculo*100)/100).toFixed(0);
			pti_horas.unai.revision = (Math.round(pti_horas.unai.revision*100)/100).toFixed(0);
			pti_horas.unai.modificacion = (Math.round(pti_horas.unai.modificacion*100)/100).toFixed(0);
			pti_horas.unai.asistencia = (Math.round(pti_horas.unai.asistencia*100)/100).toFixed(0);
			pti_horas.unai.mediciones = (Math.round(pti_horas.unai.mediciones*100)/100).toFixed(0);
			pti_horas.unai.otros = (Math.round(pti_horas.unai.otros*100)/100).toFixed(0);
			
			pti_horas.eli.replanteo = (Math.round(pti_horas.eli.replanteo*100)/100).toFixed(0);
			pti_horas.eli.delineacion = (Math.round(pti_horas.eli.delineacion*100)/100).toFixed(0);
			pti_horas.eli.calculo = (Math.round(pti_horas.eli.calculo*100)/100).toFixed(0);
			pti_horas.eli.revision = (Math.round(pti_horas.eli.revision*100)/100).toFixed(0);
			pti_horas.eli.modificacion = (Math.round(pti_horas.eli.modificacion*100)/100).toFixed(0);
			pti_horas.eli.asistencia = (Math.round(pti_horas.eli.asistencia*100)/100).toFixed(0);
			pti_horas.eli.mediciones = (Math.round(pti_horas.eli.mediciones*100)/100).toFixed(0);
			pti_horas.eli.otros = (Math.round(pti_horas.eli.otros*100)/100).toFixed(0);
			/////////////////////////////////////////////////////////////////////////////////////////////
			//////REDONDEO IMPORTES/////////////////////////////////////////////
			pti_horas.jon.replanteoimporte = pti_horas.jon.replanteoimporte.toFixed(0);
			pti_horas.oscar.replanteoimporte = pti_horas.oscar.replanteoimporte.toFixed(0);
			pti_horas.david.replanteoimporte = pti_horas.david.replanteoimporte.toFixed(0);
			pti_horas.esti.replanteoimporte = pti_horas.esti.replanteoimporte.toFixed(0);
			pti_horas.marcos.replanteoimporte = pti_horas.marcos.replanteoimporte.toFixed(0);
			pti_horas.markel.replanteoimporte = pti_horas.markel.replanteoimporte.toFixed(0);
			pti_horas.joanes.replanteoimporte = pti_horas.joanes.replanteoimporte.toFixed(0);
			pti_horas.ainhoa.replanteoimporte = pti_horas.ainhoa.replanteoimporte.toFixed(0);
			pti_horas.jose.replanteoimporte = pti_horas.jose.replanteoimporte.toFixed(0);
			pti_horas.andoni.replanteoimporte = pti_horas.andoni.replanteoimporte.toFixed(0);
			pti_horas.ziortza.replanteoimporte = pti_horas.ziortza.replanteoimporte.toFixed(0);
			pti_horas.cris.replanteoimporte = pti_horas.cris.replanteoimporte.toFixed(0);
			pti_horas.izaskun.replanteoimporte = pti_horas.izaskun.replanteoimporte.toFixed(0);
			pti_horas.andres.replanteoimporte = pti_horas.andres.replanteoimporte.toFixed(0);
			pti_horas.mikelrankin.replanteoimporte = pti_horas.mikelrankin.replanteoimporte.toFixed(0);
			pti_horas.erosdasilva.replanteoimporte = pti_horas.erosdasilva.replanteoimporte.toFixed(0);
			pti_horas.nataliagarcia.replanteoimporte = pti_horas.nataliagarcia.replanteoimporte.toFixed(0);
			pti_horas.nicolasmejia.replanteoimporte = pti_horas.nicolasmejia.replanteoimporte.toFixed(0);
			pti_horas.nerea.replanteoimporte = pti_horas.nerea.replanteoimporte.toFixed(0);
			pti_horas.ikervillar.replanteoimporte = pti_horas.ikervillar.replanteoimporte.toFixed(0);
			pti_horas.jontolosa.replanteoimporte = pti_horas.jontolosa.replanteoimporte.toFixed(0);
			pti_horas.leiremartin.replanteoimporte = pti_horas.leiremartin.replanteoimporte.toFixed(0);
			pti_horas.gorka.replanteoimporte = pti_horas.gorka.replanteoimporte.toFixed(0);
			pti_horas.mayra.replanteoimporte = pti_horas.mayra.replanteoimporte.toFixed(0);
			pti_horas.cristina.replanteoimporte = pti_horas.cristina.replanteoimporte.toFixed(0);
			pti_horas.inigo.replanteoimporte = pti_horas.inigo.replanteoimporte.toFixed(0);
			pti_horas.ana.replanteoimporte = pti_horas.ana.replanteoimporte.toFixed(0);
			pti_horas.inigoflorindo.replanteoimporte = pti_horas.inigoflorindo.replanteoimporte.toFixed(0);
			pti_horas.carolinauchuari.replanteoimporte = pti_horas.carolinauchuari.replanteoimporte.toFixed(0);
			pti_horas.alaitz.replanteoimporte = pti_horas.alaitz.replanteoimporte.toFixed(0);
			pti_horas.unai.replanteoimporte = pti_horas.unai.replanteoimporte.toFixed(0);
			pti_horas.eli.replanteoimporte = pti_horas.eli.replanteoimporte.toFixed(0);
			pti_horas.jon.delineacionimporte = pti_horas.jon.delineacionimporte.toFixed(0);
			pti_horas.oscar.delineacionimporte = pti_horas.oscar.delineacionimporte.toFixed(0);
			pti_horas.david.delineacionimporte = pti_horas.david.delineacionimporte.toFixed(0);
			pti_horas.esti.delineacionimporte = pti_horas.esti.delineacionimporte.toFixed(0);
			pti_horas.marcos.delineacionimporte = pti_horas.marcos.delineacionimporte.toFixed(0);
			pti_horas.markel.delineacionimporte = pti_horas.markel.delineacionimporte.toFixed(0);
			pti_horas.joanes.delineacionimporte = pti_horas.joanes.delineacionimporte.toFixed(0);
			pti_horas.ainhoa.delineacionimporte = pti_horas.ainhoa.delineacionimporte.toFixed(0);
			pti_horas.jose.delineacionimporte = pti_horas.jose.delineacionimporte.toFixed(0);
			pti_horas.andoni.delineacionimporte = pti_horas.andoni.delineacionimporte.toFixed(0);
			pti_horas.ziortza.delineacionimporte = pti_horas.ziortza.delineacionimporte.toFixed(0);
			pti_horas.cris.delineacionimporte = pti_horas.cris.delineacionimporte.toFixed(0);
			pti_horas.izaskun.delineacionimporte = pti_horas.izaskun.delineacionimporte.toFixed(0);
			pti_horas.andres.delineacionimporte = pti_horas.andres.delineacionimporte.toFixed(0);
			pti_horas.mikelrankin.delineacionimporte = pti_horas.mikelrankin.delineacionimporte.toFixed(0);
			pti_horas.erosdasilva.delineacionimporte = pti_horas.erosdasilva.delineacionimporte.toFixed(0);
			pti_horas.nataliagarcia.delineacionimporte = pti_horas.nataliagarcia.delineacionimporte.toFixed(0);
			pti_horas.nicolasmejia.delineacionimporte = pti_horas.nicolasmejia.delineacionimporte.toFixed(0);
			pti_horas.nerea.delineacionimporte = pti_horas.nerea.delineacionimporte.toFixed(0);
			pti_horas.ikervillar.delineacionimporte = pti_horas.ikervillar.delineacionimporte.toFixed(0);
			pti_horas.jontolosa.delineacionimporte = pti_horas.jontolosa.delineacionimporte.toFixed(0);
			pti_horas.leiremartin.delineacionimporte = pti_horas.leiremartin.delineacionimporte.toFixed(0);
			pti_horas.gorka.delineacionimporte = pti_horas.gorka.delineacionimporte.toFixed(0);
			pti_horas.mayra.delineacionimporte = pti_horas.mayra.delineacionimporte.toFixed(0);
			pti_horas.cristina.delineacionimporte = pti_horas.cristina.delineacionimporte.toFixed(0);
			pti_horas.inigo.delineacionimporte = pti_horas.inigo.delineacionimporte.toFixed(0);
			pti_horas.ana.delineacionimporte = pti_horas.ana.delineacionimporte.toFixed(0);
			pti_horas.inigoflorindo.delineacionimporte = pti_horas.inigoflorindo.delineacionimporte.toFixed(0);
			pti_horas.carolinauchuari.delineacionimporte = pti_horas.carolinauchuari.delineacionimporte.toFixed(0);
			pti_horas.alaitz.delineacionimporte = pti_horas.alaitz.delineacionimporte.toFixed(0);
			pti_horas.unai.delineacionimporte = pti_horas.unai.delineacionimporte.toFixed(0);
			pti_horas.eli.delineacionimporte = pti_horas.eli.delineacionimporte.toFixed(0);
			pti_horas.jon.calculoimporte = pti_horas.jon.calculoimporte.toFixed(0);
			pti_horas.oscar.calculoimporte = pti_horas.oscar.calculoimporte.toFixed(0);
			pti_horas.david.calculoimporte = pti_horas.david.calculoimporte.toFixed(0);
			pti_horas.esti.calculoimporte = pti_horas.esti.calculoimporte.toFixed(0);
			pti_horas.marcos.calculoimporte = pti_horas.marcos.calculoimporte.toFixed(0);
			pti_horas.markel.calculoimporte = pti_horas.markel.calculoimporte.toFixed(0);
			pti_horas.joanes.calculoimporte = pti_horas.joanes.calculoimporte.toFixed(0);
			pti_horas.ainhoa.calculoimporte = pti_horas.ainhoa.calculoimporte.toFixed(0);
			pti_horas.jose.calculoimporte = pti_horas.jose.calculoimporte.toFixed(0);
			pti_horas.andoni.calculoimporte = pti_horas.andoni.calculoimporte.toFixed(0);
			pti_horas.ziortza.calculoimporte = pti_horas.ziortza.calculoimporte.toFixed(0);
			pti_horas.cris.calculoimporte = pti_horas.cris.calculoimporte.toFixed(0);
			pti_horas.izaskun.calculoimporte = pti_horas.izaskun.calculoimporte.toFixed(0);
			pti_horas.andres.calculoimporte = pti_horas.andres.calculoimporte.toFixed(0);
			pti_horas.mikelrankin.calculoimporte = pti_horas.mikelrankin.calculoimporte.toFixed(0);
			pti_horas.erosdasilva.calculoimporte = pti_horas.erosdasilva.calculoimporte.toFixed(0);
			pti_horas.nataliagarcia.calculoimporte = pti_horas.nataliagarcia.calculoimporte.toFixed(0);
			pti_horas.nicolasmejia.calculoimporte = pti_horas.nicolasmejia.calculoimporte.toFixed(0);
			pti_horas.nerea.calculoimporte = pti_horas.nerea.calculoimporte.toFixed(0);
			pti_horas.ikervillar.calculoimporte = pti_horas.ikervillar.calculoimporte.toFixed(0);
			pti_horas.jontolosa.calculoimporte = pti_horas.jontolosa.calculoimporte.toFixed(0);
			pti_horas.leiremartin.calculoimporte = pti_horas.leiremartin.calculoimporte.toFixed(0);
			pti_horas.gorka.calculoimporte = pti_horas.gorka.calculoimporte.toFixed(0);
			pti_horas.mayra.calculoimporte = pti_horas.mayra.calculoimporte.toFixed(0);
			pti_horas.cristina.calculoimporte = pti_horas.cristina.calculoimporte.toFixed(0);
			pti_horas.inigo.calculoimporte = pti_horas.inigo.calculoimporte.toFixed(0);
			pti_horas.ana.calculoimporte = pti_horas.ana.calculoimporte.toFixed(0);
			pti_horas.inigoflorindo.calculoimporte = pti_horas.inigoflorindo.calculoimporte.toFixed(0);
			pti_horas.carolinauchuari.calculoimporte = pti_horas.carolinauchuari.calculoimporte.toFixed(0);
			pti_horas.alaitz.calculoimporte = pti_horas.alaitz.calculoimporte.toFixed(0);
			pti_horas.unai.calculoimporte = pti_horas.unai.calculoimporte.toFixed(0);
			pti_horas.eli.calculoimporte = pti_horas.eli.calculoimporte.toFixed(0);
			
			pti_horas.jon.revisionimporte = pti_horas.jon.revisionimporte.toFixed(0);
			pti_horas.oscar.revisionimporte = pti_horas.oscar.revisionimporte.toFixed(0);
			pti_horas.david.revisionimporte = pti_horas.david.revisionimporte.toFixed(0);
			pti_horas.esti.revisionimporte = pti_horas.esti.revisionimporte.toFixed(0);
			pti_horas.marcos.revisionimporte = pti_horas.marcos.revisionimporte.toFixed(0);
			pti_horas.markel.revisionimporte = pti_horas.markel.revisionimporte.toFixed(0);
			pti_horas.joanes.revisionimporte = pti_horas.joanes.revisionimporte.toFixed(0);
			pti_horas.ainhoa.revisionimporte = pti_horas.ainhoa.revisionimporte.toFixed(0);
			pti_horas.jose.revisionimporte = pti_horas.jose.revisionimporte.toFixed(0);
			pti_horas.andoni.revisionimporte = pti_horas.andoni.revisionimporte.toFixed(0);
			pti_horas.ziortza.revisionimporte = pti_horas.ziortza.revisionimporte.toFixed(0);
			pti_horas.cris.revisionimporte = pti_horas.cris.revisionimporte.toFixed(0);
			pti_horas.izaskun.revisionimporte = pti_horas.izaskun.revisionimporte.toFixed(0);
			pti_horas.andres.revisionimporte = pti_horas.andres.revisionimporte.toFixed(0);
			pti_horas.mikelrankin.revisionimporte = pti_horas.mikelrankin.revisionimporte.toFixed(0);
			pti_horas.erosdasilva.revisionimporte = pti_horas.erosdasilva.revisionimporte.toFixed(0);
			pti_horas.nataliagarcia.revisionimporte = pti_horas.nataliagarcia.revisionimporte.toFixed(0);
			pti_horas.nicolasmejia.revisionimporte = pti_horas.nicolasmejia.revisionimporte.toFixed(0);
			pti_horas.nerea.revisionimporte = pti_horas.nerea.revisionimporte.toFixed(0);
			pti_horas.ikervillar.revisionimporte = pti_horas.ikervillar.revisionimporte.toFixed(0);
			pti_horas.jontolosa.revisionimporte = pti_horas.jontolosa.revisionimporte.toFixed(0);
			pti_horas.leiremartin.revisionimporte = pti_horas.leiremartin.revisionimporte.toFixed(0);
			pti_horas.gorka.revisionimporte = pti_horas.gorka.revisionimporte.toFixed(0);
			pti_horas.mayra.revisionimporte = pti_horas.mayra.revisionimporte.toFixed(0);
			pti_horas.cristina.revisionimporte = pti_horas.cristina.revisionimporte.toFixed(0);
			pti_horas.inigo.revisionimporte = pti_horas.inigo.revisionimporte.toFixed(0);
			pti_horas.ana.revisionimporte = pti_horas.ana.revisionimporte.toFixed(0);
			pti_horas.inigoflorindo.revisionimporte = pti_horas.inigoflorindo.revisionimporte.toFixed(0);
			pti_horas.carolinauchuari.revisionimporte = pti_horas.carolinauchuari.revisionimporte.toFixed(0);
			pti_horas.alaitz.revisionimporte = pti_horas.alaitz.revisionimporte.toFixed(0);
			pti_horas.unai.revisionimporte = pti_horas.unai.revisionimporte.toFixed(0);
			pti_horas.eli.revisionimporte = pti_horas.eli.revisionimporte.toFixed(0);
			
			pti_horas.jon.modificacionimporte = pti_horas.jon.modificacionimporte.toFixed(0);
			pti_horas.oscar.modificacionimporte = pti_horas.oscar.modificacionimporte.toFixed(0);
			pti_horas.david.modificacionimporte = pti_horas.david.modificacionimporte.toFixed(0);
			pti_horas.esti.modificacionimporte = pti_horas.esti.modificacionimporte.toFixed(0);
			pti_horas.marcos.modificacionimporte = pti_horas.marcos.modificacionimporte.toFixed(0);
			pti_horas.markel.modificacionimporte = pti_horas.markel.modificacionimporte.toFixed(0);
			pti_horas.joanes.modificacionimporte = pti_horas.joanes.modificacionimporte.toFixed(0);
			pti_horas.ainhoa.modificacionimporte = pti_horas.ainhoa.modificacionimporte.toFixed(0);
			pti_horas.jose.modificacionimporte = pti_horas.jose.modificacionimporte.toFixed(0);
			pti_horas.andoni.modificacionimporte = pti_horas.andoni.modificacionimporte.toFixed(0);
			pti_horas.ziortza.modificacionimporte = pti_horas.ziortza.modificacionimporte.toFixed(0);
			pti_horas.cris.modificacionimporte = pti_horas.cris.modificacionimporte.toFixed(0);
			pti_horas.izaskun.modificacionimporte = pti_horas.izaskun.modificacionimporte.toFixed(0);
			pti_horas.andres.modificacionimporte = pti_horas.andres.modificacionimporte.toFixed(0);
			pti_horas.mikelrankin.modificacionimporte = pti_horas.mikelrankin.modificacionimporte.toFixed(0);
			pti_horas.erosdasilva.modificacionimporte = pti_horas.erosdasilva.modificacionimporte.toFixed(0);
			pti_horas.nataliagarcia.modificacionimporte = pti_horas.nataliagarcia.modificacionimporte.toFixed(0);
			pti_horas.nicolasmejia.modificacionimporte = pti_horas.nicolasmejia.modificacionimporte.toFixed(0);
			pti_horas.nerea.modificacionimporte = pti_horas.nerea.modificacionimporte.toFixed(0);
			pti_horas.ikervillar.modificacionimporte = pti_horas.ikervillar.modificacionimporte.toFixed(0);
			pti_horas.jontolosa.modificacionimporte = pti_horas.jontolosa.modificacionimporte.toFixed(0);
			pti_horas.leiremartin.modificacionimporte = pti_horas.leiremartin.modificacionimporte.toFixed(0);
			pti_horas.gorka.modificacionimporte = pti_horas.gorka.modificacionimporte.toFixed(0);
			pti_horas.mayra.modificacionimporte = pti_horas.mayra.modificacionimporte.toFixed(0);
			pti_horas.cristina.modificacionimporte = pti_horas.cristina.modificacionimporte.toFixed(0);
			pti_horas.inigo.modificacionimporte = pti_horas.inigo.modificacionimporte.toFixed(0);
			pti_horas.ana.modificacionimporte = pti_horas.ana.modificacionimporte.toFixed(0);
			pti_horas.inigoflorindo.modificacionimporte = pti_horas.inigoflorindo.modificacionimporte.toFixed(0);
			pti_horas.carolinauchuari.modificacionimporte = pti_horas.carolinauchuari.modificacionimporte.toFixed(0);
			pti_horas.alaitz.modificacionimporte = pti_horas.alaitz.modificacionimporte.toFixed(0);
			pti_horas.unai.modificacionimporte = pti_horas.unai.modificacionimporte.toFixed(0);
			pti_horas.eli.modificacionimporte = pti_horas.eli.modificacionimporte.toFixed(0);
			pti_horas.jon.asistenciaimporte = pti_horas.jon.asistenciaimporte.toFixed(0);
			pti_horas.oscar.asistenciaimporte = pti_horas.oscar.asistenciaimporte.toFixed(0);
			pti_horas.david.asistenciaimporte = pti_horas.david.asistenciaimporte.toFixed(0);
			pti_horas.esti.asistenciaimporte = pti_horas.esti.asistenciaimporte.toFixed(0);
			pti_horas.marcos.asistenciaimporte = pti_horas.marcos.asistenciaimporte.toFixed(0);
			pti_horas.markel.asistenciaimporte = pti_horas.markel.asistenciaimporte.toFixed(0);
			pti_horas.joanes.asistenciaimporte = pti_horas.joanes.asistenciaimporte.toFixed(0);
			pti_horas.ainhoa.asistenciaimporte = pti_horas.ainhoa.asistenciaimporte.toFixed(0);
			pti_horas.jose.asistenciaimporte = pti_horas.jose.asistenciaimporte.toFixed(0);
			pti_horas.andoni.asistenciaimporte = pti_horas.andoni.asistenciaimporte.toFixed(0);
			pti_horas.ziortza.asistenciaimporte = pti_horas.ziortza.asistenciaimporte.toFixed(0);
			pti_horas.cris.asistenciaimporte = pti_horas.cris.asistenciaimporte.toFixed(0);
			pti_horas.izaskun.asistenciaimporte = pti_horas.izaskun.asistenciaimporte.toFixed(0);
			pti_horas.andres.asistenciaimporte = pti_horas.andres.asistenciaimporte.toFixed(0);
			pti_horas.mikelrankin.asistenciaimporte = pti_horas.mikelrankin.asistenciaimporte.toFixed(0);
			pti_horas.erosdasilva.asistenciaimporte = pti_horas.erosdasilva.asistenciaimporte.toFixed(0);
			pti_horas.nataliagarcia.asistenciaimporte = pti_horas.nataliagarcia.asistenciaimporte.toFixed(0);
			pti_horas.nicolasmejia.asistenciaimporte = pti_horas.nicolasmejia.asistenciaimporte.toFixed(0);
			pti_horas.nerea.asistenciaimporte = pti_horas.nerea.asistenciaimporte.toFixed(0);
			pti_horas.ikervillar.asistenciaimporte = pti_horas.ikervillar.asistenciaimporte.toFixed(0);
			pti_horas.jontolosa.asistenciaimporte = pti_horas.jontolosa.asistenciaimporte.toFixed(0);
			pti_horas.leiremartin.asistenciaimporte = pti_horas.leiremartin.asistenciaimporte.toFixed(0);
			pti_horas.gorka.asistenciaimporte = pti_horas.gorka.asistenciaimporte.toFixed(0);
			pti_horas.mayra.asistenciaimporte = pti_horas.mayra.asistenciaimporte.toFixed(0);
			pti_horas.cristina.asistenciaimporte = pti_horas.cristina.asistenciaimporte.toFixed(0);
			pti_horas.inigo.asistenciaimporte = pti_horas.inigo.asistenciaimporte.toFixed(0);
			pti_horas.ana.asistenciaimporte = pti_horas.ana.asistenciaimporte.toFixed(0);
			pti_horas.inigoflorindo.asistenciaimporte = pti_horas.inigoflorindo.asistenciaimporte.toFixed(0);
			pti_horas.carolinauchuari.asistenciaimporte = pti_horas.carolinauchuari.asistenciaimporte.toFixed(0);
			pti_horas.alaitz.asistenciaimporte = pti_horas.alaitz.asistenciaimporte.toFixed(0);
			pti_horas.unai.asistenciaimporte = pti_horas.unai.asistenciaimporte.toFixed(0);
			pti_horas.eli.asistenciaimporte = pti_horas.eli.asistenciaimporte.toFixed(0);
			pti_horas.jon.medicionesimporte = pti_horas.jon.medicionesimporte.toFixed(0);
			pti_horas.oscar.medicionesimporte = pti_horas.oscar.medicionesimporte.toFixed(0);
			pti_horas.david.medicionesimporte = pti_horas.david.medicionesimporte.toFixed(0);
			pti_horas.esti.medicionesimporte = pti_horas.esti.medicionesimporte.toFixed(0);
			pti_horas.marcos.medicionesimporte = pti_horas.marcos.medicionesimporte.toFixed(0);
			pti_horas.markel.medicionesimporte = pti_horas.markel.medicionesimporte.toFixed(0);
			pti_horas.joanes.medicionesimporte = pti_horas.joanes.medicionesimporte.toFixed(0);
			pti_horas.ainhoa.medicionesimporte = pti_horas.ainhoa.medicionesimporte.toFixed(0);
			pti_horas.jose.medicionesimporte = pti_horas.jose.medicionesimporte.toFixed(0);
			pti_horas.andoni.medicionesimporte = pti_horas.andoni.medicionesimporte.toFixed(0);
			pti_horas.ziortza.medicionesimporte = pti_horas.ziortza.medicionesimporte.toFixed(0);
			pti_horas.cris.medicionesimporte = pti_horas.cris.medicionesimporte.toFixed(0);
			pti_horas.izaskun.medicionesimporte = pti_horas.izaskun.medicionesimporte.toFixed(0);
			pti_horas.andres.medicionesimporte = pti_horas.andres.medicionesimporte.toFixed(0);
			pti_horas.mikelrankin.medicionesimporte = pti_horas.mikelrankin.medicionesimporte.toFixed(0);
			pti_horas.erosdasilva.medicionesimporte = pti_horas.erosdasilva.medicionesimporte.toFixed(0);
			pti_horas.nataliagarcia.medicionesimporte = pti_horas.nataliagarcia.medicionesimporte.toFixed(0);
			pti_horas.nicolasmejia.medicionesimporte = pti_horas.nicolasmejia.medicionesimporte.toFixed(0);
			pti_horas.nerea.medicionesimporte = pti_horas.nerea.medicionesimporte.toFixed(0);
			pti_horas.ikervillar.medicionesimporte = pti_horas.ikervillar.medicionesimporte.toFixed(0);
			pti_horas.jontolosa.medicionesimporte = pti_horas.jontolosa.medicionesimporte.toFixed(0);
			pti_horas.leiremartin.medicionesimporte = pti_horas.leiremartin.medicionesimporte.toFixed(0);
			pti_horas.gorka.medicionesimporte = pti_horas.gorka.medicionesimporte.toFixed(0);
			pti_horas.mayra.medicionesimporte = pti_horas.mayra.medicionesimporte.toFixed(0);
			pti_horas.cristina.medicionesimporte = pti_horas.cristina.medicionesimporte.toFixed(0);
			pti_horas.inigo.medicionesimporte = pti_horas.inigo.medicionesimporte.toFixed(0);
			pti_horas.ana.medicionesimporte = pti_horas.ana.medicionesimporte.toFixed(0);
			pti_horas.inigoflorindo.medicionesimporte = pti_horas.inigoflorindo.medicionesimporte.toFixed(0);
			pti_horas.carolinauchuari.medicionesimporte = pti_horas.carolinauchuari.medicionesimporte.toFixed(0);
			pti_horas.alaitz.medicionesimporte = pti_horas.alaitz.medicionesimporte.toFixed(0);
			pti_horas.unai.medicionesimporte = pti_horas.unai.medicionesimporte.toFixed(0);
			pti_horas.eli.medicionesimporte = pti_horas.eli.medicionesimporte.toFixed(0);
			pti_horas.jon.otrosimporte = pti_horas.jon.otrosimporte.toFixed(0);
			pti_horas.oscar.otrosimporte = pti_horas.oscar.otrosimporte.toFixed(0);
			pti_horas.david.otrosimporte = pti_horas.david.otrosimporte.toFixed(0);
			pti_horas.esti.otrosimporte = pti_horas.esti.otrosimporte.toFixed(0);
			pti_horas.marcos.otrosimporte = pti_horas.marcos.otrosimporte.toFixed(0);
			pti_horas.markel.otrosimporte = pti_horas.markel.otrosimporte.toFixed(0);
			pti_horas.joanes.otrosimporte = pti_horas.joanes.otrosimporte.toFixed(0);
			pti_horas.ainhoa.otrosimporte = pti_horas.ainhoa.otrosimporte.toFixed(0);
			pti_horas.jose.otrosimporte = pti_horas.jose.otrosimporte.toFixed(0);
			pti_horas.andoni.otrosimporte = pti_horas.andoni.otrosimporte.toFixed(0);
			pti_horas.ziortza.otrosimporte = pti_horas.ziortza.otrosimporte.toFixed(0);
			pti_horas.cris.otrosimporte = pti_horas.cris.otrosimporte.toFixed(0);
			pti_horas.izaskun.otrosimporte = pti_horas.izaskun.otrosimporte.toFixed(0);
			pti_horas.andres.otrosimporte = pti_horas.andres.otrosimporte.toFixed(0);
			pti_horas.mikelrankin.otrosimporte = pti_horas.mikelrankin.otrosimporte.toFixed(0);
			pti_horas.erosdasilva.otrosimporte = pti_horas.erosdasilva.otrosimporte.toFixed(0);
			pti_horas.nataliagarcia.otrosimporte = pti_horas.nataliagarcia.otrosimporte.toFixed(0);
			pti_horas.nicolasmejia.otrosimporte = pti_horas.nicolasmejia.otrosimporte.toFixed(0);
			pti_horas.nerea.otrosimporte = pti_horas.nerea.otrosimporte.toFixed(0);
			pti_horas.ikervillar.otrosimporte = pti_horas.ikervillar.otrosimporte.toFixed(0);
			pti_horas.jontolosa.otrosimporte = pti_horas.jontolosa.otrosimporte.toFixed(0);
			pti_horas.leiremartin.otrosimporte = pti_horas.leiremartin.otrosimporte.toFixed(0);
			pti_horas.gorka.otrosimporte = pti_horas.gorka.otrosimporte.toFixed(0);
			pti_horas.mayra.otrosimporte = pti_horas.mayra.otrosimporte.toFixed(0);
			pti_horas.cristina.otrosimporte = pti_horas.cristina.otrosimporte.toFixed(0);
			pti_horas.inigo.otrosimporte = pti_horas.inigo.otrosimporte.toFixed(0);
			pti_horas.ana.otrosimporte = pti_horas.ana.otrosimporte.toFixed(0);
			pti_horas.inigoflorindo.otrosimporte = pti_horas.inigoflorindo.otrosimporte.toFixed(0);
			pti_horas.carolinauchuari.otrosimporte = pti_horas.carolinauchuari.otrosimporte.toFixed(0);
			pti_horas.alaitz.otrosimporte = pti_horas.alaitz.otrosimporte.toFixed(0);
			pti_horas.unai.otrosimporte = pti_horas.unai.otrosimporte.toFixed(0);
			pti_horas.eli.otrosimporte = pti_horas.eli.otrosimporte.toFixed(0);
			
			////////////TOTALES HORAS E IMPORTES POR USUARIO///////////////////////////////////////////////
			pti_horas.jon.horastotal = parseFloat(pti_horas.jon.replanteo) + parseFloat(pti_horas.jon.delineacion) + parseFloat(pti_horas.jon.calculo) + parseFloat(pti_horas.jon.revision) + parseFloat(pti_horas.jon.modificacion) + parseFloat(pti_horas.jon.asistencia) + parseFloat(pti_horas.jon.mediciones) + parseFloat(pti_horas.jon.otros);
			pti_horas.unai.horastotal = parseFloat(pti_horas.unai.replanteo) + parseFloat(pti_horas.unai.delineacion) + parseFloat(pti_horas.unai.calculo) + parseFloat(pti_horas.unai.revision) + parseFloat(pti_horas.unai.modificacion) + parseFloat(pti_horas.unai.asistencia) + parseFloat(pti_horas.unai.mediciones) + parseFloat(pti_horas.unai.otros);
			pti_horas.esti.horastotal = parseFloat(pti_horas.esti.replanteo) + parseFloat(pti_horas.esti.delineacion) + parseFloat(pti_horas.esti.calculo) + parseFloat(pti_horas.esti.revision) + parseFloat(pti_horas.esti.modificacion) + parseFloat(pti_horas.esti.asistencia) + parseFloat(pti_horas.esti.mediciones) + parseFloat(pti_horas.esti.otros);
			pti_horas.marcos.horastotal = parseFloat(pti_horas.marcos.replanteo) + parseFloat(pti_horas.marcos.delineacion) + parseFloat(pti_horas.marcos.calculo) + parseFloat(pti_horas.marcos.revision) + parseFloat(pti_horas.marcos.modificacion) + parseFloat(pti_horas.marcos.asistencia) + parseFloat(pti_horas.marcos.mediciones) + parseFloat(pti_horas.marcos.otros);
			pti_horas.markel.horastotal = parseFloat(pti_horas.markel.replanteo) + parseFloat(pti_horas.markel.delineacion) + parseFloat(pti_horas.markel.calculo) + parseFloat(pti_horas.markel.revision) + parseFloat(pti_horas.markel.modificacion) + parseFloat(pti_horas.markel.asistencia) + parseFloat(pti_horas.markel.mediciones) + parseFloat(pti_horas.markel.otros);
			pti_horas.joanes.horastotal = parseFloat(pti_horas.joanes.replanteo) + parseFloat(pti_horas.joanes.delineacion) + parseFloat(pti_horas.joanes.calculo) + parseFloat(pti_horas.joanes.revision) + parseFloat(pti_horas.joanes.modificacion) + parseFloat(pti_horas.joanes.asistencia) + parseFloat(pti_horas.joanes.mediciones) + parseFloat(pti_horas.joanes.otros);
			pti_horas.ainhoa.horastotal = parseFloat(pti_horas.ainhoa.replanteo) + parseFloat(pti_horas.ainhoa.delineacion) + parseFloat(pti_horas.ainhoa.calculo) + parseFloat(pti_horas.ainhoa.revision) + parseFloat(pti_horas.ainhoa.modificacion) + parseFloat(pti_horas.ainhoa.asistencia) + parseFloat(pti_horas.ainhoa.mediciones) + parseFloat(pti_horas.ainhoa.otros);
			pti_horas.jose.horastotal = parseFloat(pti_horas.jose.replanteo) + parseFloat(pti_horas.jose.delineacion) + parseFloat(pti_horas.jose.calculo) + parseFloat(pti_horas.jose.revision) + parseFloat(pti_horas.jose.modificacion) + parseFloat(pti_horas.jose.asistencia) + parseFloat(pti_horas.jose.mediciones) + parseFloat(pti_horas.jose.otros);
			pti_horas.andoni.horastotal = parseFloat(pti_horas.andoni.replanteo) + parseFloat(pti_horas.andoni.delineacion) + parseFloat(pti_horas.andoni.calculo) + parseFloat(pti_horas.andoni.revision) + parseFloat(pti_horas.andoni.modificacion) + parseFloat(pti_horas.andoni.asistencia) + parseFloat(pti_horas.andoni.mediciones) + parseFloat(pti_horas.andoni.otros);
			pti_horas.ziortza.horastotal = parseFloat(pti_horas.ziortza.replanteo) + parseFloat(pti_horas.ziortza.delineacion) + parseFloat(pti_horas.ziortza.calculo) + parseFloat(pti_horas.ziortza.revision) + parseFloat(pti_horas.ziortza.modificacion) + parseFloat(pti_horas.ziortza.asistencia) + parseFloat(pti_horas.ziortza.mediciones) + parseFloat(pti_horas.ziortza.otros);
			pti_horas.cris.horastotal = parseFloat(pti_horas.cris.replanteo) + parseFloat(pti_horas.cris.delineacion) + parseFloat(pti_horas.cris.calculo) + parseFloat(pti_horas.cris.revision) + parseFloat(pti_horas.cris.modificacion) + parseFloat(pti_horas.cris.asistencia) + parseFloat(pti_horas.cris.mediciones) + parseFloat(pti_horas.cris.otros);
			pti_horas.izaskun.horastotal = parseFloat(pti_horas.izaskun.replanteo) + parseFloat(pti_horas.izaskun.delineacion) + parseFloat(pti_horas.izaskun.calculo) + parseFloat(pti_horas.izaskun.revision) + parseFloat(pti_horas.izaskun.modificacion) + parseFloat(pti_horas.izaskun.asistencia) + parseFloat(pti_horas.izaskun.mediciones) + parseFloat(pti_horas.izaskun.otros);
			pti_horas.andres.horastotal = parseFloat(pti_horas.andres.replanteo) + parseFloat(pti_horas.andres.delineacion) + parseFloat(pti_horas.andres.calculo) + parseFloat(pti_horas.andres.revision) + parseFloat(pti_horas.andres.modificacion) + parseFloat(pti_horas.andres.asistencia) + parseFloat(pti_horas.andres.mediciones) + parseFloat(pti_horas.andres.otros);
			pti_horas.mikelrankin.horastotal = parseFloat(pti_horas.mikelrankin.replanteo) + parseFloat(pti_horas.mikelrankin.delineacion) + parseFloat(pti_horas.mikelrankin.calculo) + parseFloat(pti_horas.mikelrankin.revision) + parseFloat(pti_horas.mikelrankin.modificacion) + parseFloat(pti_horas.mikelrankin.asistencia) + parseFloat(pti_horas.mikelrankin.mediciones) + parseFloat(pti_horas.mikelrankin.otros);
			pti_horas.erosdasilva.horastotal = parseFloat(pti_horas.erosdasilva.replanteo) + parseFloat(pti_horas.erosdasilva.delineacion) + parseFloat(pti_horas.erosdasilva.calculo) + parseFloat(pti_horas.erosdasilva.revision) + parseFloat(pti_horas.erosdasilva.modificacion) + parseFloat(pti_horas.erosdasilva.asistencia) + parseFloat(pti_horas.erosdasilva.mediciones) + parseFloat(pti_horas.erosdasilva.otros);
			pti_horas.nataliagarcia.horastotal = parseFloat(pti_horas.nataliagarcia.replanteo) + parseFloat(pti_horas.nataliagarcia.delineacion) + parseFloat(pti_horas.nataliagarcia.calculo) + parseFloat(pti_horas.nataliagarcia.revision) + parseFloat(pti_horas.nataliagarcia.modificacion) + parseFloat(pti_horas.nataliagarcia.asistencia) + parseFloat(pti_horas.nataliagarcia.mediciones) + parseFloat(pti_horas.nataliagarcia.otros);
			pti_horas.nicolasmejia.horastotal = parseFloat(pti_horas.nicolasmejia.replanteo) + parseFloat(pti_horas.nicolasmejia.delineacion) + parseFloat(pti_horas.nicolasmejia.calculo) + parseFloat(pti_horas.nicolasmejia.revision) + parseFloat(pti_horas.nicolasmejia.modificacion) + parseFloat(pti_horas.nicolasmejia.asistencia) + parseFloat(pti_horas.nicolasmejia.mediciones) + parseFloat(pti_horas.nicolasmejia.otros);
			
			pti_horas.nerea.horastotal = parseFloat(pti_horas.nerea.replanteo) + parseFloat(pti_horas.nerea.delineacion) + parseFloat(pti_horas.nerea.calculo) + parseFloat(pti_horas.nerea.revision) + parseFloat(pti_horas.nerea.modificacion) + parseFloat(pti_horas.nerea.asistencia) + parseFloat(pti_horas.nerea.mediciones) + parseFloat(pti_horas.nerea.otros);
			
			pti_horas.ikervillar.horastotal = parseFloat(pti_horas.ikervillar.replanteo) + parseFloat(pti_horas.ikervillar.delineacion) + parseFloat(pti_horas.ikervillar.calculo) + parseFloat(pti_horas.ikervillar.revision) + parseFloat(pti_horas.ikervillar.modificacion) + parseFloat(pti_horas.ikervillar.asistencia) + parseFloat(pti_horas.ikervillar.mediciones) + parseFloat(pti_horas.ikervillar.otros);
			
			pti_horas.jontolosa.horastotal = parseFloat(pti_horas.jontolosa.replanteo) + parseFloat(pti_horas.jontolosa.delineacion) + parseFloat(pti_horas.jontolosa.calculo) + parseFloat(pti_horas.jontolosa.revision) + parseFloat(pti_horas.jontolosa.modificacion) + parseFloat(pti_horas.jontolosa.asistencia) + parseFloat(pti_horas.jontolosa.mediciones) + parseFloat(pti_horas.jontolosa.otros);
			
			pti_horas.leiremartin.horastotal = parseFloat(pti_horas.leiremartin.replanteo) + parseFloat(pti_horas.leiremartin.delineacion) + parseFloat(pti_horas.leiremartin.calculo) + parseFloat(pti_horas.leiremartin.revision) + parseFloat(pti_horas.leiremartin.modificacion) + parseFloat(pti_horas.leiremartin.asistencia) + parseFloat(pti_horas.leiremartin.mediciones) + parseFloat(pti_horas.leiremartin.otros);
			pti_horas.gorka.horastotal = parseFloat(pti_horas.gorka.replanteo) + parseFloat(pti_horas.gorka.delineacion) + parseFloat(pti_horas.gorka.calculo) + parseFloat(pti_horas.gorka.revision) + parseFloat(pti_horas.gorka.modificacion) + parseFloat(pti_horas.gorka.asistencia) + parseFloat(pti_horas.gorka.mediciones) + parseFloat(pti_horas.gorka.otros);
			
			pti_horas.mayra.horastotal = parseFloat(pti_horas.mayra.replanteo) + parseFloat(pti_horas.mayra.delineacion) + parseFloat(pti_horas.mayra.calculo) + parseFloat(pti_horas.mayra.revision) + parseFloat(pti_horas.mayra.modificacion) + parseFloat(pti_horas.mayra.asistencia) + parseFloat(pti_horas.mayra.mediciones) + parseFloat(pti_horas.mayra.otros);
			pti_horas.cristina.horastotal = parseFloat(pti_horas.cristina.replanteo) + parseFloat(pti_horas.cristina.delineacion) + parseFloat(pti_horas.cristina.calculo) + parseFloat(pti_horas.cristina.revision) + parseFloat(pti_horas.cristina.modificacion) + parseFloat(pti_horas.cristina.asistencia) + parseFloat(pti_horas.cristina.mediciones) + parseFloat(pti_horas.cristina.otros);
			pti_horas.inigo.horastotal = parseFloat(pti_horas.inigo.replanteo) + parseFloat(pti_horas.inigo.delineacion) + parseFloat(pti_horas.inigo.calculo) + parseFloat(pti_horas.inigo.revision) + parseFloat(pti_horas.inigo.modificacion) + parseFloat(pti_horas.inigo.asistencia) + parseFloat(pti_horas.inigo.mediciones) + parseFloat(pti_horas.inigo.otros);
			pti_horas.ana.horastotal = parseFloat(pti_horas.ana.replanteo) + parseFloat(pti_horas.ana.delineacion) + parseFloat(pti_horas.ana.calculo) + parseFloat(pti_horas.ana.revision) + parseFloat(pti_horas.ana.modificacion) + parseFloat(pti_horas.ana.asistencia) + parseFloat(pti_horas.ana.mediciones) + parseFloat(pti_horas.ana.otros);
			pti_horas.inigoflorindo.horastotal = parseFloat(pti_horas.inigoflorindo.replanteo) + parseFloat(pti_horas.inigoflorindo.delineacion) + parseFloat(pti_horas.inigoflorindo.calculo) + parseFloat(pti_horas.inigoflorindo.revision) + parseFloat(pti_horas.inigoflorindo.modificacion) + parseFloat(pti_horas.inigoflorindo.asistencia) + parseFloat(pti_horas.inigoflorindo.mediciones) + parseFloat(pti_horas.inigoflorindo.otros);
			pti_horas.carolinauchuari.horastotal = parseFloat(pti_horas.carolinauchuari.replanteo) + parseFloat(pti_horas.carolinauchuari.delineacion) + parseFloat(pti_horas.carolinauchuari.calculo) + parseFloat(pti_horas.carolinauchuari.revision) + parseFloat(pti_horas.carolinauchuari.modificacion) + parseFloat(pti_horas.carolinauchuari.asistencia) + parseFloat(pti_horas.carolinauchuari.mediciones) + parseFloat(pti_horas.carolinauchuari.otros);
			pti_horas.alaitz.horastotal = parseFloat(pti_horas.alaitz.replanteo) + parseFloat(pti_horas.alaitz.delineacion) + parseFloat(pti_horas.alaitz.calculo) + parseFloat(pti_horas.alaitz.revision) + parseFloat(pti_horas.alaitz.modificacion) + parseFloat(pti_horas.alaitz.asistencia) + parseFloat(pti_horas.alaitz.mediciones) + parseFloat(pti_horas.alaitz.otros);
			pti_horas.oscar.horastotal = parseFloat(pti_horas.oscar.replanteo) + parseFloat(pti_horas.oscar.delineacion) + parseFloat(pti_horas.oscar.calculo) + parseFloat(pti_horas.oscar.revision) + parseFloat(pti_horas.oscar.modificacion) + parseFloat(pti_horas.oscar.asistencia) + parseFloat(pti_horas.oscar.mediciones) + parseFloat(pti_horas.oscar.otros);
			pti_horas.david.horastotal = parseFloat(pti_horas.david.replanteo) + parseFloat(pti_horas.david.delineacion) + parseFloat(pti_horas.david.calculo) + parseFloat(pti_horas.david.revision) + parseFloat(pti_horas.david.modificacion) + parseFloat(pti_horas.david.asistencia) + parseFloat(pti_horas.david.mediciones) + parseFloat(pti_horas.david.otros);
			pti_horas.eli.horastotal = parseFloat(pti_horas.eli.replanteo) + parseFloat(pti_horas.eli.delineacion) + parseFloat(pti_horas.eli.calculo) + parseFloat(pti_horas.eli.revision) + parseFloat(pti_horas.eli.modificacion) + parseFloat(pti_horas.eli.asistencia) + parseFloat(pti_horas.eli.mediciones) + parseFloat(pti_horas.eli.otros);
			
			pti_horas.jon.importetotal = parseFloat(pti_horas.jon.replanteoimporte) + parseFloat(pti_horas.jon.delineacionimporte) + parseFloat(pti_horas.jon.calculoimporte) + parseFloat(pti_horas.jon.revisionimporte) + parseFloat(pti_horas.jon.modificacionimporte) + parseFloat(pti_horas.jon.asistenciaimporte) + parseFloat(pti_horas.jon.medicionesimporte) + parseFloat(pti_horas.jon.otrosimporte);
			pti_horas.jon.importetotal = pti_horas.jon.importetotal.toFixed(0);
			pti_horas.unai.importetotal = parseFloat(pti_horas.unai.replanteoimporte) + parseFloat(pti_horas.unai.delineacionimporte) + parseFloat(pti_horas.unai.calculoimporte) + parseFloat(pti_horas.unai.revisionimporte) + parseFloat(pti_horas.unai.modificacionimporte) + parseFloat(pti_horas.unai.asistenciaimporte) + parseFloat(pti_horas.unai.medicionesimporte) + parseFloat(pti_horas.unai.otrosimporte);
			pti_horas.unai.importetotal = pti_horas.unai.importetotal.toFixed(0);
			pti_horas.esti.importetotal = parseFloat(pti_horas.esti.replanteoimporte) + parseFloat(pti_horas.esti.delineacionimporte) + parseFloat(pti_horas.esti.calculoimporte) + parseFloat(pti_horas.esti.revisionimporte) + parseFloat(pti_horas.esti.modificacionimporte) + parseFloat(pti_horas.esti.asistenciaimporte) + parseFloat(pti_horas.esti.medicionesimporte) + parseFloat(pti_horas.esti.otrosimporte);
			pti_horas.esti.importetotal = pti_horas.esti.importetotal.toFixed(0);
			pti_horas.marcos.importetotal = parseFloat(pti_horas.marcos.replanteoimporte) + parseFloat(pti_horas.marcos.delineacionimporte) + parseFloat(pti_horas.marcos.calculoimporte) + parseFloat(pti_horas.marcos.revisionimporte) + parseFloat(pti_horas.marcos.modificacionimporte) + parseFloat(pti_horas.marcos.asistenciaimporte) + parseFloat(pti_horas.marcos.medicionesimporte) + parseFloat(pti_horas.marcos.otrosimporte);
			pti_horas.marcos.importetotal = pti_horas.marcos.importetotal.toFixed(0);
			pti_horas.markel.importetotal = parseFloat(pti_horas.markel.replanteoimporte) + parseFloat(pti_horas.markel.delineacionimporte) + parseFloat(pti_horas.markel.calculoimporte) + parseFloat(pti_horas.markel.revisionimporte) + parseFloat(pti_horas.markel.modificacionimporte) + parseFloat(pti_horas.markel.asistenciaimporte) + parseFloat(pti_horas.markel.medicionesimporte) + parseFloat(pti_horas.markel.otrosimporte);
			pti_horas.markel.importetotal = pti_horas.markel.importetotal.toFixed(0);
			pti_horas.joanes.importetotal = parseFloat(pti_horas.joanes.replanteoimporte) + parseFloat(pti_horas.joanes.delineacionimporte) + parseFloat(pti_horas.joanes.calculoimporte) + parseFloat(pti_horas.joanes.revisionimporte) + parseFloat(pti_horas.joanes.modificacionimporte) + parseFloat(pti_horas.joanes.asistenciaimporte) + parseFloat(pti_horas.joanes.medicionesimporte) + parseFloat(pti_horas.joanes.otrosimporte);
			pti_horas.joanes.importetotal = pti_horas.joanes.importetotal.toFixed(0);
			pti_horas.ainhoa.importetotal = parseFloat(pti_horas.ainhoa.replanteoimporte) + parseFloat(pti_horas.ainhoa.delineacionimporte) + parseFloat(pti_horas.ainhoa.calculoimporte) + parseFloat(pti_horas.ainhoa.revisionimporte) + parseFloat(pti_horas.ainhoa.modificacionimporte) + parseFloat(pti_horas.ainhoa.asistenciaimporte) + parseFloat(pti_horas.ainhoa.medicionesimporte) + parseFloat(pti_horas.ainhoa.otrosimporte);
			pti_horas.ainhoa.importetotal = pti_horas.ainhoa.importetotal.toFixed(0);
			pti_horas.jose.importetotal = parseFloat(pti_horas.jose.replanteoimporte) + parseFloat(pti_horas.jose.delineacionimporte) + parseFloat(pti_horas.jose.calculoimporte) + parseFloat(pti_horas.jose.revisionimporte) + parseFloat(pti_horas.jose.modificacionimporte) + parseFloat(pti_horas.jose.asistenciaimporte) + parseFloat(pti_horas.jose.medicionesimporte) + parseFloat(pti_horas.jose.otrosimporte);
			pti_horas.jose.importetotal = pti_horas.jose.importetotal.toFixed(0);
			pti_horas.andoni.importetotal = parseFloat(pti_horas.andoni.replanteoimporte) + parseFloat(pti_horas.andoni.delineacionimporte) + parseFloat(pti_horas.andoni.calculoimporte) + parseFloat(pti_horas.andoni.revisionimporte) + parseFloat(pti_horas.andoni.modificacionimporte) + parseFloat(pti_horas.andoni.asistenciaimporte) + parseFloat(pti_horas.andoni.medicionesimporte) + parseFloat(pti_horas.andoni.otrosimporte);
			pti_horas.andoni.importetotal = pti_horas.andoni.importetotal.toFixed(0);
			pti_horas.ziortza.importetotal = parseFloat(pti_horas.ziortza.replanteoimporte) + parseFloat(pti_horas.ziortza.delineacionimporte) + parseFloat(pti_horas.ziortza.calculoimporte) + parseFloat(pti_horas.ziortza.revisionimporte) + parseFloat(pti_horas.ziortza.modificacionimporte) + parseFloat(pti_horas.ziortza.asistenciaimporte) + parseFloat(pti_horas.ziortza.medicionesimporte) + parseFloat(pti_horas.ziortza.otrosimporte);
			pti_horas.ziortza.importetotal = pti_horas.ziortza.importetotal.toFixed(0);
			pti_horas.cris.importetotal = parseFloat(pti_horas.cris.replanteoimporte) + parseFloat(pti_horas.cris.delineacionimporte) + parseFloat(pti_horas.cris.calculoimporte) + parseFloat(pti_horas.cris.revisionimporte) + parseFloat(pti_horas.cris.modificacionimporte) + parseFloat(pti_horas.cris.asistenciaimporte) + parseFloat(pti_horas.cris.medicionesimporte) + parseFloat(pti_horas.cris.otrosimporte);
			pti_horas.cris.importetotal = pti_horas.cris.importetotal.toFixed(0);
			pti_horas.izaskun.importetotal = parseFloat(pti_horas.izaskun.replanteoimporte) + parseFloat(pti_horas.izaskun.delineacionimporte) + parseFloat(pti_horas.izaskun.calculoimporte) + parseFloat(pti_horas.izaskun.revisionimporte) + parseFloat(pti_horas.izaskun.modificacionimporte) + parseFloat(pti_horas.izaskun.asistenciaimporte) + parseFloat(pti_horas.izaskun.medicionesimporte) + parseFloat(pti_horas.izaskun.otrosimporte);
			pti_horas.izaskun.importetotal = pti_horas.izaskun.importetotal.toFixed(0);
			pti_horas.andres.importetotal = parseFloat(pti_horas.andres.replanteoimporte) + parseFloat(pti_horas.andres.delineacionimporte) + parseFloat(pti_horas.andres.calculoimporte) + parseFloat(pti_horas.andres.revisionimporte) + parseFloat(pti_horas.andres.modificacionimporte) + parseFloat(pti_horas.andres.asistenciaimporte) + parseFloat(pti_horas.andres.medicionesimporte) + parseFloat(pti_horas.andres.otrosimporte);
			pti_horas.andres.importetotal = pti_horas.andres.importetotal.toFixed(0);
			pti_horas.mikelrankin.importetotal = parseFloat(pti_horas.mikelrankin.replanteoimporte) + parseFloat(pti_horas.mikelrankin.delineacionimporte) + parseFloat(pti_horas.mikelrankin.calculoimporte) + parseFloat(pti_horas.mikelrankin.revisionimporte) + parseFloat(pti_horas.mikelrankin.modificacionimporte) + parseFloat(pti_horas.mikelrankin.asistenciaimporte) + parseFloat(pti_horas.mikelrankin.medicionesimporte) + parseFloat(pti_horas.mikelrankin.otrosimporte);
			pti_horas.mikelrankin.importetotal = pti_horas.mikelrankin.importetotal.toFixed(0);
			pti_horas.erosdasilva.importetotal = parseFloat(pti_horas.erosdasilva.replanteoimporte) + parseFloat(pti_horas.erosdasilva.delineacionimporte) + parseFloat(pti_horas.erosdasilva.calculoimporte) + parseFloat(pti_horas.erosdasilva.revisionimporte) + parseFloat(pti_horas.erosdasilva.modificacionimporte) + parseFloat(pti_horas.erosdasilva.asistenciaimporte) + parseFloat(pti_horas.erosdasilva.medicionesimporte) + parseFloat(pti_horas.erosdasilva.otrosimporte);
			pti_horas.erosdasilva.importetotal = pti_horas.erosdasilva.importetotal.toFixed(0);
			pti_horas.nataliagarcia.importetotal = parseFloat(pti_horas.nataliagarcia.replanteoimporte) + parseFloat(pti_horas.nataliagarcia.delineacionimporte) + parseFloat(pti_horas.nataliagarcia.calculoimporte) + parseFloat(pti_horas.nataliagarcia.revisionimporte) + parseFloat(pti_horas.nataliagarcia.modificacionimporte) + parseFloat(pti_horas.nataliagarcia.asistenciaimporte) + parseFloat(pti_horas.nataliagarcia.medicionesimporte) + parseFloat(pti_horas.nataliagarcia.otrosimporte);
			pti_horas.nataliagarcia.importetotal = pti_horas.nataliagarcia.importetotal.toFixed(0);
			pti_horas.nicolasmejia.importetotal = parseFloat(pti_horas.nicolasmejia.replanteoimporte) + parseFloat(pti_horas.nicolasmejia.delineacionimporte) + parseFloat(pti_horas.nicolasmejia.calculoimporte) + parseFloat(pti_horas.nicolasmejia.revisionimporte) + parseFloat(pti_horas.nicolasmejia.modificacionimporte) + parseFloat(pti_horas.nicolasmejia.asistenciaimporte) + parseFloat(pti_horas.nicolasmejia.medicionesimporte) + parseFloat(pti_horas.nicolasmejia.otrosimporte);
			pti_horas.nicolasmejia.importetotal = pti_horas.nicolasmejia.importetotal.toFixed(0);
			
			pti_horas.nerea.importetotal = parseFloat(pti_horas.nerea.replanteoimporte) + parseFloat(pti_horas.nerea.delineacionimporte) + parseFloat(pti_horas.nerea.calculoimporte) + parseFloat(pti_horas.nerea.revisionimporte) + parseFloat(pti_horas.nerea.modificacionimporte) + parseFloat(pti_horas.nerea.asistenciaimporte) + parseFloat(pti_horas.nerea.medicionesimporte) + parseFloat(pti_horas.nerea.otrosimporte);
			pti_horas.nerea.importetotal = pti_horas.nerea.importetotal.toFixed(0);
			
			pti_horas.ikervillar.importetotal = parseFloat(pti_horas.ikervillar.replanteoimporte) + parseFloat(pti_horas.ikervillar.delineacionimporte) + parseFloat(pti_horas.ikervillar.calculoimporte) + parseFloat(pti_horas.ikervillar.revisionimporte) + parseFloat(pti_horas.ikervillar.modificacionimporte) + parseFloat(pti_horas.ikervillar.asistenciaimporte) + parseFloat(pti_horas.ikervillar.medicionesimporte) + parseFloat(pti_horas.ikervillar.otrosimporte);
			pti_horas.ikervillar.importetotal = pti_horas.ikervillar.importetotal.toFixed(0);
			
			pti_horas.jontolosa.importetotal = parseFloat(pti_horas.jontolosa.replanteoimporte) + parseFloat(pti_horas.jontolosa.delineacionimporte) + parseFloat(pti_horas.jontolosa.calculoimporte) + parseFloat(pti_horas.jontolosa.revisionimporte) + parseFloat(pti_horas.jontolosa.modificacionimporte) + parseFloat(pti_horas.jontolosa.asistenciaimporte) + parseFloat(pti_horas.jontolosa.medicionesimporte) + parseFloat(pti_horas.jontolosa.otrosimporte);
			pti_horas.jontolosa.importetotal = pti_horas.jontolosa.importetotal.toFixed(0);
			
			pti_horas.leiremartin.importetotal = parseFloat(pti_horas.leiremartin.replanteoimporte) + parseFloat(pti_horas.leiremartin.delineacionimporte) + parseFloat(pti_horas.leiremartin.calculoimporte) + parseFloat(pti_horas.leiremartin.revisionimporte) + parseFloat(pti_horas.leiremartin.modificacionimporte) + parseFloat(pti_horas.leiremartin.asistenciaimporte) + parseFloat(pti_horas.leiremartin.medicionesimporte) + parseFloat(pti_horas.leiremartin.otrosimporte);
			pti_horas.leiremartin.importetotal = pti_horas.leiremartin.importetotal.toFixed(0);
			
			pti_horas.gorka.importetotal = parseFloat(pti_horas.gorka.replanteoimporte) + parseFloat(pti_horas.gorka.delineacionimporte) + parseFloat(pti_horas.gorka.calculoimporte) + parseFloat(pti_horas.gorka.revisionimporte) + parseFloat(pti_horas.gorka.modificacionimporte) + parseFloat(pti_horas.gorka.asistenciaimporte) + parseFloat(pti_horas.gorka.medicionesimporte) + parseFloat(pti_horas.gorka.otrosimporte);
			pti_horas.gorka.importetotal = pti_horas.gorka.importetotal.toFixed(0);
			
			pti_horas.mayra.importetotal = parseFloat(pti_horas.mayra.replanteoimporte) + parseFloat(pti_horas.mayra.delineacionimporte) + parseFloat(pti_horas.mayra.calculoimporte) + parseFloat(pti_horas.mayra.revisionimporte) + parseFloat(pti_horas.mayra.modificacionimporte) + parseFloat(pti_horas.mayra.asistenciaimporte) + parseFloat(pti_horas.mayra.medicionesimporte) + parseFloat(pti_horas.mayra.otrosimporte);
			pti_horas.mayra.importetotal = pti_horas.mayra.importetotal.toFixed(0);
			
			pti_horas.cristina.importetotal = parseFloat(pti_horas.cristina.replanteoimporte) + parseFloat(pti_horas.cristina.delineacionimporte) + parseFloat(pti_horas.cristina.calculoimporte) + parseFloat(pti_horas.cristina.revisionimporte) + parseFloat(pti_horas.cristina.modificacionimporte) + parseFloat(pti_horas.cristina.asistenciaimporte) + parseFloat(pti_horas.cristina.medicionesimporte) + parseFloat(pti_horas.cristina.otrosimporte);
			pti_horas.cristina.importetotal = pti_horas.cristina.importetotal.toFixed(0);
			
			pti_horas.inigo.importetotal = parseFloat(pti_horas.inigo.replanteoimporte) + parseFloat(pti_horas.inigo.delineacionimporte) + parseFloat(pti_horas.inigo.calculoimporte) + parseFloat(pti_horas.inigo.revisionimporte) + parseFloat(pti_horas.inigo.modificacionimporte) + parseFloat(pti_horas.inigo.asistenciaimporte) + parseFloat(pti_horas.inigo.medicionesimporte) + parseFloat(pti_horas.inigo.otrosimporte);
			pti_horas.inigo.importetotal = pti_horas.inigo.importetotal.toFixed(0);
			pti_horas.ana.importetotal = parseFloat(pti_horas.ana.replanteoimporte) + parseFloat(pti_horas.ana.delineacionimporte) + parseFloat(pti_horas.ana.calculoimporte) + parseFloat(pti_horas.ana.revisionimporte) + parseFloat(pti_horas.ana.modificacionimporte) + parseFloat(pti_horas.ana.asistenciaimporte) + parseFloat(pti_horas.ana.medicionesimporte) + parseFloat(pti_horas.ana.otrosimporte);
			pti_horas.ana.importetotal = pti_horas.ana.importetotal.toFixed(0);
			pti_horas.inigoflorindo.importetotal = parseFloat(pti_horas.inigoflorindo.replanteoimporte) + parseFloat(pti_horas.inigoflorindo.delineacionimporte) + parseFloat(pti_horas.inigoflorindo.calculoimporte) + parseFloat(pti_horas.inigoflorindo.revisionimporte) + parseFloat(pti_horas.inigoflorindo.modificacionimporte) + parseFloat(pti_horas.inigoflorindo.asistenciaimporte) + parseFloat(pti_horas.inigoflorindo.medicionesimporte) + parseFloat(pti_horas.inigoflorindo.otrosimporte);
			pti_horas.inigoflorindo.importetotal = pti_horas.inigoflorindo.importetotal.toFixed(0);
			
			pti_horas.carolinauchuari.importetotal = parseFloat(pti_horas.carolinauchuari.replanteoimporte) + parseFloat(pti_horas.carolinauchuari.delineacionimporte) + parseFloat(pti_horas.carolinauchuari.calculoimporte) + parseFloat(pti_horas.carolinauchuari.revisionimporte) + parseFloat(pti_horas.carolinauchuari.modificacionimporte) + parseFloat(pti_horas.carolinauchuari.asistenciaimporte) + parseFloat(pti_horas.carolinauchuari.medicionesimporte) + parseFloat(pti_horas.carolinauchuari.otrosimporte);
			pti_horas.carolinauchuari.importetotal = pti_horas.carolinauchuari.importetotal.toFixed(0);
			
			pti_horas.alaitz.importetotal = parseFloat(pti_horas.alaitz.replanteoimporte) + parseFloat(pti_horas.alaitz.delineacionimporte) + parseFloat(pti_horas.alaitz.calculoimporte) + parseFloat(pti_horas.alaitz.revisionimporte) + parseFloat(pti_horas.alaitz.modificacionimporte) + parseFloat(pti_horas.alaitz.asistenciaimporte) + parseFloat(pti_horas.alaitz.medicionesimporte) + parseFloat(pti_horas.alaitz.otrosimporte);
			pti_horas.alaitz.importetotal = pti_horas.alaitz.importetotal.toFixed(0);
			pti_horas.oscar.importetotal = parseFloat(pti_horas.oscar.replanteoimporte) + parseFloat(pti_horas.oscar.delineacionimporte) + parseFloat(pti_horas.oscar.calculoimporte) + parseFloat(pti_horas.oscar.revisionimporte) + parseFloat(pti_horas.oscar.modificacionimporte) + parseFloat(pti_horas.oscar.asistenciaimporte) + parseFloat(pti_horas.oscar.medicionesimporte) + parseFloat(pti_horas.oscar.otrosimporte);
			pti_horas.oscar.importetotal = pti_horas.oscar.importetotal.toFixed(0);
			pti_horas.david.importetotal = parseFloat(pti_horas.david.replanteoimporte) + parseFloat(pti_horas.david.delineacionimporte) + parseFloat(pti_horas.david.calculoimporte) + parseFloat(pti_horas.david.revisionimporte) + parseFloat(pti_horas.david.modificacionimporte) + parseFloat(pti_horas.david.asistenciaimporte) + parseFloat(pti_horas.david.medicionesimporte) + parseFloat(pti_horas.david.otrosimporte);
			pti_horas.david.importetotal = pti_horas.david.importetotal.toFixed(0);
			pti_horas.eli.importetotal = parseFloat(pti_horas.eli.replanteoimporte) + parseFloat(pti_horas.eli.delineacionimporte) + parseFloat(pti_horas.eli.calculoimporte) + parseFloat(pti_horas.eli.revisionimporte) + parseFloat(pti_horas.eli.modificacionimporte) + parseFloat(pti_horas.eli.asistenciaimporte) + parseFloat(pti_horas.eli.medicionesimporte) + parseFloat(pti_horas.eli.otrosimporte);
			pti_horas.eli.importetotal = pti_horas.eli.importetotal.toFixed(0);
			////////////////////////////////
			/////////TOTAL HORAS, IMPORTES Y PORCENTAJES///////////////////////
			ptitotal.horas.replanteo = parseFloat(pti_horas.jon.replanteo) + parseFloat(pti_horas.unai.replanteo) + parseFloat(pti_horas.esti.replanteo) + parseFloat(pti_horas.oscar.replanteo) + parseFloat(pti_horas.david.replanteo) + parseFloat(pti_horas.eli.replanteo) + parseFloat(pti_horas.marcos.replanteo) + parseFloat(pti_horas.ainhoa.replanteo) + parseFloat(pti_horas.jose.replanteo) + parseFloat(pti_horas.joanes.replanteo) + parseFloat(pti_horas.markel.replanteo) + parseFloat(pti_horas.andoni.replanteo) + parseFloat(pti_horas.ziortza.replanteo)+ parseFloat(pti_horas.cris.replanteo)+ parseFloat(pti_horas.izaskun.replanteo)+ parseFloat(pti_horas.andres.replanteo)+ parseFloat(pti_horas.mikelrankin.replanteo)+ parseFloat(pti_horas.erosdasilva.replanteo)+ parseFloat(pti_horas.nataliagarcia.replanteo)+ parseFloat(pti_horas.nicolasmejia.replanteo)+ parseFloat(pti_horas.nerea.replanteo)+ parseFloat(pti_horas.ikervillar.replanteo)+ parseFloat(pti_horas.jontolosa.replanteo)+ parseFloat(pti_horas.leiremartin.replanteo)+ parseFloat(pti_horas.gorka.replanteo)+ parseFloat(pti_horas.mayra.replanteo)+ parseFloat(pti_horas.cristina.replanteo)+ parseFloat(pti_horas.inigo.replanteo)+ parseFloat(pti_horas.ana.replanteo)+ parseFloat(pti_horas.inigoflorindo.replanteo)+ parseFloat(pti_horas.carolinauchuari.replanteo)+ parseFloat(pti_horas.alaitz.replanteo)
			ptitotal.importe.replanteo = parseFloat(pti_horas.jon.replanteoimporte) + parseFloat(pti_horas.unai.replanteoimporte) + parseFloat(pti_horas.esti.replanteoimporte) + parseFloat(pti_horas.oscar.replanteoimporte) + parseFloat(pti_horas.david.replanteoimporte) + parseFloat(pti_horas.eli.replanteoimporte) + parseFloat(pti_horas.marcos.replanteoimporte) + parseFloat(pti_horas.ainhoa.replanteoimporte) + parseFloat(pti_horas.jose.replanteoimporte) + parseFloat(pti_horas.joanes.replanteoimporte) + parseFloat(pti_horas.markel.replanteoimporte) + parseFloat(pti_horas.andoni.replanteoimporte) + parseFloat(pti_horas.ziortza.replanteoimporte)+ parseFloat(pti_horas.cris.replanteoimporte)+ parseFloat(pti_horas.izaskun.replanteoimporte)+ parseFloat(pti_horas.andres.replanteoimporte)+ parseFloat(pti_horas.mikelrankin.replanteoimporte)+ parseFloat(pti_horas.erosdasilva.replanteoimporte)+ parseFloat(pti_horas.nataliagarcia.replanteoimporte)+ parseFloat(pti_horas.nicolasmejia.replanteoimporte)+ parseFloat(pti_horas.nerea.replanteoimporte)+ parseFloat(pti_horas.ikervillar.replanteoimporte)+ parseFloat(pti_horas.jontolosa.replanteoimporte)+ parseFloat(pti_horas.leiremartin.replanteoimporte)+ parseFloat(pti_horas.gorka.replanteoimporte)+ parseFloat(pti_horas.mayra.replanteoimporte)+ parseFloat(pti_horas.cristina.replanteoimporte)+ parseFloat(pti_horas.inigo.replanteoimporte)  + parseFloat(pti_horas.ana.replanteoimporte)+ parseFloat(pti_horas.inigoflorindo.replanteoimporte) + parseFloat(pti_horas.carolinauchuari.replanteoimporte)+ parseFloat(pti_horas.alaitz.replanteoimporte)
			
			ptitotal.horas.delineacion = parseFloat(pti_horas.jon.delineacion) + parseFloat(pti_horas.unai.delineacion) + parseFloat(pti_horas.esti.delineacion) + parseFloat(pti_horas.oscar.delineacion) + parseFloat(pti_horas.david.delineacion) + parseFloat(pti_horas.eli.delineacion) + parseFloat(pti_horas.marcos.delineacion) + parseFloat(pti_horas.ainhoa.delineacion) + parseFloat(pti_horas.jose.delineacion) + parseFloat(pti_horas.joanes.delineacion) + parseFloat(pti_horas.markel.delineacion) + parseFloat(pti_horas.andoni.delineacion) + parseFloat(pti_horas.ziortza.delineacion)+ parseFloat(pti_horas.cris.delineacion)+ parseFloat(pti_horas.izaskun.delineacion)+ parseFloat(pti_horas.andres.delineacion)+ parseFloat(pti_horas.mikelrankin.delineacion)+ parseFloat(pti_horas.erosdasilva.delineacion)+ parseFloat(pti_horas.nataliagarcia.delineacion)+ parseFloat(pti_horas.nicolasmejia.delineacion)+ parseFloat(pti_horas.nerea.delineacion)+ parseFloat(pti_horas.ikervillar.delineacion)+ parseFloat(pti_horas.jontolosa.delineacion)+ parseFloat(pti_horas.leiremartin.delineacion)+ parseFloat(pti_horas.gorka.delineacion)+ parseFloat(pti_horas.mayra.delineacion)+ parseFloat(pti_horas.cristina.delineacion)+ parseFloat(pti_horas.inigo.delineacion)+ parseFloat(pti_horas.ana.delineacion)+ parseFloat(pti_horas.inigoflorindo.delineacion)+ parseFloat(pti_horas.carolinauchuari.delineacion)+ parseFloat(pti_horas.alaitz.delineacion)
			ptitotal.importe.delineacion = parseFloat(pti_horas.jon.delineacionimporte) + parseFloat(pti_horas.unai.delineacionimporte) + parseFloat(pti_horas.esti.delineacionimporte) + parseFloat(pti_horas.oscar.delineacionimporte) + parseFloat(pti_horas.david.delineacionimporte) + parseFloat(pti_horas.eli.delineacionimporte) + parseFloat(pti_horas.marcos.delineacionimporte) + parseFloat(pti_horas.ainhoa.delineacionimporte) + parseFloat(pti_horas.jose.delineacionimporte) + parseFloat(pti_horas.joanes.delineacionimporte) + parseFloat(pti_horas.markel.delineacionimporte) + parseFloat(pti_horas.andoni.delineacionimporte) + parseFloat(pti_horas.ziortza.delineacionimporte)+ parseFloat(pti_horas.cris.delineacionimporte)+ parseFloat(pti_horas.izaskun.delineacionimporte)+ parseFloat(pti_horas.andres.delineacionimporte)+ parseFloat(pti_horas.mikelrankin.delineacionimporte)+ parseFloat(pti_horas.erosdasilva.delineacionimporte)+ parseFloat(pti_horas.nataliagarcia.delineacionimporte)+ parseFloat(pti_horas.nicolasmejia.delineacionimporte)+ parseFloat(pti_horas.nerea.delineacionimporte)+ parseFloat(pti_horas.ikervillar.delineacionimporte)+ parseFloat(pti_horas.jontolosa.delineacionimporte)+ parseFloat(pti_horas.leiremartin.delineacionimporte)+ parseFloat(pti_horas.gorka.delineacionimporte)+ parseFloat(pti_horas.mayra.delineacionimporte)+ parseFloat(pti_horas.cristina.delineacionimporte)+ parseFloat(pti_horas.inigo.delineacionimporte)+ parseFloat(pti_horas.ana.delineacionimporte)+ parseFloat(pti_horas.inigoflorindo.delineacionimporte)+ parseFloat(pti_horas.carolinauchuari.delineacionimporte)+ parseFloat(pti_horas.alaitz.delineacionimporte)
			
			ptitotal.horas.calculo = parseFloat(pti_horas.jon.calculo) + parseFloat(pti_horas.unai.calculo) + parseFloat(pti_horas.esti.calculo) + parseFloat(pti_horas.oscar.calculo) + parseFloat(pti_horas.david.calculo) + parseFloat(pti_horas.eli.calculo) + parseFloat(pti_horas.marcos.calculo) + parseFloat(pti_horas.ainhoa.calculo) + parseFloat(pti_horas.jose.calculo) + parseFloat(pti_horas.joanes.calculo) + parseFloat(pti_horas.markel.calculo) + parseFloat(pti_horas.andoni.calculo) + parseFloat(pti_horas.ziortza.calculo)+ parseFloat(pti_horas.cris.calculo)+ parseFloat(pti_horas.izaskun.calculo)+ parseFloat(pti_horas.andres.calculo)+ parseFloat(pti_horas.mikelrankin.calculo)+ parseFloat(pti_horas.erosdasilva.calculo)+ parseFloat(pti_horas.nataliagarcia.calculo)+ parseFloat(pti_horas.nicolasmejia.calculo)+ parseFloat(pti_horas.nerea.calculo)+ parseFloat(pti_horas.ikervillar.calculo)+ parseFloat(pti_horas.jontolosa.calculo)+ parseFloat(pti_horas.leiremartin.calculo)+ parseFloat(pti_horas.gorka.calculo)+ parseFloat(pti_horas.mayra.calculo)+ parseFloat(pti_horas.cristina.calculo)+ parseFloat(pti_horas.inigo.calculo) + parseFloat(pti_horas.ana.calculo)+ parseFloat(pti_horas.inigoflorindo.calculo) + parseFloat(pti_horas.carolinauchuari.calculo)+ parseFloat(pti_horas.alaitz.calculo)
			ptitotal.importe.calculo = parseFloat(pti_horas.jon.calculoimporte) + parseFloat(pti_horas.unai.calculoimporte) + parseFloat(pti_horas.esti.calculoimporte) + parseFloat(pti_horas.oscar.calculoimporte) + parseFloat(pti_horas.david.calculoimporte) + parseFloat(pti_horas.eli.calculoimporte) + parseFloat(pti_horas.marcos.calculoimporte) + parseFloat(pti_horas.ainhoa.calculoimporte) + parseFloat(pti_horas.jose.calculoimporte) + parseFloat(pti_horas.joanes.calculoimporte) + parseFloat(pti_horas.markel.calculoimporte) + parseFloat(pti_horas.andoni.calculoimporte) + parseFloat(pti_horas.ziortza.calculoimporte)+ parseFloat(pti_horas.cris.calculoimporte)+ parseFloat(pti_horas.izaskun.calculoimporte)+ parseFloat(pti_horas.andres.calculoimporte)+ parseFloat(pti_horas.mikelrankin.calculoimporte)+ parseFloat(pti_horas.erosdasilva.calculoimporte)+ parseFloat(pti_horas.nataliagarcia.calculoimporte)+ parseFloat(pti_horas.nicolasmejia.calculoimporte)+ parseFloat(pti_horas.nerea.calculoimporte)+ parseFloat(pti_horas.ikervillar.calculoimporte)+ parseFloat(pti_horas.jontolosa.calculoimporte)+ parseFloat(pti_horas.leiremartin.calculoimporte)+ parseFloat(pti_horas.gorka.calculoimporte)+ parseFloat(pti_horas.mayra.calculoimporte)+ parseFloat(pti_horas.cristina.calculoimporte)+ parseFloat(pti_horas.inigo.calculoimporte)+ parseFloat(pti_horas.ana.calculoimporte)+ parseFloat(pti_horas.inigoflorindo.calculoimporte)+ parseFloat(pti_horas.carolinauchuari.calculoimporte)+ parseFloat(pti_horas.alaitz.calculoimporte)
			
			ptitotal.horas.revision = parseFloat(pti_horas.jon.revision) + parseFloat(pti_horas.unai.revision) + parseFloat(pti_horas.esti.revision) + parseFloat(pti_horas.oscar.revision) + parseFloat(pti_horas.david.revision) + parseFloat(pti_horas.eli.revision) + parseFloat(pti_horas.marcos.revision) + parseFloat(pti_horas.ainhoa.revision) + parseFloat(pti_horas.jose.revision) + parseFloat(pti_horas.joanes.revision) + parseFloat(pti_horas.markel.revision) + parseFloat(pti_horas.andoni.revision) + parseFloat(pti_horas.ziortza.revision)+ parseFloat(pti_horas.cris.revision)+ parseFloat(pti_horas.izaskun.revision)+ parseFloat(pti_horas.andres.revision)+ parseFloat(pti_horas.mikelrankin.revision)+ parseFloat(pti_horas.erosdasilva.revision)+ parseFloat(pti_horas.nataliagarcia.revision)+ parseFloat(pti_horas.nicolasmejia.revision)+ parseFloat(pti_horas.nerea.revision)+ parseFloat(pti_horas.ikervillar.revision)+ parseFloat(pti_horas.jontolosa.revision)+ parseFloat(pti_horas.leiremartin.revision)+ parseFloat(pti_horas.gorka.revision)+ parseFloat(pti_horas.mayra.revision)+ parseFloat(pti_horas.cristina.revision)+ parseFloat(pti_horas.inigo.revision)+ parseFloat(pti_horas.ana.revision)+ parseFloat(pti_horas.inigoflorindo.revision)+ parseFloat(pti_horas.carolinauchuari.revision) + parseFloat(pti_horas.alaitz.revision)
			ptitotal.importe.revision = parseFloat(pti_horas.jon.revisionimporte) + parseFloat(pti_horas.unai.revisionimporte) + parseFloat(pti_horas.esti.revisionimporte) + parseFloat(pti_horas.oscar.revisionimporte) + parseFloat(pti_horas.david.revisionimporte) + parseFloat(pti_horas.eli.revisionimporte) + parseFloat(pti_horas.marcos.revisionimporte) + parseFloat(pti_horas.ainhoa.revisionimporte) + parseFloat(pti_horas.jose.revisionimporte) + parseFloat(pti_horas.joanes.revisionimporte) + parseFloat(pti_horas.markel.revisionimporte) + parseFloat(pti_horas.andoni.revisionimporte) + parseFloat(pti_horas.ziortza.revisionimporte) + parseFloat(pti_horas.cris.revisionimporte)+ parseFloat(pti_horas.izaskun.revisionimporte)+ parseFloat(pti_horas.andres.revisionimporte)+ parseFloat(pti_horas.mikelrankin.revisionimporte)+ parseFloat(pti_horas.erosdasilva.revisionimporte)+ parseFloat(pti_horas.nataliagarcia.revisionimporte)+ parseFloat(pti_horas.nicolasmejia.revisionimporte)+ parseFloat(pti_horas.nerea.revisionimporte)+ parseFloat(pti_horas.ikervillar.revisionimporte)+ parseFloat(pti_horas.jontolosa.revisionimporte)+ parseFloat(pti_horas.leiremartin.revisionimporte)+ parseFloat(pti_horas.gorka.revisionimporte)+ parseFloat(pti_horas.mayra.revisionimporte)+ parseFloat(pti_horas.cristina.revisionimporte)+ parseFloat(pti_horas.inigo.revisionimporte)+ parseFloat(pti_horas.ana.revisionimporte)+ parseFloat(pti_horas.inigoflorindo.revisionimporte)+ parseFloat(pti_horas.carolinauchuari.revisionimporte)+ parseFloat(pti_horas.alaitz.revisionimporte)
			
			ptitotal.horas.asistencia = parseFloat(pti_horas.jon.asistencia) + parseFloat(pti_horas.unai.asistencia) + parseFloat(pti_horas.esti.asistencia) + parseFloat(pti_horas.oscar.asistencia) + parseFloat(pti_horas.david.asistencia) + parseFloat(pti_horas.eli.asistencia) + parseFloat(pti_horas.marcos.asistencia) + parseFloat(pti_horas.ainhoa.asistencia) + parseFloat(pti_horas.jose.asistencia) + parseFloat(pti_horas.joanes.asistencia) + parseFloat(pti_horas.markel.asistencia) + parseFloat(pti_horas.andoni.asistencia) + parseFloat(pti_horas.ziortza.asistencia)+ parseFloat(pti_horas.cris.asistencia)+ parseFloat(pti_horas.izaskun.asistencia)+ parseFloat(pti_horas.andres.asistencia)+ parseFloat(pti_horas.mikelrankin.asistencia)+ parseFloat(pti_horas.erosdasilva.asistencia)+ parseFloat(pti_horas.nataliagarcia.asistencia)+ parseFloat(pti_horas.nicolasmejia.asistencia)+ parseFloat(pti_horas.nerea.asistencia)+ parseFloat(pti_horas.ikervillar.asistencia)+ parseFloat(pti_horas.jontolosa.asistencia)+ parseFloat(pti_horas.leiremartin.asistencia)+ parseFloat(pti_horas.gorka.asistencia)+ parseFloat(pti_horas.mayra.asistencia)+ parseFloat(pti_horas.cristina.asistencia)+ parseFloat(pti_horas.inigo.asistencia) + parseFloat(pti_horas.ana.asistencia) + parseFloat(pti_horas.inigoflorindo.asistencia) + parseFloat(pti_horas.carolinauchuari.asistencia) + parseFloat(pti_horas.alaitz.asistencia)
			ptitotal.importe.asistencia = parseFloat(pti_horas.jon.asistenciaimporte) + parseFloat(pti_horas.unai.asistenciaimporte) + parseFloat(pti_horas.esti.asistenciaimporte) + parseFloat(pti_horas.oscar.asistenciaimporte) + parseFloat(pti_horas.david.asistenciaimporte) + parseFloat(pti_horas.eli.asistenciaimporte) + parseFloat(pti_horas.marcos.asistenciaimporte) + parseFloat(pti_horas.ainhoa.asistenciaimporte) + parseFloat(pti_horas.jose.asistenciaimporte) + parseFloat(pti_horas.joanes.asistenciaimporte) + parseFloat(pti_horas.markel.asistenciaimporte) + parseFloat(pti_horas.andoni.asistenciaimporte) + parseFloat(pti_horas.ziortza.asistenciaimporte)+ parseFloat(pti_horas.cris.asistenciaimporte)+ parseFloat(pti_horas.izaskun.asistenciaimporte)+ parseFloat(pti_horas.andres.asistenciaimporte)+ parseFloat(pti_horas.mikelrankin.asistenciaimporte)+ parseFloat(pti_horas.erosdasilva.asistenciaimporte)+ parseFloat(pti_horas.nataliagarcia.asistenciaimporte)+ parseFloat(pti_horas.nicolasmejia.asistenciaimporte)+ parseFloat(pti_horas.nerea.asistenciaimporte)+ parseFloat(pti_horas.ikervillar.asistenciaimporte)+ parseFloat(pti_horas.jontolosa.asistenciaimporte)+ parseFloat(pti_horas.leiremartin.asistenciaimporte)+ parseFloat(pti_horas.gorka.asistenciaimporte)+ parseFloat(pti_horas.mayra.asistenciaimporte)+ parseFloat(pti_horas.cristina.asistenciaimporte)+ parseFloat(pti_horas.inigo.asistenciaimporte)+ parseFloat(pti_horas.ana.asistenciaimporte)+ parseFloat(pti_horas.inigoflorindo.asistenciaimporte)+ parseFloat(pti_horas.carolinauchuari.asistenciaimporte)+ parseFloat(pti_horas.alaitz.asistenciaimporte)
			
			ptitotal.horas.mediciones = parseFloat(pti_horas.jon.mediciones) + parseFloat(pti_horas.unai.mediciones) + parseFloat(pti_horas.esti.mediciones) + parseFloat(pti_horas.oscar.mediciones) + parseFloat(pti_horas.david.mediciones) + parseFloat(pti_horas.eli.mediciones) + parseFloat(pti_horas.marcos.mediciones) + parseFloat(pti_horas.ainhoa.mediciones) + parseFloat(pti_horas.jose.mediciones) + parseFloat(pti_horas.joanes.mediciones) + parseFloat(pti_horas.markel.mediciones) + parseFloat(pti_horas.andoni.mediciones) + parseFloat(pti_horas.ziortza.mediciones) + parseFloat(pti_horas.cris.mediciones)+ parseFloat(pti_horas.izaskun.mediciones)+ parseFloat(pti_horas.andres.mediciones)+ parseFloat(pti_horas.mikelrankin.mediciones)+ parseFloat(pti_horas.erosdasilva.mediciones)+ parseFloat(pti_horas.nataliagarcia.mediciones)+ parseFloat(pti_horas.nicolasmejia.mediciones)+ parseFloat(pti_horas.nerea.mediciones)+ parseFloat(pti_horas.ikervillar.mediciones)+ parseFloat(pti_horas.jontolosa.mediciones)+ parseFloat(pti_horas.leiremartin.mediciones)+ parseFloat(pti_horas.gorka.mediciones)+ parseFloat(pti_horas.mayra.mediciones)+ parseFloat(pti_horas.cristina.mediciones) + parseFloat(pti_horas.inigo.mediciones)+ parseFloat(pti_horas.ana.mediciones)+ parseFloat(pti_horas.inigoflorindo.mediciones)+ parseFloat(pti_horas.carolinauchuari.mediciones)+ parseFloat(pti_horas.alaitz.mediciones)
			ptitotal.importe.mediciones = parseFloat(pti_horas.jon.medicionesimporte) + parseFloat(pti_horas.unai.medicionesimporte) + parseFloat(pti_horas.esti.medicionesimporte) + parseFloat(pti_horas.oscar.medicionesimporte) + parseFloat(pti_horas.david.medicionesimporte) + parseFloat(pti_horas.eli.medicionesimporte) + parseFloat(pti_horas.marcos.medicionesimporte) + parseFloat(pti_horas.ainhoa.medicionesimporte) + parseFloat(pti_horas.jose.medicionesimporte) + parseFloat(pti_horas.joanes.medicionesimporte) + parseFloat(pti_horas.markel.medicionesimporte) + parseFloat(pti_horas.andoni.medicionesimporte) + parseFloat(pti_horas.ziortza.medicionesimporte)+ parseFloat(pti_horas.cris.medicionesimporte)+ parseFloat(pti_horas.izaskun.medicionesimporte)+ parseFloat(pti_horas.andres.medicionesimporte)+ parseFloat(pti_horas.mikelrankin.medicionesimporte)+ parseFloat(pti_horas.erosdasilva.medicionesimporte)+ parseFloat(pti_horas.nataliagarcia.medicionesimporte)+ parseFloat(pti_horas.nicolasmejia.medicionesimporte)+ parseFloat(pti_horas.nerea.medicionesimporte)+ parseFloat(pti_horas.ikervillar.medicionesimporte)+ parseFloat(pti_horas.jontolosa.medicionesimporte)+ parseFloat(pti_horas.leiremartin.medicionesimporte)+ parseFloat(pti_horas.gorka.medicionesimporte)+ parseFloat(pti_horas.mayra.medicionesimporte)+ parseFloat(pti_horas.cristina.medicionesimporte)+ parseFloat(pti_horas.inigo.medicionesimporte)+ parseFloat(pti_horas.ana.medicionesimporte)+ parseFloat(pti_horas.inigoflorindo.medicionesimporte)+ parseFloat(pti_horas.carolinauchuari.medicionesimporte)+ parseFloat(pti_horas.alaitz.medicionesimporte)
			
			ptitotal.horas.otros = parseFloat(pti_horas.jon.otros) + parseFloat(pti_horas.unai.otros) + parseFloat(pti_horas.esti.otros) + parseFloat(pti_horas.oscar.otros) + parseFloat(pti_horas.david.otros) + parseFloat(pti_horas.eli.otros) + parseFloat(pti_horas.marcos.otros) + parseFloat(pti_horas.ainhoa.otros) + parseFloat(pti_horas.jose.otros) + parseFloat(pti_horas.joanes.otros) + parseFloat(pti_horas.markel.otros) + parseFloat(pti_horas.andoni.otros) + parseFloat(pti_horas.ziortza.otros)+ parseFloat(pti_horas.cris.otros)+ parseFloat(pti_horas.izaskun.otros)+ parseFloat(pti_horas.andres.otros)+ parseFloat(pti_horas.mikelrankin.otros)+ parseFloat(pti_horas.erosdasilva.otros)+ parseFloat(pti_horas.nataliagarcia.otros)+ parseFloat(pti_horas.nicolasmejia.otros)+ parseFloat(pti_horas.nerea.otros)+ parseFloat(pti_horas.ikervillar.otros)+ parseFloat(pti_horas.jontolosa.otros)+ parseFloat(pti_horas.leiremartin.otros)+ parseFloat(pti_horas.gorka.otros)+ parseFloat(pti_horas.mayra.otros)+ parseFloat(pti_horas.cristina.otros)+ parseFloat(pti_horas.inigo.otros)+ parseFloat(pti_horas.ana.otros)+ parseFloat(pti_horas.inigoflorindo.otros)+ parseFloat(pti_horas.carolinauchuari.otros)+ parseFloat(pti_horas.alaitz.otros)
			ptitotal.importe.otros = parseFloat(pti_horas.jon.otrosimporte) + parseFloat(pti_horas.unai.otrosimporte) + parseFloat(pti_horas.esti.otrosimporte) + parseFloat(pti_horas.oscar.otrosimporte) + parseFloat(pti_horas.david.otrosimporte) + parseFloat(pti_horas.eli.otrosimporte) + parseFloat(pti_horas.marcos.otrosimporte) + parseFloat(pti_horas.ainhoa.otrosimporte) + parseFloat(pti_horas.jose.otrosimporte) + parseFloat(pti_horas.joanes.otrosimporte) + parseFloat(pti_horas.markel.otrosimporte) + parseFloat(pti_horas.andoni.otrosimporte) + parseFloat(pti_horas.ziortza.otrosimporte)+ parseFloat(pti_horas.cris.otrosimporte)+ parseFloat(pti_horas.izaskun.otrosimporte)+ parseFloat(pti_horas.andres.otrosimporte)+ parseFloat(pti_horas.mikelrankin.otrosimporte)+ parseFloat(pti_horas.erosdasilva.otrosimporte)+ parseFloat(pti_horas.nataliagarcia.otrosimporte)+ parseFloat(pti_horas.nicolasmejia.otrosimporte)+ parseFloat(pti_horas.nerea.otrosimporte)+ parseFloat(pti_horas.ikervillar.otrosimporte)+ parseFloat(pti_horas.jontolosa.otrosimporte)+ parseFloat(pti_horas.leiremartin.otrosimporte)+ parseFloat(pti_horas.gorka.otrosimporte)+ parseFloat(pti_horas.mayra.otrosimporte)+ parseFloat(pti_horas.cristina.otrosimporte)+ parseFloat(pti_horas.inigo.otrosimporte)+ parseFloat(pti_horas.ana.otrosimporte)+ parseFloat(pti_horas.inigoflorindo.otrosimporte)+ parseFloat(pti_horas.carolinauchuari.otrosimporte)+ parseFloat(pti_horas.alaitz.otrosimporte)
			
			
			var ptitotalhoras = ptitotal.horas.replanteo + ptitotal.horas.delineacion + ptitotal.horas.calculo + ptitotal.horas.revision + ptitotal.horas.asistencia + ptitotal.horas.mediciones + ptitotal.horas.otros
			ptitotal.horas.replanteo = (ptitotal.horas.replanteo).toFixed(0);
			ptitotal.horas.delineacion = (ptitotal.horas.delineacion).toFixed(0);
			ptitotal.horas.calculo = (ptitotal.horas.calculo).toFixed(0);
			ptitotal.horas.revision = (ptitotal.horas.revision).toFixed(0);
			ptitotal.horas.asistencia = (ptitotal.horas.asistencia).toFixed(0);
			ptitotal.horas.mediciones = (ptitotal.horas.mediciones).toFixed(0);		
			ptitotal.horas.otros = (ptitotal.horas.otros).toFixed(0);		
			ptitotal.importe.replanteo = (ptitotal.importe.replanteo).toFixed(0);
			ptitotal.importe.delineacion = (ptitotal.importe.delineacion).toFixed(0);
			ptitotal.importe.calculo = (ptitotal.importe.calculo).toFixed(0);
			ptitotal.importe.revision = (ptitotal.importe.revision).toFixed(0);
			ptitotal.importe.asistencia = (ptitotal.importe.asistencia).toFixed(0);
			ptitotal.importe.mediciones = (ptitotal.importe.mediciones).toFixed(0);
			ptitotal.importe.otros = (ptitotal.importe.otros).toFixed(0);
			
			
			
			
			/////////////////////////////////////////////////////////////////////////////////////////////
			ptitotalhoras = ptitotalhoras.toFixed(0);
			var ptitotalimporte = parseFloat(ptitotal.importe.replanteo) + parseFloat(ptitotal.importe.delineacion) + parseFloat(ptitotal.importe.calculo) + parseFloat(ptitotal.importe.revision) + parseFloat(ptitotal.importe.asistencia) + parseFloat(ptitotal.importe.mediciones) + parseFloat(ptitotal.importe.otros);
			var celdatotalhoras = "<td>" + ptitotalhoras+ "</td>";
			var celdatotalimporte = "<td>" + ptitotalimporte+ "</td>";
			
			ptitotal.porcentaje.replanteo = (ptitotal.importe.replanteo/ptitotalimporte*100).toFixed(0);
			ptitotal.porcentaje.delineacion = (ptitotal.importe.delineacion/ptitotalimporte*100).toFixed(0);
			ptitotal.porcentaje.calculo = (ptitotal.importe.calculo/ptitotalimporte*100).toFixed(0);
			ptitotal.porcentaje.revision = (ptitotal.importe.revision/ptitotalimporte*100).toFixed(0);
			ptitotal.porcentaje.asistencia = (ptitotal.importe.asistencia/ptitotalimporte*100).toFixed(0);
			ptitotal.porcentaje.mediciones = (ptitotal.importe.mediciones/ptitotalimporte*100).toFixed(0);
			ptitotal.porcentaje.otros = (ptitotal.importe.otros/ptitotalimporte*100).toFixed(0);
			
			var celdatotalreplanteohoras = "<td>" + ptitotal.horas.replanteo+ "</td>";
			var celdatotalreplanteoimporte = "<td>" + ptitotal.importe.replanteo+ "</td>";
			var celdatotalreplanteoporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.replanteo+ "</td>";
			
			var celdatotaldelineacionhoras = "<td>" + ptitotal.horas.delineacion+ "</td>";
			var celdatotaldelineacionimporte = "<td>" + ptitotal.importe.delineacion+ "</td>";
			var celdatotaldelineacionporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.delineacion+ "</td>";
			
			var celdatotalcalculohoras = "<td>" + ptitotal.horas.calculo+ "</td>";
			var celdatotalcalculoimporte = "<td>" + ptitotal.importe.calculo+ "</td>";
			var celdatotalcalculoporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.calculo+ "</td>";
			
			var celdatotalrevisionhoras = "<td>" + ptitotal.horas.revision+ "</td>";
			var celdatotalrevisionimporte = "<td>" + ptitotal.importe.revision+ "</td>";
			var celdatotalrevisionporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.revision+ "</td>";
			
			var celdatotalasistenciahoras = "<td>" + ptitotal.horas.asistencia+ "</td>";
			var celdatotalasistenciaimporte = "<td>" + ptitotal.importe.asistencia+ "</td>";
			var celdatotalasistenciaporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.asistencia+ "</td>";
			
			var celdatotalmedicioneshoras = "<td>" + ptitotal.horas.mediciones+ "</td>";
			var celdatotalmedicionesimporte = "<td>" + ptitotal.importe.mediciones+ "</td>";
			var celdatotalmedicionesporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.mediciones+ "</td>";
			
			var celdatotalotroshoras = "<td>" + ptitotal.horas.otros+ "</td>";
			var celdatotalotrosimporte = "<td>" + ptitotal.importe.otros+ "</td>";
			var celdatotalotrosporcentaje = "<td class=\"titulofinal\">" + ptitotal.porcentaje.otros+ "</td>";
			
			
			
			/////////PORCENTAJES X USUARIO///////////////////////////////////////////
			if (pti_horas.jon.importetotal!==0){
				pti_horas.jon.replanteoporcentaje = (pti_horas.jon.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jon.delineacionporcentaje = (pti_horas.jon.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jon.calculoporcentaje = (pti_horas.jon.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jon.revisionporcentaje = (pti_horas.jon.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jon.asistenciaporcentaje = (pti_horas.jon.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jon.medicionesporcentaje = (pti_horas.jon.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jon.otrosporcentaje = (pti_horas.jon.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.jon.replanteoporcentaje==0){pti_horas.jon.replanteoporcentaje="";};
			if(pti_horas.jon.delineacionporcentaje==0){pti_horas.jon.delineacionporcentaje="";};
			if(pti_horas.jon.calculoporcentaje==0){pti_horas.jon.calculoporcentaje="";};
			if(pti_horas.jon.revisionporcentaje==0){pti_horas.jon.revisionporcentaje="";};
			if(pti_horas.jon.asistenciaporcentaje==0){pti_horas.jon.asistenciaporcentaje="";};
			if(pti_horas.jon.medicionesporcentaje==0){pti_horas.jon.medicionesporcentaje="";};
			if(pti_horas.jon.otrosporcentaje==0){pti_horas.jon.otrosporcentaje="";};
			
			if (pti_horas.unai.importetotal!==0){
				pti_horas.unai.replanteoporcentaje = (pti_horas.unai.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.unai.delineacionporcentaje = (pti_horas.unai.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.unai.calculoporcentaje = (pti_horas.unai.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.unai.revisionporcentaje = (pti_horas.unai.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.unai.asistenciaporcentaje = (pti_horas.unai.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.unai.medicionesporcentaje = (pti_horas.unai.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.unai.otrosporcentaje = (pti_horas.unai.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.unai.replanteoporcentaje==0){pti_horas.unai.replanteoporcentaje="";};
			if(pti_horas.unai.delineacionporcentaje==0){pti_horas.unai.delineacionporcentaje="";};
			if(pti_horas.unai.calculoporcentaje==0){pti_horas.unai.calculoporcentaje="";};
			if(pti_horas.unai.revisionporcentaje==0){pti_horas.unai.revisionporcentaje="";};
			if(pti_horas.unai.asistenciaporcentaje==0){pti_horas.unai.asistenciaporcentaje="";};
			if(pti_horas.unai.medicionesporcentaje==0){pti_horas.unai.medicionesporcentaje="";};
			if(pti_horas.unai.otrosporcentaje==0){pti_horas.unai.otrosporcentaje="";};
			
			if (pti_horas.esti.importetotal!==0){
				pti_horas.esti.replanteoporcentaje = (pti_horas.esti.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.esti.delineacionporcentaje = (pti_horas.esti.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.esti.calculoporcentaje = (pti_horas.esti.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.esti.revisionporcentaje = (pti_horas.esti.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.esti.asistenciaporcentaje = (pti_horas.esti.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.esti.medicionesporcentaje = (pti_horas.esti.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.esti.otrosporcentaje = (pti_horas.esti.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.esti.replanteoporcentaje==0){pti_horas.esti.replanteoporcentaje="";};
			if(pti_horas.esti.delineacionporcentaje==0){pti_horas.esti.delineacionporcentaje="";};
			if(pti_horas.esti.calculoporcentaje==0){pti_horas.esti.calculoporcentaje="";};
			if(pti_horas.esti.revisionporcentaje==0){pti_horas.esti.revisionporcentaje="";};
			if(pti_horas.esti.asistenciaporcentaje==0){pti_horas.esti.asistenciaporcentaje="";};
			if(pti_horas.esti.medicionesporcentaje==0){pti_horas.esti.medicionesporcentaje="";};
			if(pti_horas.esti.otrosporcentaje==0){pti_horas.esti.otrosporcentaje="";};
			
			if (pti_horas.oscar.importetotal!==0){
				pti_horas.oscar.replanteoporcentaje = (pti_horas.oscar.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.oscar.delineacionporcentaje = (pti_horas.oscar.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.oscar.calculoporcentaje = (pti_horas.oscar.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.oscar.revisionporcentaje = (pti_horas.oscar.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.oscar.asistenciaporcentaje = (pti_horas.oscar.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.oscar.medicionesporcentaje = (pti_horas.oscar.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.oscar.otrosporcentaje = (pti_horas.oscar.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.oscar.replanteoporcentaje==0){pti_horas.oscar.replanteoporcentaje="";};
			if(pti_horas.oscar.delineacionporcentaje==0){pti_horas.oscar.delineacionporcentaje="";};
			if(pti_horas.oscar.calculoporcentaje==0){pti_horas.oscar.calculoporcentaje="";};
			if(pti_horas.oscar.revisionporcentaje==0){pti_horas.oscar.revisionporcentaje="";};
			if(pti_horas.oscar.asistenciaporcentaje==0){pti_horas.oscar.asistenciaporcentaje="";};
			if(pti_horas.oscar.medicionesporcentaje==0){pti_horas.oscar.medicionesporcentaje="";};
			if(pti_horas.oscar.otrosporcentaje==0){pti_horas.oscar.otrosporcentaje="";};
			
			if (pti_horas.eli.importetotal!==0){
				pti_horas.eli.replanteoporcentaje = (pti_horas.eli.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.eli.delineacionporcentaje = (pti_horas.eli.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.eli.calculoporcentaje = (pti_horas.eli.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.eli.revisionporcentaje = (pti_horas.eli.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.eli.asistenciaporcentaje = (pti_horas.eli.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.eli.medicionesporcentaje = (pti_horas.eli.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.eli.otrosporcentaje = (pti_horas.eli.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.eli.replanteoporcentaje==0){pti_horas.eli.replanteoporcentaje="";};
			if(pti_horas.eli.delineacionporcentaje==0){pti_horas.eli.delineacionporcentaje="";};
			if(pti_horas.eli.calculoporcentaje==0){pti_horas.eli.calculoporcentaje="";};
			if(pti_horas.eli.revisionporcentaje==0){pti_horas.eli.revisionporcentaje="";};
			if(pti_horas.eli.asistenciaporcentaje==0){pti_horas.eli.asistenciaporcentaje="";};
			if(pti_horas.eli.medicionesporcentaje==0){pti_horas.eli.medicionesporcentaje="";};
			if(pti_horas.eli.otrosporcentaje==0){pti_horas.eli.otrosporcentaje="";};
			
			if (pti_horas.marcos.importetotal!==0){
				pti_horas.marcos.replanteoporcentaje = (pti_horas.marcos.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.marcos.delineacionporcentaje = (pti_horas.marcos.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.marcos.calculoporcentaje = (pti_horas.marcos.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.marcos.revisionporcentaje = (pti_horas.marcos.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.marcos.asistenciaporcentaje = (pti_horas.marcos.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.marcos.medicionesporcentaje = (pti_horas.marcos.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.marcos.otrosporcentaje = (pti_horas.marcos.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.marcos.replanteoporcentaje==0){pti_horas.marcos.replanteoporcentaje="";};
			if(pti_horas.marcos.delineacionporcentaje==0){pti_horas.marcos.delineacionporcentaje="";};
			if(pti_horas.marcos.calculoporcentaje==0){pti_horas.marcos.calculoporcentaje="";};
			if(pti_horas.marcos.revisionporcentaje==0){pti_horas.marcos.revisionporcentaje="";};
			if(pti_horas.marcos.asistenciaporcentaje==0){pti_horas.marcos.asistenciaporcentaje="";};
			if(pti_horas.marcos.medicionesporcentaje==0){pti_horas.marcos.medicionesporcentaje="";};
			if(pti_horas.marcos.otrosporcentaje==0){pti_horas.marcos.otrosporcentaje="";};
			
			if (pti_horas.ainhoa.importetotal!==0){
				pti_horas.ainhoa.replanteoporcentaje = (pti_horas.ainhoa.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ainhoa.delineacionporcentaje = (pti_horas.ainhoa.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ainhoa.calculoporcentaje = (pti_horas.ainhoa.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ainhoa.revisionporcentaje = (pti_horas.ainhoa.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ainhoa.asistenciaporcentaje = (pti_horas.ainhoa.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ainhoa.medicionesporcentaje = (pti_horas.ainhoa.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ainhoa.otrosporcentaje = (pti_horas.ainhoa.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.ainhoa.replanteoporcentaje==0){pti_horas.ainhoa.replanteoporcentaje="";};
			if(pti_horas.ainhoa.delineacionporcentaje==0){pti_horas.ainhoa.delineacionporcentaje="";};
			if(pti_horas.ainhoa.calculoporcentaje==0){pti_horas.ainhoa.calculoporcentaje="";};
			if(pti_horas.ainhoa.revisionporcentaje==0){pti_horas.ainhoa.revisionporcentaje="";};
			if(pti_horas.ainhoa.asistenciaporcentaje==0){pti_horas.ainhoa.asistenciaporcentaje="";};
			if(pti_horas.ainhoa.medicionesporcentaje==0){pti_horas.ainhoa.medicionesporcentaje="";};
			if(pti_horas.ainhoa.otrosporcentaje==0){pti_horas.ainhoa.otrosporcentaje="";};
			
			if (pti_horas.jose.importetotal!==0){
				pti_horas.jose.replanteoporcentaje = (pti_horas.jose.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jose.delineacionporcentaje = (pti_horas.jose.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jose.calculoporcentaje = (pti_horas.jose.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jose.revisionporcentaje = (pti_horas.jose.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jose.asistenciaporcentaje = (pti_horas.jose.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jose.medicionesporcentaje = (pti_horas.jose.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jose.otrosporcentaje = (pti_horas.jose.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.jose.replanteoporcentaje==0){pti_horas.jose.replanteoporcentaje="";};
			if(pti_horas.jose.delineacionporcentaje==0){pti_horas.jose.delineacionporcentaje="";};
			if(pti_horas.jose.calculoporcentaje==0){pti_horas.jose.calculoporcentaje="";};
			if(pti_horas.jose.revisionporcentaje==0){pti_horas.jose.revisionporcentaje="";};
			if(pti_horas.jose.asistenciaporcentaje==0){pti_horas.jose.asistenciaporcentaje="";};
			if(pti_horas.jose.medicionesporcentaje==0){pti_horas.jose.medicionesporcentaje="";};
			if(pti_horas.jose.otrosporcentaje==0){pti_horas.jose.otrosporcentaje="";};
			
			if (pti_horas.joanes.importetotal!==0){
				pti_horas.joanes.replanteoporcentaje = (pti_horas.joanes.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.joanes.delineacionporcentaje = (pti_horas.joanes.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.joanes.calculoporcentaje = (pti_horas.joanes.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.joanes.revisionporcentaje = (pti_horas.joanes.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.joanes.asistenciaporcentaje = (pti_horas.joanes.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.joanes.medicionesporcentaje = (pti_horas.joanes.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.joanes.otrosporcentaje = (pti_horas.joanes.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.joanes.replanteoporcentaje==0){pti_horas.joanes.replanteoporcentaje="";};
			if(pti_horas.joanes.delineacionporcentaje==0){pti_horas.joanes.delineacionporcentaje="";};
			if(pti_horas.joanes.calculoporcentaje==0){pti_horas.joanes.calculoporcentaje="";};
			if(pti_horas.joanes.revisionporcentaje==0){pti_horas.joanes.revisionporcentaje="";};
			if(pti_horas.joanes.asistenciaporcentaje==0){pti_horas.joanes.asistenciaporcentaje="";};
			if(pti_horas.joanes.medicionesporcentaje==0){pti_horas.joanes.medicionesporcentaje="";};
			if(pti_horas.joanes.otrosporcentaje==0){pti_horas.joanes.otrosporcentaje="";};
			
			if (pti_horas.markel.importetotal!==0){
				pti_horas.markel.replanteoporcentaje = (pti_horas.markel.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.markel.delineacionporcentaje = (pti_horas.markel.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.markel.calculoporcentaje = (pti_horas.markel.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.markel.revisionporcentaje = (pti_horas.markel.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.markel.asistenciaporcentaje = (pti_horas.markel.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.markel.medicionesporcentaje = (pti_horas.markel.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.markel.otrosporcentaje = (pti_horas.markel.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.markel.replanteoporcentaje==0){pti_horas.markel.replanteoporcentaje="";};
			if(pti_horas.markel.delineacionporcentaje==0){pti_horas.markel.delineacionporcentaje="";};
			if(pti_horas.markel.calculoporcentaje==0){pti_horas.markel.calculoporcentaje="";};
			if(pti_horas.markel.revisionporcentaje==0){pti_horas.markel.revisionporcentaje="";};
			if(pti_horas.markel.asistenciaporcentaje==0){pti_horas.markel.asistenciaporcentaje="";};
			if(pti_horas.markel.medicionesporcentaje==0){pti_horas.markel.medicionesporcentaje="";};
			if(pti_horas.markel.otrosporcentaje==0){pti_horas.markel.otrosporcentaje="";};
			
			if (pti_horas.andoni.importetotal!==0){
				pti_horas.andoni.replanteoporcentaje = (pti_horas.andoni.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andoni.delineacionporcentaje = (pti_horas.andoni.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andoni.calculoporcentaje = (pti_horas.andoni.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andoni.revisionporcentaje = (pti_horas.andoni.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andoni.asistenciaporcentaje = (pti_horas.andoni.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andoni.medicionesporcentaje = (pti_horas.andoni.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andoni.otrosporcentaje = (pti_horas.andoni.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.andoni.replanteoporcentaje==0){pti_horas.andoni.replanteoporcentaje="";};
			if(pti_horas.andoni.delineacionporcentaje==0){pti_horas.andoni.delineacionporcentaje="";};
			if(pti_horas.andoni.calculoporcentaje==0){pti_horas.andoni.calculoporcentaje="";};
			if(pti_horas.andoni.revisionporcentaje==0){pti_horas.andoni.revisionporcentaje="";};
			if(pti_horas.andoni.asistenciaporcentaje==0){pti_horas.andoni.asistenciaporcentaje="";};
			if(pti_horas.andoni.medicionesporcentaje==0){pti_horas.andoni.medicionesporcentaje="";};
			if(pti_horas.andoni.otrosporcentaje==0){pti_horas.andoni.otrosporcentaje="";};
			
			if (pti_horas.ziortza.importetotal!==0){
				pti_horas.ziortza.replanteoporcentaje = (pti_horas.ziortza.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ziortza.delineacionporcentaje = (pti_horas.ziortza.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ziortza.calculoporcentaje = (pti_horas.ziortza.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ziortza.revisionporcentaje = (pti_horas.ziortza.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ziortza.asistenciaporcentaje = (pti_horas.ziortza.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ziortza.medicionesporcentaje = (pti_horas.ziortza.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ziortza.otrosporcentaje = (pti_horas.ziortza.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.ziortza.replanteoporcentaje==0){pti_horas.ziortza.replanteoporcentaje="";};
			if(pti_horas.ziortza.delineacionporcentaje==0){pti_horas.ziortza.delineacionporcentaje="";};
			if(pti_horas.ziortza.calculoporcentaje==0){pti_horas.ziortza.calculoporcentaje="";};
			if(pti_horas.ziortza.revisionporcentaje==0){pti_horas.ziortza.revisionporcentaje="";};
			if(pti_horas.ziortza.asistenciaporcentaje==0){pti_horas.ziortza.asistenciaporcentaje="";};
			if(pti_horas.ziortza.medicionesporcentaje==0){pti_horas.ziortza.medicionesporcentaje="";};
			if(pti_horas.ziortza.otrosporcentaje==0){pti_horas.ziortza.otrosporcentaje="";};
			
			if (pti_horas.cris.importetotal!==0){
				pti_horas.cris.replanteoporcentaje = (pti_horas.cris.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cris.delineacionporcentaje = (pti_horas.cris.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cris.calculoporcentaje = (pti_horas.cris.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cris.revisionporcentaje = (pti_horas.cris.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cris.asistenciaporcentaje = (pti_horas.cris.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cris.medicionesporcentaje = (pti_horas.cris.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cris.otrosporcentaje = (pti_horas.cris.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.cris.replanteoporcentaje==0){pti_horas.cris.replanteoporcentaje="";};
			if(pti_horas.cris.delineacionporcentaje==0){pti_horas.cris.delineacionporcentaje="";};
			if(pti_horas.cris.calculoporcentaje==0){pti_horas.cris.calculoporcentaje="";};
			if(pti_horas.cris.revisionporcentaje==0){pti_horas.cris.revisionporcentaje="";};
			if(pti_horas.cris.asistenciaporcentaje==0){pti_horas.cris.asistenciaporcentaje="";};
			if(pti_horas.cris.medicionesporcentaje==0){pti_horas.cris.medicionesporcentaje="";};
			if(pti_horas.cris.otrosporcentaje==0){pti_horas.cris.otrosporcentaje="";};
			
			if (pti_horas.izaskun.importetotal!==0){
				pti_horas.izaskun.replanteoporcentaje = (pti_horas.izaskun.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.izaskun.delineacionporcentaje = (pti_horas.izaskun.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.izaskun.calculoporcentaje = (pti_horas.izaskun.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.izaskun.revisionporcentaje = (pti_horas.izaskun.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.izaskun.asistenciaporcentaje = (pti_horas.izaskun.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.izaskun.medicionesporcentaje = (pti_horas.izaskun.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.izaskun.otrosporcentaje = (pti_horas.izaskun.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.izaskun.replanteoporcentaje==0){pti_horas.izaskun.replanteoporcentaje="";};
			if(pti_horas.izaskun.delineacionporcentaje==0){pti_horas.izaskun.delineacionporcentaje="";};
			if(pti_horas.izaskun.calculoporcentaje==0){pti_horas.izaskun.calculoporcentaje="";};
			if(pti_horas.izaskun.revisionporcentaje==0){pti_horas.izaskun.revisionporcentaje="";};
			if(pti_horas.izaskun.asistenciaporcentaje==0){pti_horas.izaskun.asistenciaporcentaje="";};
			if(pti_horas.izaskun.medicionesporcentaje==0){pti_horas.izaskun.medicionesporcentaje="";};
			if(pti_horas.izaskun.otrosporcentaje==0){pti_horas.izaskun.otrosporcentaje="";};
			
			
			if (pti_horas.andres.importetotal!==0){
				pti_horas.andres.replanteoporcentaje = (pti_horas.andres.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andres.delineacionporcentaje = (pti_horas.andres.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andres.calculoporcentaje = (pti_horas.andres.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andres.revisionporcentaje = (pti_horas.andres.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andres.asistenciaporcentaje = (pti_horas.andres.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andres.medicionesporcentaje = (pti_horas.andres.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.andres.otrosporcentaje = (pti_horas.andres.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.andres.replanteoporcentaje==0){pti_horas.andres.replanteoporcentaje="";};
			if(pti_horas.andres.delineacionporcentaje==0){pti_horas.andres.delineacionporcentaje="";};
			if(pti_horas.andres.calculoporcentaje==0){pti_horas.andres.calculoporcentaje="";};
			if(pti_horas.andres.revisionporcentaje==0){pti_horas.andres.revisionporcentaje="";};
			if(pti_horas.andres.asistenciaporcentaje==0){pti_horas.andres.asistenciaporcentaje="";};
			if(pti_horas.andres.medicionesporcentaje==0){pti_horas.andres.medicionesporcentaje="";};
			if(pti_horas.andres.otrosporcentaje==0){pti_horas.andres.otrosporcentaje="";};
			
			
			if (pti_horas.mikelrankin.importetotal!==0){
				pti_horas.mikelrankin.replanteoporcentaje = (pti_horas.mikelrankin.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mikelrankin.delineacionporcentaje = (pti_horas.mikelrankin.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mikelrankin.calculoporcentaje = (pti_horas.mikelrankin.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mikelrankin.revisionporcentaje = (pti_horas.mikelrankin.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mikelrankin.asistenciaporcentaje = (pti_horas.mikelrankin.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mikelrankin.medicionesporcentaje = (pti_horas.mikelrankin.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mikelrankin.otrosporcentaje = (pti_horas.mikelrankin.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.mikelrankin.replanteoporcentaje==0){pti_horas.mikelrankin.replanteoporcentaje="";};
			if(pti_horas.mikelrankin.delineacionporcentaje==0){pti_horas.mikelrankin.delineacionporcentaje="";};
			if(pti_horas.mikelrankin.calculoporcentaje==0){pti_horas.mikelrankin.calculoporcentaje="";};
			if(pti_horas.mikelrankin.revisionporcentaje==0){pti_horas.mikelrankin.revisionporcentaje="";};
			if(pti_horas.mikelrankin.asistenciaporcentaje==0){pti_horas.mikelrankin.asistenciaporcentaje="";};
			if(pti_horas.mikelrankin.medicionesporcentaje==0){pti_horas.mikelrankin.medicionesporcentaje="";};
			if(pti_horas.mikelrankin.otrosporcentaje==0){pti_horas.mikelrankin.otrosporcentaje="";};
			
			
			if (pti_horas.erosdasilva.importetotal!==0){
				pti_horas.erosdasilva.replanteoporcentaje = (pti_horas.erosdasilva.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.erosdasilva.delineacionporcentaje = (pti_horas.erosdasilva.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.erosdasilva.calculoporcentaje = (pti_horas.erosdasilva.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.erosdasilva.revisionporcentaje = (pti_horas.erosdasilva.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.erosdasilva.asistenciaporcentaje = (pti_horas.erosdasilva.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.erosdasilva.medicionesporcentaje = (pti_horas.erosdasilva.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.erosdasilva.otrosporcentaje = (pti_horas.erosdasilva.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.erosdasilva.replanteoporcentaje==0){pti_horas.erosdasilva.replanteoporcentaje="";};
			if(pti_horas.erosdasilva.delineacionporcentaje==0){pti_horas.erosdasilva.delineacionporcentaje="";};
			if(pti_horas.erosdasilva.calculoporcentaje==0){pti_horas.erosdasilva.calculoporcentaje="";};
			if(pti_horas.erosdasilva.revisionporcentaje==0){pti_horas.erosdasilva.revisionporcentaje="";};
			if(pti_horas.erosdasilva.asistenciaporcentaje==0){pti_horas.erosdasilva.asistenciaporcentaje="";};
			if(pti_horas.erosdasilva.medicionesporcentaje==0){pti_horas.erosdasilva.medicionesporcentaje="";};
			if(pti_horas.erosdasilva.otrosporcentaje==0){pti_horas.erosdasilva.otrosporcentaje="";};
			
			
			if (pti_horas.nataliagarcia.importetotal!==0){
				pti_horas.nataliagarcia.replanteoporcentaje = (pti_horas.nataliagarcia.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nataliagarcia.delineacionporcentaje = (pti_horas.nataliagarcia.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nataliagarcia.calculoporcentaje = (pti_horas.nataliagarcia.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nataliagarcia.revisionporcentaje = (pti_horas.nataliagarcia.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nataliagarcia.asistenciaporcentaje = (pti_horas.nataliagarcia.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nataliagarcia.medicionesporcentaje = (pti_horas.nataliagarcia.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nataliagarcia.otrosporcentaje = (pti_horas.nataliagarcia.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.nataliagarcia.replanteoporcentaje==0){pti_horas.nataliagarcia.replanteoporcentaje="";};
			if(pti_horas.nataliagarcia.delineacionporcentaje==0){pti_horas.nataliagarcia.delineacionporcentaje="";};
			if(pti_horas.nataliagarcia.calculoporcentaje==0){pti_horas.nataliagarcia.calculoporcentaje="";};
			if(pti_horas.nataliagarcia.revisionporcentaje==0){pti_horas.nataliagarcia.revisionporcentaje="";};
			if(pti_horas.nataliagarcia.asistenciaporcentaje==0){pti_horas.nataliagarcia.asistenciaporcentaje="";};
			if(pti_horas.nataliagarcia.medicionesporcentaje==0){pti_horas.nataliagarcia.medicionesporcentaje="";};
			if(pti_horas.nataliagarcia.otrosporcentaje==0){pti_horas.nataliagarcia.otrosporcentaje="";};
			
			if (pti_horas.nicolasmejia.importetotal!==0){
				pti_horas.nicolasmejia.replanteoporcentaje = (pti_horas.nicolasmejia.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nicolasmejia.delineacionporcentaje = (pti_horas.nicolasmejia.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nicolasmejia.calculoporcentaje = (pti_horas.nicolasmejia.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nicolasmejia.revisionporcentaje = (pti_horas.nicolasmejia.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nicolasmejia.asistenciaporcentaje = (pti_horas.nicolasmejia.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nicolasmejia.medicionesporcentaje = (pti_horas.nicolasmejia.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nicolasmejia.otrosporcentaje = (pti_horas.nicolasmejia.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.nicolasmejia.replanteoporcentaje==0){pti_horas.nicolasmejia.replanteoporcentaje="";};
			if(pti_horas.nicolasmejia.delineacionporcentaje==0){pti_horas.nicolasmejia.delineacionporcentaje="";};
			if(pti_horas.nicolasmejia.calculoporcentaje==0){pti_horas.nicolasmejia.calculoporcentaje="";};
			if(pti_horas.nicolasmejia.revisionporcentaje==0){pti_horas.nicolasmejia.revisionporcentaje="";};
			if(pti_horas.nicolasmejia.asistenciaporcentaje==0){pti_horas.nicolasmejia.asistenciaporcentaje="";};
			if(pti_horas.nicolasmejia.medicionesporcentaje==0){pti_horas.nicolasmejia.medicionesporcentaje="";};
			if(pti_horas.nicolasmejia.otrosporcentaje==0){pti_horas.nicolasmejia.otrosporcentaje="";};
			
			if (pti_horas.nerea.importetotal!==0){
				pti_horas.nerea.replanteoporcentaje = (pti_horas.nerea.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nerea.delineacionporcentaje = (pti_horas.nerea.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nerea.calculoporcentaje = (pti_horas.nerea.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nerea.revisionporcentaje = (pti_horas.nerea.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nerea.asistenciaporcentaje = (pti_horas.nerea.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nerea.medicionesporcentaje = (pti_horas.nerea.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.nerea.otrosporcentaje = (pti_horas.nerea.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.nerea.replanteoporcentaje==0){pti_horas.nerea.replanteoporcentaje="";};
			if(pti_horas.nerea.delineacionporcentaje==0){pti_horas.nerea.delineacionporcentaje="";};
			if(pti_horas.nerea.calculoporcentaje==0){pti_horas.nerea.calculoporcentaje="";};
			if(pti_horas.nerea.revisionporcentaje==0){pti_horas.nerea.revisionporcentaje="";};
			if(pti_horas.nerea.asistenciaporcentaje==0){pti_horas.nerea.asistenciaporcentaje="";};
			if(pti_horas.nerea.medicionesporcentaje==0){pti_horas.nerea.medicionesporcentaje="";};
			if(pti_horas.nerea.otrosporcentaje==0){pti_horas.nerea.otrosporcentaje="";};
			
			if (pti_horas.ikervillar.importetotal!==0){
				pti_horas.ikervillar.replanteoporcentaje = (pti_horas.ikervillar.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ikervillar.delineacionporcentaje = (pti_horas.ikervillar.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ikervillar.calculoporcentaje = (pti_horas.ikervillar.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ikervillar.revisionporcentaje = (pti_horas.ikervillar.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ikervillar.asistenciaporcentaje = (pti_horas.ikervillar.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ikervillar.medicionesporcentaje = (pti_horas.ikervillar.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ikervillar.otrosporcentaje = (pti_horas.ikervillar.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.ikervillar.replanteoporcentaje==0){pti_horas.ikervillar.replanteoporcentaje="";};
			if(pti_horas.ikervillar.delineacionporcentaje==0){pti_horas.ikervillar.delineacionporcentaje="";};
			if(pti_horas.ikervillar.calculoporcentaje==0){pti_horas.ikervillar.calculoporcentaje="";};
			if(pti_horas.ikervillar.revisionporcentaje==0){pti_horas.ikervillar.revisionporcentaje="";};
			if(pti_horas.ikervillar.asistenciaporcentaje==0){pti_horas.ikervillar.asistenciaporcentaje="";};
			if(pti_horas.ikervillar.medicionesporcentaje==0){pti_horas.ikervillar.medicionesporcentaje="";};
			if(pti_horas.ikervillar.otrosporcentaje==0){pti_horas.ikervillar.otrosporcentaje="";};
			
			if (pti_horas.jontolosa.importetotal!==0){
				pti_horas.jontolosa.replanteoporcentaje = (pti_horas.jontolosa.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jontolosa.delineacionporcentaje = (pti_horas.jontolosa.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jontolosa.calculoporcentaje = (pti_horas.jontolosa.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jontolosa.revisionporcentaje = (pti_horas.jontolosa.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jontolosa.asistenciaporcentaje = (pti_horas.jontolosa.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jontolosa.medicionesporcentaje = (pti_horas.jontolosa.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.jontolosa.otrosporcentaje = (pti_horas.jontolosa.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.jontolosa.replanteoporcentaje==0){pti_horas.jontolosa.replanteoporcentaje="";};
			if(pti_horas.jontolosa.delineacionporcentaje==0){pti_horas.jontolosa.delineacionporcentaje="";};
			if(pti_horas.jontolosa.calculoporcentaje==0){pti_horas.jontolosa.calculoporcentaje="";};
			if(pti_horas.jontolosa.revisionporcentaje==0){pti_horas.jontolosa.revisionporcentaje="";};
			if(pti_horas.jontolosa.asistenciaporcentaje==0){pti_horas.jontolosa.asistenciaporcentaje="";};
			if(pti_horas.jontolosa.medicionesporcentaje==0){pti_horas.jontolosa.medicionesporcentaje="";};
			if(pti_horas.jontolosa.otrosporcentaje==0){pti_horas.jontolosa.otrosporcentaje="";};
			
			if (pti_horas.leiremartin.importetotal!==0){
				pti_horas.leiremartin.replanteoporcentaje = (pti_horas.leiremartin.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.leiremartin.delineacionporcentaje = (pti_horas.leiremartin.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.leiremartin.calculoporcentaje = (pti_horas.leiremartin.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.leiremartin.revisionporcentaje = (pti_horas.leiremartin.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.leiremartin.asistenciaporcentaje = (pti_horas.leiremartin.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.leiremartin.medicionesporcentaje = (pti_horas.leiremartin.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.leiremartin.otrosporcentaje = (pti_horas.leiremartin.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.leiremartin.replanteoporcentaje==0){pti_horas.leiremartin.replanteoporcentaje="";};
			if(pti_horas.leiremartin.delineacionporcentaje==0){pti_horas.leiremartin.delineacionporcentaje="";};
			if(pti_horas.leiremartin.calculoporcentaje==0){pti_horas.leiremartin.calculoporcentaje="";};
			if(pti_horas.leiremartin.revisionporcentaje==0){pti_horas.leiremartin.revisionporcentaje="";};
			if(pti_horas.leiremartin.asistenciaporcentaje==0){pti_horas.leiremartin.asistenciaporcentaje="";};
			if(pti_horas.leiremartin.medicionesporcentaje==0){pti_horas.leiremartin.medicionesporcentaje="";};
			if(pti_horas.leiremartin.otrosporcentaje==0){pti_horas.leiremartin.otrosporcentaje="";};
			
			if (pti_horas.gorka.importetotal!==0){
				pti_horas.gorka.replanteoporcentaje = (pti_horas.gorka.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.gorka.delineacionporcentaje = (pti_horas.gorka.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.gorka.calculoporcentaje = (pti_horas.gorka.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.gorka.revisionporcentaje = (pti_horas.gorka.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.gorka.asistenciaporcentaje = (pti_horas.gorka.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.gorka.medicionesporcentaje = (pti_horas.gorka.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.gorka.otrosporcentaje = (pti_horas.gorka.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.gorka.replanteoporcentaje==0){pti_horas.gorka.replanteoporcentaje="";};
			if(pti_horas.gorka.delineacionporcentaje==0){pti_horas.gorka.delineacionporcentaje="";};
			if(pti_horas.gorka.calculoporcentaje==0){pti_horas.gorka.calculoporcentaje="";};
			if(pti_horas.gorka.revisionporcentaje==0){pti_horas.gorka.revisionporcentaje="";};
			if(pti_horas.gorka.asistenciaporcentaje==0){pti_horas.gorka.asistenciaporcentaje="";};
			if(pti_horas.gorka.medicionesporcentaje==0){pti_horas.gorka.medicionesporcentaje="";};
			if(pti_horas.gorka.otrosporcentaje==0){pti_horas.gorka.otrosporcentaje="";};
			
			
			if (pti_horas.mayra.importetotal!==0){
				pti_horas.mayra.replanteoporcentaje = (pti_horas.mayra.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mayra.delineacionporcentaje = (pti_horas.mayra.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mayra.calculoporcentaje = (pti_horas.mayra.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mayra.revisionporcentaje = (pti_horas.mayra.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mayra.asistenciaporcentaje = (pti_horas.mayra.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mayra.medicionesporcentaje = (pti_horas.mayra.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.mayra.otrosporcentaje = (pti_horas.mayra.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.mayra.replanteoporcentaje==0){pti_horas.mayra.replanteoporcentaje="";};
			if(pti_horas.mayra.delineacionporcentaje==0){pti_horas.mayra.delineacionporcentaje="";};
			if(pti_horas.mayra.calculoporcentaje==0){pti_horas.mayra.calculoporcentaje="";};
			if(pti_horas.mayra.revisionporcentaje==0){pti_horas.mayra.revisionporcentaje="";};
			if(pti_horas.mayra.asistenciaporcentaje==0){pti_horas.mayra.asistenciaporcentaje="";};
			if(pti_horas.mayra.medicionesporcentaje==0){pti_horas.mayra.medicionesporcentaje="";};
			if(pti_horas.mayra.otrosporcentaje==0){pti_horas.mayra.otrosporcentaje="";};
			
			if (pti_horas.cristina.importetotal!==0){
				pti_horas.cristina.replanteoporcentaje = (pti_horas.cristina.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cristina.delineacionporcentaje = (pti_horas.cristina.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cristina.calculoporcentaje = (pti_horas.cristina.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cristina.revisionporcentaje = (pti_horas.cristina.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cristina.asistenciaporcentaje = (pti_horas.cristina.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cristina.medicionesporcentaje = (pti_horas.cristina.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.cristina.otrosporcentaje = (pti_horas.cristina.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.cristina.replanteoporcentaje==0){pti_horas.cristina.replanteoporcentaje="";};
			if(pti_horas.cristina.delineacionporcentaje==0){pti_horas.cristina.delineacionporcentaje="";};
			if(pti_horas.cristina.calculoporcentaje==0){pti_horas.cristina.calculoporcentaje="";};
			if(pti_horas.cristina.revisionporcentaje==0){pti_horas.cristina.revisionporcentaje="";};
			if(pti_horas.cristina.asistenciaporcentaje==0){pti_horas.cristina.asistenciaporcentaje="";};
			if(pti_horas.cristina.medicionesporcentaje==0){pti_horas.cristina.medicionesporcentaje="";};
			if(pti_horas.cristina.otrosporcentaje==0){pti_horas.cristina.otrosporcentaje="";};
			
			if (pti_horas.inigo.importetotal!==0){
				pti_horas.inigo.replanteoporcentaje = (pti_horas.inigo.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigo.delineacionporcentaje = (pti_horas.inigo.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigo.calculoporcentaje = (pti_horas.inigo.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigo.revisionporcentaje = (pti_horas.inigo.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigo.asistenciaporcentaje = (pti_horas.inigo.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigo.medicionesporcentaje = (pti_horas.inigo.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigo.otrosporcentaje = (pti_horas.inigo.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.inigo.replanteoporcentaje==0){pti_horas.inigo.replanteoporcentaje="";};
			if(pti_horas.inigo.delineacionporcentaje==0){pti_horas.inigo.delineacionporcentaje="";};
			if(pti_horas.inigo.calculoporcentaje==0){pti_horas.inigo.calculoporcentaje="";};
			if(pti_horas.inigo.revisionporcentaje==0){pti_horas.inigo.revisionporcentaje="";};
			if(pti_horas.inigo.asistenciaporcentaje==0){pti_horas.inigo.asistenciaporcentaje="";};
			if(pti_horas.inigo.medicionesporcentaje==0){pti_horas.inigo.medicionesporcentaje="";};
			if(pti_horas.inigo.otrosporcentaje==0){pti_horas.inigo.otrosporcentaje="";};
						
			if (pti_horas.ana.importetotal!==0){
				pti_horas.ana.replanteoporcentaje = (pti_horas.ana.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ana.delineacionporcentaje = (pti_horas.ana.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ana.calculoporcentaje = (pti_horas.ana.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ana.revisionporcentaje = (pti_horas.ana.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ana.asistenciaporcentaje = (pti_horas.ana.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ana.medicionesporcentaje = (pti_horas.ana.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.ana.otrosporcentaje = (pti_horas.ana.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.ana.replanteoporcentaje==0){pti_horas.ana.replanteoporcentaje="";};
			if(pti_horas.ana.delineacionporcentaje==0){pti_horas.ana.delineacionporcentaje="";};
			if(pti_horas.ana.calculoporcentaje==0){pti_horas.ana.calculoporcentaje="";};
			if(pti_horas.ana.revisionporcentaje==0){pti_horas.ana.revisionporcentaje="";};
			if(pti_horas.ana.asistenciaporcentaje==0){pti_horas.ana.asistenciaporcentaje="";};
			if(pti_horas.ana.medicionesporcentaje==0){pti_horas.ana.medicionesporcentaje="";};
			if(pti_horas.ana.otrosporcentaje==0){pti_horas.ana.otrosporcentaje="";};
						
			if (pti_horas.inigoflorindo.importetotal!==0){
				pti_horas.inigoflorindo.replanteoporcentaje = (pti_horas.inigoflorindo.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigoflorindo.delineacionporcentaje = (pti_horas.inigoflorindo.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigoflorindo.calculoporcentaje = (pti_horas.inigoflorindo.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigoflorindo.revisionporcentaje = (pti_horas.inigoflorindo.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigoflorindo.asistenciaporcentaje = (pti_horas.inigoflorindo.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigoflorindo.medicionesporcentaje = (pti_horas.inigoflorindo.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.inigoflorindo.otrosporcentaje = (pti_horas.inigoflorindo.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.inigoflorindo.replanteoporcentaje==0){pti_horas.inigoflorindo.replanteoporcentaje="";};
			if(pti_horas.inigoflorindo.delineacionporcentaje==0){pti_horas.inigoflorindo.delineacionporcentaje="";};
			if(pti_horas.inigoflorindo.calculoporcentaje==0){pti_horas.inigoflorindo.calculoporcentaje="";};
			if(pti_horas.inigoflorindo.revisionporcentaje==0){pti_horas.inigoflorindo.revisionporcentaje="";};
			if(pti_horas.inigoflorindo.asistenciaporcentaje==0){pti_horas.inigoflorindo.asistenciaporcentaje="";};
			if(pti_horas.inigoflorindo.medicionesporcentaje==0){pti_horas.inigoflorindo.medicionesporcentaje="";};
			if(pti_horas.inigoflorindo.otrosporcentaje==0){pti_horas.inigoflorindo.otrosporcentaje="";};
							
			if (pti_horas.carolinauchuari.importetotal!==0){
				pti_horas.carolinauchuari.replanteoporcentaje = (pti_horas.carolinauchuari.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.carolinauchuari.delineacionporcentaje = (pti_horas.carolinauchuari.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.carolinauchuari.calculoporcentaje = (pti_horas.carolinauchuari.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.carolinauchuari.revisionporcentaje = (pti_horas.carolinauchuari.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.carolinauchuari.asistenciaporcentaje = (pti_horas.carolinauchuari.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.carolinauchuari.medicionesporcentaje = (pti_horas.carolinauchuari.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.carolinauchuari.otrosporcentaje = (pti_horas.carolinauchuari.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.carolinauchuari.replanteoporcentaje==0){pti_horas.carolinauchuari.replanteoporcentaje="";};
			if(pti_horas.carolinauchuari.delineacionporcentaje==0){pti_horas.carolinauchuari.delineacionporcentaje="";};
			if(pti_horas.carolinauchuari.calculoporcentaje==0){pti_horas.carolinauchuari.calculoporcentaje="";};
			if(pti_horas.carolinauchuari.revisionporcentaje==0){pti_horas.carolinauchuari.revisionporcentaje="";};
			if(pti_horas.carolinauchuari.asistenciaporcentaje==0){pti_horas.carolinauchuari.asistenciaporcentaje="";};
			if(pti_horas.carolinauchuari.medicionesporcentaje==0){pti_horas.carolinauchuari.medicionesporcentaje="";};
			if(pti_horas.carolinauchuari.otrosporcentaje==0){pti_horas.carolinauchuari.otrosporcentaje="";};
			
			if (pti_horas.alaitz.importetotal!==0){
				pti_horas.alaitz.replanteoporcentaje = (pti_horas.alaitz.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.alaitz.delineacionporcentaje = (pti_horas.alaitz.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.alaitz.calculoporcentaje = (pti_horas.alaitz.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.alaitz.revisionporcentaje = (pti_horas.alaitz.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.alaitz.asistenciaporcentaje = (pti_horas.alaitz.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.alaitz.medicionesporcentaje = (pti_horas.alaitz.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.alaitz.otrosporcentaje = (pti_horas.alaitz.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.alaitz.replanteoporcentaje==0){pti_horas.alaitz.replanteoporcentaje="";};
			if(pti_horas.alaitz.delineacionporcentaje==0){pti_horas.alaitz.delineacionporcentaje="";};
			if(pti_horas.alaitz.calculoporcentaje==0){pti_horas.alaitz.calculoporcentaje="";};
			if(pti_horas.alaitz.revisionporcentaje==0){pti_horas.alaitz.revisionporcentaje="";};
			if(pti_horas.alaitz.asistenciaporcentaje==0){pti_horas.alaitz.asistenciaporcentaje="";};
			if(pti_horas.alaitz.medicionesporcentaje==0){pti_horas.alaitz.medicionesporcentaje="";};
			if(pti_horas.alaitz.otrosporcentaje==0){pti_horas.alaitz.otrosporcentaje="";};
			
			if (pti_horas.david.importetotal!==0){
				pti_horas.david.replanteoporcentaje = (pti_horas.david.replanteoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.david.delineacionporcentaje = (pti_horas.david.delineacionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.david.calculoporcentaje = (pti_horas.david.calculoimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.david.revisionporcentaje = (pti_horas.david.revisionimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.david.asistenciaporcentaje = (pti_horas.david.asistenciaimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.david.medicionesporcentaje = (pti_horas.david.medicionesimporte/ptitotalimporte*100).toFixed(0);
				pti_horas.david.otrosporcentaje = (pti_horas.david.otrosimporte/ptitotalimporte*100).toFixed(0);
			};
			if(pti_horas.david.replanteoporcentaje==0){pti_horas.david.replanteoporcentaje="";};
			if(pti_horas.david.delineacionporcentaje==0){pti_horas.david.delineacionporcentaje="";};
			if(pti_horas.david.calculoporcentaje==0){pti_horas.david.calculoporcentaje="";};
			if(pti_horas.david.revisionporcentaje==0){pti_horas.david.revisionporcentaje="";};
			if(pti_horas.david.asistenciaporcentaje==0){pti_horas.david.asistenciaporcentaje="";};
			if(pti_horas.david.medicionesporcentaje==0){pti_horas.david.medicionesporcentaje="";};
			if(pti_horas.david.otrosporcentaje==0){pti_horas.david.otrosporcentaje="";};
			
			//////////////////////////////////////////////////////////////////////////////////////////
			

	
			/////////////////////////////////QUITAR CEROS/////////////////////////////////////////////			
			if (pti_horas.jon.replanteoimporte == 0.00){pti_horas.jon.replanteoimporte="";}
			if (pti_horas.oscar.replanteoimporte == 0.00){pti_horas.oscar.replanteoimporte="";}
			if (pti_horas.david.replanteoimporte== 0.00){pti_horas.david.replanteoimporte="";}
			if (pti_horas.esti.replanteoimporte== 0.00){pti_horas.esti.replanteoimporte="";}
			if (pti_horas.marcos.replanteoimporte== 0.00){pti_horas.marcos.replanteoimporte="";}
			if (pti_horas.markel.replanteoimporte== 0.00){pti_horas.markel.replanteoimporte="";}
			if (pti_horas.joanes.replanteoimporte== 0.00){pti_horas.joanes.replanteoimporte="";}
			if (pti_horas.ainhoa.replanteoimporte== 0.00){pti_horas.ainhoa.replanteoimporte="";}
			if (pti_horas.jose.replanteoimporte== 0.00){pti_horas.jose.replanteoimporte="";}
			if (pti_horas.andoni.replanteoimporte== 0.00){pti_horas.andoni.replanteoimporte="";}
			if (pti_horas.ziortza.replanteoimporte== 0.00){pti_horas.ziortza.replanteoimporte="";}
			if (pti_horas.cris.replanteoimporte== 0.00){pti_horas.cris.replanteoimporte="";}
			if (pti_horas.izaskun.replanteoimporte== 0.00){pti_horas.izaskun.replanteoimporte="";}
			if (pti_horas.andres.replanteoimporte== 0.00){pti_horas.andres.replanteoimporte="";}
			if (pti_horas.mikelrankin.replanteoimporte== 0.00){pti_horas.mikelrankin.replanteoimporte="";}
			if (pti_horas.erosdasilva.replanteoimporte== 0.00){pti_horas.erosdasilva.replanteoimporte="";}
			if (pti_horas.nataliagarcia.replanteoimporte== 0.00){pti_horas.nataliagarcia.replanteoimporte="";}
			if (pti_horas.nicolasmejia.replanteoimporte== 0.00){pti_horas.nicolasmejia.replanteoimporte="";}
			if (pti_horas.nerea.replanteoimporte== 0.00){pti_horas.nerea.replanteoimporte="";}
			if (pti_horas.ikervillar.replanteoimporte== 0.00){pti_horas.ikervillar.replanteoimporte="";}
			if (pti_horas.jontolosa.replanteoimporte== 0.00){pti_horas.jontolosa.replanteoimporte="";}
			if (pti_horas.leiremartin.replanteoimporte== 0.00){pti_horas.leiremartin.replanteoimporte="";}
			if (pti_horas.gorka.replanteoimporte== 0.00){pti_horas.gorka.replanteoimporte="";}
			if (pti_horas.mayra.replanteoimporte== 0.00){pti_horas.mayra.replanteoimporte="";}
			if (pti_horas.cristina.replanteoimporte== 0.00){pti_horas.cristina.replanteoimporte="";}
			if (pti_horas.inigo.replanteoimporte== 0.00){pti_horas.inigo.replanteoimporte="";}
			if (pti_horas.ana.replanteoimporte== 0.00){pti_horas.ana.replanteoimporte="";}
			if (pti_horas.inigoflorindo.replanteoimporte== 0.00){pti_horas.inigoflorindo.replanteoimporte="";}
			if (pti_horas.carolinauchuari.replanteoimporte== 0.00){pti_horas.carolinauchuari.replanteoimporte="";}
			if (pti_horas.alaitz.replanteoimporte== 0.00){pti_horas.alaitz.replanteoimporte="";}
			if (pti_horas.unai.replanteoimporte== 0.00){pti_horas.unai.replanteoimporte="";}
			if (pti_horas.eli.replanteoimporte== 0.00){pti_horas.eli.replanteoimporte="";}
			
			if (pti_horas.jon.delineacionimporte== 0.00){pti_horas.jon.delineacionimporte="";}
			if (pti_horas.oscar.delineacionimporte== 0.00){pti_horas.oscar.delineacionimporte="";}
			if (pti_horas.david.delineacionimporte== 0.00){pti_horas.david.delineacionimporte="";}
			if (pti_horas.esti.delineacionimporte== 0.00){pti_horas.esti.delineacionimporte="";}
			if (pti_horas.marcos.delineacionimporte== 0.00){pti_horas.marcos.delineacionimporte="";}
			if (pti_horas.markel.delineacionimporte== 0.00){pti_horas.markel.delineacionimporte="";}
			if (pti_horas.joanes.delineacionimporte== 0.00){pti_horas.joanes.delineacionimporte="";}
			if (pti_horas.ainhoa.delineacionimporte== 0.00){pti_horas.ainhoa.delineacionimporte="";}
			if (pti_horas.jose.delineacionimporte== 0.00){pti_horas.jose.delineacionimporte="";}
			if (pti_horas.andoni.delineacionimporte== 0.00){pti_horas.andoni.delineacionimporte="";}
			if (pti_horas.ziortza.delineacionimporte== 0.00){pti_horas.ziortza.delineacionimporte="";}
			if (pti_horas.cris.delineacionimporte== 0.00){pti_horas.cris.delineacionimporte="";}
			if (pti_horas.izaskun.delineacionimporte== 0.00){pti_horas.izaskun.delineacionimporte="";}
			if (pti_horas.andres.delineacionimporte== 0.00){pti_horas.andres.delineacionimporte="";}
			if (pti_horas.andres.delineacionimporte== 0.00){pti_horas.andres.delineacionimporte="";}
			if (pti_horas.erosdasilva.delineacionimporte== 0.00){pti_horas.erosdasilva.delineacionimporte="";}
			if (pti_horas.nataliagarcia.delineacionimporte== 0.00){pti_horas.nataliagarcia.delineacionimporte="";}
			if (pti_horas.nicolasmejia.delineacionimporte== 0.00){pti_horas.nicolasmejia.delineacionimporte="";}
			if (pti_horas.nerea.delineacionimporte== 0.00){pti_horas.nerea.delineacionimporte="";}
			if (pti_horas.ikervillar.delineacionimporte== 0.00){pti_horas.ikervillar.delineacionimporte="";}
			if (pti_horas.jontolosa.delineacionimporte== 0.00){pti_horas.jontolosa.delineacionimporte="";}
			if (pti_horas.leiremartin.delineacionimporte== 0.00){pti_horas.leiremartin.delineacionimporte="";}
			if (pti_horas.gorka.delineacionimporte== 0.00){pti_horas.gorka.delineacionimporte="";}
			if (pti_horas.mayra.delineacionimporte== 0.00){pti_horas.mayra.delineacionimporte="";}
			if (pti_horas.cristina.delineacionimporte== 0.00){pti_horas.cristina.delineacionimporte="";}
			if (pti_horas.inigo.delineacionimporte== 0.00){pti_horas.inigo.delineacionimporte="";}
			if (pti_horas.ana.delineacionimporte== 0.00){pti_horas.ana.delineacionimporte="";}
			if (pti_horas.inigoflorindo.delineacionimporte== 0.00){pti_horas.inigoflorindo.delineacionimporte="";}
			if (pti_horas.carolinauchuari.delineacionimporte== 0.00){pti_horas.carolinauchuari.delineacionimporte="";}
			if (pti_horas.alaitz.delineacionimporte== 0.00){pti_horas.alaitz.delineacionimporte="";}
			if (pti_horas.unai.delineacionimporte== 0.00){pti_horas.unai.delineacionimporte="";}
			if (pti_horas.eli.delineacionimporte== 0.00){pti_horas.eli.delineacionimporte="";}
			
			if (pti_horas.jon.calculoimporte== 0.00){pti_horas.jon.calculoimporte="";}
			if (pti_horas.oscar.calculoimporte== 0.00){pti_horas.oscar.calculoimporte="";}
			if (pti_horas.david.calculoimporte == 0.00){pti_horas.david.calculoimporte ="";}
			if (pti_horas.esti.calculoimporte == 0.00){pti_horas.esti.calculoimporte ="";}
			if (pti_horas.marcos.calculoimporte == 0.00){pti_horas.marcos.calculoimporte ="";}
			if (pti_horas.markel.calculoimporte == 0.00){pti_horas.markel.calculoimporte ="";}
			if (pti_horas.joanes.calculoimporte == 0.00){pti_horas.joanes.calculoimporte ="";}
			if (pti_horas.ainhoa.calculoimporte == 0.00){pti_horas.ainhoa.calculoimporte ="";}
			if (pti_horas.jose.calculoimporte == 0.00){pti_horas.jose.calculoimporte ="";}
			if (pti_horas.andoni.calculoimporte == 0.00){pti_horas.andoni.calculoimporte ="";}
			if (pti_horas.ziortza.calculoimporte == 0.00){pti_horas.ziortza.calculoimporte ="";}
			if (pti_horas.cris.calculoimporte == 0.00){pti_horas.cris.calculoimporte ="";}
			if (pti_horas.izaskun.calculoimporte == 0.00){pti_horas.izaskun.calculoimporte ="";}
			if (pti_horas.andres.calculoimporte == 0.00){pti_horas.andres.calculoimporte ="";}
			if (pti_horas.mikelrankin.calculoimporte == 0.00){pti_horas.mikelrankin.calculoimporte ="";}
			if (pti_horas.erosdasilva.calculoimporte == 0.00){pti_horas.erosdasilva.calculoimporte ="";}
			if (pti_horas.nataliagarcia.calculoimporte == 0.00){pti_horas.nataliagarcia.calculoimporte ="";}
			if (pti_horas.nicolasmejia.calculoimporte == 0.00){pti_horas.nicolasmejia.calculoimporte ="";}
			if (pti_horas.nerea.calculoimporte == 0.00){pti_horas.nerea.calculoimporte ="";}
			if (pti_horas.ikervillar.calculoimporte == 0.00){pti_horas.ikervillar.calculoimporte ="";}
			if (pti_horas.jontolosa.calculoimporte == 0.00){pti_horas.jontolosa.calculoimporte ="";}
			if (pti_horas.leiremartin.calculoimporte == 0.00){pti_horas.leiremartin.calculoimporte ="";}
			if (pti_horas.gorka.calculoimporte == 0.00){pti_horas.gorka.calculoimporte ="";}
			if (pti_horas.mayra.calculoimporte == 0.00){pti_horas.mayra.calculoimporte ="";}
			if (pti_horas.cristina.calculoimporte == 0.00){pti_horas.cristina.calculoimporte ="";}
			if (pti_horas.inigo.calculoimporte == 0.00){pti_horas.inigo.calculoimporte ="";}
			if (pti_horas.ana.calculoimporte == 0.00){pti_horas.ana.calculoimporte ="";}
			if (pti_horas.inigoflorindo.calculoimporte == 0.00){pti_horas.inigoflorindo.calculoimporte ="";}
			if (pti_horas.carolinauchuari.calculoimporte == 0.00){pti_horas.carolinauchuari.calculoimporte ="";}
			if (pti_horas.alaitz.calculoimporte == 0.00){pti_horas.alaitz.calculoimporte ="";}
			if (pti_horas.unai.calculoimporte == 0.00){pti_horas.unai.calculoimporte ="";}
			if (pti_horas.eli.calculoimporte == 0.00){pti_horas.eli.calculoimporte ="";}
			
			if (pti_horas.jon.revisionimporte == 0.00){pti_horas.jon.revisionimporte ="";}
			if (pti_horas.oscar.revisionimporte == 0.00){pti_horas.oscar.revisionimporte ="";}
			if (pti_horas.david.revisionimporte == 0.00){pti_horas.david.revisionimporte ="";}
			if (pti_horas.esti.revisionimporte == 0.00){pti_horas.esti.revisionimporte ="";}
			if (pti_horas.marcos.revisionimporte == 0.00){pti_horas.marcos.revisionimporte ="";}
			if (pti_horas.markel.revisionimporte == 0.00){pti_horas.markel.revisionimporte ="";}
			if (pti_horas.joanes.revisionimporte == 0.00){pti_horas.joanes.revisionimporte ="";}
			if (pti_horas.ainhoa.revisionimporte == 0.00){pti_horas.ainhoa.revisionimporte ="";}
			if (pti_horas.jose.revisionimporte == 0.00){pti_horas.jose.revisionimporte ="";}
			if (pti_horas.andoni.revisionimporte == 0.00){pti_horas.andoni.revisionimporte ="";}
			if (pti_horas.ziortza.revisionimporte == 0.00){pti_horas.ziortza.revisionimporte ="";}
			if (pti_horas.cris.revisionimporte == 0.00){pti_horas.cris.revisionimporte ="";}
			if (pti_horas.izaskun.revisionimporte == 0.00){pti_horas.izaskun.revisionimporte ="";}
			if (pti_horas.andres.revisionimporte == 0.00){pti_horas.andres.revisionimporte ="";}
			if (pti_horas.mikelrankin.revisionimporte == 0.00){pti_horas.mikelrankin.revisionimporte ="";}
			if (pti_horas.erosdasilva.revisionimporte == 0.00){pti_horas.erosdasilva.revisionimporte ="";}
			if (pti_horas.nataliagarcia.revisionimporte == 0.00){pti_horas.nataliagarcia.revisionimporte ="";}
			if (pti_horas.nicolasmejia.revisionimporte == 0.00){pti_horas.nicolasmejia.revisionimporte ="";}
			if (pti_horas.nerea.revisionimporte == 0.00){pti_horas.nerea.revisionimporte ="";}
			if (pti_horas.ikervillar.revisionimporte == 0.00){pti_horas.ikervillar.revisionimporte ="";}
			if (pti_horas.jontolosa.revisionimporte == 0.00){pti_horas.jontolosa.revisionimporte ="";}
			if (pti_horas.leiremartin.revisionimporte == 0.00){pti_horas.leiremartin.revisionimporte ="";}
			if (pti_horas.gorka.revisionimporte == 0.00){pti_horas.gorka.revisionimporte ="";}
			if (pti_horas.mayra.revisionimporte == 0.00){pti_horas.mayra.revisionimporte ="";}
			if (pti_horas.cristina.revisionimporte == 0.00){pti_horas.cristina.revisionimporte ="";}
			if (pti_horas.inigo.revisionimporte == 0.00){pti_horas.inigo.revisionimporte ="";}
			if (pti_horas.ana.revisionimporte == 0.00){pti_horas.ana.revisionimporte ="";}
			if (pti_horas.inigoflorindo.revisionimporte == 0.00){pti_horas.inigoflorindo.revisionimporte ="";}
			if (pti_horas.carolinauchuari.revisionimporte == 0.00){pti_horas.carolinauchuari.revisionimporte ="";}
			if (pti_horas.alaitz.revisionimporte == 0.00){pti_horas.alaitz.revisionimporte ="";}
			if (pti_horas.unai.revisionimporte == 0.00){pti_horas.unai.revisionimporte ="";}
			if (pti_horas.eli.revisionimporte == 0.00){pti_horas.eli.revisionimporte ="";}
			
			if (pti_horas.jon.modificacionimporte == 0.00){pti_horas.jon.modificacionimporte ="";}
			if (pti_horas.oscar.modificacionimporte == 0.00){pti_horas.oscar.modificacionimporte ="";}
			if (pti_horas.david.modificacionimporte == 0.00){pti_horas.david.modificacionimporte ="";}
			if (pti_horas.esti.modificacionimporte == 0.00){pti_horas.esti.modificacionimporte ="";}
			if (pti_horas.marcos.modificacionimporte == 0.00){pti_horas.marcos.modificacionimporte ="";}
			if (pti_horas.markel.modificacionimporte == 0.00){pti_horas.markel.modificacionimporte ="";}
			if (pti_horas.joanes.modificacionimporte == 0.00){pti_horas.joanes.modificacionimporte ="";}
			if (pti_horas.ainhoa.modificacionimporte == 0.00){pti_horas.ainhoa.modificacionimporte ="";}
			if (pti_horas.jose.modificacionimporte == 0.00){pti_horas.jose.modificacionimporte ="";}
			if (pti_horas.andoni.modificacionimporte == 0.00){pti_horas.andoni.modificacionimporte ="";}
			if (pti_horas.ziortza.modificacionimporte == 0.00){pti_horas.ziortza.modificacionimporte ="";}
			if (pti_horas.cris.modificacionimporte == 0.00){pti_horas.cris.modificacionimporte ="";}
			if (pti_horas.izaskun.modificacionimporte == 0.00){pti_horas.izaskun.modificacionimporte ="";}
			if (pti_horas.andres.modificacionimporte == 0.00){pti_horas.andres.modificacionimporte ="";}
			if (pti_horas.mikelrankin.modificacionimporte == 0.00){pti_horas.mikelrankin.modificacionimporte ="";}
			if (pti_horas.erosdasilva.modificacionimporte == 0.00){pti_horas.erosdasilva.modificacionimporte ="";}
			if (pti_horas.nataliagarcia.modificacionimporte == 0.00){pti_horas.nataliagarcia.modificacionimporte ="";}
			if (pti_horas.nicolasmejia.modificacionimporte == 0.00){pti_horas.nicolasmejia.modificacionimporte ="";}
			if (pti_horas.nerea.modificacionimporte == 0.00){pti_horas.nerea.modificacionimporte ="";}
			if (pti_horas.ikervillar.modificacionimporte == 0.00){pti_horas.ikervillar.modificacionimporte ="";}
			if (pti_horas.jontolosa.modificacionimporte == 0.00){pti_horas.jontolosa.modificacionimporte ="";}
			if (pti_horas.leiremartin.modificacionimporte == 0.00){pti_horas.leiremartin.modificacionimporte ="";}
			if (pti_horas.gorka.modificacionimporte == 0.00){pti_horas.gorka.modificacionimporte ="";}
			if (pti_horas.mayra.modificacionimporte == 0.00){pti_horas.mayra.modificacionimporte ="";}
			if (pti_horas.cristina.modificacionimporte == 0.00){pti_horas.cristina.modificacionimporte ="";}
			if (pti_horas.inigo.modificacionimporte == 0.00){pti_horas.inigo.modificacionimporte ="";}
			if (pti_horas.ana.modificacionimporte == 0.00){pti_horas.ana.modificacionimporte ="";}
			if (pti_horas.inigoflorindo.modificacionimporte == 0.00){pti_horas.inigoflorindo.modificacionimporte ="";}
			if (pti_horas.carolinauchuari.modificacionimporte == 0.00){pti_horas.carolinauchuari.modificacionimporte ="";}
			if (pti_horas.alaitz.modificacionimporte == 0.00){pti_horas.alaitz.modificacionimporte ="";}
			if (pti_horas.unai.modificacionimporte == 0.00){pti_horas.unai.modificacionimporte ="";}
			if (pti_horas.eli.modificacionimporte == 0.00){pti_horas.eli.modificacionimporte ="";}
			
			if (pti_horas.jon.asistenciaimporte == 0.00){pti_horas.jon.asistenciaimporte ="";}
			if (pti_horas.oscar.asistenciaimporte == 0.00){pti_horas.oscar.asistenciaimporte ="";}
			if (pti_horas.david.asistenciaimporte == 0.00){pti_horas.david.asistenciaimporte ="";}
			if (pti_horas.esti.asistenciaimporte == 0.00){pti_horas.esti.asistenciaimporte ="";}
			if (pti_horas.marcos.asistenciaimporte == 0.00){pti_horas.marcos.asistenciaimporte ="";}
			if (pti_horas.markel.asistenciaimporte == 0.00){pti_horas.markel.asistenciaimporte ="";}
			if (pti_horas.joanes.asistenciaimporte == 0.00){pti_horas.joanes.asistenciaimporte ="";}
			if (pti_horas.ainhoa.asistenciaimporte == 0.00){pti_horas.ainhoa.asistenciaimporte ="";}
			if (pti_horas.jose.asistenciaimporte == 0.00){pti_horas.jose.asistenciaimporte ="";}
			if (pti_horas.andoni.asistenciaimporte == 0.00){pti_horas.andoni.asistenciaimporte ="";}
			if (pti_horas.ziortza.asistenciaimporte == 0.00){pti_horas.ziortza.asistenciaimporte ="";}
			if (pti_horas.cris.asistenciaimporte == 0.00){pti_horas.cris.asistenciaimporte ="";}
			if (pti_horas.izaskun.asistenciaimporte == 0.00){pti_horas.izaskun.asistenciaimporte ="";}
			if (pti_horas.andres.asistenciaimporte == 0.00){pti_horas.andres.asistenciaimporte ="";}
			if (pti_horas.mikelrankin.asistenciaimporte == 0.00){pti_horas.mikelrankin.asistenciaimporte ="";}
			if (pti_horas.erosdasilva.asistenciaimporte == 0.00){pti_horas.erosdasilva.asistenciaimporte ="";}
			if (pti_horas.nataliagarcia.asistenciaimporte == 0.00){pti_horas.nataliagarcia.asistenciaimporte ="";}
			if (pti_horas.nicolasmejia.asistenciaimporte == 0.00){pti_horas.nicolasmejia.asistenciaimporte ="";}
			if (pti_horas.nerea.asistenciaimporte == 0.00){pti_horas.nerea.asistenciaimporte ="";}
			if (pti_horas.ikervillar.asistenciaimporte == 0.00){pti_horas.ikervillar.asistenciaimporte ="";}
			if (pti_horas.jontolosa.asistenciaimporte == 0.00){pti_horas.jontolosa.asistenciaimporte ="";}
			if (pti_horas.leiremartin.asistenciaimporte == 0.00){pti_horas.leiremartin.asistenciaimporte ="";}
			if (pti_horas.gorka.asistenciaimporte == 0.00){pti_horas.gorka.asistenciaimporte ="";}
			if (pti_horas.mayra.asistenciaimporte == 0.00){pti_horas.mayra.asistenciaimporte ="";}
			if (pti_horas.cristina.asistenciaimporte == 0.00){pti_horas.cristina.asistenciaimporte ="";}
			if (pti_horas.inigo.asistenciaimporte == 0.00){pti_horas.inigo.asistenciaimporte ="";}
			if (pti_horas.ana.asistenciaimporte == 0.00){pti_horas.ana.asistenciaimporte ="";}
			if (pti_horas.inigoflorindo.asistenciaimporte == 0.00){pti_horas.inigoflorindo.asistenciaimporte ="";}
			if (pti_horas.carolinauchuari.asistenciaimporte == 0.00){pti_horas.carolinauchuari.asistenciaimporte ="";}
			if (pti_horas.alaitz.asistenciaimporte == 0.00){pti_horas.alaitz.asistenciaimporte ="";}
			if (pti_horas.unai.asistenciaimporte == 0.00){pti_horas.unai.asistenciaimporte ="";}
			if (pti_horas.eli.asistenciaimporte == 0.00){pti_horas.eli.asistenciaimporte ="";}
			
			if (pti_horas.jon.medicionesimporte == 0.00){pti_horas.jon.medicionesimporte ="";}
			if (pti_horas.oscar.medicionesimporte == 0.00){pti_horas.oscar.medicionesimporte ="";}
			if (pti_horas.david.medicionesimporte == 0.00){pti_horas.david.medicionesimporte ="";}
			if (pti_horas.esti.medicionesimporte == 0.00){pti_horas.esti.medicionesimporte ="";}
			if (pti_horas.marcos.medicionesimporte == 0.00){pti_horas.marcos.medicionesimporte ="";}
			if (pti_horas.markel.medicionesimporte == 0.00){pti_horas.markel.medicionesimporte ="";}
			if (pti_horas.joanes.medicionesimporte == 0.00){pti_horas.joanes.medicionesimporte ="";}
			if (pti_horas.ainhoa.medicionesimporte == 0.00){pti_horas.ainhoa.medicionesimporte ="";}
			if (pti_horas.jose.medicionesimporte == 0.00){pti_horas.jose.medicionesimporte ="";}
			if (pti_horas.andoni.medicionesimporte == 0.00){pti_horas.andoni.medicionesimporte ="";}
			if (pti_horas.ziortza.medicionesimporte == 0.00){pti_horas.ziortza.medicionesimporte ="";}
			if (pti_horas.cris.medicionesimporte == 0.00){pti_horas.cris.medicionesimporte ="";}
			if (pti_horas.izaskun.medicionesimporte == 0.00){pti_horas.izaskun.medicionesimporte ="";}
			if (pti_horas.andres.medicionesimporte == 0.00){pti_horas.andres.medicionesimporte ="";}
			if (pti_horas.mikelrankin.medicionesimporte == 0.00){pti_horas.mikelrankin.medicionesimporte ="";}
			if (pti_horas.erosdasilva.medicionesimporte == 0.00){pti_horas.erosdasilva.medicionesimporte ="";}
			if (pti_horas.nataliagarcia.medicionesimporte == 0.00){pti_horas.nataliagarcia.medicionesimporte ="";}
			if (pti_horas.nicolasmejia.medicionesimporte == 0.00){pti_horas.nicolasmejia.medicionesimporte ="";}
			if (pti_horas.nerea.medicionesimporte == 0.00){pti_horas.nerea.medicionesimporte ="";}
			if (pti_horas.ikervillar.medicionesimporte == 0.00){pti_horas.ikervillar.medicionesimporte ="";}
			if (pti_horas.jontolosa.medicionesimporte == 0.00){pti_horas.jontolosa.medicionesimporte ="";}
			if (pti_horas.leiremartin.medicionesimporte == 0.00){pti_horas.leiremartin.medicionesimporte ="";}
			if (pti_horas.gorka.medicionesimporte == 0.00){pti_horas.gorka.medicionesimporte ="";}
			if (pti_horas.mayra.medicionesimporte == 0.00){pti_horas.mayra.medicionesimporte ="";}
			if (pti_horas.cristina.medicionesimporte == 0.00){pti_horas.cristina.medicionesimporte ="";}
			if (pti_horas.inigo.medicionesimporte == 0.00){pti_horas.inigo.medicionesimporte ="";}
			if (pti_horas.ana.medicionesimporte == 0.00){pti_horas.ana.medicionesimporte ="";}
			if (pti_horas.inigoflorindo.medicionesimporte == 0.00){pti_horas.inigoflorindo.medicionesimporte ="";}
			if (pti_horas.carolinauchuari.medicionesimporte == 0.00){pti_horas.carolinauchuari.medicionesimporte ="";}
			if (pti_horas.alaitz.medicionesimporte == 0.00){pti_horas.alaitz.medicionesimporte ="";}
			if (pti_horas.unai.medicionesimporte == 0.00){pti_horas.unai.medicionesimporte ="";}
			if (pti_horas.eli.medicionesimporte == 0.00){pti_horas.eli.medicionesimporte ="";}
			
			if (pti_horas.jon.otrosimporte == 0.00){pti_horas.jon.otrosimporte ="";}
			if (pti_horas.oscar.otrosimporte == 0.00){pti_horas.oscar.otrosimporte ="";}
			if (pti_horas.david.otrosimporte == 0.00){pti_horas.david.otrosimporte ="";}
			if (pti_horas.esti.otrosimporte == 0.00){pti_horas.esti.otrosimporte ="";}
			if (pti_horas.marcos.otrosimporte == 0.00){pti_horas.marcos.otrosimporte ="";}
			if (pti_horas.markel.otrosimporte == 0.00){pti_horas.markel.otrosimporte ="";}
			if (pti_horas.joanes.otrosimporte == 0.00){pti_horas.joanes.otrosimporte ="";}
			if (pti_horas.ainhoa.otrosimporte == 0.00){pti_horas.ainhoa.otrosimporte ="";}
			if (pti_horas.jose.otrosimporte == 0.00){pti_horas.jose.otrosimporte ="";}
			if (pti_horas.andoni.otrosimporte == 0.00){pti_horas.andoni.otrosimporte ="";}
			if (pti_horas.ziortza.otrosimporte == 0.00){pti_horas.ziortza.otrosimporte ="";}
			if (pti_horas.cris.otrosimporte == 0.00){pti_horas.cris.otrosimporte ="";}
			if (pti_horas.izaskun.otrosimporte == 0.00){pti_horas.izaskun.otrosimporte ="";}
			if (pti_horas.andres.otrosimporte == 0.00){pti_horas.andres.otrosimporte ="";}
			if (pti_horas.mikelrankin.otrosimporte == 0.00){pti_horas.mikelrankin.otrosimporte ="";}
			if (pti_horas.erosdasilva.otrosimporte == 0.00){pti_horas.erosdasilva.otrosimporte ="";}
			if (pti_horas.nataliagarcia.otrosimporte == 0.00){pti_horas.nataliagarcia.otrosimporte ="";}
			if (pti_horas.nicolasmejia.otrosimporte == 0.00){pti_horas.nicolasmejia.otrosimporte ="";}
			if (pti_horas.nerea.otrosimporte == 0.00){pti_horas.nerea.otrosimporte ="";}
			if (pti_horas.ikervillar.otrosimporte == 0.00){pti_horas.ikervillar.otrosimporte ="";}
			if (pti_horas.jontolosa.otrosimporte == 0.00){pti_horas.jontolosa.otrosimporte ="";}
			if (pti_horas.leiremartin.otrosimporte == 0.00){pti_horas.leiremartin.otrosimporte ="";}
			if (pti_horas.gorka.otrosimporte == 0.00){pti_horas.gorka.otrosimporte ="";}
			if (pti_horas.mayra.otrosimporte == 0.00){pti_horas.mayra.otrosimporte ="";}
			if (pti_horas.cristina.otrosimporte == 0.00){pti_horas.cristina.otrosimporte ="";}
			if (pti_horas.inigo.otrosimporte == 0.00){pti_horas.inigo.otrosimporte ="";}
			if (pti_horas.ana.otrosimporte == 0.00){pti_horas.ana.otrosimporte ="";}
			if (pti_horas.inigoflorindo.otrosimporte == 0.00){pti_horas.inigoflorindo.otrosimporte ="";}
			if (pti_horas.carolinauchuari.otrosimporte == 0.00){pti_horas.carolinauchuari.otrosimporte ="";}
			if (pti_horas.alaitz.otrosimporte == 0.00){pti_horas.alaitz.otrosimporte ="";}
			if (pti_horas.unai.otrosimporte == 0.00){pti_horas.unai.otrosimporte ="";}
			if (pti_horas.eli.otrosimporte == 0.00){pti_horas.eli.otrosimporte ="";}
			//////AQUI
			// pti_horas.jon.horastotal = pti_horas.jon.horastotal.toFixed(0);
			// pti_horas.oscar.horastotal = pti_horas.oscar.horastotal.toFixed(0);
			// pti_horas.david.horastotal = pti_horas.david.horastotal.toFixed(0);
			// pti_horas.esti.horastotal = pti_horas.esti.horastotal.toFixed(0);
			// pti_horas.marcos.horastotal = pti_horas.marcos.horastotal.toFixed(0);
			// pti_horas.markel.horastotal = pti_horas.markel.horastotal.toFixed(0);
			// pti_horas.joanes.horastotal = pti_horas.joanes.horastotal.toFixed(0);
			// pti_horas.ainhoa.horastotal = pti_horas.ainhoa.horastotal.toFixed(0);
			// pti_horas.jose.horastotal = pti_horas.jose.horastotal.toFixed(0);
			// pti_horas.andoni.horastotal = pti_horas.andoni.horastotal.toFixed(0);
			// pti_horas.ziortza.horastotal = pti_horas.ziortza.horastotal.toFixed(0);
			// pti_horas.unai.horastotal = pti_horas.unai.horastotal.toFixed(0);
			// pti_horas.eli.horastotal = pti_horas.eli.horastotal.toFixed(0);
			
			
			/////////////////////////////////////////////////////////////////////////////////////////////
			
			/////////////////////////////////////////////////////////////////////////////////////////////
			
			
			var fila = "filaimpar";
			//var arraydigitos = [];
			//var controldigitos = 0;
			for (i in pti_arraycosteusuarios) {
				switch (pti_arraycosteusuarios[i].usuario) {
					case "jon":
						//var horastotal = pti_horas.jon.replanteo + pti_horas.jon.delineacion + pti_horas.jon.calculo + pti_horas.jon.revision + pti_horas.jon.modificacion + pti_horas.jon.asistencia + pti_horas.jon.mediciones + pti_horas.jon.otros;
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.jon.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.jon.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>" + pti_horas.jon.replanteoporcentaje + "   </td>";
						var celdahorasdel = "<td>" + pti_horas.jon.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.jon.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.jon.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.jon.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.jon.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.jon.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.jon.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.jon.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.jon.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.jon.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.jon.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.jon.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.jon.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.jon.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.jon.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.jon.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.jon.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.jon.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.jon.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.jon.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.jon.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.jon.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.jon.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje + celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje + celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						 //arraydigitos.push(pti_horas.jon.horastotal.toString().length);
						 //console.log(pti_horas.jon.horastotal).length));
						 if (pti_horas.jon.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.jon.horastotal,"orden": 0,});
						 };
						break;
					case "oscar":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.oscar.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.oscar.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.oscar.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.oscar.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.oscar.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.oscar.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.oscar.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.oscar.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.oscar.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.oscar.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.oscar.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.oscar.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.oscar.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.oscar.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.oscar.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.oscar.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.oscar.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.oscar.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.oscar.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.oscar.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.oscar.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.oscar.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.oscar.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.oscar.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.oscar.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.oscar.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						// for (d in arraydigitos){
							// if (arraydigitos[d]=!pti_horas.oscar.horastotal.toString().length){
							// controldigitos = 1;
							// }
						// }
						// if (controldigitos = 1) {
							// arrayceldas.push({"celda": celdas,"horas": pti_horas.oscar.horastotal,"orden": 0,});
							// controldigitos = 0;
						// }
						 if (pti_horas.oscar.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.oscar.horastotal,"orden": 0,});
						 };
						 break;
					case "esti":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.esti.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.esti.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.esti.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.esti.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.esti.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.esti.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.esti.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.esti.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.esti.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.esti.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.esti.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.esti.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.esti.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.esti.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.esti.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.esti.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.esti.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.esti.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.esti.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.esti.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.esti.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.esti.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.esti.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.esti.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.esti.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.esti.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						// for (d in arraydigitos){
							// if (arraydigitos[d]=!pti_horas.esti.horastotal.toString().length){
							// controldigitos = 1;
							// }
						// }
						// if (controldigitos = 1) {
							// arrayceldas.push({"celda": celdas,"horas": pti_horas.esti.horastotal,"orden": 0,});
							// controldigitos = 0;
						// }
						 if (pti_horas.esti.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.esti.horastotal,"orden": 0,});
						 };
						 break;
					case "marcos":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.marcos.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.marcos.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.marcos.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.marcos.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.marcos.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>  " + pti_horas.marcos.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.marcos.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.marcos.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>  " + pti_horas.marcos.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.marcos.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.marcos.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td>  " + pti_horas.marcos.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.marcos.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.marcos.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td>  " + pti_horas.marcos.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.marcos.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.marcos.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td>  " + pti_horas.marcos.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.marcos.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.marcos.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td>  " + pti_horas.marcos.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.marcos.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.marcos.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td>  " + pti_horas.marcos.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.marcos.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.marcos.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						
						 if (pti_horas.marcos.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.marcos.horastotal,"orden": 0,});
						 };
						 break;
					case "markel":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.markel.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.markel.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>  " + pti_horas.markel.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.markel.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.markel.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.markel.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.markel.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.markel.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.markel.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.markel.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.markel.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.markel.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.markel.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.markel.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.markel.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.markel.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.markel.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.markel.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.markel.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.markel.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.markel.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.markel.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.markel.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.markel.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.markel.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.markel.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						
						 if (pti_horas.markel.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.markel.horastotal,"orden": 0,});
						 };
						 break;
					case "joanes":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.joanes.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.joanes.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.joanes.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.joanes.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.joanes.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>" + pti_horas.joanes.delineacionporcentaje + "  </td>";
						var celdacalculohoras = "<td>" + pti_horas.joanes.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.joanes.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.joanes.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.joanes.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.joanes.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.joanes.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.joanes.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.joanes.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.joanes.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.joanes.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.joanes.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.joanes.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.joanes.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.joanes.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.joanes.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.joanes.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.joanes.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.joanes.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.joanes.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.joanes.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.joanes.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.joanes.horastotal,"orden": 0,});
						 };
						 break;
					case "ainhoa":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.ainhoa.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.ainhoa.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.ainhoa.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.ainhoa.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.ainhoa.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.ainhoa.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.ainhoa.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.ainhoa.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.ainhoa.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.ainhoa.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.ainhoa.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.ainhoa.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.ainhoa.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.ainhoa.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.ainhoa.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.ainhoa.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.ainhoa.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.ainhoa.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.ainhoa.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.ainhoa.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.ainhoa.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.ainhoa.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.ainhoa.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.ainhoa.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.ainhoa.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.ainhoa.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.ainhoa.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.ainhoa.horastotal,"orden": 0,});
						 };
						 break;
					case "jose":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.jose.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.jose.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.jose.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.jose.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.jose.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>" + pti_horas.jose.delineacionporcentaje + "</td>";
						var celdacalculohoras = "<td>" + pti_horas.jose.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.jose.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.jose.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.jose.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.jose.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.jose.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.jose.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.jose.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.jose.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.jose.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.jose.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.jose.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.jose.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.jose.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.jose.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.jose.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.jose.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.jose.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.jose.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.jose.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+  celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.jose.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.jose.horastotal,"orden": 0,});
						 };
						 break;
					case "andoni":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.andoni.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.andoni.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.andoni.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.andoni.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.andoni.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.andoni.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.andoni.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.andoni.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td>" + pti_horas.andoni.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.andoni.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.andoni.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.andoni.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.andoni.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.andoni.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.andoni.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.andoni.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.andoni.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.andoni.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.andoni.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.andoni.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.andoni.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.andoni.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.andoni.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.andoni.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.andoni.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.andoni.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.andoni.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.andoni.horastotal,"orden": 0,});
						 };						 
						break;
					case "ziortza":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.ziortza.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.ziortza.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.ziortza.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.ziortza.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.ziortza.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.ziortza.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.ziortza.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.ziortza.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.ziortza.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.ziortza.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.ziortza.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.ziortza.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.ziortza.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.ziortza.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.ziortza.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.ziortza.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.ziortza.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.ziortza.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.ziortza.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.ziortza.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.ziortza.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.ziortza.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.ziortza.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.ziortza.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.ziortza.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.ziortza.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.ziortza.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.ziortza.horastotal,"orden": 0,});
						 };						 
						break;
					case "cris":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.cris.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.cris.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.cris.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.cris.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.cris.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.cris.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.cris.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.cris.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.cris.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.cris.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.cris.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.cris.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.cris.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.cris.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.cris.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.cris.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.cris.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.cris.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.cris.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.cris.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.cris.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.cris.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.cris.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.cris.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.cris.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.cris.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.cris.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.cris.horastotal,"orden": 0,});
						 };						 
						break;
					case "izaskun":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.izaskun.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.izaskun.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.izaskun.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.izaskun.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.izaskun.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.izaskun.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.izaskun.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.izaskun.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.izaskun.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.izaskun.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.izaskun.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.izaskun.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.izaskun.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.izaskun.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.izaskun.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.izaskun.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.izaskun.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.izaskun.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.izaskun.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.izaskun.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.izaskun.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.izaskun.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.izaskun.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.izaskun.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.izaskun.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.izaskun.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.izaskun.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.izaskun.horastotal,"orden": 0,});
						 };						 
						break;
					case "andres":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.andres.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.andres.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.andres.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.andres.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.andres.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.andres.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.andres.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.andres.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.andres.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.andres.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.andres.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.andres.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.andres.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.andres.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.andres.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.andres.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.andres.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.andres.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.andres.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.andres.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.andres.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.andres.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.andres.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.andres.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.andres.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.andres.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.andres.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.andres.horastotal,"orden": 0,});
						 };						 
						break;
					case "mikelrankin":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.mikelrankin.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.mikelrankin.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.mikelrankin.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.mikelrankin.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.mikelrankin.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.mikelrankin.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.mikelrankin.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.mikelrankin.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.mikelrankin.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.mikelrankin.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.mikelrankin.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.mikelrankin.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.mikelrankin.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.mikelrankin.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.mikelrankin.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.mikelrankin.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.mikelrankin.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.mikelrankin.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.mikelrankin.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.mikelrankin.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.mikelrankin.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.mikelrankin.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.mikelrankin.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.mikelrankin.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.mikelrankin.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.mikelrankin.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.mikelrankin.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.mikelrankin.horastotal,"orden": 0,});
						 };						 
						break;
						case "erosdasilva":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.erosdasilva.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.erosdasilva.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.erosdasilva.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.erosdasilva.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.erosdasilva.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.erosdasilva.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.erosdasilva.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.erosdasilva.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.erosdasilva.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.erosdasilva.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.erosdasilva.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.erosdasilva.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.erosdasilva.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.erosdasilva.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.erosdasilva.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.erosdasilva.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.erosdasilva.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.erosdasilva.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.erosdasilva.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.erosdasilva.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.erosdasilva.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.erosdasilva.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.erosdasilva.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.erosdasilva.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.erosdasilva.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.erosdasilva.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.erosdasilva.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.erosdasilva.horastotal,"orden": 0,});
						 };						 
						break;
						case "nataliagarcia":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.nataliagarcia.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.nataliagarcia.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.nataliagarcia.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.nataliagarcia.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.nataliagarcia.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.nataliagarcia.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.nataliagarcia.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.nataliagarcia.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.nataliagarcia.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.nataliagarcia.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.nataliagarcia.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.nataliagarcia.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.nataliagarcia.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.nataliagarcia.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.nataliagarcia.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.nataliagarcia.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.nataliagarcia.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.nataliagarcia.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.nataliagarcia.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.nataliagarcia.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.nataliagarcia.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.nataliagarcia.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.nataliagarcia.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.nataliagarcia.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.nataliagarcia.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.nataliagarcia.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.nataliagarcia.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.nataliagarcia.horastotal,"orden": 0,});
						 };						 
						break;
						case "nicolasmejia":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.nicolasmejia.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.nicolasmejia.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.nicolasmejia.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.nicolasmejia.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.nicolasmejia.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.nicolasmejia.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.nicolasmejia.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.nicolasmejia.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.nicolasmejia.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.nicolasmejia.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.nicolasmejia.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.nicolasmejia.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.nicolasmejia.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.nicolasmejia.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.nicolasmejia.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.nicolasmejia.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.nicolasmejia.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.nicolasmejia.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.nicolasmejia.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.nicolasmejia.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.nicolasmejia.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.nicolasmejia.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.nicolasmejia.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.nicolasmejia.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.nicolasmejia.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.nicolasmejia.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.nicolasmejia.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.nicolasmejia.horastotal,"orden": 0,});
						 };						 
						break;
						case "nerea":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.nerea.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.nerea.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.nerea.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.nerea.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.nerea.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.nerea.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.nerea.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.nerea.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.nerea.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.nerea.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.nerea.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.nerea.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.nerea.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.nerea.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.nerea.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.nerea.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.nerea.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.nerea.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.nerea.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.nerea.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.nerea.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.nerea.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.nerea.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.nerea.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.nerea.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.nerea.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.nerea.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.nerea.horastotal,"orden": 0,});
						 };						 
						break;
						case "ikervillar":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.ikervillar.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.ikervillar.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.ikervillar.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.ikervillar.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.ikervillar.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.ikervillar.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.ikervillar.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.ikervillar.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.ikervillar.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.ikervillar.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.ikervillar.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.ikervillar.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.ikervillar.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.ikervillar.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.ikervillar.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.ikervillar.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.ikervillar.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.ikervillar.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.ikervillar.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.ikervillar.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.ikervillar.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.ikervillar.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.ikervillar.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.ikervillar.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.ikervillar.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.ikervillar.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.ikervillar.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.ikervillar.horastotal,"orden": 0,});
						 };						 
						break;
						case "jontolosa":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.jontolosa.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.jontolosa.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.jontolosa.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.jontolosa.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.jontolosa.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.jontolosa.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.jontolosa.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.jontolosa.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.jontolosa.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.jontolosa.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.jontolosa.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.jontolosa.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.jontolosa.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.jontolosa.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.jontolosa.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.jontolosa.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.jontolosa.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.jontolosa.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.jontolosa.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.jontolosa.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.jontolosa.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.jontolosa.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.jontolosa.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.jontolosa.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.jontolosa.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.jontolosa.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.jontolosa.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.jontolosa.horastotal,"orden": 0,});
						 };						 
						break;
						case "leiremartin":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.leiremartin.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.leiremartin.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.leiremartin.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.leiremartin.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.leiremartin.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.leiremartin.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.leiremartin.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.leiremartin.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.leiremartin.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.leiremartin.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.leiremartin.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.leiremartin.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.leiremartin.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.leiremartin.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.leiremartin.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.leiremartin.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.leiremartin.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.leiremartin.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.leiremartin.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.leiremartin.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.leiremartin.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.leiremartin.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.leiremartin.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.leiremartin.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.leiremartin.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.leiremartin.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.leiremartin.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.leiremartin.horastotal,"orden": 0,});
						 };						 
						break;
						case "gorka":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.gorka.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.gorka.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.gorka.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.gorka.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.gorka.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.gorka.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.gorka.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.gorka.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.gorka.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.gorka.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.gorka.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.gorka.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.gorka.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.gorka.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.gorka.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.gorka.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.gorka.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.gorka.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.gorka.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.gorka.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.gorka.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.gorka.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.gorka.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.gorka.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.gorka.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.gorka.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.gorka.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.gorka.horastotal,"orden": 0,});
						 };						 
						break;
						case "mayra":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.mayra.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.mayra.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.mayra.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.mayra.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.mayra.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.mayra.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.mayra.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.mayra.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.mayra.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.mayra.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.mayra.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.mayra.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.mayra.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.mayra.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.mayra.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.mayra.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.mayra.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.mayra.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.mayra.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.mayra.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.mayra.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.mayra.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.mayra.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.mayra.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.mayra.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.mayra.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.mayra.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.mayra.horastotal,"orden": 0,});
						 };						 
						break;
						case "cristina":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.cristina.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.cristina.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.cristina.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.cristina.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.cristina.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.cristina.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.cristina.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.cristina.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.cristina.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.cristina.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.cristina.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.cristina.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.cristina.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.cristina.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.cristina.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.cristina.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.cristina.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.cristina.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.cristina.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.cristina.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.cristina.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.cristina.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.cristina.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.cristina.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.cristina.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.cristina.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.cristina.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.cristina.horastotal,"orden": 0,});
						 };						 
						break;
						
					case "inigo":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.inigo.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.inigo.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.inigo.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.inigo.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.inigo.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.inigo.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.inigo.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.inigo.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.inigo.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.inigo.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.inigo.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.inigo.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.inigo.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.inigo.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.inigo.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.inigo.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.inigo.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.inigo.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.inigo.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.inigo.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.inigo.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.inigo.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.inigo.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.inigo.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.inigo.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.inigo.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.inigo.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.inigo.horastotal,"orden": 0,});
						 };						 
						break;
					case "ana":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.ana.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.ana.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.ana.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.ana.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.ana.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.ana.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.ana.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.ana.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.ana.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.ana.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.ana.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.ana.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.ana.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.ana.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.ana.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.ana.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.ana.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.ana.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.ana.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.ana.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.ana.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.ana.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.ana.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.ana.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.ana.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.ana.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.ana.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.ana.horastotal,"orden": 0,});
						 };						 
						break;
					case "inigoflorindo":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.inigoflorindo.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.inigoflorindo.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.inigoflorindo.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.inigoflorindo.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.inigoflorindo.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.inigoflorindo.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.inigoflorindo.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.inigoflorindo.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.inigoflorindo.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.inigoflorindo.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.inigoflorindo.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.inigoflorindo.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.inigoflorindo.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.inigoflorindo.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.inigoflorindo.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.inigoflorindo.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.inigoflorindo.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.inigoflorindo.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.inigoflorindo.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.inigoflorindo.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.inigoflorindo.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.inigoflorindo.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.inigoflorindo.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.inigoflorindo.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.inigoflorindo.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.inigoflorindo.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.inigoflorindo.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.inigoflorindo.horastotal,"orden": 0,});
						 };						 
						break;
					case "carolinauchuari":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.carolinauchuari.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.carolinauchuari.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.carolinauchuari.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.carolinauchuari.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.carolinauchuari.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.carolinauchuari.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.carolinauchuari.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.carolinauchuari.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.carolinauchuari.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.carolinauchuari.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.carolinauchuari.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.carolinauchuari.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.carolinauchuari.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.carolinauchuari.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.carolinauchuari.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.carolinauchuari.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.carolinauchuari.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.carolinauchuari.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.carolinauchuari.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.carolinauchuari.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.carolinauchuari.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.carolinauchuari.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.carolinauchuari.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.carolinauchuari.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.carolinauchuari.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.carolinauchuari.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.carolinauchuari.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.carolinauchuari.horastotal,"orden": 0,});
						 };						 
						break;
					
					case "alaitz":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.alaitz.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.alaitz.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.alaitz.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.alaitz.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.alaitz.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.alaitz.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.alaitz.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.alaitz.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.alaitz.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.alaitz.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.alaitz.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.alaitz.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.alaitz.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.alaitz.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.alaitz.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.alaitz.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.alaitz.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.alaitz.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.alaitz.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.alaitz.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.alaitz.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.alaitz.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.alaitz.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.alaitz.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.alaitz.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.alaitz.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje + celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.alaitz.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.alaitz.horastotal,"orden": 0,});
						 };						 
						break;
					
					case "unai":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.unai.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.unai.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td> " + pti_horas.unai.replanteoporcentaje + " </td>";
						var celdahorasdel = "<td>" + pti_horas.unai.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.unai.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.unai.delineacionporcentaje + " </td>";
						var celdacalculohoras = "<td>" + pti_horas.unai.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.unai.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.unai.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.unai.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.unai.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.unai.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.unai.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.unai.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.unai.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.unai.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.unai.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.unai.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.unai.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.unai.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.unai.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.unai.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.unai.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.unai.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.unai.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.unai.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.unai.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.unai.horastotal,"orden": 0,});
						 };				 
						break;
					case "eli":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.eli.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.eli.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>" + pti_horas.eli.replanteoporcentaje + "  </td>";
						var celdahorasdel = "<td>" + pti_horas.eli.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.eli.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td>" + pti_horas.eli.delineacionporcentaje + "  </td>";
						var celdacalculohoras = "<td>" + pti_horas.eli.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.eli.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.eli.calculoporcentaje + " </td>";
						var celdarevisionhoras = "<td>" + pti_horas.eli.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.eli.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.eli.revisionporcentaje + " </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.eli.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.eli.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.eli.modificacionporcentaje + " </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.eli.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.eli.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.eli.asistenciaporcentaje + " </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.eli.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.eli.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.eli.medicionesporcentaje + " </td>";
						var celdaotroshoras = "<td>" + pti_horas.eli.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.eli.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.eli.otrosporcentaje + " </td>";
						var celdahorastotal = "<td>" + pti_horas.eli.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.eli.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.eli.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.eli.horastotal,"orden": 0,});
						 };				 
						break;
					case "david":
						var celdatrabajodiv = "<td> 00 </td>";
						var celdatrabajador = "<td>" + pti_arraycosteusuarios[i].usuario + "</td>";
						var celdareplanteohoras = "<td>" + pti_horas.david.replanteo + "</td>";
						var celdareplanteoimporte = "<td>" + pti_horas.david.replanteoimporte + "</td>";
						var celdareplanteoporcentaje = "<td>" + pti_horas.david.replanteoporcentaje + "  </td>";
						var celdahorasdel = "<td>" + pti_horas.david.delineacion + "</td>";
						var celdadelimporte = "<td>" + pti_horas.david.delineacionimporte + "</td>";
						var celdadelporcentaje = "<td> " + pti_horas.david.delineacionporcentaje + "  </td>";
						var celdacalculohoras = "<td>" + pti_horas.david.calculo + "</td>";
						var celdacalculoimporte = "<td>" + pti_horas.david.calculoimporte + "</td>";
						var celdacalculoporcentaje = "<td> " + pti_horas.david.calculoporcentaje + "  </td>";
						var celdarevisionhoras = "<td>" + pti_horas.david.revision + "</td>";
						var celdarevisionimporte = "<td>" + pti_horas.david.revisionimporte + "</td>";
						var celdarevisionporcentaje = "<td> " + pti_horas.david.revisionporcentaje + "  </td>";
						var celdamodificacionhoras = "<td>" + pti_horas.david.modificacion + "</td>";
						var celdamodificacionimporte = "<td>" + pti_horas.david.modificacionimporte + "</td>";
						var celdamodificacionporcentaje = "<td> " + pti_horas.david.modificacionporcentaje + "  </td>";
						var celdaasistenciahoras = "<td>" + pti_horas.david.asistencia + "</td>";
						var celdaasistenciaimporte = "<td>" + pti_horas.david.asistenciaimporte + "</td>";
						var celdaasistenciaporcentaje = "<td> " + pti_horas.david.asistenciaporcentaje + "  </td>";
						var celdamedicioneshoras = "<td>" + pti_horas.david.mediciones + "</td>";
						var celdamedicionesimporte = "<td>" + pti_horas.david.medicionesimporte + "</td>";
						var celdamedicionesporcentaje = "<td> " + pti_horas.david.medicionesporcentaje + "  </td>";
						var celdaotroshoras = "<td>" + pti_horas.david.otros + "</td>";
						var celdaotrosimporte = "<td>" + pti_horas.david.otrosimporte + "</td>";
						var celdaotrosporcentaje = "<td> " + pti_horas.david.otrosporcentaje + "  </td>";
						var celdahorastotal = "<td>" + pti_horas.david.horastotal+ "</td>";
						var celdaimportetotal = "<td>" + pti_horas.david.importetotal+ "</td>";
						var celdas = celdatrabajador + celdareplanteohoras + celdareplanteoimporte + celdareplanteoporcentaje + celdahorasdel + celdadelimporte + celdadelporcentaje + celdacalculohoras + celdacalculoimporte + celdacalculoporcentaje + celdarevisionhoras + celdarevisionimporte + celdarevisionporcentaje+ celdaasistenciahoras + celdaasistenciaimporte + celdaasistenciaporcentaje+ celdamedicioneshoras + celdamedicionesimporte + celdamedicionesporcentaje+ celdaotroshoras + celdaotrosimporte + celdaotrosporcentaje + celdahorastotal + celdaimportetotal ;
						//$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
						if (pti_horas.david.importetotal>0){
							 //$("#ptitable").append("<tr class=" + fila + ">" + celdas + "</tr>");
							 arrayceldas.push({"celda": celdas,"horas": pti_horas.david.horastotal,"orden": 0,});
						 };				 
										
						break;
					

				}
				

			}
			console.log(arrayceldas);
			
			//arraydigitos.push(arrayceldas[0].horas.toString().length);
			var horasmax;
			horasmax = arrayceldas[0].horas;
			for (i in arrayceldas){
				if (arrayceldas[i].horas>horasmax){
					horasmax = arrayceldas[i].horas
				}
				// console.log("celda" + i);
				// for (j in arraydigitos){
					// console.log("num" + j);
					// console.log(arrayceldas[i].horas);
					// console.log(arrayceldas[i].horas.toString().length);
					// console.log(arraydigitos[j]);
					// if (arrayceldas[i].horas.toString().length!==arraydigitos[j]){
						// controldigitos = arrayceldas[i].horas.toString().length.toString;
						// controldigitos = 1 + controldigitos;						
						// console.log("distinto");
					// }
				// }
				// if (controldigitos > 0){
					// arraydigitos.push(arraydigitos.push(controldigitos));
					// console.log("distinto");
					
				// }
				// controldigitos = 0;
				console.log(horasmax);
			}
			console.log(horasmax);
			//while (horasmax>0) {
				// for (i in arrayceldas){
					// if (arrayceldas[i].horas==horasmax){
					//$("#ptitable").append(arrayceldas[i].celda);
					// horasmax = horasmax -1;
					// }
				// }
				// console.log(horasmax);
			//}
			
			//console.log(arraydigitos);
			
			while (horasmax>0) {
				
				
				for (i in arrayceldas){
					//console.log(arrayceldas[i].horas);
					if (arrayceldas[i].horas==horasmax){
						console.log(arrayceldas[i].celda);
						$("#ptitable").append("<tr class=" + fila + ">" + arrayceldas[i].celda + "</tr>");
						//$("#ptitable").append(arrayceldas[i].celda);
					
					}
				}
				horasmax = horasmax -1;
			}
			
			$("#ptitable").append("<tr > <td class=\"titulofinal\">MANO DE OBRA INAK</td>" + celdatotalreplanteohoras + celdatotalreplanteoimporte +celdatotalreplanteoporcentaje + celdatotaldelineacionhoras + celdatotaldelineacionimporte +celdatotaldelineacionporcentaje+celdatotalcalculohoras + celdatotalcalculoimporte +celdatotalcalculoporcentaje+celdatotalrevisionhoras + celdatotalrevisionimporte +celdatotalrevisionporcentaje+celdatotalasistenciahoras + celdatotalasistenciaimporte +celdatotalasistenciaporcentaje+ celdatotalmedicioneshoras + celdatotalmedicionesimporte +celdatotalmedicionesporcentaje+celdatotalotroshoras + celdatotalotrosimporte +celdatotalotrosporcentaje+ celdatotalhoras + celdatotalimporte +"</tr>");
			$("#ptitable").append("<tr > <td class=\"titulofinal\">VARIOS</td>" + "<td></td>" + "<td></td>" +"<td></td>" + "<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+ "<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+ "<td ></td>" + "<td >" + importevarios + "</td>" +"</tr>");
			ptitotalimporte = parseFloat(ptitotalimporte) + parseFloat(importevarios);
			$("#ptitable").append("<td class=\"titulofinal\">" + "TOTAL" + "</td>"+ "<td></td>" + "<td></td>" +"<td></td>" + "<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+ "<td></td>" + "<td></td>" +"<td></td>"+"<td></td>" + "<td></td>" +"<td></td>"+ "<td ></td>" + "<td class=\"titulofinal\" >" + ptitotalimporte + "</td>");
			$("#alias").html(localStorage.getItem("alias").trim());
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
					///////////////////////////////////////////////////////
					console.log(pti_arrayhorastrabajo[0].usuario);
					console.log(pst_arraycosteusuariosxfecha);
					console.log(pst_arraycosteusuariosxfecha[1].usuario);
					console.log(pst_arraycosteusuariosxfecha[1].fechaini);
					for (i in pti_arrayhorastrabajo) {
												
						for (j in pst_arraycosteusuariosxfecha) {
							if (pst_arraycosteusuariosxfecha[j].fechafin=="0000-00-00"){
								////////////////////////////PONER FECHA DE HOY
							pst_arraycosteusuariosxfecha[j].fechafin = formatDate(Date());
						}
							
								if(pti_arrayhorastrabajo[i].fecha<=pst_arraycosteusuariosxfecha[j].fechafin && pti_arrayhorastrabajo[i].fecha>=pst_arraycosteusuariosxfecha[j].fechaini && pti_arrayhorastrabajo[i].usuario.trim()==pst_arraycosteusuariosxfecha[j].usuario.trim() ){
								pti_arrayhorastrabajo[i].coste=pst_arraycosteusuariosxfecha[j].coste;
								console.log(pti_arrayhorastrabajo[i].id," ",pti_arrayhorastrabajo[i].usuario," ", pti_arrayhorastrabajo[i].coste, " ",pti_arrayhorastrabajo[i].horas, " ", pti_arrayhorastrabajo[i].fecha, " ",pti_arrayhorastrabajo[i].proyecto, " ",pti_arrayhorastrabajo[i].fase );
								
								}								
						}
					}
					console.log(pst_arraycosteusuariosxfecha);
					console.log(pti_arrayhorastrabajo);
					///////////////////////////////////////////////////////
					var n = 0;
					for (i in pti_arrayhorastrabajo) {
						if (pti_arrayhorastrabajo[i].proyecto.trim() == localStorage.getItem("alias").trim()) {
							pti_arrayhorastrabajofiltro.push(pti_arrayhorastrabajo[i]);
							n = n + 1;
						}
					}
					var control = ""
					for (i in respuestahorastrabajo){
						control = control + " " + respuestahorastrabajo[i].id;
					};
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
					for (i in pti_arraytrabajosdiv) {
						var fechaini = pti_arraytrabajosdiv[i].fechaini;
						var fechafin = pti_arraytrabajosdiv[i].fechafin;
						var alias = localStorage.getItem("alias").trim();

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
							importevarios = pt_arraytrabajos[i].varios;
							
							
						}
					};
					websql.horastrabajo();
									
				}
			});
		},
		"costeusuarios" : function() {
			$.ajax({
				url : 'server/pst_costeusuarios.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},

				success : function(respuestacosteusuarios) {
					pti_arraycosteusuarios = respuestacosteusuarios;
					
					websql.costeusuariosxfecha();
					//websql.horastrabajo();
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
						for (j in pti_arraycosteusuarios) {
							if (pst_arraycosteusuariosxfecha[i].idusuario==pti_arraycosteusuarios[j].id){
								pst_arraycosteusuariosxfecha[i].usuario=pti_arraycosteusuarios[j].usuario;
								console.log(pti_arraycosteusuarios[j].usuario);
							}
						}
						
					}
					websql.trabajos();
					console.log(pst_arraycosteusuariosxfecha);
					console.log(pti_arraycosteusuarios);
					console.log("a");
				}
			});
		},
	};

	function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
	}
	console.log(localStorage.getItem("alias"));
	
	websql.costeusuarios();
	
	
	var pti_arrayhorastrabajo;
	var pti_arrayhorastrabajofiltro = [];
	var pti_arraytrabajosdiv;
	var pti_arrayusuarios;
	var pti_trabajosdiv;
	
	var pt_arraytrabajos;
	var codigoinak;
	var objetoceldas = {
		"celda": "",
		"importte": 0,
		"orden": 0,
	};
	
	var arrayceldas = [];
	var importevarios;
	
	// objetosceldas.push ({
		// "celda": "b",
		// "orden": 0,
	// });
	// objetosceldas.push ({
		// "celda": "a",
		// "orden": 0,
	// });
	
	// console.log(objetosceldas);
	// var numoc = 0;

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
		"ana" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"inigoflorindo" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"carolinauchuari" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"ziortza" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"cris" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"izaskun" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"andres" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"mikelrankin" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"erosdasilva" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"nataliagarcia" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"nicolasmejia" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"nerea" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"ikervillar" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"jontolosa" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"leiremartin" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"gorka" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"mayra" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"cristina" : {
			"delineacion" : 0,
			"replanteo" : 0
		},
		"inigo" : {
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
	var ptitotal = {
				"horas" : {
					"delineacion" : 0,
					"replanteo" : 0,
					"calculo" : 0,
					"revision" : 0,
					"asistencia": 0,
					"mediciones": 0,
					"otros": 0,
					"total": 0,
				},
				"importe" : {
					"delineacion" : 0,
					"replanteo" : 0,
					"calculo" : 0,
					"revision" : 0,
					"asistencia": 0,
					"mediciones": 0,
					"otros": 0,
					"total": 0,
				},
				"porcentaje" : {
					"delineacion" : 0,
					"replanteo" : 0,
					"calculo" : 0,
					"revision" : 0,
					"asistencia": 0,
					"mediciones": 0,
					"otros": 0,
					"total": 0,
				},
	};			
});
