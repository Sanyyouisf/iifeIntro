var SolarSystem = (function(oldsolarsystem){

	var spaceShips= [];

	oldsolarsystem.getspaceShips = function(){
			return spaceShips;
		};

	oldsolarsystem.setspaceShips = function(newSpaceShip){
			spaceShips.push(newSpaceShip);
		};

	oldsolarsystem.wreckSpaceShip = function(){
			spaceShips.pop(); //take the lase object
		};

	return oldsolarsystem ;
})(SolarSystem || {}); // if the SolarSystem donot giv error 