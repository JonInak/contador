var c="";
$(document).delegate('#pv', 'pagecreate', function() {
	$("#enviarveri").on("tap", function(){
		if ($("#pvp").val()== "502657"){
			c = "SI";
			//$.mobile.changePage("#pst");
			//window.location.href = "http://192.168.0.29/inakapp/pst.php";
			//$.mobile.changePage("http://localhost/inakapp/pst.php");
		}else{
			c = "NO";
		}
	});
	if (c == "SI"){
		window.location.href = "pstdos.php";
	}
	if (c == "NO"){
		window.location.href = "p_v.php";
	}
});


