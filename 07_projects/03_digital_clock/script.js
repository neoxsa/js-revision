const display = document.querySelector('.time')


setInterval(() => {
    const time = new Date();
    const currentTime = time.toLocaleTimeString()
    display.innerHTML = `${currentTime}`
}, 1000);