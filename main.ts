radio.onReceivedString(function (receivedString) {
    if (receivedString == "step1") {
        bascule = 1
    }
})
let bascule = 0
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.hsl(0, 100, 2))
bascule = 0
basic.forever(function () {
    if (bascule == 1 || input.buttonIsPressed(Button.A)) {
        bascule = 1
        strip.showColor(neopixel.hsl(255, 100, 100))
        while (bascule == 1) {
            if (input.isGesture(Gesture.Shake)) {
                radio.sendString("step2")
                strip.showColor(neopixel.hsl(0, 100, 2))
                bascule = 0
            }
        }
    }
})
