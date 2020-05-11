let total = 0
function factorial_i (value: number) {
    if (value < 0) {
        return -1
    }
    total = 1
    for (let index = 0; index <= Math.floor(value) - 1; index++) {
        total = total * (index + 1)
    }
    return total
}
function factorial_r (value: number): any {
    if (value < 0) {
        return -1
    } else if (value < 1) {
        return 1
    } else {
        return value * factorial_r(value - 1)
    }
}
basic.forever(function () {
    basic.showNumber(factorial_r(3))
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(factorial_i(4))
    basic.pause(2000)
})
