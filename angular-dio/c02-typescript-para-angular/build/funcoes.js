"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(num1, num2) {
    return num1 + num2;
}
let soma = addNumber(8, 25.88);
function addToHello(name) {
    return `Hello ${name}`;
}
function callToPhone(phone) {
    return phone;
}
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
console.log("Soma -> " + soma);
console.log("Retorno -> " + addToHello("Uanderson"));
console.log("Phone -> " + callToPhone(8998899965));
const botType = {
    id: "1",
    name: "megamen"
};
const botInteface = {
    id: "1",
    name: "megamen",
    sayHello() {
        return "hello, botInteface!";
    }
};
console.log(botType);
console.log(botInteface);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
} //class
const pessoa = new Pessoa(1, "Gutsman");
console.log(pessoa);
console.log(pessoa.sayHello());
/*
Quando o TS é convertido para JS
não há diferença entre types e interfaces
 */
