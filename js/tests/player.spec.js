'use strict';

describe('Player component', function () {

    it('is named test', function () {
        var testChar = new Game.player("test");
        expect(testChar.name).toEqual("test");
    });

    it('has correct stats', function () {
        var testChar = new Game.player("test", 1, 2, 3, 4, 5);
        expect(testChar.dex).toEqual(1);
        expect(testChar.int).toEqual(2);
        expect(testChar.wis).toEqual(3);
        expect(testChar.str).toEqual(4);
        expect(testChar.cha).toEqual(5);
    });

    it('loses health when taking damage', function () {
        var testChar = Game.player("test", 1, 2, 3, 4, 5);
        testChar.TakeDamage(5);
        expect(testChar.curHp).toEqual(10);
    });

    it('health should not drop below zero', function () {
        var testChar = Game.player("test", 1, 2, 3, 4, 5);
        testChar.TakeDamage(20);
        expect(testChar.curHp).toEqual(0);
    });

    it('return correct bonus', function () {
        var testChar = Game.player("test", 20, 1, 1, 4, 5);
        expect(testChar.GetBonus(testChar.dex)).toEqual(5);
        expect(testChar.GetBonus(testChar.int)).toEqual(-5);
    });

});