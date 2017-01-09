Game.player = function (_name, _dex, _int, _wis, _str, _cha) {

    var p = {
        name : _name,
        maxHp: 15,
        curHp: 15,
        lvl : 1,
        dex: _dex,
        int: _int,
        wis: _wis,
        str: _str,
        cha: _cha,
        ac: 14,

        TakeDamage: function (amt) {
            this.curHp = (this.curHp - amt < 0) ? 0 : this.curHp - amt;
        },

        GetBonus: function(ability){
            return Math.floor((ability - 10) / 2); 
        },

        AbilityCheck: function (ability) {
            return rollDie(20) + this.GetBonus(ability);
        }
    }

    return p;
}