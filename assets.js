class Scene {
    constructor(grid, player, dialog) {
        this.grid = grid;
        this.player = player;
        this.dialog = dialog;
    }

    setCell(x, y, content) {
        this.grid[y][x] = content;
    }
}

function rep(value, times) {
    return Array.from({length: times}, () => value);
}


const BASE_GREEN = "#7cba3e";
const WALL_COLOR = "#8b4513";
const INSIDE_COLOR = "#d2a679";
const PATH_COLOR = "#c2b280";
const WATER_COLOR = "#4fa4f4";

const GRASS = {"text": "🌱", "color": BASE_GREEN}
const LAWN = {"text": "", "color": BASE_GREEN}
const TREE = {"text": "🌲", "color": BASE_GREEN}
const WALL = {"text": "", "color": WALL_COLOR}
const DOOR = {"text": "🚪", "color": WALL_COLOR}
const WINDOW = {"text": "🪟", "color": WALL_COLOR}
const BED = {"text": "🛌", "color": INSIDE_COLOR}
const INSIDE = {"text": "", "color": INSIDE_COLOR}
const CHAIR = {"text": "🪑", "color": INSIDE_COLOR}
const LOGS = {"text": "🪵", "color": BASE_GREEN}
const CORN = {"text": "🌾", "color": BASE_GREEN}
const WATER = {"text": "🌊", "color": WATER_COLOR}
const PATH = {"text": "", "color": PATH_COLOR}
const FLOWER = {"text": "🌸", "color": BASE_GREEN}
const BUSH = {"text": "🌿", "color": BASE_GREEN}
const ROCK = {"text": "🪨", "color": BASE_GREEN}
const LOG = {"text": "🌳", "color": BASE_GREEN}
const SQUIRREL = {"text": "🐿️", "color": BASE_GREEN}
const CARROT = {"text": "🥕", "color": BASE_GREEN}
const BRICK = {"text": "🧱", "color": BASE_GREEN}

// more emoji ideas
/*
Garden: 🌷🌹🥀🌺🌸🪻🌼🌻
Water:
Fish: 🐟, 🐠 (colorful fish)
Water Plants: 🌿 (seaweed), 🪷 (lily)

*/

const COW = {"text": "🐄", "color": BASE_GREEN};
const FENCE = {"text": "🚧", "color": BASE_GREEN};

const HOME_SCENE = new Scene(
    [
        [TREE, TREE, TREE, TREE, TREE, TREE, PATH, TREE, TREE, TREE, TREE, TREE, TREE, TREE, TREE, TREE],
        [TREE, WALL, WALL, WALL, WALL, WALL, PATH, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE],
        [TREE, WALL, INSIDE, INSIDE, INSIDE, WALL, PATH, FENCE, LAWN, LAWN, COW, LAWN, LAWN, COW, LAWN, FENCE],
        [TREE, WALL, INSIDE, BED, INSIDE, WALL, PATH, FENCE, LAWN, COW, LAWN, LAWN, LAWN, LAWN, LAWN, FENCE],
        [TREE, WALL, INSIDE, INSIDE, CHAIR, WALL, PATH, FENCE, LAWN, LAWN, LAWN, COW, LAWN, LAWN, COW, FENCE],
        [TREE, WALL, INSIDE, INSIDE, INSIDE, DOOR, PATH, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE, FENCE],
        [TREE, WALL, WALL, WINDOW, WALL, WALL, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH],
        [TREE, FLOWER, FLOWER, FLOWER, FLOWER, FLOWER, PATH, CORN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, CARROT],
        [TREE, FLOWER, FLOWER, FLOWER, FLOWER, FLOWER, PATH, CORN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, CARROT],
        [TREE, BUSH, BUSH, BUSH, BUSH, BUSH, PATH, CORN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, CARROT],
        [TREE, BUSH, BUSH, BUSH, BUSH, BUSH, PATH, CORN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, CARROT],
        [TREE, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH],
        [TREE, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, WATER, WATER, WATER, WATER, LAWN, LAWN, LAWN, LAWN, LAWN],
        [TREE, LAWN, ROCK, LOG, SQUIRREL, LAWN, LAWN, WATER, WATER, WATER, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN],
        [LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, WATER, WATER, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN],
        [LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN],
    ],
    {x: 2, y: 2},
    "Welcome to your cozy beaver lodge! Explore your home, garden, and the surrounding nature."
);