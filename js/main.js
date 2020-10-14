jQuery(document).ready(function(){

 "use strict"
    $('.slider').ripples({
        dropRadius: 12,
        perturbance: 0.0,
        
    });

    

    $(window).scroll(function(){
        
        var top =$(window).scrollTop();
         if(top>=20){
           $("nav").add('secondary'); 
         }
         
         else 
             if($("nav").hasClass('secondary')){
                 $("nav").removeClass('secondary'); 
             }
     });

     $("#doc-members").owlCarousel({
       
            
     });
});