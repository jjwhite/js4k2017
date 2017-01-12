Game.creature = function (_name, _hp, _ac, _wpn) {
    var p = {
        name: _name,
        maxHp: _hp,
        curHp: _hp,
        ac: _ac,
        wpn: _wpn,

        TakeDamage: function (amt) {
            this.curHp = (this.curHp - amt < 0) ? 0 : this.curHp - amt;
        }
    }

    return p;
}