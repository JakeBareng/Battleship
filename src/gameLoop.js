import Gameboard from './gameboard';
import { player, computer } from './player';

const computerBoard = new Gameboard();
const playerBoard = new Gameboard();

player.board = playerBoard;
player.opponentBoard = computerBoard;
computer.board = computerBoard;
computer.opponentBoard = playerBoard;
