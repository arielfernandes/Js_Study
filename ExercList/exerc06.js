function inverter(x) {
	if (typeof x == 'number') {
		let posNum = (x > 0) ? x * -1 : Math.abs(x)
		console.log(posNum)
	} else if (typeof x == 'string') {
		console.log("booleano ou número esperados, mas o parâmetro é do tipo string")
	} else if (typeof x == 'boolean') {
		console.log(!x)
	}
}

inverter(true)
inverter(1)
inverter("8")
inverter("programação")

