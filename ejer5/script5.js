$(document).ready(function(){
AmplCuad = false;
    $('div').click(function(){
        if(!AmplCuad){
            $(this).animate({
               width: "200px",
               height: "200px"
            }, 500);
            AmplCuad = true;
            $(this).addClass('mover grande');
        } else {
            $('div').filter('.grande').animate({
               width: "150px",
               height: "150px"
            }, 500);
            $('div').filter('.grande').removeClass('mover');
            $('div').filter('.grande').removeClass('grande');
            $(this).animate({
               width: "200px",
               height: "200px"
            }, 500);
            $(this).addClass('grande mover');
            
            
        }
    });
    
    $('div').dblclick(function(){
        var self = $(this);
        self.fadeOut(500);
        setTimeout(function(){
            self.css('background-color', '#0d47a1');
        }, 500);
        self.fadeIn('slow');
    });
    
    $(document).keydown(function(e){
        
        e.preventDefault();
        
        var cuadro = $('.mover');
        
            switch(e.which) {
                case 37:
                   // izquerda
                   cuadro.animate({
                       marginLeft: "-=10px"
                   });
                   console.log('izq');
                   break;
                case 38:
                   // arriba
                   cuadro.animate({
                       marginTop: "-=10px"
                   });
                   console.log('arriba');
                   break;
                case 39:
                   // derecha
                   cuadro.animate({
                       marginLeft: "+=10px"
                   });
                   console.log('der');
                   break;
                case 40:
                   // abajo
                   cuadro.animate({
                       marginTop: "+=10px"
                   });
                   console.log('abajo');
                   break;
               
               default: return;
            }
    });
});