function verify() {
    let seat = Number(elementSeat.value)

    if (!Number.isInteger(seat) || seat < 1 || seat > 54) {
        result = "Такого места в плацкартном вагоне нет"
    }
    else {
        let level, place

        if (seat % 2 === 1) {
            level = "нижнее"
        }
        else {
            level = "верхнее"
        }

        if (seat <= 36) {
            place = "в купе"
        }
        else {
            place = "боковое"
        }

        result = "Место " + seat + ": " + level + ", " + place
    }
    document.getElementById("result").value = result
}

let result

const elementSeat = document.getElementById("seat")
const elementVerify = document.getElementById("verify")

elementVerify.addEventListener("click", verify)
