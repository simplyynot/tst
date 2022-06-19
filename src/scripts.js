const form = document.querySelector('.signup__form');
const password = document.querySelector('.password');
const password_confirm = document.querySelector('.password_confirm');
const mismatch = document.querySelector('.signup__mismatch');
const success = document.querySelector('.signup__success');

function serialize(data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}


// on successful submittion this would sent the user to submission success page
form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	// this would send serialized values to API endpoints
	if(password.value === password_confirm.value) {
		const data = new FormData(form);
		const formObj = serialize(data);
		const submitValue = document.createElement('pre');

		mismatch.classList.toggle('active');
		form.style.display = 'none';
		success.style.display = 'block';
		success.append(JSON.stringify(formObj), submitValue);
	}
	// errors on password mismatch, typically with more time I would setup a customValidity message so that pop-up message would be uniform with the required errors
	else {
		password_confirm.select();
		mismatch.classList.toggle('active');
	}
});

