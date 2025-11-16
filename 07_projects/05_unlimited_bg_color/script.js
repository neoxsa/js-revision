// Random Color

let randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color;
}
console.log(randomColor());

let intervalId = null;

const startColorChanger = () => {

    let changeColor = () => {
        document.body.style.backgroundColor = randomColor();
    }

    if (intervalId === null) {
        intervalId = setInterval(changeColor, 1000);
    }
}

const stopColorChanger = () => {
    clearInterval(intervalId);
    intervalId = null
}

document.querySelector('.start').addEventListener('click', startColorChanger);
document.querySelector('.stop').addEventListener('click', stopColorChanger);
