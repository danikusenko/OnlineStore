function main(){
	var content = document.getElementById("content");
	content.innerHTML = '<object type="text/html" data="Html/Home.html" style="width:100%; height:200vh;"></object>';
	sessionStorage.setItem("content",content);
	console.log(sessionStorage.getItem("content"))	
	var close_icons  = document.getElementsByClassName('close-icon');
	for(let i = 0; i<close_icons.length; i++){		
		close_icons[i].onclick = function(){			
			document.body.style.overflow = "auto";
		}
	}
}	

function changeModalWindow(a){		
		var loginForm = document.getElementById("login");
		var resetPasswordForm = document.getElementById("resetPassword");
		var registrationForm = document.getElementById("registration");	
		if(a.id === "goLogin" || a.className === "back-icon"){		
			loginForm.style.display = "block";
			resetPasswordForm.style.display = "none";
			registrationForm.style.display = "none";
			document.body.style.overflow = "hidden";
		}
		else if(a.id === "goToResetPassword"){
			loginForm.style.display = "none";
			resetPasswordForm.style.display = "block";
			registrationForm.style.display = "none";
		}

		else if(a.id === "goToRegistration"){
			loginForm.style.display = "none";
			resetPasswordForm.style.display = "none";
			registrationForm.style.display = "block";
		}
}

function changeContent(a){		
	if(a.id === "goHome")	{
		content.innerHTML = '<object type="text/html" data="Html/Home.html" style="width:100%; height:200vh;"></object>';
	}
	else if(a.id  === "goBasket"){
		content.innerHTML = '<object type="text/html" data="Html/Baske.html" style="width:100%; height:100vh;"></object>';		
	}		
}

document.addEventListener("DOMContentLoaded", main);