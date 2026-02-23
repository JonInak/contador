//window.onload = function() {
//$(document).ready(function(){

$(document).delegate('#paglistadotrabajos', 'pagecreate', function() {
	var dom = {
		"listatrabajoscampos" : function(trabajocampo) {
			console.log(trabajocampo);
			$("#listatrabajoscampos ul").append("<li id=\"" + trabajocampo + "\" data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a  class=\"ui-link-inherit\">" + trabajocampo + "</a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");

			$("#" + trabajocampo).on("tap", function(event) {
				trabajoscamposeleccionado = trabajocampo;
				console.log(trabajoscamposeleccionado);
				if (trabajoscamposeleccionado == "ALIAS_INAK") {
					console.log("SI");
					websql.cargartrabajosporcampo();
				}

				$("#listatrabajoscampos h2 span span:nth-child(1)").html("Seleccionado: " + $("#" + trabajocampo).text() + "");
			});
		},
		"listatrabajosporcampo" : function(trabajosporcampo) {
			$("#listatrabajosporcampo ul").append("<li id=\"" + trabajosporcampo + "\" data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a  class=\"ui-link-inherit\">" + trabajosporcampo + "</a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");
			$("#" + trabajosporcampo).on("tap", function(event) {

			});
		},
	};

	var websql = {

		"cargartrabajoscampos" : function() {
			console.log("cargartrabajoscampos");
			$.ajax({
				url : 'php/trabajoscampos.php',
				//url : 'trabajoscampos.php',
				type : 'post',
				dataType : "json",
				beforeSend : function() {
					$("#msj").html("Calculando...");
				},
				success : function(responsetrabajoscampos) {
					console.log("estoy en ajax");
					console.log(responsetrabajoscampos);
					for (i in responsetrabajoscampos) {
						dom.listatrabajoscampos(responsetrabajoscampos[i]);
						//console.log(responsetrabajoscampos[i]);
					}
				}
			});
		},
		"cargartrabajosporcampo" : function() {
			console.log("cargartrabajosporcampo");
			$.ajax({
				url : 'php/trabajosporcampo.php',
				type : 'post',
				dataType : "json",
				data : {
					"trabajoscamposeleccionado" : trabajoscamposeleccionado
				},
				beforeSend : function() {

				},
				success : function(responsetrabajosporcampo) {
					console.log("success");
					for (i in responsetrabajosporcampo) {
						dom.listatrabajosporcampo(responsetrabajosporcampo[i]);
						console.log(responsetrabajosporcampo[i]);

					}
				}
			});
		},
	};
	var trabajoscamposeleccionado;
	websql.cargartrabajoscampos();

});

