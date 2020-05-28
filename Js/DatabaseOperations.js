async function getPhones(){
	let phoneList = [];
	const dbrefObject = await firebase.database().ref().child('phones').once('value');
	let phones = dbrefObject.val();
	for(let phone of Object.keys(phones))
	{
		console.log(phone);
		this[phone] = phones[phone];	
		phoneList.push(this[phone]);		
	}
	console.log(phoneList);
	return phoneList;
}

let basket_of_goods = JSON.parse(sessionStorage.getItem('basket_goods')) === null ? []: JSON.parse(sessionStorage.getItem('basket_goods'));






