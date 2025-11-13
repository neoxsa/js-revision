const form = document.querySelector('form')

// Outside the eventListener on height or weight input will gives empty value
//  const heightInput = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const heightValue = parseInt(document.querySelector('#height').value)
    const weightValue = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector(".result")

    if (!heightValue || heightValue < 0 || isNaN(heightValue)) {
        result.innerHTML = "Please enter the valid height"
    } else if (!weightValue || weightValue < 0 || isNaN(weightValue)) {
        result.innerHTML = "Please enter the valid weight"
    } else {
        const bmi = ((weightValue / (heightValue * heightValue / 10000)).toFixed(2))

        if (bmi < 18.6) {
            result.innerHTML = `Underweight, Your BMI = ${bmi}`
        }
        else if (bmi >= 18.6 || bmi <= 24.9) {
            result.innerHTML = `Normal Weight, Your BMI = ${bmi}`
        } else if (bmi > 24.9) {
            result.innerHTML = `Overweight, Your BMI = ${bmi}`
        }
    }

})