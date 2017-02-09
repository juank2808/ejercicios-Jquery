$(document).ready(function(){
    
/** PUNTO 1**/
    //punto 1.1
    $("#p1").click(function(){
        $("#p1").remove();
    });
     $("#p2").click(function(){
        $("#p2").remove();
    });
    //punto 1.2
    $(".mcolor").hover(function(){
        $(".mcolor").css({"color":"blue"});
    });
    $(".mtamano").hover(function(){
        $(".mtamano").css({"font-size":"10em"});
    })
    //punto 1.3
    $("a").click(function(){
        alert("Enlace Malo");
    });
    //punto 1.4
    $(".borra1").click(function() {
         $(".borra1").text("BORRADO!!");
    });
    $(".borra2").click(function() {
         $(".borra2").text("BORRADO!!");
    });
    $(".borra3").click(function() {
         $(".borra3").text("BORRADO!!");
    });
/** PUNTO 2**/
    $("#parra1").click(function(){
        $(".in1").css({"border-color":"red"});
        $("#parra1").css({"background-color":"blue"});
    })
    $("#parra1").click(function(){
        $(".in2").css({"border-color":"red"});
        $("#parra1").css({"background-color":"blue"});
    });
    $("#parra1").click(function(){
        $(".in3").css({"border-color":"red"});
        $("#parra1").css({"background-color":"blue"});
    });
      $("#parra2").click(function(){
        $(".in4").css({"border-color":"red"});
        $("#parra2").css({"background-color":"blue"});
    });
      $("#parra2").click(function(){
        $(".in5").css({"border-color":"red"});
        $("#parra2").css({"background-color":"blue"});
    });
      $("#parra2").click(function(){
        $(".in6").css({"border-color":"red"});
        $("#parra2").css({"background-color":"blue"});
    });
/** PUNTO 3**/
   $('img').bind('contextmenu', function(e) {
	// evito que se ejecute el evento
    	e.preventDefault();
    	alert("acción prohibida");
	// conjunto de acciones a realizar
	});
	$("#proh").click(function() {
	 alert("acción prohibida");
	});
/**PUNTO 4**/
    $("#c1").hover(function() {
        $("#c1").text("Cuadro1");
    },function(){
        $("#c1").text("");
    });
    $("#c2").hover(function() {
       
        $("#c2").text("Cuadro2") 
    },function(){
        $("#c2").text("");
    });
    $("#c3").hover(function() {
        $("#c3").text("Cuadro3");
    },function(){
        $("#c3").text("");
    });
    $("#c4").hover(function() {
        $("#c4").text("Cuadro4") ;
    },function(){
        $("#c4").text("");
    });
}); 