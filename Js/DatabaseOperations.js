const dbrefObject = firebase.database().ref().child('phones');

dbrefObject.on('value', snap => {
	sessionStorage.setItem('phones',JSON.stringify(snap.val()));	
});

let basket_of_goods = JSON.parse(sessionStorage.getItem('basket_goods')) === null ? []: JSON.parse(sessionStorage.getItem('basket_goods'));
let phones = JSON.parse(sessionStorage.getItem('phones'));
console.log(phones);
let phoneList = [];
for(let phone of Object.keys(phones))
{	
	this[phone] = phones[phone];	
	phoneList.push(this[phone]);
}



