'use strict'

describe('Weapon component', function () {

    it('properties are set correctly', function () {
        var w = new Game.weapon("test", 5, 4, 2, 1);
        expect(w.name).toEqual("test");
        expect(w.dmgDice).toEqual(4);
        expect(w.dmgDiceNum).toEqual(2);
        expect(w.dmgBonus).toEqual(1);
        expect(w.atkBonus).toEqual(5);
    });

});