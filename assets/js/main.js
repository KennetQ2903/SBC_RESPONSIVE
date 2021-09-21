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
async function colorLink(){
	if(linkColor){
		linkColor.forEach(l => l.classList.remove('active'))
		this.classList.add('active')
	}
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


/*============================== INICIO DE SESION =============================*/

async function getInputs(){
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
async function enter(event){
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

async function userEnter(event){
	let codigo = event.which || event.keyCode;
	if(codigo === 13){
		let pass = document.getElementById('contraseñaInput').focus();
	}
}
async function dashboard(){
	window.close('index.html');
	window.open('Dashboard.html');
}

function title(){
	window.document.title = "Inicio de sesion"
}

async function actual(actualBtn){
			let actualId = actualBtn.id;
			switch(actualId){
				case "btnDashboard":
					window.document.title = `Dashboard`;					
				break;

				case "btnUser":
					window.document.title = `Usuario`;

				break;

				case "btnGroup":
					window.document.title = `Cuentas`;
				break;

				case "btnSuministros":
					window.document.title = `Suministros`;
				break;

				case "btnConsumo":
					window.document.title = `Consumo`;
				break;

				case "btnNegocio":
					window.document.title = `Negocios`;
				break;

				case "btnFacturacion":
					window.document.title = `Facturacion`;
				break;

				case "btnBancos":
					window.document.title = `Cuentas Bancarias`;
				break;

				case "btnCorreos":
					window.document.title = `Correos`;
				break;
			}
}
async function logOut(){
			window.close('Dashboard.html');
			window.open('index.html');
}



// ---------------------------FUNCIONES GRAFICAS CONSUMO---------------------------
async function cargarGraficaConsumo(){
	let grafDia = document.getElementById('grafDiaConsumo').getContext("2d");
	var chartDia = new Chart(grafDia, {
		type: "bar",
		data: {
			labels:["6am", "8am", "10am", "12pm", "14pm", "16pm", "18pm"],
			datasets:[{
				label: "Gráfica de consumo en el dia (Kw/h)",
				backgroundColor: "#33FF00",
				data:[10, 40, 105, 220, 120, 300, 455],
			}]
		},
		options:{
			responsive: true,
			maintainAspectRatio: false
		}
	});

	let grafMes = document.getElementById('grafMesConsumo').getContext("2d");
	var chartMes = new Chart(grafMes, {
		type: "line",
		data: {
			labels:["semana 1", "semana 2", "semana 3", "semana 4"],
			datasets:[{
				label: "Gráfica de consumo del mes (Kw/h)",
				borderColor: "rgb(15, 167, 222)",
				pointBackgroundColor: "rgb(255, 255, 255)", 
				pointRadius: 6,
				fill: true,
				tension: 0.5,
				data:[4.8333, 11.3333, 10, 15.1666],
			}]
		},
		options:{
			responsive: true,
			maintainAspectRatio: false
		}
	});

	let grafAño = document.getElementById('grafAñoConsumo').getContext("2d");
	var chartAño = new Chart(grafAño, {
		type: "line",
		data: {
			labels:["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			datasets:[{
				label: "Gráfica de consumo del año (Kw/h)",
				borderColor: "#FF031C",
				pointBackgroundColor: "#FF031C", 
				pointRadius: 6,
				fill: true,
				data:[200, 340, 233.33, 498.9, 367.789, 123.45, 234, 346.7, 100, 98.67, 55.44, 766.55],
			}]
		},
		options:{
			responsive: true,
			maintainAspectRatio: false
		}
	});
}

async function cargarGraficaClientes(){
	let grafCl = document.getElementById('grafClientes');
	new Chart(grafCl, {
		type: "polarArea",
		data: {
			labels:["MASESA.S.A", "TOYOTA", "HUAWEI", "SAMSUNG", "UNREAL TECHS"],
			datasets:[{
				label: "Gráfica de clientes",
				backgroundColor: [
			      'rgb(255, 99, 132)',
			      'rgb(75, 192, 192)',
			      'rgb(255, 205, 86)',
			      'rgb(201, 203, 207)',
			      'rgb(54, 162, 235)'],
				data:[30, 3, 8, 12, 34],
			}]
		},
		options:{
			responsive: true,
			maintainAspectRatio: false
		}
	});
}

/*==================================== MENU CONSUMO ===========================*/
async function posMes(){
	document.getElementById('mesTab').style.top = -100 + '%';
	document.getElementById('añoTab').style.top = 200 + '%';

	document.getElementById('btnDia').style.background = "rgba(0, 0, 0, 0)";
	document.getElementById('btnMes').style.background = "#333692";
	document.getElementById('btnAño').style.background = "rgba(0, 0, 0, 0)";
}
async function posDia(){
	document.getElementById('mesTab').style.top = 100 + '%';
	document.getElementById('añoTab').style.top = 200 + '%';	

	document.getElementById('btnDia').style.background = "#333692";
	document.getElementById('btnMes').style.background = "rgba(0, 0, 0, 0)";
	document.getElementById('btnAño').style.background = "rgba(0, 0, 0, 0)";	
}
async function posAño(){
	document.getElementById('añoTab').style.top = -200 + '%';

	document.getElementById('btnDia').style.background = "rgba(0, 0, 0, 0)";
	document.getElementById('btnMes').style.background = "rgba(0, 0, 0, 0)";
	document.getElementById('btnAño').style.background = "#333692";	
}

function posInicial(){
window.document.title = `Dashboard`;
$('html, body').animate({
		scrollTop: $("#menuDashboard").offset().top
	}, 500);
}
