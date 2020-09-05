const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeAvtiveClass();
		panel.classList.add('active');
	})
})

function removeAvtiveClass() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	})
}