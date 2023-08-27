import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador'//nome do pipe
})
export class TransformadorPipe implements PipeTransform {

  //Criando Pipes Customizados
  //Pipe com Parâmetros
  transform(value: unknown, name:any, token:any): unknown {
    return value + '-' + name + '-' + token;
  }

}
