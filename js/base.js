document.getElementById("year").textContent = new Date().getFullYear();

function showHiddenPanel() {	
	document.querySelector(".wrapper").classList.toggle('open-side-bar');
};