$(document).ready(function(){
    $("#enviar").click(function(envio){
        envio.preventDefault();
        var nombre =$("nombre").val();
        var email = $("email").val();
        var coment = $("comentario").val();
        
         var datos = {n: nombre,e: email,m: coment};
       
        alert("comentario publicado");
    });
    $.ajax({
          url : "6.1.php",
          type: "POST",
          data :  datos,
          success: function(respuesta){
           alert(respuesta);
          }});
         console.log(nombre+ email + comentario);
    
});