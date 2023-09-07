//CLASSES
/*
    DATA MODIFIERS
    - PUBLIC (Default)
    - PRIVATE (privado para todos)
    - PROTECTED (somente a class e sub-classes)

 */
class Character {
    private name?: string; // ? para atributos não obrigatórios
    readonly strength: number;//força | readonly - somente leitura (Get)
    skill: number;//habilidade

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.strength = stregth;
        this.skill = skill;
    }
    attack(){
        console.log(`Attack with ${this.strength} points`)
    }
}//class

class Magician extends Character{
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}//class Magician

const p1 = new Character("Uanderson",10, 98);
const p2 = new Magician("Uanderson",15, 98,50);
p1.attack();
p2.attack();

//--------------------------
//Generics
function concatArray(...itens: any[]): any[]{
    return new Array().concat(...itens);
}

function concatArrayWithTypeDinamic<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArrayWithTypeDinamic<number[]>([1,5], [3]);
const stgArray = concatArrayWithTypeDinamic<string[]>(["Felipe", "Goku"], ["Vegeta"]);

// numArray.push("Saitama") evita com que o contrato seja quebrado ou seja que passe tipos diferentes do que queremos

console.log(numArray);
console.log(stgArray);