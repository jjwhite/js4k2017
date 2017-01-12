Game.player = function (_name, _dex, _int, _wis, _str, _cha) {

    var p = Game.creature.call(this, _name, 15, 14, "weapon_placeholder");

    p.lvl = 1;
    p.dex = _dex;
    p.int = _int;
    p.wis = _wis;
    p.str = _str;
    p.cha = _cha;
    
    p.GetBonus = function(ability){
            return Math.floor((ability - 10) / 2); 
        },

    p.AbilityCheck = function (ability) {
            return rollDie(20) + this.GetBonus(ability);
        }
    
    return p;
}