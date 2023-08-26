"use strict";
//CLASSES
/*
    DATA MODIFIERS
    - PUBLIC (Default)
    - PRIVATE (privado para todos)
    - PROTECTED (somente a class e sub-classes)

 */
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.strength = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
} //class
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
} //class Magician
const p1 = new Character("Uanderson", 10, 98);
const p2 = new Magician("Uanderson", 15, 98, 50);
p1.attack();
p2.attack();
//--------------------------
//Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
function concatArrayWithTypeDinamic(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArrayWithTypeDinamic([1, 5], [3]);
const stgArray = concatArrayWithTypeDinamic(["Felipe", "Goku"], ["Vegeta"]);
// numArray.push("Saitama") evita com que o contrato seja quebrado ou seja que passe tipos diferentes do que queremos
console.log(numArray);
console.log(stgArray);
