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
const WALL = {"text": "🟫", "color": WALL_COLOR}
const DOOR = {"text": "🚪", "color": WALL_COLOR}
const WINDOW = {"text": "🪟", "color": WALL_COLOR}
const BED = {"text": "🛌", "color": INSIDE_COLOR}
const INSIDE = {"text": "", "color": INSIDE_COLOR}
const CHAIR = {"text": "🪑", "color": INSIDE_COLOR}
const LOGS = {"text": "🪵", "color": BASE_GREEN}
const CORN = {"text": "🌾", "color": "#4d3300"}
const WATER = {"text": "🌊", "color": WATER_COLOR}
const PATH = {"text": "", "color": PATH_COLOR}
const BUSH = {"text": "🌿", "color": BASE_GREEN}
const ROCK = {"text": "🪨", "color": BASE_GREEN}
const LEAF_TREE = {"text": "🌳", "color": BASE_GREEN}
const SQUIRREL = {"text": "🐿️", "color": BASE_GREEN}
const CARROT = {"text": "🥕", "color": "#4d3300"}
const BRICK = {"text": "🧱", "color": BASE_GREEN}
const WATER_LILY = {"text": "🪷", "color": WATER_COLOR}
const FISH = {"text": "🐟", "color": WATER_COLOR}
const COLORFUL_FISH = {"text": "🐠", "color": WATER_COLOR}

const FLOWER = {"text": "🌸", "color": BASE_GREEN}
const ROSE = {"text": "🌹", "color": BASE_GREEN}
const TULIP = {"text": "🌷", "color": BASE_GREEN}
const DAISY = {"text": "🌼", "color": BASE_GREEN}
const SUNFLOWER = {"text": "🌻", "color": BASE_GREEN}
const VIOLET = {"text": "🪻", "color": BASE_GREEN}
const COW = {"text": "🐄", "color": BASE_GREEN};
const STATUE = {"text": "🗿", "color": BASE_GREEN};
const FOUNTAIN = {"text": "⛲", "color": BASE_GREEN};

const HOME_SCENE = new Scene(
    [
        [TREE, TREE, TREE, LEAF_TREE, TREE, TREE, TREE, TREE, TREE, PATH, TREE, TREE, TREE, TREE, BUSH, TREE],
        [TREE, TREE, ROCK, TREE, BUSH, TREE, LEAF_TREE, TREE, LAWN, PATH, LOGS, LOGS, LOGS, LOGS, LOGS, LOGS],
        [TREE, TREE, WALL, WALL, WALL, WALL, WALL, WALL, LAWN, PATH, LOGS, LAWN, GRASS, COW, LAWN, LOGS],
        [TREE, LEAF_TREE, WALL, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, PATH, LOGS, GRASS, COW, LAWN, LAWN, LOGS],
        [TREE, ROCK, WALL, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, PATH, LOGS, LAWN, LAWN, LAWN, COW, LOGS],
        [LEAF_TREE, TREE, WALL, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, PATH, LOGS, LOGS, LOGS, LOGS, LOGS, LOGS],
        [TREE, LAWN, WALL, WALL, DOOR, WALL, WALL, WALL, LAWN, PATH, LAWN, CARROT, CARROT, CARROT, CARROT, LAWN],
        [PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, LAWN, CARROT, CARROT, CARROT, CARROT, LAWN],
        [TREE, LAWN, LAWN, LAWN, PATH, LAWN, GRASS, VIOLET, LAWN, PATH, PATH, PATH, PATH, PATH, PATH, LAWN],
        [TREE, LOGS, LAWN, LAWN, PATH, TULIP, FOUNTAIN, GRASS, LAWN, LAWN, LAWN, CORN, CORN, CORN, CORN, LAWN],
        [TREE, LEAF_TREE, LAWN, LAWN, PATH, LAWN, SUNFLOWER, LAWN, FLOWER, GRASS, LAWN, CORN, CORN, CORN, CORN, LAWN],
        [TREE, TREE, LAWN, LAWN, PATH, LAWN, LAWN, GRASS, LAWN, DAISY, LAWN, CORN, CORN, CORN, CORN, LAWN],
        [TREE, ROCK, LAWN, LAWN, PATH, PATH, PATH, PATH, LAWN, LAWN, LAWN, LAWN, WATER, WATER, WATER, WATER],
        [TREE, SQUIRREL, ROCK, LEAF_TREE, LAWN, LAWN, LAWN, PATH, LAWN, GRASS, LAWN, WATER, WATER, WATER, WATER, COLORFUL_FISH],
        [TREE, LEAF_TREE, TREE, TREE, TREE, LAWN, LAWN, PATH, GRASS, STATUE, GRASS, WATER, WATER, WATER_LILY, WATER, WATER],
        [TREE, TREE, TREE, TREE, TREE, BUSH, LAWN, PATH, LAWN, GRASS, LAWN, WATER, WATER, WATER, FISH, WATER],
    ],
    {x: 4, y: 4},
    "Welcome to your cozy beaver lodge! Explore your home, garden, and the surrounding nature."
);