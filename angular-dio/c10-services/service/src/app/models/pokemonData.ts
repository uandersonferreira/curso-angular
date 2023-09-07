export type PokemonData = {
  id:number
  name:string
  sprites: {
    front_default: string
  }
  types:{
    slot:number
    type: {
      name:string
      url: string
    }
  }[]
}
/*
declarando uma estrutura de objeto chamada
"sprites" com uma propriedade chamada "front_default",
que é uma string. Você pode acessar o valor da propriedade
"front_default" usando a desestruturação de objetos.

sso permite o acesso a propriedades de objetos
aninhados de forma mais concisa e legível

*/

