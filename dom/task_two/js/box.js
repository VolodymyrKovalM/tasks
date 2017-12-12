function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const box = document.getElementById('box');
box.style.top = '300px';
box.style.left = '300px';

box.addEventListener('mouseover', function() {
	const maxNextX = window.innerWidth - this.offsetWidth;
	const maxNextY = window.innerHeight - this.offsetHeight;

	this.style.top = `${getRandomInt(0, maxNextY)}px`;
	this.style.left = `${getRandomInt(0, maxNextX)}px`;
});
