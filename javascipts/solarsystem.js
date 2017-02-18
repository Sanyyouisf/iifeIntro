var SolarSystem = (function (){
	
	var planets = ["mercury","venus","earth","marth","jupiter","uranus","neptune"];
	var dwarfPlanets = ["pluto"];
	var numPlanetsPeopleLandOn=0;

	return {
		getPlanets: function(){		
			return planets;
		},
		getPlanetsLandedOn : function(){
			return numPlanetsPeopleLandOn;
		},
		setPlanetsLandedOn : function(){
			numPlanetsPeopleLandOn ++;
		},
		getDwarfPlanets : function(){
			return "they are rejects";
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
	}

})();

// console.log (" planets: ", SolarSystem.gerPlanets());
// console.log (" planets with people: ", SolarSystem.getPlanetsLandedOn());
// console.log(" spaceShips: ",SolarSystem.getspaceShips());

// SolarSystem.setspaceShips("voyger1")
// SolarSystem.setspaceShips("voyger2")
// SolarSystem.setspaceShips("Gemini")
// SolarSystem.setspaceShips("Appollo")
// console.log(" spaceShips: ",SolarSystem.getspaceShips());






