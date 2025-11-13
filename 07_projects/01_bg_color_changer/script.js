const boxes = document.querySelectorAll('.color')

boxes.forEach((box) => {
    box.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target)
        if (e.target.id === "gray") {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "green") {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "purple") {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "white") {
            document.body.style.backgroundColor = e.target.id
        }
    })
})