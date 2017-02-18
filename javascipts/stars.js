var SolarSystem = (function (oldsolarsystem){
 	var stars =["sun","Alpha centauri","wolf 359"];

 	oldsolarsystem.getSrats = function(){
			return stars;
		};
		oldsolarsystem.setStars = function(newStar){
			stars.push(newStar);
		};
	return oldsolarsystem ; 
 })(SolarSystem || {});