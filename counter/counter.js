let number = document.getElementById("number")
let colors = document.querySelector("p.number")
let value = Number(number.textContent)


function decrease() {
    value--
    number.innerHTML = `${value}`
    numberColor(value)
}
function reset() {
    value = 0
    number.innerHTML = `${value}`
    numberColor(value)
}
function increase() {
    value++
    number.innerHTML = `${value}`
    numberColor(value)
}
function numberColor(valueColor) {
    if (valueColor > 0) {
        colors.style.color = "green"
    } else if (valueColor < 0) {
        colors.style.color = "red"
    } else {
        colors.style.color = "black"
    }
}
