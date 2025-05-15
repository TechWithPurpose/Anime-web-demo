function setUp() {
	//document.getElementById(submitBtn).addEventListener("click", validateInfo); //disables the HTML attributes
	//document.getElementById("submitBtn").addEventListener("submit", (event) =>{validateInfo(event)});
	//document.getElementById("submitBtn").onsubmit=validateInfo;
	
	document.addEventListener("submit", validateInfo);
}

function validateInfo(e) {
	e.preventDefault(); //So the page doesn't reload
	console.log("True");
	let isValid = true;

	const today = new Date();
	const year = parseInt(today.getFullYear());       // 2025

	let dayOfBirth = document.forms["RequestForm"]["currdate"].value;
	let birthYear = parseInt(dayOfBirth.slice(0, 4));

	if ( (year - birthYear)  < 16) {
		isValid = false;
		alert("You must be at least 16 years old to use our website!");
	}

	const pass = document.forms["RequestForm"]["pass"].value;
	const passConfirm = document.forms["RequestForm"]["checkpass"].value;

	if (pass != passConfirm) {
		isValid = false
		alert("The confirmation password doesn't match!");
	}

	if(isValid) {
		document.getElementById("RequestForm").reset();
		alert("Вашата препоръка е изпратена успешно! ✅");
	}
}
