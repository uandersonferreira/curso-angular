import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador'//nome do pipe
})
export class TransformadorPipe implements PipeTransform {

  //Criando Pipes Customizados
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " abc";
  }

}
