var SolarSystem = (function (oldsolarsystem){
 	var planets = ["mercury","venus","earth","marth","jupiter","uranus","neptune"];
 	var numPlanetsPeopleLandOn=0;

 	
		oldsolarsystem.getPlanets= function(){		
			return planets;
		};

		oldsolarsystem.getPlanetsLandedOn = function(){
			return numPlanetsPeopleLandOn;
		};

		oldsolarsystem.setPlanetsLandedOn = function(){
			numPlanetsPeopleLandOn ++;
		}

	return oldsolarsystem ; 
 })(SolarSystem || {});