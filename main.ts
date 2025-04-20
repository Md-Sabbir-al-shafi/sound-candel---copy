input.onSound(DetectedSound.Loud, function () {
    Power_of_FU = !(Power_of_FU)
})
let flame2 = 0
let flame = 0
let Power_of_FU = false
Power_of_FU = true
// led matrix position is plot and unplot
basic.forever(function () {
    if (Power_of_FU) {
        flame = randint(1, 3)
        flame2 = randint(1, 3)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
        if (flame != 2 && flame2 != 2) {
            led.unplot(2, 0)
            led.plot(flame, 0)
            basic.pause(50)
            led.plot(flame, 1)
            basic.pause(100)
            led.unplot(2, 1)
            basic.pause(50)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
