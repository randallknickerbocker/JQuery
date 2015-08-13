$(document).ready(function(){

	var isLightOn= true;

	$("#lightSwitch").click(function(){
         flipTheLightSwitch();
	});


	function flipTheLightSwitch(){
       if(isLightOn){

       	   $("body").css("background","black");
       
            isLightOn= false;
       }else{
           
           $("body").css("background","yellow")
           isLightOn=true;
       }
    }
 });