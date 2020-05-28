function main(){		
	let close_icons  = document.getElementsByClassName('close-icon');
	for(let i = 0; i<close_icons.length; i++){		
		close_icons[i].onclick = function(){			
			document.body.style.overflow = "auto";
		}
	}
}	

function changeModalWindow(a){		
		let loginForm = document.getElementById("login");
		let resetPasswordForm = document.getElementById("resetPassword");
		let registrationForm = document.getElementById("registration");	
		let filterPageForm = document.getElementById("filterPage");
		if(a.id === "goLogin" || a.className === "back-icon"){		
			loginForm.style.display = "block";
			resetPasswordForm.style.display = "none";
			registrationForm.style.display = "none";
			filterPageForm.style.display = "none";
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
		else if(a.id === "filter"){
			loginForm.style.display = "none";
			resetPasswordForm.style.display = "none";
			registrationForm.style.display = "none";
			filterPageForm.style.display = "block";
			filterPageForm.innerHTML = filterPage;
			document.body.style.overflow = "auto";
		}
}	

document.addEventListener("DOMContentLoaded", main);