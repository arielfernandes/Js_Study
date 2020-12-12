/*
function arrayRepeticoes(item, qtd) {
	let novoItem = []
	for (let i = 0; i < qtd; i++) {
		novoItem.push(item)
	}
	return novoItem
}

*/
function arrayRepeticoes(item, qtd) {
	return Array(qtd).fill(item)
}
console.log(arrayRepeticoes("código", 3))
console.log(arrayRepeticoes(9, 7))
