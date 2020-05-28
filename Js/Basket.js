function initBasket(){
	const table = document.getElementById('phoneTable');
	let total_price = 0;
	let phone;
	let count = basket_of_goods.length;
	let ul = document.getElementById('phoneBasketInMobileVersion');
	if(basket_of_goods.length === 0) {
		document.getElementById('basket-content').style.display = "none";
		document.getElementById('basket-empty').style.display = "block";		
	}
	else{
		document.getElementById('basket-content').style.display = "block";
		document.getElementById('basket-empty').style.display = "none";
		for(phone of basket_of_goods){
			let row = table.insertRow(1);									
			let element = '<td><div class="phones-in-basket__name-and-photo">';
			element += '<img class="phonePhotoinBasket" src=' + phone.photo_path + ' height="80">';
			element += '<a class="phones-in-basket__phoneName" onclick=phoneDetails(' +phone.id+')>' + phone.full_name + '</a></div></td>';
			element += '<td><input id=count type="number" name="count" min="0" value="1" onfocus="this.oldvalue = this.value;"';
			element += 'onchange="changePrice('+ phone.id +',event); this.oldvalue = this.value;"></td><td><span >Курьером: </span>';
			element += '<span>завтра</span></td><td><span name="price-for-'+ phone.id + '">' + phone.price + ' р.</span></td>';			
			row.innerHTML = element;
			let li = '<li><div class="phones-in-basket-for-mobile-version__phone"><div class="phones-in-basket-for-mobile-version__photo">';
			li += '<img class="phonePhotoForMobile" src=' + phone.photo_path +' width="300"></div>';
			li += '<div class="phones-in-basket-for-mobile-version__details">';
			li += '<a class="phones-in-basket__phoneName" onclick=phoneDetails(' +phone.id+')>' + phone.full_name + '</a>';
			li += '<input class="countForMobileVersion" type="number" name="count" min="0" value="1" onfocus="this.oldvalue = this.value;"';
			li += 'onchange="changePrice('+ phone.id +',event); this.oldvalue = this.value;">';
			li += '<span name="price-for-'+phone.id + '" class="phones-in-basket-for-mobile-version__priceForMobileVersion">'+ phone.price +' р.</span>';
			li += '<div class="phones-in-basket-for-mobile-version__box-shadow"><span >Курьером: завтра</span></div></div></div></li>';
			ul.innerHTML += li;
			total_price += phone.price;						
		}
		document.getElementById('totalCost').innerText = total_price.toFixed(2) + ' р.';		
	}
}

document.getElementById('checkoutButton').addEventListener('click', function(){
	if(firebase.auth().currentUser === null) {
		let login = document.getElementById('goLogin');
		window.location.href = "#blackout";
		changeModalWindow(login);
	}
	else{
		alert('Заказ орформлен, ждите сообщения от курьера на почте.\nК оплате: '+ document.getElementById('totalCost').innerText);
		onNavigate('/home');
		sessionStorage.setItem('basket_goods', null);
		basket_of_goods = [];		
	}
});

function changePrice(phone, event){
	let new_count = event.target.value;
	let old_count = event.target.oldvalue;
	let totalCost = parseFloat((document.getElementById('totalCost').innerText).match(/\-?\d+\.\d+/g));
	totalCost -= phone.price*old_count;	
	totalCost += phone.price*new_count;
	let prices = document.getElementsByName('price-for-'+phone.id);
	for(let price of prices)
		price.innerText = (phone.price*new_count).toFixed(2) + ' р.';
	document.getElementById('totalCost').innerText = totalCost.toFixed(2) + ' р.';	
}

function phoneDetails(phoneId){
	sessionStorage.setItem("phone", JSON.stringify(phoneId));	
	onNavigate('/phone');	
}

initBasket();