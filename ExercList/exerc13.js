function filtrarNumero(item) {
	let newItem = []
	for (let i = 0; i < item.length; i++) {
		if(typeof item[i]  === 'number')
			newItem.push(item[i])
	}
	return newItem

}
console.log(filtrarNumero(["javascript", 1, "3", "web", 20])) // [1, 20]
console.log(filtrarNumero(["a", "c"])) //[]
