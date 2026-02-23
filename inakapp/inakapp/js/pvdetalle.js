var c="";
$(document).delegate('#pvdetalle', 'pagecreate', function() {
	$("#enviarveri").on("tap", function(){
		if ($("#pvp").val()== "502657"){
			c = "SI";
			//$.mobile.changePage("#pst");
			//window.location.href = "http://192.168.0.29/inakapp/pst.php";
			//$.mobile.changePage("http://localhost/inakapp/pst.php");
			console.log('a');
		}else{
			c = "NO";
			console.log('b');
		}
	});
	if (c == "SI"){
		window.location.href = "pstdosdetalle.php";
	}
	if (c == "NO"){
		window.location.href = "p_vdetalle.php";
	}
});


