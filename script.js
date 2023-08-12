
const creatBtn = document.querySelector('button');

creatBtn.addEventListener('click', passCheck);

function passCheck(event) {
	const msg = document.querySelector('.msg');
	const pw = document.getElementById('pw');
	const cpw = document.getElementById('cpw');
	if (!(pw.value === cpw.value)) {
		msg.textContent = 'Password do not match';
		event.preventDefault();
	}
	
	//msg.textContent = pw.value;
}