const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const dateEl = document.querySelector('.date')
const timeEl = document.querySelector('.time')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function startTheClock() {
    const time = new Date()
    const hours = time.getHours()
    const hrs = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const day = time.getDay()
    const date = time.getDate()
    const month = time.getMonth()
    const am_pm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hrs, 0, 11, 0, 360)}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hrs < 12 ? `0${hrs}` : `${hrs}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`} ${am_pm}`

    dateEl.innerHTML = `${date} ${months[month]}, ${days[day]}`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(startTheClock, 1000)