var table = document.getElementById('phoneTable');
var total_price = 0;
function initBasket(){
	let phone;
	var count = sessionStorage.getItem("count");
	let ul = document.getElementById('phoneBasetInMobileVersion');
	if(count === null || count === 0)	{
		document.getElementById('basket-content').style.display = "none";
		document.getElementById('basket-empty').style.display = "block";		
	}
	else{
		document.getElementById('basket-content').style.display = "block";
		document.getElementById('basket-empty').style.display = "none";
		for(let i = 0; i < count; i++){
			let row = table.insertRow(1);
			phone = JSON.parse(sessionStorage.getItem("phone" + i));						
			let element = '<td><label class="phones-in-basket__checkbox-style">';
			element += '<input type="checkbox" name="choose_phone" value="true" onclick="phoneCheckboxClick(this)" checked>';
			element += '<span class="phones-in-basket__checkmark"></span></label></td><td><div class="phones-in-basket__name-and-photo">';
			element += '<img id=phonePhoto src=' + phone.photo_path + ' height="80">';
			element += '<a class="phones-in-basket__phoneName" onclick=phoneDetails(' +phone.id+')>' + phone.full_name + '</a></div></td>';
			element += '<td><input id=count type="number" name="count" min="0" value="1"></td><td><span >Курьером: </span>';
			element += '<span>завтра</span></td><td><span id=price>' + phone.price + ' р.</span></td>';			
			row.innerHTML = element;
			let li = '<li><div class="phones-in-basket-for-mobile-version__phone"><div class="phones-in-basket-for-mobile-version__photo">';
			li += '<img class="phonePhotoForMobile" src=' + phone.photo_path +' width="300"></div>';
			li += '<div class="phones-in-basket-for-mobile-version__details">';
			li += '<a class="phones-in-basket__phoneName" onclick=phoneDetails(' +phone.id+')>' + phone.full_name + '</a>';
			li += '<input class="countForMobileVersion" type="number" name="count" min="0" value="1">';
			li += '<span class="phones-in-basket-for-mobile-version__priceForMobileVersion">'+ phone.price +' р.</span>';
			li += '<div class="phones-in-basket-for-mobile-version__box-shadow"><span >Курьером: завтра</span></div></div></div></li>';
			ul.innerHTML += li;
			total_price += phone.price;						
		}
		document.getElementById('totalCost').innerText = total_price.toFixed(2) + ' р.';		
	}
}

function backToHome(){	
	let content = sessionStorage.getItem("content");	
	content.innerHTML = '<object type="text/html" data="Home.html" style="width:100%; height:200vh;"></object>';
}

function phoneDetails(phoneId){
	let content = document.getElementById('content');
	content.innerHTML = '<object type="text/html" data="MobileDescription.html" style="width:100%; height:100%;"></object>';
}

var choosePhone = document.getElementsByName("choose_phone");
var chooseAllPhones = document.getElementsByName("choose_all_phones");

function headCheckboxClick(checkbox) {		
	if(checkbox.checked){
		for(var i = 0; i<choosePhone.length; i++)
			choosePhone[i].checked = true;		
	}
	else{
		for(var i = 0; i<choosePhone.length; i++){
			choosePhone[i].checked = false;			
		}
	}
}

function phoneCheckboxClick(checkbox) {
	if(!checkbox.checked){	
		let noСheckboxesSelected = true;
		for(var i = 0; i<choosePhone.length; i++){
			if(choosePhone[i].checked){
				noСheckboxesSelected = false;
				break;
			}
		}
		if(noСheckboxesSelected){
			chooseAllPhones[0].checked = false;
		}
	}
}

initBasket();