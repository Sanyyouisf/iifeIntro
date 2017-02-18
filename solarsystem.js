var SolarSystem = (function (){
	
	var planets = ["mercury","venus","earth","marth","jupiter","uranus","neptune"];
	var dwarfPlanets = ["pluto"];
	var numPlanetsPeopleLandOn=0;
	var spaceShips= [];
	var stars =["sun","Alpha centauri","wolf 359"];
	var age =0;
	return {
		gerPlanets: function(){		
			return planets;
		},
		getPlanetsLandedOn : function(){
			return numPlanetsPeopleLandOn;
		},
		setPlanetsLandedOn : function(){
			numPlanetsPeopleLandOn ++;
		},
		getspaceShips : function(){
			return spaceShips;
		},
		setspaceShips : function(newSpaceShip){
			spaceShips.push(newSpaceShip);
		},
		wreckSpaceShip :function(){
			spaceShips.pop(); //take the lase object
		},
		getDwarfPlanets : function(){
			return "they are rejects";
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		grtSrats : function(){
			return stars;
		},
		setStars : function(newStar){
			stars.push(newStar);
		},
		getSolarSystemAge : function(){
			return age;
		},
		setSolarSystemAge : function(){
			age ++;
		}
	}

})();

console.log (" planets: ", SolarSystem.gerPlanets());
console.log (" planets with people: ", SolarSystem.getPlanetsLandedOn());
console.log(" spaceShips: ",SolarSystem.getspaceShips());

SolarSystem.setspaceShips("voyger1")
SolarSystem.setspaceShips("voyger2")
SolarSystem.setspaceShips("Gemini")
SolarSystem.setspaceShips("Appollo")
console.log(" spaceShips: ",SolarSystem.getspaceShips());






