$(document).ready(function(){
    $("#enviar").click(function(e){
        e.preventDefault();
        var numero = $('#operador').val();
        var numero1 =$('#operando').val()
        var signos = $('#signos').val();
        var resultado = $('#resultado');
        var datos = {n: numero,m: numero1,s: signos};
    $.ajax({
      url : "6.2.php",
      type: "POST",
      data :  datos,
      success: function(respuesta){
      resultado.html(respuesta);
      }
    });
   });   
});          