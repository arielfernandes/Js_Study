const express = require('express') //importar Express
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Roberto'))

app.use('/opa', (req, res, next) => {
	console.log('Antes...')
	next()
})

app.get('/clientes/relatorio', (req, res) => {
	res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
	let corpo = ''
	req.on('data', function(parte) {
		corpo += parte
	})

	req.on('end', () => {
		res.send(corpo)
	})
})

app.get('/clientes/:id', (req, res) => {
	res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
	console.log('Durante...')
	res.json({
		data: [
			{id: 7, name: 'Ana', position: 1},
			{id: 34, name: 'Bia', position: 2},
			{id: 73, name: 'Carlos', position: 3}
		],
		count: 30,
		skip: 0,
		limit: 3,
		status: 200
	})
	//res.json({
	//	name: 'iPad 32Gb',
	//	price: 1899,
	//dincount: 0.12
	//})
	next()

})
app.use('/opa', (req, res) => {
	console.log('Depois....')
})

app.listen(3000, () => {
	console.log('Backend executando...')
})
