function somenteIndeicesPares(array) {
	let resultado = []

	for(let i = 0; i < array.length; i += 2) {
		const numPar = array[i] % 2 === 0

		if(numPar)
			resultado.push(array[i])
	}
	return resultado
	/*
		return numeros.filter((numero, indice) => {
			const numeroPar = numero % 2 === 0
			const indicePar = indice % 2 === 0

			return numeroPar && indicePar
		})
	*/
}

console.log(somenteIndeicesPares([1, 2, 3, 4]))
console.log(somenteIndeicesPares([10, 70, 22, 43]))
