document.getElementById("year").textContent = new Date().getFullYear();

function showHiddenPanel() {	
	document.querySelector(".wrapper").classList.toggle('open-side-bar');
};

function openPage(link) {
	window.open(link, '_self');
};