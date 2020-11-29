const cam = document.getElementById('cam')
//listar dispositivos
const startVideo = () => {
	navigator.mediaDevices.enumerateDevices()
		.then(devices => {
			console.log(devices)
			//verificar se devices é um array
			if (Array.isArray(devices)) {
				//tem dispositivos ...
				devices.forEach(device => {
					if(device.kind === 'videoinput') {
						//é uma camera
						//console.log(device) //verificando valor da camera
						if (device.label.includes("02d2")) {
							//tem a camera
							navigator.getUserMedia(
								{	video: {
									deviceId: device.deviceId
								}},
								stream => cam.srcObject = stream,
								error => console.error(error)
							)
						}
					}
				})
			}
		})
}
const loadLabels = () => {
	const labels = ['DirecotoryName'] //nome diretorio com as fotos para comparação
	return Promise.all(labels.map(async label  => {
		const descriptions = []
		for (let i = 1; i <= 5; i++) {
			const img = await faceapi.fetchImage(`/assets/lib/face-api/labels/${label}/${i}.png`)//caminho das fotos
			const detections = await faceapi
				.detectSingleFace(img)
				.withFaceLandmarks()
				.withFaceDescriptor()
			descriptions.push(detections.descriptor)
		}
		return new faceapi.LabeledFaceDescriptors(label, descriptions)
	}))
}
Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri('/assets/lib/face-api/models'),
	faceapi.nets.faceLandmark68Net.loadFromUri('/assets/lib/face-api/models'),
	faceapi.nets.faceRecognitionNet.loadFromUri('/assets/lib/face-api/models'),
	faceapi.nets.faceExpressionNet.loadFromUri('/assets/lib/face-api/models'),
	faceapi.nets.ageGenderNet.loadFromUri('/assets/lib/face-api/models'),
	faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/lib/face-api/models'),
]).then(startVideo)


cam.addEventListener('play', async () => {
	const canvas = faceapi.createCanvasFromMedia(cam)
	const canvasSize = {
		width: cam.width,
		height: cam.height
	}
	const labels = await loadLabels()
	faceapi.matchDimensions(canvas, canvasSize)
	document.body.appendChild(canvas)
	setInterval(async () => {
		const detections = await faceapi
			.detectAllFaces(
				cam,
				new faceapi.TinyFaceDetectorOptions()
			)
			.withFaceLandmarks()
			.withFaceExpressions()
			.withAgeAndGender()
			.withFaceDescriptors()
		const resizedDetections = faceapi.resizeResults(detections, canvasSize)
		const faceMatcher = new faceapi.FaceMatcher(labels, 0.6)
		const results = resizedDetections.map(d => 
			faceMatcher.findBestMatch(d.descriptor)
		)
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
		faceapi.draw.drawDetections(canvas, resizedDetections)
		faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
		faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
		//criar detecção genero, idade, ..
		resizedDetections.forEach(detections => {
			const { age, gender, genderProbability } = detections
			new faceapi.draw.DrawTextField([
				`${parseInt(age, 10)} years`,
				`${gender} (${parseInt(genderProbability * 100, 10)})`
			], detections.detection.box.topRight).draw(canvas)
		})
	results.forEach((result, index) => {
		const box = resizedDetections[index].detection.box
		const { label, distance } =result
		new faceapi.draw.DrawTextField([
			`${label} (${distance})`
		], box.bottomRight).draw(canvas)
	})
	}, 100)
})

