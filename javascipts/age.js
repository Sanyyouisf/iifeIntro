 var SolarSystem = (function (oldsolarsystem){
 	var age =0;

 	oldsolarsystem.getSolarSystemAge = function(){
			return age;
		};

	oldsolarsystem.setSolarSystemAge = function(){
			age ++;
		};
	return oldsolarsystem ; 
 })(SolarSystem || {});