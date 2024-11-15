document.getElementById("year").textContent = new Date().getFullYear();

function showHiddenPanel() {
	const hiddenPanel = document.getElementById("hiddenPanel");
	
	hiddenPanel.classList.toggle('active');
};