let hour = 0
let minute = 0
let second = 0
let millisecond = 0

let cron;

document.formMain.start.onclick = () => start()
document.formMain.pause.onclick = () => pause()
document.formMain.reset.onclick = () => reset()

function start() {
    pause()
    cron = setInterval(() => {
        timer()
    }, 10)
    console.log('start')
}
function pause() {
    clearInterval(cron)
    console.log('pause')
}

function reset() {
    
    hour, minute, second, millisecond = 0
    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second').innerText = '00'
    document.getElementById('millisecond').innerText = '000'

    console.log('reset')
}
function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0
        second++
    }
    if (second == 60) {
        second = 0
        minute++
    }
    if (minute == 60) {
        minute = 0
        hour++
    }

    document.getElementById('hour').innerText = returnData(hour)
    document.getElementById('minute').innerText =  returnData(minute)
    document.getElementById('second').innerText = returnData(second)
    document.getElementById('millisecond').innerText = returnData(millisecond)
}
function returnData(input) {
    return input > 10 ? input : `0${input}`
}
