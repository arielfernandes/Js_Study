function typeWrite(element) {
	const textArray = element.innerHTML.split('');
	element.innerHTML = '';
	//console.log(textArray)

	textArray.forEach((letter, i) => {
		setTimeout(() => element.innerHTML += letter, 75 * i);
	});
	imgScreen();
}

function imgScreen() {
	const img = document.createElement("img")
	img.src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Chania.svg"
	img.setAttribute("width","480");
	document.getElementById('img-chania').appendChild(img);
}

const title = document.querySelector('h1');
typeWrite(title);

