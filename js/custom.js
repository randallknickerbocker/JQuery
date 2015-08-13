$(document).ready(function(){

	var isLightOn= true;

	$("#lightSwitch").click(function(){
         flipTheLightSwitch();
	});


	function flipTheLightSwitch(){
       if(isLightOn){

       	   $("body").css("background","black");
           $("#lightSwitch").val("Turn Light On");
           $("#square").fadeOut(4000);
            isLightOn= false;
       }else{
           
           $("body").css("background","yellow")
           $("#lightSwitch").val("Turn Light Off");
           $("#square").fadeIn(4000);
           isLightOn=true;
       }
    }
 
});