function setPhoneToList(phone) {		
		let inAvailability;
		if(phone.availability === true)
			inAvailability = '<span name=inStock>В наличии</span>';
		else
			inAvailability = '<span name=notAvailable>Нет на складе</span>';
		let li = '<li><figure><div class="phone-container__phone-element"><div class = "photo"><img class="phonePhoto" src=';
		li += phone.photo_path + '></div><div class="phone-container__phone-detail"><a name ="phoneName"';
		li += 'class="phone-container__mobileName" onclick="openDetailPage(' + phone.id + ')">'+ phone.full_name + '</a>';
		li += '<div class="phone-container__result_attrs"><table><tr><td>Производитель</td><td>' + phone.producer + '</td></tr>';
		li += '<tr><td>Платформа</td><td>' + phone.platform + '</td></tr><tr><td>Количество SIM-карт</td><td>' + phone.sim_cards_number + '</td></tr>';
		li += '<tr><td>Оперативная память</td><td>' + phone.RAM + ' Гб</td></tr><tr><td>Встроенная память</td><td>' + phone.internal_memory+ ' Гб</td></tr>';
		li += '<tr><td>Диагональ экрана</td><td>' + phone.screen_diagonal + ' "</td></tr></table></div>';
		li += '<div class="phone-container__result-tools-for-mobile-version">' + inAvailability;
		li += '<span class="phone-container__price">' + phone.price + ' р.</span>';
		li += '<input class="phone-container__toBasket" type="button" name="toBasket-'+ phone.id +'" value="В корзину" onclick="addToBasket(' + phone.id + ',event)"></div></div>';
		li += '<div class="phone-container__result-tools"><span class="phone-container__price">' + phone.price + ' р.</span>' + inAvailability;
		li += '<input class="phone-container__toBasket" type="button" name="toBasket-'+ phone.id +'" value="В корзину" onclick="addToBasket(' + phone.id + ',event)"></div></div></figure></li>';
		document.getElementById('phone_list').innerHTML += li;		
}

function openDetailPage(phoneId){	
	sessionStorage.setItem("phone", JSON.stringify(phoneId));	
	onNavigate('/phone');		
}

function addToBasket(phoneId,event){	
	let count = basket_of_goods.length;		
	basket_of_goods.push(phoneId);
	sessionStorage.setItem('basket_goods', JSON.stringify(basket_of_goods));
	let basket_buttons = event.target.closest('li').getElementsByClassName('phone-container__toBasket');
	for(let j = 0; j < basket_buttons.length; j++){	
		basket_buttons[j].setAttribute("disabled","true");	
		basket_buttons[j].setAttribute("value", "В корзине");		
		basket_buttons[j].style.backgroundColor = "#ffffff";
		basket_buttons[j].style.color = "#42b857";
	}
	sessionStorage.setItem("buttons-"+count,basket_buttons[0].getAttribute("name"));		
}

function setClickedButtons(){	
	if(basket_of_goods.length != 0){		
		let count = basket_of_goods.length;				
		for(let i = 0; i<count; i++){			
			let button_name = sessionStorage.getItem("buttons-"+i);								
			for(let j = 0; j<2; j++){	
				let buttons = document.getElementsByName(button_name);
				buttons[j].setAttribute("disabled","true");
				buttons[j].setAttribute("value", "В корзине");
				buttons[j].style.backgroundColor = "#ffffff";
				buttons[j].style.color = "#42b857";
			}
		}
	}
}

function initHomePage() {	
	for(let phone of phoneList)		
		setPhoneToList(phone);	
	setClickedButtons();
}

initHomePage();