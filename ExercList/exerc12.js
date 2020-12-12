function removerPropriedades(objeto, nomePropriedade) {
	//necessita copiar o objeto original
	const copia = Object.assign({}, objeto)
	//deletar o nome da propriedade a ser removida
	delete copia[nomePropriedade]
	return copia

	/*
		const copia = {...objeto}
		delete copia[nomePropriedade]
		return copia
	*/
}
var Employee = {
	age: 28,
	name: 'abc',
	designation: 'developer'
}

console.log(removerPropriedades(Employee, "designation"))
/*
console.log(removerPropriedades({
	id: 20,
	nome: "caneta",
	descricao: "Não preenchido"}, "descricao"))
	*/
