/*======== MOSTRAR NAVBAR =============*/

// let toggle = document.querySelector('#header-toggle');
// let nav = document.querySelector('#nav-bar');
// let bodypd = document.querySelector('#body-pd');
// let headerpd = document.querySelector('#header');

// toggle.onclick = ()=>{
// 	// mostrar navbar
// 	nav.classList.toggle('show');
// 	//cambiar icono
// 	toggle.classList.toggle('bx-x');
// 	//añadir padding al body
// 	bodypd.classList.toggle('body-pd');
// 	//añadir padding al header
// 	headerpd.classList.toggle('body-pd');
// }

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