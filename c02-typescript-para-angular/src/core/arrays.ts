//DECLARAÇÃO DE ARRAYS
let  dados: string[] = ["Felipe", "Ana", "Maria"];
let dados2: Array<string>;
dados2 = ["Felipe", "Ana", "Maria"];

//ARRAYS DE MULTI TYPES
let infos: (string | number)[] = ["Uanderson", 30, 35.5, "Ana"];

//TUPLA - a ordem dos typos devem ser respeitados na declaração
let boleto:[string, number, number] = ["Conta de água", 45.98, 5458556652];

//Métodos Arrays são os mesmo do js
dados.pop();

//DATAS
let date:Date = new Date();
console.log(date.toString())