function plusString(qtd) {
	return "+".repeat(qtd)

	/*return Array(qtd).fill('+').join('')*/

	/*let result = ''

	for(let i = 0; i < qtd; i++) 
		result += '+'
	
	return result*/
}

console.log(plusString(2))
console.log(plusString(4))
