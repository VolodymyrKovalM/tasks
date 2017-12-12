const form = document.getElementById('search');

form.addEventListener('submit', event => {
	event.preventDefault();

	const div = document.createElement('div');
	div.innerHTML = event.target.elements[0].value;
	div.className = 'just-created';
	div.addEventListener('click', () => {
		div.parentNode.removeChild(div);
	});

	document.body.appendChild(div);

	form.reset();
});
