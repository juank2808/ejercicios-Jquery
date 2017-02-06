$(document).ready(function(){

    console.log(" div con la clase module"+$('div .module').size());
    console.log(" label de los form"+$('label').size());
    console.log(" imagenes con atributo alt: "+$('[alt]').size());
    console.log(" elementos impares de la tabla: "+$("tr:odd").size());
    
    $("tr:odd").css({
        "color":"blue"
    })
    console.log( "Elementos de la tabla Seleccionados");
    //borrar el from sin selecciner el mismo
    //$("[method]").remove();
    console.log(" elemento borrado (method) (el codigo esta comentado )");
    
    $("#myList").find(".current").removeClass("current");
    console.log(" clase current borrada");
    $("ul#myList li").eq(5).addClass("current");
    console.log(" clase current creada");
    $("#myList ").append("<li>clonado/creado</li>");
    console.log(" elemento creado/clonado");
    $("ul#slideshow li").eq(0).addClass("current disabled");
    console.log(" Elento 1 de la lista del id slideshow seleccionado, clases current y desabled añadidas");
    for(var i=0; i<5;i++){
        $("#myList").append("<li style='color:blue'>clonado/creado</li>");    
    }
    console.log(" Cinco elementos creados");
    
   $("ul#myList li:odd").remove();
   console.log("Elementos impares de la isla #myList borrados");
   
   $("div .module").eq(1).append("<h2>Elemento creado</h2><p>ELemento creado</p>")
   console.log("Elemepntos h2 y p creados despues del ultimo div con clase module");
   
   $("form ul li select").append("<option>Wednesday</option>")
   console.log("nueva etiqueta option añadida con Wednesday");
   
   $("#main").append("<div class='module'><img src='imgs/fruit.jpg'><img src='imgs/vegetable.jpg'><img src='imgs/bread.jpg'><div>");
   
    console.log("div con clase module creados");
});