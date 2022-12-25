const playerBoard = document.getElementById("player-board")
const computerBoard = document.getElementById("computer-board")

export let grid = () => {
    for (let i = 0; i < 100; i++) {
        let square = document.createElement("div");
        square.dataset.elementNum = i;
        playerBoard.append(square);
    }
};
