const passElInput = document.getElementById('inputPass'),
	togglePass = document.querySelector('.toggle-pass');


togglePass.addEventListener('click', function(){
	if(!togglePass.classList.contains('show')){

		togglePass.classList.add('show');

		// change the type attribute from password to text
		passElInput.setAttribute('type', 'text');	
	} else {

		togglePass.classList.remove('show');

		// change the type attribute back to password
		passElInput.setAttribute('type', 'password');
	}
});
