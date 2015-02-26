$('document').ready(function(){
	var berji = {
		health:100,
		hunger:55,
		happiness:50,
		bark:function(){
			console.log("woof woof");
		},
		eat:function(food){
			this.allData();
			if(this.hunger-food<=0){
				console.log("berji isnt hungry");
				return;
			}
			this.hunger-=food;
			console.log("hunger is at "+this.hunger);
		},
		play:function(game){
			this.allData();
			this.happiness+=game;
			console.log("happiness is "+this.happiness);;
		},
		heal:function(hp){
			this.allData();
			this.health+=hp;
			console.log("health is "+this.health)
		},
		allData:function(){
			this.allData();
			console.log(JSON.stringify(this));
		},
	};


	function takeCareOfBerji(berji){
		for (var k in berji) {
  				checkIfOk(k,berji);
		}
	}
	function checkIfOk(status,berji){
		
		switch(status){
			case "health": checkHealth(berji);
			break;
			case "hunger": checkHunger(berji);
			break;
			case "happiness": checkHappiness(berji);
			break;
		}
	}

	function checkHappiness(berji){
		if(berji.happiness<=10){
			berji.eat(3);
		}
	}
	function checkHealth(berji){
		if(berji.health<10){
			berji.heal(10);
		}
	}
	function checkHunger(berji){
		if(berji.hunger>50){
			berji.eat(10);
		}
	}
	
	takeCareOfBerji(berji);
});