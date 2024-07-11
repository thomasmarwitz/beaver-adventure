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


const BASE_GREEN = "#20963f";
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
const CORN = {"text": "🌾", "color": "#4d3300"}
const WATER = {"text": "🌊", "color": WATER_COLOR}
const PATH = {"text": "", "color": PATH_COLOR}
const FLOWER = {"text": "🌸", "color": BASE_GREEN}
const BUSH = {"text": "🌿", "color": BASE_GREEN}
const ROCK = {"text": "🪨", "color": BASE_GREEN}
const LOG = {"text": "🌳", "color": BASE_GREEN}
const SQUIRREL = {"text": "🐿️", "color": BASE_GREEN}
const CARROT = {"text": "🥕", "color": "#4d3300"}
const BRICK = {"text": "🧱", "color": BASE_GREEN}

// more emoji ideas
/*
Garden: 🌷🌹🥀🌺🌸🪻🌼🌻
Water:
Fish: 🐟, 🐠 (colorful fish)
Water Plants: 🌿 (seaweed), 🪷 (lily)

*/

const COW = {"text": "🐄", "color": BASE_GREEN};

const HOME_SCENE = new Scene(
    [
        [TREE, TREE, TREE, TREE, TREE, TREE, TREE, TREE, LAWN, PATH, TREE, TREE, TREE, TREE, TREE, TREE],
        [TREE, TREE, TREE, TREE, TREE, TREE, TREE, TREE, LAWN, PATH, LOGS, LOGS, LOGS, LOGS, LOGS, LOGS],
        [TREE, TREE, WALL, WALL, WALL, WALL, WALL, WALL, LAWN, PATH, LOGS, LAWN, GRASS, COW, LAWN, LOGS],
        [TREE, TREE, WALL, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, PATH, LOGS, GRASS, COW, LAWN, LAWN, LOGS],
        [TREE, TREE, WALL, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, PATH, LOGS, LAWN, LAWN, LAWN, COW, LOGS],
        [TREE, TREE, WALL, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, PATH, LOGS, LOGS, LOGS, LOGS, LOGS, LOGS],
        [LAWN, LAWN, WALL, WALL, DOOR, WALL, WALL, WALL, LAWN, PATH, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN],
        [PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN],
        [TREE, TREE, FLOWER, FLOWER, PATH, LAWN, LAWN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, TREE, TREE],
        [TREE, TREE, FLOWER, FLOWER, PATH, LAWN, LAWN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, TREE, TREE],
        [TREE, TREE, BUSH, BUSH, PATH, LAWN, LAWN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, TREE, TREE],
        [TREE, TREE, BUSH, BUSH, PATH, LAWN, LAWN, CORN, CORN, CORN, CORN, CARROT, CARROT, CARROT, TREE, TREE],
        [TREE, TREE, TREE, TREE, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, WATER, WATER, WATER, WATER],
        [TREE, TREE, ROCK, LOG, SQUIRREL, PATH, PATH, LAWN, LAWN, LAWN, LAWN, WATER, WATER, WATER, WATER, WATER],
        [TREE, TREE, TREE, TREE, TREE, PATH, PATH, LAWN, LAWN, LAWN, LAWN, WATER, WATER, WATER, WATER, WATER],
        [TREE, TREE, TREE, TREE, TREE, PATH, PATH, LAWN, LAWN, LAWN, LAWN, WATER, WATER, WATER, WATER, WATER],
    ],
    {x: 3, y: 3},
    "Welcome to your cozy beaver lodge! Explore your home, garden, and the surrounding nature."
);