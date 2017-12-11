/*
	- Напишите функцию compareObjects, которая принимает 2 объекта
	и название числового свойства, по которому нужно выполнить
	сравнение объектов, и выводит в консоль свойство name того объекта,
	у которого значение переданного свойства больше.
	- Создайте два объекта с помощью литерала
	- Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/

function compareObjects(objOne, objTwo, propName) {
	return objOne[propName] > objTwo[propName] ? objOne.name : objTwo.name;
}

module.exports = compareObjects;
