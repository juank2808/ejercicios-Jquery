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
    var cuadroEntrada;
    
    $("#c1").hover(function() {
        $("#c1").text("Cuadro1");
        console.log("has entrado por Cuadro"+cuadroEntrada);
        cuadroEntrada=1;
    });
    $("#c2").hover(function() {
        $("#c2").text("Cuadro2")
        console.log("has entrado por Cuadro"+cuadroEntrada);
        cuadroEntrada=2;
    });
    $("#c3").hover(function() {
        $("#c3").text("Cuadro3");
        console.log("has entrado por Cuadro"+cuadroEntrada);
        cuadroEntrada=3;
    });
    $("#c4").hover(function() {
        $("#c4").text("Cuadro4") ;
        console.log("has entrado por Cuadro"+cuadroEntrada);
        cuadroEntrada=4;
    });
    $("#c4, #c3,#c2,#c1").mouseout(function(){
        $(this).html("");
                   
    });
/**PUNTO 5**/
    
   $("#pedir").click(function(){
        $("#cafe").prop("checked", true);
    });
     $("input").click(function(){
      $("span").css('font-style','normal');   
        if(this.checked){
        $(this).next().css('font-style','italic');                        
        }
        
  });             
 /**PUNTO 6**/
    
 
     $('textarea').keyup(function(){
   
          var cont=0; 
          var pal = $(this).val();
          pal=pal.split("");
            for(var i in pal){
               if ((pal[i]=="a") || (pal[i]=="e") || (pal[i]=="i") || (pal[i]=="o") || (pal[i]=="u")){
                cont++;
                }
            }
                if(cont%2==0){
                  $("textarea").css('background-color','#99ddff');
                   }else{
                      $("textarea").css('background-color','#ff6600'); 
                    }  
                console.log(cont);    
                });
            
        
    
}); 