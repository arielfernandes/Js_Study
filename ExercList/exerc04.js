// return month
function month(m) {
	switch(m) {
		case 1:
			return "January"
			break
		case 2:
			return "February"
			break
		case 3:
			return "March"
			break
		case 4:
			return "Abril"
			break
		case 5:
			return "May"
			break
		case 6:
			return "June"
			break
		case 7:
			return "July"
			break
		case 8:
			return "August"
			break
		case 9:
			return "September"
			break
		case 10:
			return "Octuber"
			break
		case 11:
			return "November"
			break
		case 12:
			return "December"
			break
		default: 
			return "Invalid Option!!"
	}
}

for (let m = 1; m <= 12; m++) {
	console.log(`Month ${m} = ${month(m)}`)
}
