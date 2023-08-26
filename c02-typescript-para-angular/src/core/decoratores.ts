//Decorators - Aconteceu algo que chamou o gatilho, irá se executado uma ação
/*
Eles nada mais são do que um tipo especial de declaração que pode ser anexada
em vários lugares, como por exemplo em classes, métodos, propriedades e parâmetros.
O decorator acaba sendo um recurso extremamente útil e elegante para incorporar
qualquer tipo de comportamento em nosso código.

fectory - função que retorna outra função.
 */
function ExibirNome(target: any){
    console.log(target);
}

//Decorar
@ExibirNome//gatilho
class Funcionario{}

@ExibirNome
class Quincas{}