const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const loginBtn = document.getElementById('login_button');
const txtEmailForRegistration = document.getElementById('emailForRegistration');
const txtPasswordForRegistration = document.getElementById('passwordForRegistration');
const registerBtn = document.getElementById('buttonForRegistration');
const txtEmailForReset = document.getElementById('emailForReset');
const resetBtn = document.getElementById('buttonForReset');
const logout = document.getElementById('logout');

function closeForm(){
	window.location.href = '#';	
	document.getElementById('goLogin').style.display = "none";
	document.getElementById('logout').style.display = "block";
	document.body.style.overflow = "auto";
}

loginBtn.addEventListener('click', async() => {
	let email = txtEmail.value;
	let password = txtPassword.value;
	try{
		let promise = await firebase.auth().signInWithEmailAndPassword(email, password);		
	}
	catch(e){
		console.log(e.message);
	}
	console.log('user:' + firebase.auth().currentUser);	
	if(firebase.auth().currentUser == null)
		alert('Введён неверный логин или пароль');
	else
		closeForm();	

});

registerBtn.addEventListener('click', async() => {
	let email = txtEmailForRegistration.value;
	let password = txtPasswordForRegistration.value;
	try{
		let promise = await firebase.auth().createUserWithEmailAndPassword(email, password);
	}
	catch(e){
		console.log(e.message);
	}
	promise.catch(e => console.log(e.message));	
	await firebase.auth().signInWithEmailAndPassword(email, password);
	closeForm();	
});

logout.addEventListener('click', e => {
	firebase.auth().signOut();
	document.getElementById('goLogin').style.display = "block";
	document.getElementById('logout').style.display = "none";
});

resetBtn.addEventListener('click', e=> {
	let email = txtEmailForReset.value;
	let promise = firebase.auth().sendPasswordResetEmail(email);
	promise.catch(e => console.log(e.message));	
	alert("Письмо с восстановлением пароля было отправлено на адрес: "+ email);
	closeForm();
});

firebase.auth().onAuthStateChanged(firebaseUser => {	
	if(firebaseUser){				
		console.log(firebaseUser);
		document.getElementById('goLogin').style.display = "none";
		document.getElementById('logout').style.display = "block";
	}
	else
		console.log('user not loged in');
});
