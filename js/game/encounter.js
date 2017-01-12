Game.encounter = function (_player, _enemy) {
    var p = {
        player: _player,
        enemy: _enemy,
        attacking: _player,
        defending: _enemy,
        completed: false,

        Turn: function () {
            var atk;
            var dmg = 0;
            atk = this.attacking.wpn.Attack();
            if (atk >= this.defending.ac) {
                dmg = this.attacking.wpn.Damage();
                this.defending.TakeDamage(dmg);
            }

            this.PrintTurn(atk, dmg);
            this.CheckStatus();
            
        },

        CheckStatus: function () {
            if (this.enemy.curHp == 0) {
                this.completed = true;
                console.log(this.enemy.name + " Dies.");
            }
            if (this.player.curHp == 0) {
                this.completed = true;
                console.log("You Died.");
            }

            var def = this.defending;
            this.defending = this.attacking;
            this.attacking = def;
            
        },

        RunEncounter: function(){
            while (!this.completed)
                this.Turn();
        },

        PrintTurn: function (atk, dmg) {
            console.log(this + " attack: " + atk + " dmg: " + dmg);
        }
    };

    return p;

}