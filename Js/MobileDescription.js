function setProperty(class_name, value){	
	let property = document.getElementsByClassName(class_name);
	for(i = 0; i < property.length; i++){
		while(property[i].firstChild){
			property[i].removeChild(property[i].firstChild);
		}
		property[i].appendChild(document.createTextNode(value));
	}	
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
	setProperty('phone-container__price',phone.price + " р.");
	setProperty('phone-container__platform',phone.platform);
	setProperty('phone-container__RAM',phone.RAM + " Гб");
	setProperty('phone-container__internal-memory',phone.internal_memory + " Гб");
	setProperty('phone-container__sim-cards-number', phone.sim_cards_number);
	let basket_button = document.getElementById('toBasket');
	if(phone.inBasket === true){
		basket_button.setAttribute("value", "В корзине");		
		basket_button.style.backgroundColor = "#ffffff";
		basket_button.style.color = "#42b857";
		basket_button.style.border = "1px solid #42b857"
	}
	else
		basket_button.addEventListener('click',addToBasket);
}

function addToBasket(phoneId,event){		
	/*sessionStorage.setItem("phone" + i,JSON.stringify(phoneId));	
	let basket_buttons = event.target.parentElement.parentElement.parentElement.getElementsByClassName('phone-container__toBasket');
	console.log(event.target.parentElement.parentElement);
	for(let j = 0; j < basket_buttons.length; j++){		
		basket_buttons[j].setAttribute("value", "В корзине");		
		basket_buttons[j].style.backgroundColor = "#ffffff";
		basket_buttons[j].style.color = "#42b857";
	}
	sessionStorage.setItem("buttons"+i,basket_buttons[0].getAttribute("name"));	
	sessionStorage.setItem("count", ++i);	*/
}

viewPhone()
