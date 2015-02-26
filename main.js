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
			console.log(JSON.stringify(this));
		},
	};


	function takeCareOfBerji(){
		for (var k in berji) {
  				checkIfOk(k);
		}
		berji.allData();
	}
	function checkIfOk(status){
		
		switch(status){
			case "health": checkHealth(berji);
			break;
			case "hunger": checkHunger(berji);
			break;
			case "happiness": checkHappiness(berji);
			break;
		}
	}

	function checkHappiness(){
		if(berji.happiness<=10){
			berji.eat(3);

		}
	}
	function checkHealth(){
		if(berji.health<10){
			berji.heal(10);
		}
	}
	function checkHunger(){
		if(berji.hunger>50){
			berji.eat(10);
		}
	}

	takeCareOfBerji();
});