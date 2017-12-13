/*
	Replace google icon by yahoo icon and google text on the search button by yahoo
	Create a html document with an input field and a submit button with next features:
		- create a new div with text from input field by click submit
		- remove div by click on it
*/

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
