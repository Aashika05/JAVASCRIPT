function validateLoginForm() {
	if(document.logicForm.associate.value=="") {
		alert("Enter associateId");
		return false;
	}
	if(logicForm.password.value=="") {
		alert("Enter password");
		return false;
	}
}
function validRegistrationForm() {
	if(registerForm.firstName.value=="") {
		alert("Enter first name");
		return false;
	}
	else if(registerForm.lastName.value=="") {
		alert("Enter last name");
		return false;
	}
	else if(registerForm.department.value=="") {
		alert("Enter department ");
		return false;
	}
	else if(registerForm.designation.value=="") {
		alert("Enter designation ");
		return false;
	}

	else if(registerForm.value=="") {
		alert("Enter  ");
		return false;
	}


	if(registerForm.basicSalary.value=="") {
		alert("Enter basicSalary ");
		return false;
	}
	if(registerForm.accountNo.value=="") {
		alert("Enter accountNo ");
		return false;
	}
	if(registerForm.ifscCode.value=="") {
		alert("Enter ifscCode ");
		return false;
	}
}
function validatePassword() {
	if(changePasswordForm.password.value.length>=6){
		if(changePasswordForm.password.value.search(/[0-9]/)!=-1 && 
				changePasswordForm.password.value.search(/[1-z]/)!=-1 && 
				changePasswordForm.password.value.search(/[!@#$%^&*()_+]/)!=-1) {
		return true;
	}
	else {
		alert("password must contain atleast 1 number 1 uppercase letter and 1 special character");
		return false;
	}
}
else { 
	alert("minimum of 6 character");
	return false;

}
}



