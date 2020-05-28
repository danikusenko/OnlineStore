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
	document.body.style.overflow = "auto";
}

function hideLogin(){
	document.getElementById('goLogin').style.display = "none";
	document.getElementById('logout').style.display = "block";
}

function hideLogout(){
	document.getElementById('goLogin').style.display = "block";
	document.getElementById('logout').style.display = "none";
}

loginBtn.addEventListener('click', async(event) => {
	event.preventDefault();
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

registerBtn.addEventListener('click', async(event) => {
	event.preventDefault();
	let email = txtEmailForRegistration.value;
	let password = txtPasswordForRegistration.value;
	try{
		let promise = await firebase.auth().createUserWithEmailAndPassword(email, password);
	}
	catch(e){
		console.log(e.message);
	}
	await firebase.auth().signInWithEmailAndPassword(email, password);
	closeForm();	
});

logout.addEventListener('click', e => {
	firebase.auth().signOut();	
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
		hideLogin();
		console.log(firebaseUser);		
	}
	else{
		hideLogout();
		console.log('user not loged in');
	}
});

