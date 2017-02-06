$(document).ready(function(){
    // $('#zona_vip').each(function(){
    //     $('#row_1').css({"color":"blue"});
    //     console.log("Los Vip son de color azul");
    // });
    
     $('#zona_popular').each(function(){
        $('#row_2').css({"color":"green"});
        $('#row_3').css({"color":"green"});
        $('#row_4').css({"color":"green"});
        console.log("");
    });
    var listVip = $('#row_1');
    
    $('#zona_vip').each(function(){
        for(var i=0;i<6;i++){
            listVip.html("<li>FILA Completa<ul><li>asiento 1-"+[i-4]+"</li>"+"<li>asiento 1-"+[i-3]+"<li>asiento 1-"+[i-2]+"<li>asiento 1-"+[i-1]+"<li>asiento 1-"+[i]+"</li>"+"</ul></li>");
        }
        console.log('Filas Ocupadas en rojo')
        $('#row_1').css({"color":"red"});
   
    });
    $('#zona_popular').each(function() {
        console.log($("#row_2").val()+ $("#row_3").val()+ $("#row_4").val()+"Filas libres DE verde");
    })
    $("#asientos").each(function() {
        $("#row_1").find("li").filter(":odd").css({"color":"blue"});
        $("#row_2, #row_3, #row_4, #row_5").find("li").filter(":odd").css({"color":"blue"});
    });
    
    $("#row_4").after("<li id='row_5'>FILA Libre <ul><li>asiento 5-1</li><li>asiento 5-2</li><li>asiento 5-3</li><li>asiento 5-4</li><li>asiento 5-5</li></li>");
        
    console.log("fila 5 creada es la que aparece en negro");
});