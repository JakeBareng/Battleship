import { default as ship } from "../src/ship";
import { default as Gameboard } from "../src/gameboard";
import { player, computer } from "../src/player";
describe('ship test', () => {
    const shipOBJ = ship(3);
    test('ship hits', () => {
        shipOBJ.hit();
        shipOBJ.hit();
        expect(shipOBJ.isSunk()).toBe(false);
        shipOBJ.hit();
        expect(shipOBJ.isSunk()).toBe(true);
        shipOBJ.hit();
        expect(shipOBJ.isSunk()).toBe(true);
    });
});

describe('gameboard test', () => {
    const gameboard = Gameboard();
    test('out of bounds on horizontal', () => {
        expect(gameboard.placeShip(9,0,2,false)).toBe(false);        
    });
    test('out of bounds on verticle', () => {
        expect(gameboard.placeShip(0,9,2,true)).toBe(false);        
    });
    test('place 1 ship on (5,5) size 3 and verticle', () => {
        expect(gameboard.placeShip(5,5,3,true)).toBe(true);
    });
    test('receive attack on 5,5', () => {
        expect(gameboard.receiveAttack(5,5)).toBe(true);
    });
    test('test allSunken, 1 ship exists', () => {
        expect(gameboard.allSunken()).toBe(false);
    });
    test('test allSunken, all ships sunken', () => {
        gameboard.receiveAttack(5,6);
        gameboard.receiveAttack(5,7);
        expect(gameboard.allSunken()).toBe(true);
    });
    test('touching bounds on horizontal', () => {
        expect(gameboard.placeShip(8,0,2,false)).toBe(true);        
    });
    test('touching bounds on verticle', () => {
        expect(gameboard.placeShip(0,8,2,true)).toBe(true);        
    });
    test('placement on top of boat', () => {
        expect(gameboard.placeShip(8,0,2,false)).toBe(false);
    });
});

describe('test Player.js', () => {
    const computerBoard = Gameboard();
    const playerBoard = Gameboard();
    
    player.board = playerBoard;
    player.opponentBoard = computerBoard;
    computer.board = computerBoard;
    computer.opponentBoard = playerBoard;

    computer.placeShip(0,0,3,true);
    player.attack(0,0);
    player.attack(0,1);
    expect(player.hasWon()).toBe(false);
    player.attack(0,2);
    expect(player.hasWon()).toBe(true);
});