Game.weapon = function (_name, _atkBonus, _dmgDice, _dmgDiceNum, _dmgBonus) {
    var p = {
        name: _name,
        dmgDice: _dmgDice,
        dmgDiceNum: _dmgDiceNum,
        dmgBonus: _dmgBonus,
        atkBonus: _atkBonus,

        Attack: function () {
            return rollDie(20) + this.atkBonus
        },

        Damage: function () {
            var dmg = 0;
            for (x = 0; x < this.dmgDiceNum; x++)
                dmg += rollDie(this.dmgDice);

            return dmg + this.dmgBonus;
        }
    }


    return p;

}