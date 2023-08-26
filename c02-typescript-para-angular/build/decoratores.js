"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorators - Aconteceu algo que chamou o gatilho, irá se executado uma ação
/*
Eles nada mais são do que um tipo especial de declaração que pode ser anexada
em vários lugares, como por exemplo em classes, métodos, propriedades e parâmetros.
O decorator acaba sendo um recurso extremamente útil e elegante para incorporar
qualquer tipo de comportamento em nosso código.

fectory - função que retorna outra função.
 */
function ExibirNome(target) {
    console.log(target);
}
//Decorar
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome //gatilho
], Funcionario);
let Quincas = class Quincas {
};
Quincas = __decorate([
    ExibirNome
], Quincas);
//Decorators - Podemos criar nossos proprios gatilhos de validação, pois podemos pensar
// com os Beans validation do spring.
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "Uanderosn" });
    };
}
function minLength(length) {
    //target = alvo || key = valor
    return (target, key) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            else {
                _value = value;
            }
        }; //setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
} //function
class Api {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    minLength(6)
], Api.prototype, "name", void 0);
const api = new Api("usuarios");
console.log(api.name);
