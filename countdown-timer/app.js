const countdownEl = document.getElementById('countdown')

setInterval(() => {

    const currentTime = new Date().getTime()

    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const currentDate = new Date().getDate()

    const currentHours = new Date().getHours()
    const currentMinutes = new Date().getMinutes()

    const countdownTime = new Date(currentYear, currentMonth, currentDate + 7, currentHours, currentMinutes, 0).getTime()

    const distance = countdownTime - currentTime

    const days = Math.floor(distance / (24 * 60 * 60 * 1000))

    const hours = Math.floor((distance) % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))

    const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000))

    const seconds = Math.floor((distance % (60 * 1000)) / (1000))

    countdownEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    if (distance < 0) {
        countdownEl.innerHTML = 'The timer has ended'
    }

}, 1000)
