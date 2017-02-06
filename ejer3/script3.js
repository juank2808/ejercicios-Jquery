$(document).ready(function(){
   $("i").text("815 Oceanic");
   console.log("Vuelo 815 Oceanic añadido");
   
   var hora;
   var puerta;
   var destino;
   
   hora=$("#time").find("th").text("Hora: "+"Sin Asignar");
   puerta=$("#gate").find("th").text("Puerta: "+"Sin Asignar");
   destino=$("#arrives").find("th").text("Destino: "+"Sin Asignar");
   
   console.log("Elementos puestos 'sin asignar'");
   
});