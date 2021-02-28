

function calc() {
    let w = document.getElementById('inputWeigth').value
    let h = document.getElementById('inputHeight').value
    let txt = ''
    if (w == 0 || h == 0) {
        alert('fill in all fields')
    } else {
        let BMI = w / (h * h)

        if (BMI <= 18.5) {
            txt = `Underweight ${BMI}`
        }
        else if (BMI <= 24.9) {
            txt = `Healthy ${BMI}`
        }
        else if (BMI <= 29.9) {
            txt = `Overweight ${BMI}`
        }
        else if (BMI <= 34.9) {
            txt = `Obesity ${BMI}`
        }
        else if (BMI <= 39.9) {
            txt = `Obesity clinic ${BMI}`
        }
        else {
            txt = `Morbid obesity ${BMI}`
        }
    }
    document.getElementsByClassName('result')[0].innerHTML = txt
}

