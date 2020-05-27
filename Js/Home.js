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
	let basket_buttons = event.target.closest('li').getElementsByClassName('phone-container__toBasket');
	if(!phoneId.availability) {
		for(let btn of basket_buttons){
			btn.setAttribute("disabled","true");
			return;
		}
	}
	let count = basket_of_goods.length;		
	basket_of_goods.push(phoneId);
	sessionStorage.setItem('basket_goods', JSON.stringify(basket_of_goods));	
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

function filterPhoneList(){
	let fromPrices = document.getElementsByName('fromPrice');
	let toPrices = document.getElementsByName('toPrice');
	let fromDiagonals = document.getElementsByName('fromDiagonal');
	let toDiagonals = document.getElementsByName('toDiagonal');
	let wordsPhoneName = document.getElementsByName('wordsPhoneName')
	let simCardsNumber = document.getElementsByName('simCards');
	let producerCheckboxes = document.getElementsByName('producer');
	let platformCheckboxes = document.getElementsByName('platform');
	let RAMCheckboxes = document.getElementsByName('RAM');
	let builtInMemoryCheckboxes = document.getElementsByName('builtInMemory');
	let filterList = phoneList;
	for(let words of wordsPhoneName)
		filterList = words.value.length > 0 ? filterList.filter(phone => phone.full_name.toLowerCase().includes(words.value.toLowerCase())) : filterList;
	for(let sim of simCardsNumber)
		filterList = sim.value.length > 0 ? filterList.filter(phone => phone.sim_cards_number == sim.value): filterList;
	for(let fromPrice of fromPrices)
		filterList = fromPrice.value.length > 0 ? filterList.filter(phone => phone.price >= fromPrice.value): filterList;
	for(let toPrice of toPrices)
		filterList = toPrice.value.length > 0 ? filterList.filter(phone => phone.price <= toPrice.value): filterList;
	for(let fromDiagonal of fromDiagonals)
		filterList = fromDiagonal.value.length > 0 ? filterList.filter(phone => phone.screen_diagonal >= fromDiagonal.value): filterList;
	for(let toDiagonal of toDiagonals)
		filterList = toDiagonal.value.length > 0 ? filterList.filter(phone => phone.screen_diagonal <= toDiagonal.value): filterList;	
	let producers = [];	
	for(let producer of producerCheckboxes){
		if(producer.checked)
			producers.push(producer.getAttribute('value'));
	}
	filterList = producers.length > 0 ? filterList.filter(phone => producers.includes(phone.producer.trim())): filterList;
	let platforms = [];
	for(let platform of platformCheckboxes){
		if(platform.checked)
			platforms.push(platform.getAttribute('value'));
	}	
	filterList = platforms.length > 0 ? filterList.filter(phone => platforms.includes(phone.platform.trim())): filterList;
	let rams = [];
	for(let ram of RAMCheckboxes){
		if(ram.checked)
			rams.push(ram.getAttribute('value'));
	}
	filterList = rams.length > 0 ? filterList.filter(phone => rams.includes(phone.RAM.toString())): filterList;
	let internalsMemory = [];
	for(let memory of builtInMemoryCheckboxes){
		if(memory.checked)
			internalsMemory.push(memory.getAttribute('value'));
	}	
	filterList = internalsMemory.length > 0 ? filterList.filter(phone => internalsMemory.includes(phone.internal_memory.toString())): filterList;
	return filterList;
}

function getEmptyList(){	
	let li = '<div class="phone-container__noMobiles"><span>К сожалению, мы не нашли мобильные телефоны по указанным параметрам</span><br>';
	li += '<input type="button" class="phone-container__reset_button" onclick="resetForms()" value="Сбросить фильтр"></div>';
	document.getElementById('phone_list').innerHTML = li;
}

function initHomePage() {	
	document.getElementById('phone_list').innerHTML = '';
	document.body.scrollTop = 0; 
  	document.documentElement.scrollTop = 0;
	let filterList = filterPhoneList();
	if(filterList.length == 0){
		getEmptyList();
	}
	else {
		for(let phone of filterList){		
			setPhoneToList(phone);	
		}
		setClickedButtons();
	}
}

function resetForms(){
	let filterFormMobileVersion = document.getElementById('filterFormMobileVersion');
	if(filterFormMobileVersion != null)
		filterFormMobileVersion.reset();
	let filterForm = document.getElementById('filterForm');
	filterForm.reset();	
	initHomePage();
}

document.getElementById('filterForm').addEventListener('submit', function(e){
	e.preventDefault();	
	let filterFormMobileVersion = document.getElementById('filterFormMobileVersion');
	if(filterFormMobileVersion != null)
		filterFormMobileVersion.reset();
	initHomePage();
	return false;
});

initHomePage();