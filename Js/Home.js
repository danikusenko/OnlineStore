if(sessionStorage.getItem('count') === null)
{	
	class MobilePhone {
		constructor(id,full_name, photo_path, producer, platform,sim_cards_number, RAM, internal_memory,
			screen_diagonal, price, availability) {
			this.id = id;
			this.full_name = full_name;
			this.photo_path = photo_path;
			this.producer = producer;
			this.platform = platform;
			this.sim_cards_number = sim_cards_number;
			this.RAM = RAM;
			this.internal_memory = internal_memory;
			this.screen_diagonal = screen_diagonal;
			this.price = price;
			this.availability = availability;
			this.inBasket = false;
		}	
	}
	var phone = new MobilePhone("phone","Смартфон Xiaomi Redmi 7A 2GB/32GB Gem Blue", "Images/Photo.jpeg","Xiaomi", "Android", 
		2, 2,32, 5.4, 100.54, true);
	var phone2 = new MobilePhone("phone2","Samsung Galaxy A10 2Gb/32Gb Blue (SM-A105F/DS)", "Images/Phone2.jpg","Samsung", "Android", 
		2, 2,32, 5.4, 299.99, true);
	var phone3 = new MobilePhone("phone3","Apple iPhone Xr 64Gb Red", "Images/Phone3.jpg","Apple", "iOS", 
		2, 2,32, 5.4, 599.99, true);
	var phoneList = [phone, phone2, phone3]; 

	var iterator;

	var i;		
}

i = sessionStorage.getItem('count') != null? sessionStorage.getItem('count'): 0;

iterator = 0;
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
		li += '<input class="phone-container__toBasket" type="button" name="toBasket-'+ iterator +'" value="В корзину" onclick="addToBasket(' + phone.id + ',event)"></div></div>';
		li += '<div class="phone-container__result-tools"><span class="phone-container__price">' + phone.price + ' р.</span>' + inAvailability;
		li += '<input class="phone-container__toBasket" type="button" name="toBasket-'+ iterator++ +'" value="В корзину" onclick="addToBasket(' + phone.id + ',event)"></div></div></figure></li>';
		document.getElementById('phone_list').innerHTML += li;		
}

for(let phone of phoneList){		
	setPhoneToList(phone);
}


function openDetailPage(phoneId){	
	sessionStorage.setItem("phone", JSON.stringify(phoneId));	
	onNavigate('/phone');		
}

function addToBasket(phoneId,event){		
	sessionStorage.setItem("phone" + i,JSON.stringify(phoneId));
	phoneId.inBasket = true;	
	let basket_buttons = event.target.closest('li').getElementsByClassName('phone-container__toBasket');
	for(let j = 0; j < basket_buttons.length; j++){	
		basket_buttons[j].setAttribute("disabled","true");	
		basket_buttons[j].setAttribute("value", "В корзине");		
		basket_buttons[j].style.backgroundColor = "#ffffff";
		basket_buttons[j].style.color = "#42b857";
	}
	sessionStorage.setItem("buttons"+i,basket_buttons[0].getAttribute("name"));	
	console.log(sessionStorage.getItem("buttons"+i));
	sessionStorage.setItem("count", ++i);	
}

function setClickedButtons(){	
	if(sessionStorage.getItem('count') != null){		
		let count = sessionStorage.getItem('count');				
		for(let i = 0; i<count; i++){			
			console.log("buttons"+i);
			console.log(sessionStorage.getItem("buttons"+i));
			let button_name = sessionStorage.getItem("buttons"+i);
			console.log(button_name);					
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

setClickedButtons();