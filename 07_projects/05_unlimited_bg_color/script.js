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

// Create variable null to hold the setInterval() funtion to clearInterval
let intervalId = null;

// When Start Click startColorChanger execute
const startColorChanger = () => {

    let changeColor = () => {
        document.body.style.backgroundColor = randomColor();
    }
   
    if (intervalId === null) {
        intervalId = setInterval(changeColor, 1000); //change color reference
    }

}

const stopColorChanger = () => {
    clearInterval(intervalId);
    intervalId = null
}

document.querySelector('.start').addEventListener('click', startColorChanger);
document.querySelector('.stop').addEventListener('click', stopColorChanger);
