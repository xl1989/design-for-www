


function handleSubmission(event){
	
	console.log(registration_form.elements);


	var username = registraion_form.elements.username;
	var password = registraion_form.elements.password;
	var confirm = registraion_form.elements.confirm;
	var SkillLevel = registraion_form.elements.SkillLevel;
    var age= registraion_form.elements.age;
    var address=registraion_form.elements.address;

	
	var SkillLevelArray = [];
	
		if(SkillLevel[i].checked){
			SkillLevelArray.push(SkillLevel[i].value)
		}
	


    
	if(username.value.length < 5){
        event.preventDefault();
		alert("Please make sure you use at least 5 charectors for your username!");
		
		username.focus();
		return false;
	}

	if(password.value.length < 5){
		alert("Please make sure you use at least 5 charectors for your password!");
		event.preventDefault();
		username.focus();
		return false;
	}

    if(age.value.length>3){
        alert("Please make sure you enter a valid age!")
        event.preventDefault();
		age.focus();
		return false;
    }
 if(address.value.length ==0){
		alert("Please make sure you have entered your address!");
		event.preventDefault();
		address.focus();
		return false;
	}
	
}

var registration_form = document.getElementById("registration_form");
registration_form.addEventListener('submit', handleSubmission);