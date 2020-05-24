function setProperty(class_name, value){	
	let property = document.getElementsByClassName(class_name);
	for(let i = 0; i < property.length; i++){
		while(property[i].firstChild){
			property[i].removeChild(property[i].firstChild);
		}
		property[i].appendChild(document.createTextNode(value));
	}	
}

function isInBaket(phoneId){
	for(let phone of basket_of_goods){
		if(phone.id === phoneId)
			return true;
	}
	return false;
}

function viewPhone(){
	let phone = JSON.parse(sessionStorage.getItem('phone'));	
	if(phone.availability == true){
		document.getElementById('inStock').style.display = "block";
		document.getElementById('notAvailable').style.display = "none";
	}
	else{
		document.getElementById('inStock').style.display = "none";
		document.getElementById('notAvailable').style.display = "block";
	}	
	document.getElementById('phonePhoto').setAttribute("src",phone.photo_path);
	setProperty('title',phone.full_name);
	setProperty('phone-container-in-description__price',phone.price + " р.");
	setProperty('phone-container-in-description__type',phone.type);
	setProperty('phone-container-in-description__platform',phone.platform);	
	setProperty('phone-container-in-description__sim-cards-number', phone.sim_cards_number);
	setProperty('phone-container-in-description__body-color',phone.body_color);
	setProperty('phone-container-in-description__body-material',phone.body_material);
	setProperty('phone-container-in-description__processor',phone.processor);
	setProperty('phone-container-in-description__number-of-cores',phone.cores_number);
	setProperty('phone-container-in-description__screen-resolution',phone.screen_resolution);
	setProperty('phone-container-in-description__screen-aspect-ratio',phone.screen_aspect_ration);
	setProperty('phone-container-in-description__screen-technology',phone.screen_technology);
	setProperty('phone-container-in-description__RAM',phone.RAM + " Гб");
	setProperty('phone-container-in-description__internal-memory',phone.internal_memory + " Гб");
	setProperty('phone-container-in-description__memory-card-support',phone.memory_card_support);
	setProperty('phone-container-in-description__accelerometer',phone.accelerometer);
	setProperty('phone-container-in-description__light-sensor',phone.light_sensor);
	setProperty('phone-container-in-description__proximity-sensor',phone.proximity_sensor);
	setCharactersitiscsForMobileVersion();
	let basket_button = document.getElementById('toBasket');	
	if(isInBaket(phone.id)){
		setClickedButton(basket_button);		
	}
	else {
		basket_button.addEventListener('click',function(){			 			
			basket_of_goods.push(phone);			
			sessionStorage.setItem("buttons-"+ (basket_of_goods.length-1),"toBasket-"+ phone.id);
			setClickedButton(basket_button);			
		});
	}
}

function setClickedButton(basket_button){	
	basket_button.setAttribute("value", "В корзине");		
	basket_button.style.backgroundColor = "#ffffff";
	basket_button.style.color = "#42b857";
	basket_button.style.border = "1px solid #42b857";
}

function setCharactersitiscsForMobileVersion(){
	let characteristicsForMobile = 	document.getElementsByClassName('phone-container-in-description__phone-characteristics-in-mobile-version')[0];
	let characteristicsDiv = document.getElementsByClassName('phone-container-in-description__phone-characteristics')[0];
	characteristicsForMobile.innerHTML = characteristicsDiv.innerHTML; 
}

viewPhone()
