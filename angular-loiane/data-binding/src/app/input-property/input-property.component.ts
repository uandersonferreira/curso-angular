import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  /*
    Também podemos declarar os @Inputs()  como metadados
    seguindo o exemplo abaixo: (mas não é o indicado)

     - inputs: ['nomeDoCurso:nome']

   */
})
export class InputPropertyComponent {

  @Input('nome') nomeDoCurso: string = ''
}
/*
@Input('nome')
  - Indica que estamos expondo a propriedade/variável
  para o selector da class em que pertece, no nosso caso
  é <app-curso></app-curso>.

  - @Input('nome') - Indica que internamente estamos utilizando a
  variável com de nome 'nomeDoCurso', mas estamos exportando ela
  como se fosse 'nome' isso para nomes de variaveis diferentes.
  Uma ideia parecida com o @JsonProperties do Spring, portanto eu tentaria
  usar os mesmo nome para evitar esse mapeamento.

  - Normalmente usado na criação de componentes "burros"
    que somente exibe informação na tabela.


 */
