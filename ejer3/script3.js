$(document).ready(function(){
   $("i").text("815 Oceanic");
   console.log("Vuelo 815 Oceanic añadido");
   
   
   var $hora = new Date();
   var puerta;
   var destino;
   
   
   
   hora=$("#time").find("th").text("Hora: "+"Sin Asignar");
   puerta=$("#gate").find("th").text("Puerta: "+"Sin Asignar");
   destino=$("#arrives").find("th").text("Destino: "+"Sin Asignar");
   
   console.log("Elementos puestos 'sin asignar'");
   
 $("h2").eq(0).text("Logistica ("+$hora.getHours()+":"+$hora.getMinutes()+")");
  
 $("h2").eq(1).text("Pasajeros ("+$hora.getHours()+":"+$hora.getMinutes()+")");
   
   console.log("Horas a Logistica y pasajeros Asignadas");
   $("li").eq(1).addClass("Embarcados");
   $("li").eq(4).addClass("Embarcados");
   $("li").eq(6).addClass("noEmbarcan");
   
   $("li").eq(0).addClass("Pendientes");
   $("li").eq(3).addClass("Pendientes");
   $("li").eq(7).addClass("Pendientes");
   
   $("li").eq(2).addClass("Pendientes");
   $("li").eq(5).addClass("Pendientes");
  
   $(".Embarcados").css({"color":"gold"});
   $(".Pendientes").css({"color":"gold"});
   $(".noEmbarcan").css({"color":"red"});
   
   
   
   console.log("1º Color Amarillo Embarcados");
   console.log("2º Color Azul Pendientes");
   console.log("3º Color Rojo No han embarcado");
    
   console.log("los nombres que no empiezan por j no estan embarcadoa(no hubo necesidad de hacer algo");
   
   hora=$("#time").find("th").text("Hora: "+$hora.getHours()+" : "+$hora.getMinutes()+"");
   puerta=$("#gate").find("th").text("Puerta: "+"C-3");
   destino=$("#arrives").find("th").text("Destino: "+"Bogotá - Colombia");
   console.log("En el ultimo ejercicio lo que hice fue cambiarle la clase a charlie y a la clase pendientes ponerles el cologr de embarque")
}); 