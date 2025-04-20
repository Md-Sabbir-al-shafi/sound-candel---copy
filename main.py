flame = 0
# led matrix position is plot and unplot

def on_forever():
    global flame
    basic.show_leds("""
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        """)
    flame = randint(0, 3)
    if flame != 2:
        led.unplot(2, 0)
        led.plot(flame, 0)
        basic.pause(200)
basic.forever(on_forever)
