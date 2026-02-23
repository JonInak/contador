$(document).delegate('#pst', 'pagecreate', function() {
	var websql = {
		"validacionadmin" : function(){
			$.ajax({
				url : 'conexion_admin.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(respuestatrabajos) {
					console.log("SUCCESS");
					//pst_arraytrabajos = respuestatrabajos;
					//console.log(pst_arraytrabajos);
					//websql.horastrabajo();

				}
			});
		},
	};
});
