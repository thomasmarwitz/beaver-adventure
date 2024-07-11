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
Garden: 🌷
🌹
🥀
🌺
🌸
🪻
🌼
🌻

Water:
Fish: 🐟, 🐠 (colorful fish)
Water Plants: 🌿 (seaweed), 🪷 (lily)

*/

const HOME_SCENE = new Scene(
    [
        [TREE, TREE, BRICK, LAWN, CORN, CORN, CORN, CORN, CORN, CORN, LAWN, LAWN, TREE, TREE, TREE, WATER],
        [TREE, LAWN, LAWN, LAWN, CARROT, CARROT, CORN, CORN, CORN, CORN, LAWN, LAWN, LAWN, TREE, WATER, WATER],
        [LAWN, LAWN, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, LAWN, LAWN, LAWN, WATER, WATER],
        [LAWN, LAWN, WALL, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, LAWN, PATH, PATH, WATER],
        [LAWN, PATH, WALL, INSIDE, BED, INSIDE, INSIDE, INSIDE, CHAIR, INSIDE, WALL, LAWN, PATH, PATH, LAWN, LAWN],
        [LAWN, PATH, WALL, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, PATH, PATH, LAWN, LAWN, TREE],
        [TREE, PATH, WINDOW, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, PATH, LAWN, LAWN, TREE, TREE],
        [TREE, PATH, WALL, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, PATH, LAWN, TREE, TREE, CORN],
        [CORN, PATH, WALL, DOOR, WALL, WALL, WALL, DOOR, WALL, WALL, WALL, PATH, LAWN, LAWN, CARROT, CARROT],
        [CORN, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, LAWN, FLOWER, FLOWER, CORN],
        [CORN, CORN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, CORN, FLOWER, FLOWER, CORN],
        [CORN, CORN, CORN, LAWN, LAWN, TREE, TREE, LAWN, LAWN, TREE, LAWN, FLOWER, FLOWER, CORN, CORN, CORN],
        [CORN, CORN, CORN, CORN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, FLOWER, FLOWER, FLOWER, CORN, WATER, WATER],
        [TREE, CORN, CORN, CORN, CORN, LAWN, LAWN, LAWN, LAWN, CORN, CORN, CORN, CORN, WATER, WATER, WATER],
        [TREE, TREE, CORN, CORN, CORN, CORN, CORN, CORN, CORN, CORN, CORN, CORN, WATER, WATER, WATER, TREE],
        [TREE, TREE, TREE, WATER, WATER, WATER, WATER, WATER, WATER, WATER, WATER, WATER, WATER, TREE, TREE, TREE],
    ],
    {x: 4, y: 4},
    "Welcome to your cozy beaver lodge! You can explore your home and the surrounding nature."
);
