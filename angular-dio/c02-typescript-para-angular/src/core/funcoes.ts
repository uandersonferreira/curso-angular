function  addNumber(num1: number, num2: number){
    return num1 + num2;
}
let soma: number = addNumber(8,25.88);

function addToHello(name: string){
    return `Hello ${name}`;
}

function callToPhone(phone: number | string){
    return phone;
}

async function getDatabase(id: number): Promise<string>{
    return "felipe";
}



console.log("Soma -> "+ soma);
console.log("Retorno -> "+ addToHello("Uanderson"));
console.log("Phone -> "+ callToPhone(8998899965));

// ----------------------------------------
//INTERFACES (TYPE X INTERFACE)

type robot = {//TIPAR UM OBJETO
    readonly id: number | string; // readonly - cria atributos somente de leitura (get)
    name: string;
};

interface robot2 {//UTILIZAR COM CLASSES
    readonly id: number | string,// readonly - cria atributos somente de leitura (get)
    name: string,

    sayHello():string
}

const botType: robot = {
    id: "1",
    name: "megamen"
};
const botInteface: robot2 = {
    id: "1",
    name: "megamen",

    sayHello(): string {
        return "hello, botInteface!";
    }
};

console.log(botType)
console.log(botInteface)

class Pessoa implements robot2 {
    readonly id: number | string;
    name: string;
    constructor(id: string | number, name: string) {
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}//class

const pessoa = new Pessoa(1, "Gutsman");
console.log(pessoa);
console.log(pessoa.sayHello());

/*
Quando o TS é convertido para JS
não há diferença entre types e interfaces
 */
