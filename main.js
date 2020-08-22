'use strict';
window.addEventListener('load', function() {
	let selectMenu = '';
	let winEl = document.querySelector('.win');
	
	setSelectMenu('home');
	
	function setSelectMenu(menu) {
		winEl.className = 'win win-'+menu;
		winEl.innerHTML = '';
		winEl.appendChild(document.getElementById(menu).content.cloneNode(true));
		selectMenu = menu;
	};	
	
	document.querySelector('.nav').addEventListener('click', function(e) {
		let el = e.path.find(v => v.classList&&v.classList.contains('nav-button'));
		if(el && el.dataset.menu && el.dataset.menu !== selectMenu) {
			navigator.vibrate(30);
			setSelectMenu(el.dataset.menu);
		};
	});
	
	document.querySelector('.win').addEventListener('click', function(e) {
		if(selectMenu === 'project') {
			let el = e.path.find(v => v.classList.contains('card'));
			if(el && el.dataset.href) {
				location.pathname = 'WebGUI/repositories/'+el.dataset.href+'/index.html';
			};
		};
	});
});


