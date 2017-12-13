/*
	Print content for some element on the page.
	Use these properties “parentNode, children/childNodes, firstChild, lastChild,
	previousSibling, nextSibling” to find an element
*/

const container = document.getElementById('container');

const firstList = container.firstElementChild;
const fistListItems = firstList.children;

for (let i = 0, n = fistListItems.length; i < n; i++) {
	fistListItems[i].innerHTML = `List One, list item ${i + 1}`;
}

const secondListItems = firstList.nextElementSibling.children;

for (let i = 0, n = secondListItems.length; i < n; i++) {
	secondListItems[i].innerHTML = `List Two, list item ${i + 1}`;
}
