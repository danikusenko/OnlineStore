var choosePhone = document.getElementsByName("choose_phone");
var chooseAllPhones = document.getElementsByName("choose_all_phones");

function headCheckboxClick(checkbox) {		
	if(checkbox.checked){
		for(var i = 0; i<choosePhone.length; i++)
			choosePhone[i].checked = true;		
	}
	else{
		for(var i = 0; i<choosePhone.length; i++)
			choosePhone[i].checked = false;			
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