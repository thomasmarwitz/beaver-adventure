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

const LAWN = {"text": "", "color": "#7cba3e"}
const TREE = {"text": "🌲", "color": "#4a7c28"}
const WALL = {"text": "", "color": "#8b4513"}
const DOOR = {"text": "🚪", "color": "#8b4513"}
const WINDOW = {"text": "🪟", "color": "#8b4513"}
const BED = {"text": "🛌", "color": "#d2a679"}
const INSIDE = {"text": "", "color": "#d2a679"}
const CHAIR = {"text": "🪑", "color": "#d2a679"}
const TABLE = {"text": "🪵", "color": "#d2a679"}
const CORN = {"text": "🌾", "color": "#f0e68c"}
const WATER = {"text": "", "color": "#4fa4f4"}
const PATH = {"text": "", "color": "#c2b280"}

const HOME_SCENE = new Scene(
    [
        [TREE, TREE, LAWN, LAWN, CORN, CORN, CORN, CORN, CORN, CORN, LAWN, LAWN, TREE, TREE, TREE, WATER],
        [TREE, LAWN, LAWN, LAWN, CORN, CORN, CORN, CORN, CORN, CORN, LAWN, LAWN, LAWN, TREE, WATER, WATER],
        [LAWN, LAWN, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, LAWN, LAWN, LAWN, WATER, WATER],
        [LAWN, LAWN, WALL, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, LAWN, LAWN, PATH, PATH, WATER],
        [LAWN, PATH, WALL, INSIDE, BED, INSIDE, INSIDE, TABLE, CHAIR, INSIDE, WALL, LAWN, PATH, PATH, LAWN, LAWN],
        [LAWN, PATH, WALL, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, PATH, PATH, LAWN, LAWN, TREE],
        [TREE, PATH, WINDOW, INSIDE , INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, PATH, LAWN, LAWN, TREE, TREE],
        [TREE, PATH, WALL, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, INSIDE, WALL, PATH, LAWN, TREE, TREE, CORN],
        [CORN, PATH, WALL, DOOR, WALL, WALL, WALL, DOOR, WALL, WALL, WALL, PATH, LAWN, LAWN, CORN, CORN],
        [CORN, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, LAWN, CORN, CORN, CORN],
        [CORN, CORN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, CORN, CORN, CORN, CORN],
        [CORN, CORN, CORN, LAWN, LAWN, TREE, TREE, LAWN, LAWN, TREE, LAWN, CORN, CORN, CORN, CORN, CORN],
        [CORN, CORN, CORN, CORN, LAWN, LAWN, LAWN, LAWN, LAWN, LAWN, CORN, CORN, CORN, CORN, WATER, WATER],
        [TREE, CORN, CORN, CORN, CORN, LAWN, LAWN, LAWN, LAWN, CORN, CORN, CORN, CORN, WATER, WATER, WATER],
        [TREE, TREE, CORN, CORN, CORN, CORN, CORN, CORN, CORN, CORN, CORN, CORN, WATER, WATER, WATER, TREE],
        [TREE, TREE, TREE, WATER, WATER, WATER, WATER, WATER, WATER, WATER, WATER, WATER, WATER, TREE, TREE, TREE],
    ],
    {x: 4, y: 4},
    "Welcome to your cozy beaver lodge! You can explore your home and the surrounding nature."
);
