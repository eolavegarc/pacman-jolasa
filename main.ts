let janaria2: game.LedSprite = null
let pacman = game.createSprite(randint(0, 4), randint(0, 4))
let janaria = game.createSprite(4, 2)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    if (pacman.isTouching(mamua)) {
        game.gameOver()
        game.setScore(1)
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria2 = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
basic.forever(function () {
    if (pacman.isTouching(mamua)) {
        game.gameOver()
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria = game.createSprite(randint(0, 4), randint(0, 4))
        janaria.set(LedSpriteProperty.Brightness, 10)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        basic.pause(200)
        pacman.move(1)
    }
    if (input.acceleration(Dimension.X) < -200) {
        pacman.move(-1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        basic.pause(200)
        pacman.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        basic.pause(200)
        pacman.change(LedSpriteProperty.Y, -1)
    }
})
basic.forever(function () {
    basic.pause(500)
    mamua.move(1)
    mamua.ifOnEdgeBounce()
})
