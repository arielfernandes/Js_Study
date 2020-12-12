function receberPrimeiroEUltimoElemento(item) {
//	const primeiroItem = item[0]
//	const UltimoItem =  item[item.length -1]
//	return [primeiroItem, UltimoItem]
	return [item[0], item[item.length -1]]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
