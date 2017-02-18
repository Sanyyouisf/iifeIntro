console.log("hello");

var outside = "global";
function scopestuff(){
	var inside = "local";
// 	console.log("outside from inside function" , outside); // global
// 	console.log("inside from inside function" , inside);   //local
}
// 	console.log("outside from inside function" , outside); // global
	// console.log("inside from inside function" , inside);  //undefined

	// scopestuff();


	var global_base= 500;
	(function throwAway (){
		global_base+=500;
		console.log(global_base);
	})();   //these pranteses () make the function run 
	 // throwAway();

	 var cats = (function(){
	 	var color = "black";
	 	var type = "tigher";
	 	return {		//it can return object
	 		getColor : function(){	//inside an object the = become : 
	 			return color;		// this is a get function 
	 		},						// , to add more than one object
	 		getType : function(){	//the variable inside return is hidden . 
	 			return type;

	 		},
	 		setColor : function(newColor){
	 			color = newColor;
	 		}
	 	}
	 })();

	 // console.log(cats);// return the object itself withe two functions 
	 // console.log(cats.getColor()); // return the color








	 // var dogs = (function(){
	 // 	var color = "black";
	 // 	var type = "blady";
	 // 	var name = "mohamed";
	 // 	return {
	 // 		getColorDog : function (){
	 // 			return color;
	 // 		},
	 // 		getTypeDog : function (){
	 // 			return type;
	 // 		},
	 // 		getNameDog : function(){
	 // 			return name;
	 // 		},
	 // 		setNameDog : function(x){
	 // 			name = x;
	 // 		}
	 		
	 // 	}
	 // })();

// document.write(dogs.getColorDog());
// document.write(dogs.getTypeDog());
// document.write(dogs.getNameDog());
// console.log(dogs.getNameDog());

// 	var cars = (function(){
// 		var color = "grey";
// 		var model ="camery";
// 		var year = 2001;
// 		return {
// 			getType : function (){
// 				return type;
// 			},
// 			getYear : function (){
// 				return  year;
// 			},
// 			setYear : function(x){
// 				year = x;
// 			}
// 		}
// 	})();

















