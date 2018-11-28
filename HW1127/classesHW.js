class Monster {
    constructor (typeOfMonster, strength, name) {
        this._type = typeOfMonster;
        this._name = name;
        this._strength = strength;
    }
    get type() {
        return this._type;
    }
    get name() {
        return this._name;
    }
    get strength() {
        return this._strength;
    }
    MonstName() {
       switch(this._strength) {
           case 12:
           this._name = 'WereWolf';
           break;
           case 15:
           this._name = 'Lycan';
           case 18:
           this._name = 'Hazz';
           default:
           this._name = 'Unknown';
           break;
       }
    }
    MenaceAtk() {
        console.log('You lose 1HP and defense lowered');
    }
}


class EvolvedMonster extends Monster {
    constructor(typeOfMonster, strength, name, speed, weapon) {
        super(typeOfMonster, strength, name);
        this._speed = speed;
        this._weapon = weapon;
    }
    get speed() {
        return this._speed;
    }
    get weapon() {
        return this._weapon;
    }
    upWeapon() {
        this._weapon === 'Upgraded Weapon';
        this._strength += 3;
        this._speed += 2;
        console.log('You have lvl\'d up!');
    }
}

let wolfA = new Monster('Dire Wolf', 4, 'Monty');
let werewolfA = new EvolvedMonster('Werewolf', 12, '', 7, 'BloodLuster');

wolfA.MenaceAtk();
werewolfA.MonstName();
werewolfA.upWeapon();
console.log(werewolfA);