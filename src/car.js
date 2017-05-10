 class Car {
 	constructor(name='General',model='GM',type){
 		this.type = type;
 		this.model = model;
 		this.name = name;
 		this.speed = 0 + 'km/h';
 		this.numOfDoors = 4;
 		this.numOfWheels = 4;
 		this.isSaloon  = false;
 		if(name === 'Koenigsegg' || name === 'Porshe'){
 			this.numOfDoors = 2 ;
 			this.speed = '250 km/h';
 			this.isSaloon = true;
 		}
 		if(model === 'Truck'){
 			this.numOfWheels = 8
 		}
 		
 	}
 	drive(val){
 		if(this.name ==='Porshe'){
 			val *= 50;
 			return this.speed = val + ' Km/h' ;
 		}
 		else{
 			return this.speed = (val* 11) + ' Km/h';
 		}
 	} 
 }