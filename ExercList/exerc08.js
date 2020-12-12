/*
function multiplicar(num, multi) {
	let resultado = 0

	for (let i = 0; i < multi; i++ ) {
		resultado += num
	}
	return resultado
}


*/
	function multiplicar(numero, multiplicador) {
		if (numero === 0 || multiplicador === 0) return 0
		
		return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
	}
console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(5, 0))
