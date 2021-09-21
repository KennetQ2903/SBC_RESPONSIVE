/*======== MOSTRAR NAVBAR =============*/

const showNavBar = (toggleId, navId, bodyId, headerId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId),
	bodypd = document.getElementById(bodyId),
	headerpd = document.getElementById(headerId)

	if(toggle && nav && bodypd && headerpd){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
			toggle.classList.toggle('bx-x')
			bodypd.classList.toggle('body-pd')
			headerpd.classList.toggle('body-pd')
		})
	}
}

showNavBar('header-toggle', 'nav-bar',  'body-pd', 'header')
/*================= LINKS ACTIVOS ============*/

const linkColor = document.querySelectorAll('.nav_link')
function colorLink(){
	if(linkColor){
		linkColor.forEach(l => l.classList.remove('active'))
		this.classList.add('active')
	}
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


/*============================== INICIO DE SESION =============================*/

function getInputs(){
	let user = document.getElementById('userNameInput').value;
	let pass = document.getElementById('contraseñaInput').value;
	let warn = document.getElementById('warningUser');
	if(user == 'admin_' && pass == 'admin_1234'){
		document.getElementById('userNameInput').value = "";
		document.getElementById('contraseñaInput').value = "";
		dashboard();
	}
	if(user != 'admin_' || pass != 'admin_1234'){
		warn.classList.remove('Off');
		warn.classList.add('On');
		document.getElementById('contraseñaInput').value = "";
	}
	else{
		warn.classList.remove('On');
		warn.classList.add('Off');
	}
}
function enter(event){
	let codigo = event.which || event.keyCode;
	if(codigo === 13){
		let user = document.getElementById('userNameInput').value;
		let pass = document.getElementById('contraseñaInput').value;
		let warn = document.getElementById('warningUser');
		if(user == 'admin_' && pass == 'admin_1234'){
			dashboard();
		}
		if(user != 'admin_' || pass != 'admin_1234'){
			warn.classList.remove('Off');
			warn.classList.add('On');
			document.getElementById('contraseñaInput').value = "";
		}
		else{
			warn.classList.remove('On');
			warn.classList.add('Off');
		}
	}
}

function userEnter(event){
	let codigo = event.which || event.keyCode;
	if(codigo === 13){
		let pass = document.getElementById('contraseñaInput').focus();
	}
}
function dashboard(){
	window.close('index.html');
	window.open('Dashboard.html');
}

function title(){
	window.document.title = "Inicio de sesion"
}