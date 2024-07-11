function typeWriter(text, element, speed = 20, clear = true) {
    if (clear) element.textContent = '';
    let i = 0;
    return new Promise((resolve) => {
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}


function moveBeavers(game, path, speed = 500, type = "object") {
    if (type === "tuple") {
        console.log(path)
        console.log("Remapping path of type tuple to path of type object.")
        path = path.map((t) => ({x: t[0], y: t[1]}));
        console.log("Remapping done: ", path);
    }

    const beaver1 = new Player(path[0].x, path[0].y);
    const beaver2 = new Player(path[0].x, path[0].y);
    let step = 0;

    return new Promise((resolve) => {
        function move() {
            if (step < path.length) {
                game.getCellAt(beaver1.x, beaver1.y).setContent(HOME_SCENE.grid[beaver1.y][beaver1.x]);
                game.getCellAt(beaver2.x, beaver2.y).setContent(HOME_SCENE.grid[beaver2.y][beaver2.x]);
                
                beaver1.x = path[step].x;
                beaver1.y = path[step].y;
                
                if (step > 0) {
                    beaver2.x = path[step - 1].x;
                    beaver2.y = path[step - 1].y;
                }
                
                game.getCellAt(beaver1.x, beaver1.y).setPlayer(beaver1);
                game.getCellAt(beaver2.x, beaver2.y).setPlayer(beaver2);

                if (step === path.length - 2) {
                    beaver1.setFacingRight(false);
                }
                
                step++;
                setTimeout(move, speed);
            } else {
                resolve();
            }
        }
        move();
    });
}