import { default as ship } from "../src/ship";
import {  } from "../src/gameboard";
describe('ship test', () => {
    const shipOBJ = new ship(3);
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
    
});